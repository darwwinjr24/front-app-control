<template>
  <div class="form-container" v-show="abrirForm4">
    <div class="container-data">
  <h2>
    Visitantes activos
  </h2>
  </div>
<el-table :data="visitantes" stripe style="width: 100%">
<el-table-column prop="nombres" label="Nombres"/>
<el-table-column prop="apellidos" label="Apellidos"/>
<el-table-column prop="celular" label="Numero de celular"/>
<el-table-column prop="numero_documento" label="Documento"/>
<el-table-column label="Nombre quien autorizo">
        <template #default="{ row }">
          {{ obtenerNombreAutorizado(row.autorizado_id) }}
        </template>
</el-table-column>
<el-table-column prop="area_a_visitar_id" label ="Area a visitar">
  <template #default="{ row }">
          {{ obtenerAreas(row.autorizado_id) }}
        </template>
</el-table-column>
<el-table-column prop="hora" label="Hora de ingreso"/>
</el-table> 
<slot name="slotBoton"></slot>
</div> 
</template>

<script setup>
import { onMounted,ref,computed } from 'vue'
import axios from 'axios';

const propiedad= defineProps({
  isOpen: Boolean,
  refrescarTabla: {
    type: Object,
  },
  autorizados: {
    type: Function,
    required: true
  },
  areas:{
    type: Function,
    required: true
  }
})

  
const abrirForm4 = computed(() => propiedad.isOpen);



// const mostrarFormulario=ref(false)
// const editandoFormulario = ref(false)
// const formRef = ref()
// const areas = ref([])
//const autorizados = ref([])
// const datos = ref([])
const visitantes = ref([])

// Función para obtener y guardar los autorizados
// const obtenerAutorizados = async () => {
//   try {
//     // Llamamos a la función del padre y guardamos el resultado
//     const response = await props.cargarAutorizados()
//     autorizados.value = response.data.data
//     console.log('Autorizados cargados:', autorizados.value)
//   } catch (error) {
//     console.error('Error al cargar autorizados:', error)
//   }
// }

const obtenerNombreAutorizado = (id) => {
  const autorizado = propiedad.autorizados.find(a => a.id === id)
  return autorizado ? `${autorizado.nombre}` : 'No especificado'
}

const obtenerAreas = (id) => {
  const areaVisitar = propiedad.areas.find(a => a.id === id)
  return areaVisitar ? `${areaVisitar.nombre}` : 'No especificado'
}


// const cargarAutorizados = async () => {
//   try {
//     const response = await axios.get('http://127.0.0.1:8000/api/autorizaciones/buscar')
//     autorizados.value = response.data.data
//   } catch (error) {
//     console.error('Error al cargar autorizados:', error)
//   }
// }

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

//     onMounted(async () => {
//   // Cargar todos los datos necesarios
//   await Promise.all([
onMounted(() => {
     datosVisitantes()
})
//     //obtenerAutorizados(),
//     cargarAutorizados(),
//     cargarAreas(),
//     cargarDatosPersonales()
//   ])
// })


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
}
</style>

