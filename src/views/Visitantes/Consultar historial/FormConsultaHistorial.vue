<template>
    <div class="container">
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
                
                <!-- <el-col :span="2" class="text-center">
                    <span>-</span>
                </el-col> -->
                
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

        <el-form-item>
          <el-button type="primary" @click="onSubmit">Buscar</el-button>
          <el-button>Cancelar</el-button>
        </el-form-item>
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
    .container { display: flex; justify-content: center; height: 200vh; background-color: #f9f9f9; }
     .form { width: 300px; padding: 30px; background-color: white; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);}
    </style>
    