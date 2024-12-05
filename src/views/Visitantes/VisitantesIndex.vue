<template>
  <LayoutMain>
      <template #slot1>
        <Options :abrirForm1="abrirFormulario1" :abrirForm2="abrirFormulario2" 
        :abrirForm3="abrirFormulario3" :abrirForm4="abrirFormulario4" :abrirForm5="abrirFormulario5">
        </Options>
        
          <div class="container-img">
              <img label-width="auto" style="max-width: 800px">
            <div class="container-image">
              <img
              src="../../image/img1.jpg" alt="Imagen centrada" class="centered-image"/>
            </div>
          </img>
          </div>
            <div class="container">
              
            <FormNuevoVisitante v-model:is-open="mostrarRegistroVisitantes" ref="formRegistro" 
            :documentos="tiposdocumentos" :autorizados="autorizan"
            :areasVisitar="zonasActividad" :datos="personas" :dataValue="prueba">
              <template #slotBoton> 
              <Botones :tituloBoton="'Enviar'" :irAtras="cancelar" :ejecutar="guardar">
              </Botones>
            </template>
            </FormNuevoVisitante>

            <FormIngresoVisitante v-model:is-open="mostrarIngresoVisitantes ">
              <template #slotBoton> 
              <Botones :tituloBoton="'Buscar'" :irAtras="cancelar">
              </Botones>
            </template>
            </FormIngresoVisitante>

            <FormSalidaVisitante v-model:is-open="mostrarSalidaVisitantes" :editar="editarFormulario"
            :dataCargosById="prueba">
              <template #slotBoton> 
              <Botones :tituloBoton="'Buscar'" :irAtras="cancelar">
              </Botones>
            </template>
            </FormSalidaVisitante>

            <FormConsultaVisitantesVue v-model:is-open="mostrarConsultaVisitantes">
              <template #slotBoton> 
              <Botones :tituloBoton="'Buscar'" :irAtras="cancelar">
              </Botones>
            </template>
            </FormConsultaVisitantesVue>
            
            <FormConsultaHistorial v-model:is-open="mostrarConsultaHistorial">
              <template #slotBoton> 
              <Botones :tituloBoton="'Buscar'" :irAtras="cancelar" >
              </Botones>
            </template>
            </FormConsultaHistorial>
            
          </div>
        </template>
  </LayoutMain>
    </template>


<script setup>
import LayoutMain from '../../components/LayoutMain.vue';
import Options from '../../components/Options.vue';
import Botones from '../../components/Botones.vue';
import FormNuevoVisitante from './Registro visitantes/FormNuevoVisitante.vue';
import FormIngresoVisitante from './Ingreso Visitante/FormIngresoVisitante.vue';
import FormSalidaVisitante from './Salida visitantes/FormSalidaVisitante.vue';
import FormConsultaVisitantesVue from './Consultar visitantes/FormConsultaVisitantes.vue.vue';
import FormConsultaHistorial from './Consultar historial/FormConsultaHistorial.vue';
import { ElMessage} from 'element-plus'
import {ref,onMounted } from 'vue'
import axios from 'axios';


const mostrarRegistroVisitantes=ref(false)
const mostrarIngresoVisitantes=ref(false)
const mostrarSalidaVisitantes=ref(false)
const mostrarConsultaVisitantes=ref(false)
const mostrarConsultaHistorial=ref(false)
const tiposdocumentos = ref([])
const autorizan = ref([])
const zonasActividad = ref([])
const personas= ref([])
const formRegistro = ref()

const prueba=()=>{
console.log(dataCargosById)
}

//función para cerrar vista de salida visitantes y se muestre el registro visitantes
const editarFormulario= async ()=>{
  abrirFormulario1()
  mostrarSalidaVisitantes.value=false
  //actualizarVisitante()
  //editandoFormulario.value=true
  }

//función para abrir formulario de registro visitantes
const abrirFormulario1=()=>{
  mostrarRegistroVisitantes.value=true
}

//función para abrir formulario de ingreso visitantes
const abrirFormulario2=()=>{
  mostrarIngresoVisitantes.value=true
}

//función para abrir formulario de salida visitantes
const abrirFormulario3=()=>{
  mostrarSalidaVisitantes.value=true
}

//función para abrir el formulario de consulta visitantes activos
const abrirFormulario4=()=>{
  mostrarConsultaVisitantes.value=true
}

//funcion para abrir el formulario del historial
const abrirFormulario5=()=>{
  mostrarConsultaHistorial.value=true
}

//función para cerrar la vista de los formularios
const cancelar=()=>{
  mostrarRegistroVisitantes.value=false
  mostrarIngresoVisitantes.value=false
  mostrarSalidaVisitantes.value=false
  mostrarConsultaVisitantes.value=false
  mostrarConsultaHistorial.value=false
  
}

const guardar = async()=>{
  const validacion = await formRegistro.value?.validarFormulario()
  if(validacion){
    guardarDatos()
  }
}

//función para buscar el tipo de documento del visitante
const getDocumento = async () => {
  const url = 'http://127.0.0.1:8000/api/tipodocumento/buscar'
  try {
    axios.get(url)
    .then(function (response) {
      tiposdocumentos.value = response.data.data
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  } catch (error) {
    console.error('error crear cargo ', error)
  }  
}

//funcion para buscar quien autoriza el ingreso del visitante
const getAutorizados = async () => {
  const url = 'http://127.0.0.1:8000/api/autorizaciones/buscar'
  try {
    axios.get(url)
    .then(function (response) {
      autorizan.value = response.data.data      
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  } catch (error) {
    console.error('error ver autorizados ', error)
  }  
}

//función para buscar las areas a visitar
const getAreas = async () => {
  const url = 'http://127.0.0.1:8000/api/areas/buscar'
  try {
    axios.get(url)
    .then(function (response) {
    zonasActividad.value = response.data.data
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  } catch (error) {
    console.error('error crear cargo ', error)
  }  
}

//función para buscar datos personales a quien se va a visitar
const getDatos = async () => {
  const url = 'http://127.0.0.1:8000/api/datospersonales/buscar'
  try {
    axios.get(url)
    .then(function (response) {
      personas.value = response.data.data      
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  } catch (error) {
    console.error('error ver datos', error)
  }  
}

//función para guardar la información en la base de datos
const guardarDatos = async () => {
  const url = 'http://127.0.0.1:8000/api/visitante/crear'
  const dataFormulario = {
      nombres: formRegistro.value.formulario1.nombres,
      apellidos: formRegistro.value.formulario1.apellidos,
      celular: formRegistro.value.formulario1.celular,
      correo: formRegistro.value.formulario1.correo,
      fecha: formRegistro.value.formulario1.fecha,
      hora: formRegistro.value.formulario1.hora,
      observaciones: formRegistro.value.formulario1.observaciones,
      numero_documento: formRegistro.value.formulario1.numeroDocumento,
      empresa: formRegistro.value.formulario1.empresa,
      area_a_visitar_id:formRegistro.value.formulario1.area_a_visitar_id,
      autorizado_id: formRegistro.value.formulario1.autorizado,
      tipo_documento_id: formRegistro.value.formulario1.tipoDocumento,
      datos_personales_id:formRegistro.value.formulario1.datos_personales_id,
  }
  console.log(dataFormulario)
  try {
      axios.post(url, dataFormulario)
          .then(function (response) {
              console.log(response);
              formRegistro.value?.limpiarFormulario()
              ElMessage({
                  message: 'El visitante se registró con exito',
                  type: 'success',
              })
              //mostrarFormulario.value = false
          })
          .catch(function (error) {
              console.log(error);
          });
  } catch (error) {
      console.error('error al crear visitante ', error)
  }
  console.log('datos encontrados')
}

const actualizarVisitante = async () => {
    const validacion = await formRegistro.value?.validarFormulario()
    if (validacion) {
        await actualizarDatos()
    }
}

const actualizarDatos = async () => {
 const url = 'http://127.0.0.1:8000/api/visitante/actualizar'
 console.log(dataFormulario)
 const dataFormulario = {
      nombres: formRegistro.value.formulario1.nombres,
      apellidos: formRegistro.value.formulario1.apellidos,
      celular: formRegistro.value.formulario1.celular,
      correo: formRegistro.value.formulario1.correo,
      fecha: formRegistro.value.formulario1.fecha,
      hora: formRegistro.value.formulario1.hora,
      observaciones: formRegistro.value.formulario1.observaciones,
      numero_documento: formRegistro.value.formulario1.numeroDocumento,
      empresa: formRegistro.value.formulario1.empresa,
      area_a_visitar_id:formRegistro.value.formulario1.area_a_visitar_id,
      autorizado_id: formRegistro.value.formulario1.autorizado,
      tipo_documento_id: formRegistro.value.formulario1.tipoDocumento,
      datos_personales_id:formRegistro.value.formulario1.datos_personales_id,
 }
 try {
     axios.put(url, dataFormulario)
         .then(function (response) {
             console.log(response);
             formRegistro.value?.limpiarFormulario()
             ElMessage({
                 message: 'Los datos se actualizaron con exito    .',
                 type: 'success',
             })
             datosVisitantes()
             mostrarFormulario.value = false
         })
         .catch(function (error) {
             console.log(error);
         });
 } catch (error) {
     console.error('error al actualizar los datos', error)
 }
}


onMounted(() => {
  getDocumento()
  getAutorizados()
  getAreas()
  getDatos()
})
</script>

<style scoped>
.container {
  margin-top: 45px;
}
.container-image{
  display: flex; justify-content: center; align-items: center; height: 70vh; /* Opcional: para centrar verticalmente */ }
.centered-image { max-width: 40%; height: auto;}
</style>