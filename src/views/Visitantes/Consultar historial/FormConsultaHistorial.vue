<template>
  <formulario></formulario>
    <div class="form-container" v-show="abrirForm5">
      <div class="container-data">
      <el-form :model="form" label-width="auto" style="max-width: 400px">
        <div>
            <h2>Filtrar la busqueda</h2>
        </div>

        <div>
            <el-form-item label="Fecha inicial">
                <el-col :span="11">
                    <el-date-picker
                    v-model="form.date1"
                    type="date"
                    placeholder="Fecha"
                    style="width: 100%"
                    />
                </el-col>
            </el-form-item>              
               <el-form-item label="Fecha Final">
                    <el-col :span="11">
                        <el-date-picker
                        v-model="form.date2"
                        type="date"
                        placeholder="Fecha"
                        style="width: 100%"
                        />
                    </el-col>
                </el-form-item>
        </div>
        <slot name="slotBoton"></slot>
      </el-form>
    </div>
    </div>
    </template>
    
    <script lang="ts" setup>
    import { reactive,computed } from 'vue'
    import Formulario from '../../../components/Formulario.vue';

    const propiedad= defineProps({
  isOpen: Boolean,
})
  
const abrirForm5 = computed(() => propiedad.isOpen);
    
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
    