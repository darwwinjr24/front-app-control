<template>
    <div class="container">
      <el-form :model="form" label-width="auto" style="max-width: 800px">
        <h2>Ingresar visitantes</h2>
        <div>
            <el-table :data="cargos" stripe style="width: 700px">
                <el-table-column prop="foto" label="Foto"/>
                <el-table-column prop="foto" label="Nombres"/>
                <el-table-column prop="empresa" label="Apellidos"/>
                <el-table-column fixed="right" label="Comentarios"/>
                <el-table-column fixed="right" label="Estado"/>
                <el-table-column fixed="right" label="Acción">
                </el-table-column>
            </el-table>  
        
        </div>
      </el-form>
    </div>
    </template>
    
    <script lang="ts" setup>
    import { reactive } from 'vue'
    
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