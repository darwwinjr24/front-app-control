<template>
      <LayoutMain>
        <template #slot1>
            <Header
            :titulo="'PRINCIPAL'"
            :tituloBoton="'Nuevo registro'"
            :abrir="abrirFormulario">
            </Header>

            <Formulario :titulo="'MOSTRAR FORMULARIO NUMERO 2'" v-model:is-open="mostrarFormulario" :is-edit="editandoFormulario">
              <template #slotform>
                <el-row :gutter="20">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <FormVisitantes 
                    v-model:is-open="mostrarFormulario" 
                    />
                  </el-col>
                  </el-row>
              </template>
            </Formulario>

  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" label="Fecha" width="180" />
    <el-table-column prop="name" label="Nombre" width="180" />
    <el-table-column prop="address" label="Dirección" />
    <el-table-column fixed="right" label="Acciones" min-width="120">
      <template #default>
        <el-button link type="primary" size="small" :icon="Edit" @click="editarFormulario"></el-button>
        <el-button link type="danger" size="small" :icon="Delete"></el-button>
      </template>
    </el-table-column>
  </el-table>          
        </template>

    </LayoutMain>
</template>

<script lang="ts" setup>
import LayoutMain from '../components/layoutMain.vue';
import FormVisitantes from './Visitantes/FormVisitantes.vue';
import Header from '../components/Header.vue';
import {Delete,Edit} from "@element-plus/icons-vue"
import Formulario from '../components/Formulario.vue';
import { ref } from 'vue';

const mostrarFormulario=ref(false)
const editandoFormulario = ref(false)

const abrirFormulario =()=>{
  mostrarFormulario.value=true
  editandoFormulario.value=false
}

const editarFormulario= async()=>{
    mostrarFormulario.value=true
    editandoFormulario.value=true
  }

const tableData = [
  {
    date: '1991-03-10',
    name: 'Darwin Jhoan',
    address: 'Cll 9 # 0-07',
  },
  {
    date: '2016-05-02',
    name: 'Marcos',
    address: 'Diagonal 13E # 15N-95',
  },
  {
    date: '1988-01-23',
    name: 'Milena',
    address: 'Av. 45 # 7-67',
  },
  {
    date: '2018-03-20',
    name: 'Gael',
    address: 'calle 65 #0-89',
  },
]
</script>

<style>

</style>

