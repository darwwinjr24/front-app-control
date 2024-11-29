<!-- EJEMPLO DE LA CLASE -->
<template>
  <el-form
    ref="formRef"
    style="max-width: 100%"
    :model="formulario"
    :rules="rulesForm"
    label-width="auto"
    :size="formSize"
    status-icon
  >
    <el-form-item label="Nombre" prop="nombre">
      <el-input v-model="formulario.nombre" />
    </el-form-item>
    <el-form-item label="Salario" prop="salario">
      <el-input v-model="formulario.salario" />
    </el-form-item>
    <el-form-item label="Tipo de documento" prop="area">
      <el-select v-model="formulario.area" placeholder="Seleccione su tipo de documento">
        <el-option v-for="area in areas"
        :key="area.id"
        :label="area.nombre"
        :value="area.id"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="Autorizado" prop="autorizado">
      <el-select v-model="formulario.autorizado_id" placeholder="Seleccione autorizado">
        <el-option v-for="autorizado in autorizados"
        :key="autorizado.id"
        :label="autorizado.nombre"
        :value="autorizado.id"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="Nombre quien autoriza" prop="datos">
      <el-select v-model="formulario.datos_personales_id" placeholder="Seleccione el nombre">
        <el-option v-for="dato in datos"
        :key="dato.id"
        :label="dato.nombres"
        :value="dato.id"
        />
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script setup>

import { onMounted, reactive, ref, watch} from 'vue'

const propiedad = defineProps({
  areas: {
    type:Array,
    required:true
  },
  autorizados: {
    type:Array,
    required:true
  },
  datos: {
    type:Array,
    required:true
  },
  dataValue: Object,
});

const formSize = ref('default')
const formRef = ref()
const formulario = reactive({
  nombre: '',
  salario: '',
  area: '',
  autorizado_id: '',
  datos_personales_id: '',
})


const datosFormulario = () => {

formulario.nombre = propiedad.dataValue[0].foto;
formulario.salario = propiedad.dataValue[0].empresa;
formulario.area = propiedad.dataValue[0].tipo_documento_id;
formulario.autorizado_id = propiedad.dataValue[0].autorizado_id;
formulario.datos_personales_id = propiedad.dataValue[0].datos_personales_id;
}


const rulesForm = reactive({
  nombre: [
    { required: true,
      message: 'Por favor ingrese el nombre', 
      trigger: 'blur' }
  ],
  salario: [
    {
      required: true,
      message: 'Ingrese el salario',
      trigger: 'blur',
    },
  ],
  area: [
    {
      required: true,
      message: 'Seleccione un valor',
      trigger: 'blur',
    },
  ],

  autorizado: [
    {
      required: true,
      message: 'Seleccione un valor',
      trigger: 'blur',
    },
  ],
  datos: [
    {
      required: true,
      message: 'Seleccione un valor',
      trigger: 'blur',
    },
  ],
})





const limpiarFormulario =()=>{
    formRef.value.resetFields()    
}

const validarFormulario =  () => {
    return new Promise ((resolve)=>{
        formRef.value?.validate((valid)=>{
            if (valid) {
              resolve(true)            
            } else {
                resolve(false)             
            }    
        })
        })         
}

watch(
  () => propiedad.dataValue,
  (newData) => {
    datosFormulario();
  }
);



defineExpose({validarFormulario,formulario,limpiarFormulario})



</script>




<style scoped>
</style>