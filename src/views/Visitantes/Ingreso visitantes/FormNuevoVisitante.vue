<template>
  <div class="container">
    <el-form :model="form" label-width="auto" style="max-width: 400px">
      <h2>Nuevo visitante</h2>
      <el-form-item label="Nombres">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Apellidos">
        <el-input v-model="form.name" />
      </el-form-item>

      <div>
        <el-form-item label="Tipo de documento">
        <el-select v-model="form.region" placeholder="Seleccione su tipo de documento">
          <el-option label="Cedula de ciudadania" value="shangha" />
          <el-option label="NIT" value="beijing" />
          <el-option label="Cedula de extranjería" value="beijing" />
          <el-option label="Pasaporte" value="beijing" />
          <el-option label="Carnet diplomatico" value="beijing" />
          <el-option label="Permiso especial" value="beijing" />
          <el-option label="Salvoconducto de permanencia" value="beijing" />
          <el-option label="Permiso de protección temporal" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="Numero de documento">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Nombre de la empresa">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Numero de celular">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Correo electrónico">
        <el-input v-model="form.name" />
      </el-form-item>
    </div>
    <el-form-item label="Persona que autoriza">
        <el-select v-model="form.region" placeholder="Seleccione una opción">
          <el-option label="Luis Martinez" value="shanghai" />
          <el-option label="Carlos Gil" value="beijing" />
          <el-option label="Mariana Cruz" value="beijing" />
          <el-option label="Santiago Marin" value="beijing" />
          <el-option label="Luisa Rivera" value="beijing" />
          <el-option label="Tatiana Villasmil" value="beijing" />
          <el-option label="Nairo Correa" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="Zona de actividad">
        <el-select v-model="form.region" placeholder="Seleccione el área">
          <el-option label="Gerencia" value="shanghai" />
          <el-option label="Subgerencia" value="beijing" />
          <el-option label="Tesoreria" value="beijing" />
          <el-option label="Gestión humana" value="beijing" />
          <el-option label="Tesoreria" value="beijing" />
          <el-option label="Compras" value="beijing" />
          <el-option label="Operaciones" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="Fecha y hora">
        <el-col :span="11">
          <el-date-picker
            v-model="form.date1"
            type="date"
            placeholder="Fecha"
            style="width: 100%"
          />
        </el-col>
        <el-col :span="2" class="text-center">
          <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="11">
          <el-time-picker
            v-model="form.date2"
            placeholder="Hora"
            style="width: 100%"
          />
        </el-col>
      </el-form-item>
      <el-form-item label="Tipo de actividad">
        <el-checkbox-group v-model="form.type">
          <el-checkbox value="Visitante" name="type">
            Visitante
          </el-checkbox>
          <el-checkbox value="Visita personal" name="type">
            Visita personal
          </el-checkbox>
          <el-checkbox value="Contratista" name="type">
            Contratista
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Observaciones">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Enviar</el-button>
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
  .container { display: flex; justify-content: center; height: 120vh; background-color: #f9f9f9; }
   .form { width: 300px; padding: 30px; background-color: white; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);}
  </style>
  