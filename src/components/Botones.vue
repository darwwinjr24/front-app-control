<template>
    <el-row :gutter="5" class="form-container_row">
      <el-col :xs="18" :sm="18" :md="18" :lg="22" :xl="22" class="form-container_title-col">
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :lg="2" :xl="2" class="form-container__button-group">
            <el-button  size="" type="danger" class="form-container_buttton-cancel" @click="irAtras">Cancelar</el-button>
            <el-button v-if="mostrarBotonEjecutar" type="primary" size="" class="form-container_button-submit" @click="ejecutar">{{tituloBoton}}</el-button>
        </el-col>
        </el-row>
        <el-main class="form-container_main">
        </el-main>
</template>



<script setup>
import { computed } from 'vue';

const propiedad= defineProps({
  tituloBoton: String,
  isEdit: Boolean,
  isOpen: Boolean,
  isBuscar: Boolean,
  mostrarBotonEjecutar: {//propiedad para mostrar o no el botón variable
    type: Boolean,
    default: true
  },
  irAtras:{//propiedad para ir atras en el formulario
    type:Function
  },
  ejecutar:{//propiedad para realizar la función ejecutar 
    type:Function
  }
})

  //emits que se usaran en el componente principal
  const $emit = defineEmits(['update:is-open','save' ,'update', 'search']);


  //función para cambiar el titulo del botón
  const tituloBoton = computed(()=>{
  if (propiedad.isBuscar) return 'Buscar'
   if(propiedad.isEdit) return 'Actualizar' 
   return 'Enviar'
  })

//función para ejecutar las funciones del boton variable
const ejecutar = () => {
  if (propiedad.isBuscar) {
    $emit('search')
  } else if (propiedad.isEdit) {
    $emit('update')
  } else {
    $emit('save')
  }
}
</script>

<style scoped>
.form-container {
  margin-top: 20px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 5px;
  width: 100%;
  z-index: 90;
  background-color: rgb(255, 253, 253);
  display: flex;
  flex-direction: column;
  height: calc(100vh + 42%);
}



.form-container__row {
  display: flex;
  align-items: center;
  padding: 10px;
}


/* alinear los botones en la parte soperior derecha */
.form-container__button-group {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.form-container__button-submit {
  background-color: #2fbe98;
  border: none;
  color: rgb(252, 251, 251);
}
</style>