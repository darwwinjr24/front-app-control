<template>
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="Nombres">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Apellidos">
        <el-input v-model="form.name" />
      </el-form-item>

      <div>
        <el-form-item label="Tipo de documento">
        <el-select v-model="form.region" placeholder="Seleccione su tipo de docummento">
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
            placeholder="ingrese la fecha"
            style="width: 100%"
          />
        </el-col>
        <el-col :span="2" class="text-center">
          <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="11">
          <el-time-picker
            v-model="form.date2"
            placeholder="ingrese la hora"
            style="width: 100%"
          />
        </el-col>
      </el-form-item>
      <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox value="Online activities" name="type">
            Online activities
          </el-checkbox>
          <el-checkbox value="Promotion activities" name="type">
            Promotion activities
          </el-checkbox>
          <el-checkbox value="Offline activities" name="type">
            Offline activities
          </el-checkbox>
          <el-checkbox value="Simple brand exposure" name="type">
            Simple brand exposure
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio value="Sponsor">Sponsor</el-radio>
          <el-radio value="Venue">Venue</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
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

  <style scoped></style>
  