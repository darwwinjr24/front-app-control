<template>
  <el-container v-show="mostrar" class="form-container">
    <el-row :gutter="5" class="form-container_row">
      <el-col :xs="18" :sm="18" :md="18" :lg="22" :xl="22" class="form-container_title-col">
        <el-button text class="form-container_tittle-button" size="large">
          {{ titulo }}
        </el-button>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :lg="2" :xl="2" class="form-container__button-group">
            <el-button size="" type="danger" class="form-container_buttton-cancel" @click="irAtras">Cancelar</el-button>
            <el-button type="primary" size="" class="form-container_button-submit" @click="submit">{{tituloBoton}}</el-button>
        </el-col>
        </el-row>
        <el-main class="form-container_main">
          <slot name="slotform"></slot>
        </el-main>
      </el-container>
</template>



<script setup>
import { computed } from 'vue';

const propiedad= defineProps({
  titulo: String,
  isEdit: Boolean,
  isOpen: Boolean,
})

const tituloBoton = computed(()=>(propiedad.isEdit ? 'Actualizar': 'Guardar'))

const mostrar = computed(() => propiedad.isOpen);

const $emit = defineEmits(['update:is-open','save' ,'update']);


const irAtras = ()  => {
  $emit('update:is-open', false);
};

const submit=()=>{
  if(propiedad.isEdit){
    $emit('update')
  }else{
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

/* estilos del titulo delformulario  */
.form-container__title-button {
  font-size: 1.5rem;
  /* font-weight: bold; */
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