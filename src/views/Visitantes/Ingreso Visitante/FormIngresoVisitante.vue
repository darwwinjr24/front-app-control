<template>
  <div class="form-container" v-show="abrirForm4">
    <div class="container-data">
  <h2>Ingresar visitantes  </h2>
  </div>
<el-table :data="cargos" stripe style="width: 100%">
<el-table-column prop="nombres" label="Nombres"/>
<el-table-column prop="apellidos" label="Apellidos"/>
<el-table-column prop="numero_documento" label="Documento"/>
<el-table-column prop="autorizado_id" label="Nombre quien autorizo" />
<el-table-column  prop="area_a_visitar_id" label ="Estado" />
<el-table-column fixed="right" label="Acciones" min-width="120">
                  <template #default="registro">
                      <el-button type="success" >Ingresar</el-button>
                      <el-button link type="danger" size="small" :icon="Delete" ></el-button>
                  </template>
              </el-table-column>

</el-table> 
<slot name="slotBoton"></slot>
</div> 
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref,computed } from 'vue'
import {Delete,Edit} from "@element-plus/icons-vue"
import { ElMessage } from 'element-plus';
import axios from 'axios';

const propiedad= defineProps({
  isOpen: Boolean,
})
  
//función para abrir el formulario 4
const abrirForm4 = computed(() => propiedad.isOpen);



const mostrarFormulario=ref(false)
const editandoFormulario = ref(false)
const formRef = ref()
const areas = ref([])
const autorizados = ref([])
const datos = ref([])
const cargos = ref([])

// const abrirFormulario =()=>{
// mostrarFormulario.value=true
// editandoFormulario.value=false
// }

// const editarFormulario= async()=>{
// mostrarFormulario.value=true
// editandoFormulario.value=true
// }

// const guardarDatos = async () => {
// const validacion = await formRef.value?.validarFormulario()
//  if (validacion) {
//    await crearCargo()
// }
// }

// const actualizarDatos = async () => {
// const validacion = await formRef.value?.validarFormulario()
// if (validacion) {
//     await actualizarCargo()
// }
// }

// const crearCargo = async () => {
// const url = 'http://127.0.0.1:8000/api/visitante/crear'
// const dataFormulario = {
//     foto: formRef.value.formulario.nombre,
//     empresa: formRef.value.formulario.salario,
//     tipo_documento_id:formRef.value.formulario.area,
//     autorizado_id: formRef.value.formulario.autorizado_id,
//     datos_personales_id:formRef.value.formulario.datos_personales_id,
// }
// console.log(dataFormulario)
// try {
//     axios.post(url, dataFormulario)
//         .then(function (response) {
//             console.log(response);
//             formRef.value?.limpiarFormulario()
//             ElMessage({
//                 message: 'El cargo se creo con exito',
//                 type: 'success',
//             })
//             datosCargo()
//             mostrarFormulario.value = false
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// } catch (error) {
//     console.error('error crear cargo ', error)
// }
// console.log('datos encontrados')
// }

// const actualizarCargo = async () => {
// console.log('se actualizo el cargo');
// }

// const eliminarCargo = async () => {
// console.log('se elimino el cargo');
// }

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

onMounted(() => {
datosCargo()
})

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

