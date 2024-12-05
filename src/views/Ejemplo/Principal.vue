<template>
      <LayoutMain>
        <template #slot1>
            <Header :titulo="'PRINCIPAL'" :tituloBoton="'Nuevo registro'" :abrir="abrirFormulario">
            </Header>
          
            <Formulario :titulo="'MOSTRAR FORMULARIO NUMERO 2'"  v-model:is-open="mostrarFormulario" 
            :is-edit="editandoFormulario" @save="guardarDatos" @update="actualizarDatos">
              <template #slotform>
                <el-row :gutter="20">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              
                    <FormVisitantes 
                    v-model:is-open="mostrarFormulario" :is-edit="editandoFormulario" 
                    ref="formRef" :documento="documento" :areas="areas" :autorizados="autorizados" :datos="datos" :dataValue="dataCargosById"
                    />
                  </el-col>
                  </el-row>
              </template>
            </Formulario>

  <el-table :data="cargos" stripe style="width: 100%">
    <el-table-column prop="nombres" label="Nombre"/>
    <el-table-column prop="empresa" label="Apellido"/>
    <el-table-column prop="tipo_documento_id" label="Tipo de documento" />
    <el-table-column prop="autorizado_id" label="Autorizado" />
    <el-table-column prop="datos_personales_id" label="Nombre quien autoriza" />
    <el-table-column fixed="right" label="Acciones" min-width="120">
      <template #default="registro">
        <el-button link type="primary" size="small" :icon="Edit" @click="editarFormulario(registro.row.id)"></el-button>
        <el-button link type="danger" size="small" :icon="Delete" @click="eliminarCargo(registro.row.id)"></el-button>
      </template>
    </el-table-column>
  </el-table>          
        </template>
    </LayoutMain>
</template>


<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import LayoutMain from '../../components/LayoutMain.vue';
import FormVisitantes from './componentes/FormVisitantes.vue';
import Header from '../../components/Header.vue';
import {Delete,Edit} from "@element-plus/icons-vue"
import Formulario from '../../components/Formulario.vue';
import { ElMessage, ElMessageBox } from 'element-plus'
import axios from 'axios';



const mostrarFormulario=ref(false)
const editandoFormulario = ref(false)
const formRef = ref()
const dataCargosById = ref()
const autorizados = ref([])
const documento=ref([])
const areas = ref([])
const datos = ref([])
const cargos = ref([])


const abrirFormulario =()=>{
  mostrarFormulario.value=true
  editandoFormulario.value=false
}


const editarFormulario= async(id)=>{
    dataCargosById.value = await datosById(id)
    mostrarFormulario.value=true
    editandoFormulario.value=true
  }


const guardarDatos = async () => {
const validacion = await formRef.value?.validarFormulario()
     if (validacion) {
       await crearCargo()
    }
}


const actualizarDatos = async () => {
    const validacion = await formRef.value?.validarFormulario()
    if (validacion) {
        await actualizarCargo()
    }
}


const crearCargo = async () => {
    const url = 'http://127.0.0.1:8000/api/visitante/crear'
    const dataFormulario = {
        foto:formRef.value.formulario.nombre,
        empresa:formRef.value.formulario.salario,
        tipo_documento_id:formRef.value.formulario.area,
        autorizado_id: formRef.value.formulario.autorizado_id,
        datos_personales_id:formRef.value.formulario.datos_personales_id,
    }
    console.log(dataFormulario)
    try {
        axios.post(url, dataFormulario)
            .then(function (response) {
                console.log(response);
                formRef.value?.limpiarFormulario()
                ElMessage({
                    message: 'El cargo se creo con exito',
                    type: 'success',
                })
                datosCargo()
                mostrarFormulario.value = false
            })
            .catch(function (error) {
                console.log(error);
            });
    } catch (error) {
        console.error('error crear cargo ', error)
    }
    console.log('datos encontrados')
}



const actualizarCargo = async () => {
 const url = 'http://127.0.0.1:8000/api/visitante/actualizar'
 const dataFormulario = {
     id:dataCargosById.value[0].id,
     foto:formRef.value.formulario.nombre,
     empresa:formRef.value.formulario.salario,
     tipo_documento_id:formRef.value.formulario.area,
     autorizado_id: formRef.value.formulario.autorizado_id,
      datos_personales_id:formRef.value.formulario.datos_personales_id,
 }
 try {
     axios.put(url, dataFormulario)
         .then(function (response) {
             console.log(response);
             formRef.value?.limpiarFormulario()
             ElMessage({
                 message: 'El cargo se actualizo con exito    .',
                 type: 'success',
             })
             datosCargo()
             mostrarFormulario.value = false
         })
         .catch(function (error) {
             console.log(error);
         });
 } catch (error) {
     console.error('error crear cargo ', error)
 }
}


const datosById = async (id) => {
const url = 'http://127.0.0.1:8000/api/visitante/buscarporId'
try {
    const response = axios.get(url, {
        params: {
            id: id
          }
        })
        return (await response).data.data
    } catch (error) {
      console.error('error crear cargo ', error)
    } 
  }
    

const eliminarCargo = async (id) => {
  const url = 'http://127.0.0.1:8000/api/visitante/eliminar'
  ElMessageBox.confirm(
    'Está seguro que lo desea eliminar?',
    'Eliminar el registro',
    {
      confirmButtonText: 'SI',
      cancelButtonText: 'Cancelar',
      type: 'warning',
    }
  )
    .then(() => {
      try {
        axios.delete(url, {data:{id}})
            .then(function (response) {
                datosCargo()
                mostrarFormulario.value = false
            })
            .catch(function (error) {
                console.log(error);
            });
    } catch (error) {
        console.error('error al eliminar el cargo ', error)
    }
      ElMessage({
        type: 'success',
        message: 'Eliminado correctamente',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'No se elimino',
      })
    })
}


const datosCargo = async () => {
    const url = 'http://127.0.0.1:8000/api/visitante/buscar'
try {
    axios.get(url)
        .then(function (response) {
            cargos.value = response.data.data
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        } catch (error) {
        console.error('error crear cargo ', error)
        }
        }


const getAreas = async () => {
  const url = 'http://127.0.0.1:8000/api/tipodocumento/buscar'
  try {
    axios.get(url)
    .then(function (response) {
      areas.value = response.data.data
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  } catch (error) {
    console.error('error crear cargo ', error)
  }  
}


const getAutorizados = async () => {
  const url = 'http://127.0.0.1:8000/api/autorizaciones/buscar'
  try {
    axios.get(url)
    .then(function (response) {
      autorizados.value = response.data.data      
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  } catch (error) {
    console.error('error ver autorizados ', error)
  }  
}


const getDatos = async () => {
  const url = 'http://127.0.0.1:8000/api/datospersonales/buscar'
  try {
    axios.get(url)
    .then(function (response) {
      datos.value = response.data.data      
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  } catch (error) {
    console.error('error ver datos', error)
  }  
}


// onMounted(() => {
//   getAreas()
//   getAutorizados()
//   getDatos()
//   datosCargo()
// })
</script>


<style>
</style>

