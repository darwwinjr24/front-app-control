<template>
  <div class="form-container" v-show="abrirForm3">
    <div class="container-data">
    <el-form :model="form" label-width="auto" style="max-width: 800px">
      <h2>Visitante a salir</h2>
      <el-form-item label=" Número de documento">
        <el-input v-model="form.name" />
      </el-form-item>
      <slot name="slotBoton"></slot>
      <div>
          <el-table :data="cargos" stripe style="width: 800px">
              <el-table-column prop="nombres" label="Nombres"/>
              <el-table-column prop="apellidos" label="Apellidos"/>
              <el-table-column prop="numero_documento" label="Documento"/>
              <el-table-column prop="celular" label="Celular"/>
              <el-table-column prop="empresa" label="Empresa"/>
              <el-table-column fixed="right" label="Acciones" min-width="120">
                  <template #default="registro">
                      <el-button link type="primary" size="small" :icon="Edit" @click="editar(editarForm(registro.row.id))"></el-button>
                      <el-button link type="danger" size="small" :icon="Delete" @click="eliminarVisitante(registro.row.id)"></el-button>
                  </template>
              </el-table-column>
          </el-table>  
      
      </div>
    </el-form>
  </div>
  </div>
  </template>
  
  <script lang="ts" setup>
  import { reactive,computed,ref,onMounted } from 'vue'
  import {Delete,Edit} from "@element-plus/icons-vue"
  import { ElMessage,ElMessageBox } from 'element-plus';
  import axios from 'axios';
  
  
  const propiedad= defineProps({
    isOpen: Boolean,
    editar:{
    type:Function,
  },
//   dataCargosById:
//   { type: Array, 
//   required: true
// }
  })

  const $emit = defineEmits(['response']);
  $emit('response','ola darwin')
  
  const mostrarFormulario=ref(false)
  // const editandoFormulario = ref(false)
  // const formRef = ref()
  const dataCargosById = ref()
  // const areas = ref([])
  // const autorizados = ref([])
  // const datos = ref([])
  const cargos = ref([])
  
  const abrirForm3 = computed(() => propiedad.isOpen);

  const editarForm= async (id)=>{
    dataCargosById.value = await datosById(id)
    console.log('prueba data',dataCargosById)
  }

const datosById = async (id) => {
const url = 'http://127.0.0.1:8000/api/visitante/buscarporId'
console.log(id)
try {
    const response = axios.get(url, {
        params: {
            id: id
          }
        })
        return (await response).data.data
      } catch (error) {
        console.error('error al encontrar los datos', error)
      } 
  }

//funcion para eliminar el visitante
const eliminarVisitante= async (id) => {
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
                datosVisitantes()
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

//función para mostrar los datos del visitante
const datosVisitantes = async () => {
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

onMounted(() => {
datosVisitantes()
})
  

  
  // do not use same name with ref
  const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
  })
  
  const onSubmit = () => {
    console.log('submit!')
  }

  </script>

  <style scoped>
  .container-data {display: flex; justify-content: center;}
  .form-container {
  margin-top: 0px;
  height: 20vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0px;
  width: 100%;
  z-index: 90;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  height: calc(100vh + 42%);
}
  </style>