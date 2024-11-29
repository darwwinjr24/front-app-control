<template>
  <div class="container">
    <el-form :model="form" label-width="auto" style="max-width: 800px">
      <h2>Visitante a salir</h2>
      <el-form-item label=" Número de documento">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Buscar</el-button>
        <el-button>Cancelar</el-button>
      </el-form-item>
      <div>
          <el-table :data="cargos" stripe style="width: 600px">
              <el-table-column prop="foto" label="Nombres"/>
              <el-table-column prop="empresa" label="Apellidos"/>
              <el-table-column prop="datos_personales_id" label="Número documento" />
              <el-table-column fixed="right" label="Acciones" min-width="120">
                  <template #default>
                      <el-button link type="primary" size="small" :icon="Edit" @click="editarFormulario"></el-button>
                      <el-button link type="danger" size="small" :icon="Delete"></el-button>
                  </template>
              </el-table-column>
          </el-table>  
      
      </div>
    </el-form>
  </div>
  </template>
  
  <script lang="ts" setup>
  import { reactive } from 'vue'
  import {Delete,Edit} from "@element-plus/icons-vue"
  
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
  .container { display: flex; justify-content: center; height: 50vh; background-color: #f9f9f9; }
   .form { width: 300px; padding: 30px; background-color: white; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);}
  </style>