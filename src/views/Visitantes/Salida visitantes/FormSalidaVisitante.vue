<template>
  <div class="form-container" v-show="abrirForm3">
    <div class="container-data">

    <el-form :model="form" label-width="auto" style="max-width: 800px">
      <h2>Visitante a salir</h2>
      <el-form-item label=" Número de documento">
        <el-input type="number" placeholder="Ingrese el número del documento" 
        v-model="cedula" @input="desplazamiento"/>
      </el-form-item>
      <slot name="slotBoton"></slot>
      <div>

          <el-table :data="visitantes" stripe style="width: 800px" :row-class-name="resaltado">
              <el-table-column prop="nombres" label="Nombres"/>
              <el-table-column prop="apellidos" label="Apellidos"/>
              <el-table-column prop="numero_documento" label="Documento">
              <template #default="{ row }">
                <span :class="{'texto': resaltar(row.numero_documento) }"
                :ref="el => { if(resaltar(row.numero_documento)) movimientoRef = el }">
                {{ row.numero_documento }}
                </span>
              </template>
              </el-table-column>
              <el-table-column prop="celular" label="Celular"/>
              <el-table-column prop="empresa" label="Empresa"/>
              <el-table-column fixed="right" label="Acciones" min-width="120">
                  <template #default="registro">
                      <el-button link type="primary" size="small" :icon="Edit" @click="editarForm(registro.row.id)"></el-button>
                      <el-button link type="danger" size="small" :icon="Delete" @click="eliminarVisitante(registro.row.id)"></el-button>
                  </template>
              </el-table-column>
          </el-table>  

      </div>
    </el-form>
  </div>
  </div>
  </template>
  

  <script setup>
  import { reactive,computed,ref,onMounted } from 'vue'
  import {Delete,Edit} from "@element-plus/icons-vue"
  import { ElMessage,ElMessageBox } from 'element-plus';
  import axios from 'axios';
  
  
  const propiedad= defineProps({
    isOpen: Boolean,
    result: Object,
  })

  
  const movimientoRef = ref(null)
  const cedula = ref('')
  const mostrarFormulario=ref(false)
  const dataCargosById = ref()
  const visitantes = ref([])

  const $emit = defineEmits(['datos-visitante']);

  const abrirForm3 = computed(() => propiedad.isOpen);

  // Función para encontrar coincidencia de cédula
  const resaltar = (numero) => {
  return numero.toString() === cedula.value.toString()}


  // Función para desplazarse hasta el numero coincidente
  const desplazamiento = () => {
  setTimeout(() => {
    if (movimientoRef.value) {
      movimientoRef.value.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }, 100)
}

// Función para determinar la clase de la fila
const resaltado = ({ row }) => {
  return resaltar(row.numero_documento) ? 'highlighted-row' : ''
}

  //función para guardar los datos a actualizar
  const editarForm= async (id)=>{
    dataCargosById.value = await datosById(id)
    console.log('prueba data',dataCargosById.value)
    $emit('datos-visitante', dataCargosById.value)
  }

//función para buscar los datos a actualizar
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
        visitantes.value = response.data.data
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
  
  defineExpose({datosVisitantes})

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
  scroll-behavior: smooth;
}

.highlighted-row td {
  background-color: #ffeeba !important;
}

/* Estilo específico para el texto resaltado */
.texto {
  background-color: #96f57e;
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
}

  </style>