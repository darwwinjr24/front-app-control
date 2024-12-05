<template> 
  <div class="form-container" v-show="abrirForm1">
    <div class="container-data">
      <el-form label-width="auto" :model="formulario1" style="max-width: 400px" :rules="rulesForm"
      ref="formRegistro" :size="formSize">
      
        <h2>Nuevo visitante</h2>
        <el-form-item label="Nombres" prop="nombres">
          <el-input v-model="formulario1.nombres" />
        </el-form-item>
        <el-form-item label="Apellidos" prop="apellidos">
          <el-input v-model="formulario1.apellidos" />
        </el-form-item>
        <div>
          <el-form-item label="Tipo de documento" prop="tipoDocumento">
          <el-select v-model="formulario1.tipoDocumento" placeholder="Seleccione su tipo de documento">
            <el-option v-for="documento in documentos"
          :key="documento.id"
          :label="documento.nombre"
          :value="documento.id"
          />
          </el-select>
        </el-form-item>
        <el-form-item label="Numero de documento" prop="numeroDocumento">
          <el-input v-model="formulario1.numeroDocumento" />
        </el-form-item>
        <el-form-item label="Nombre de la empresa" prop="empresa">
          <el-input v-model="formulario1.empresa" />
        </el-form-item>
        <el-form-item label="Numero de celular" prop="celular">
          <el-input v-model="formulario1.celular" />
        </el-form-item>
        <el-form-item label="Correo electrónico" prop="correo">
          <el-input v-model="formulario1.correo" />
        </el-form-item>
      </div>
      <el-form-item label="Persona que autoriza" prop="autorizado">
          <el-select v-model="formulario1.autorizado" placeholder="Seleccione una opción">
            <el-option v-for="autoriza in autorizados"
          :key="autoriza.id"
          :label="autoriza.nombre"
          :value="autoriza.id"
          />
          </el-select>
        </el-form-item>
        <el-form-item label="Zona de actividad" prop="area_a_visitar_id">
          <el-select v-model="formulario1.area_a_visitar_id" placeholder="Seleccione el área">
            <el-option v-for="actividad in areasVisitar"
          :key="actividad.id"
          :label="actividad.nombre"
          :value="actividad.id"
          />
          </el-select>
        </el-form-item>
        <el-form-item label="Persona a visitar" prop="datos_personales_id">
          <el-select v-model="formulario1.datos_personales_id" placeholder="Seleccione una opción">
            <el-option v-for="dato in datos"
          :key="dato.id"
          :label="dato.nombres"
          :value="dato.id"
          />
          </el-select>
        </el-form-item>
        <el-form-item label="Fecha" prop="fecha">
          <el-col :span="11">
            <el-date-picker
              v-model="formulario1.fecha"
            />
          </el-col>
        </el-form-item>
          <el-form-item label="Hora" prop="hora">
          <el-col :span="11">
            <el-time-picker
              v-model="formulario1.hora"
            />
          </el-col>
        </el-form-item>
        <el-form-item label="Observaciones" prop="observaciones">
          <el-input v-model="formulario1.observaciones" type="textarea" />
        </el-form-item>
        <slot name="slotBoton"></slot>
  
      </el-form>
    </div>
  </div>
</template>
  
  <script setup>
  import { reactive,ref,computed,watch } from 'vue'


  const propiedad= defineProps({
  isOpen: Boolean,

  documentos: {
    type:Array,
    required:true
  },
  autorizados: {
    type:Array,
    required:true
  },
  areasVisitar: {
    type:Array,
    required:true
  },
  datos: {
    type:Array,
    required:true
  },
  props: { pruebaRecibida: 
    { type: Array, 
      default: () => [] } },

  dataValue: Object,
});

  const formSize = ref('default')
  const formRegistro = ref()
  const formulario1 = reactive({
  nombres: '',
  apellidos: '',
  celular: '',
  correo: '',
  fecha: '',
  hora: '',
  observaciones: '',
  area_a_visitar_id: '',
  tipoDocumento: '',
  empresa: '',
  numeroDocumento:'',
  autorizado:'',
  datos_personales_id:'',
})


const datosFormulario = () => {
formulario1.nombres = propiedad.dataValue[0].nombres;
formulario1.apellidos = propiedad.dataValue[0].apellidos;
formulario1.celular = propiedad.dataValue[0].celular;
formulario1.correo = propiedad.dataValue[0].correo;
formulario1.fecha = propiedad.dataValue[0].fecha;
formulario1.hora = propiedad.dataValue[0].hora;
formulario1.observaciones = propiedad.dataValue[0].observaciones;
formulario1.area_a_visitar_id = propiedad.dataValue[0].area_a_visitar_id;
formulario1.tipoDocumento = propiedad.dataValue[0].tipo_documento_id;
formulario1.empresa = propiedad.dataValue[0].empresa;
formulario1.numeroDocumento = propiedad.dataValue[0].numero_documento;
formulario1.autorizado = propiedad.dataValue[0].autorizado_id;
formulario1.datos_personales_id = propiedad.dataValue[0].datos_personales_id;
}


const rulesForm = reactive({
  nombres: [
    { 
      required: true,
      message: 'Por favor ingrese el nombre', 
      trigger: 'blur' 
    }
  ],
  apellidos: [
    {
      required: true,
      message: 'Por favor ingrese los apellidos',
      trigger: 'blur',
    },
  ],
  tipoDocumento: [
    {
      required: true,
      message: 'Seleccione el tipo de documento',
      trigger: 'change',
    },
  ],

  numeroDocumento: [
    {
      required: true,
      message: 'Ingrese el numero de documento',
      trigger: 'blur',
    },
  ],
  empresa: [
    {
      required: false,
      message: 'Ingrese el nombre de la empresa',
      trigger: 'blur',
    },
  ],
  celular: [
    {
      required: true,
      message: 'Ingrese el numero de celular',
      trigger: 'blur',
    },
  ],
  correo: [
    {
      required: true,
      message: 'Ingrese el correo electrónico',
      trigger: 'blur',
    },
  ],
  autorizado: [
    {
      required: true,
      message: 'Ingrese quien autoriza',
      trigger: 'change',
    },
  ],
  area_a_visitar_id: [
    {
      required: true,
      message: 'Ingrese la zona de actividad',
      trigger: 'change',
    },
  ],
  datos_personales_id: [
    {
      required: true,
      message: 'ss',
      trigger: 'change',
    },
  ],
  fecha: [
    {
      required: true,
      message: 'Ingrese la fecha',
      trigger: 'blur',
    },
  ],
  hora: [
    {
      required: true,
      message: 'Ingrese la hora',
      trigger: 'blur',
    },
  ],
  observaciones: [
    {
      required: false,
      message: '',
      trigger: 'blur',
    },
  ],
})

const abrirForm1 = computed(() => propiedad.isOpen);

const $emit = defineEmits(['update:is-open','save' ,'update']);

  
  const onSubmit = () => {
  console.log('submit!')
  }

  const limpiarFormulario =()=>{
    formRegistro.value.resetFields()    
}

  const validarFormulario =  () => {
    console.log(formRegistro.value)
    return new Promise ((resolve)=>{
        formRegistro.value?.validate((valid)=>{
          console.log('valid  ',valid)
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



defineExpose({validarFormulario,formulario1,limpiarFormulario})

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
  