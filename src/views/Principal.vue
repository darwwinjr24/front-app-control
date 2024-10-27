<script lang="ts" setup>
import LayoutMain from '../components/LayoutMain.vue';
import FormVisitantes from './Visitantes/FormVisitantes.vue';
import Header from '../components/Header.vue';
import {Delete,Edit} from "@element-plus/icons-vue"
import Formulario from '../components/Formulario.vue';

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<template>
      <LayoutMain>
        <template #slot1>
            <Header
            :titulo="'PRINCIPAL'"
            :tituloBoton="'Nuevo registro'">
            </Header>

            <Formulario :titulo="'NUMERO 2'">
              <template #slotform>
            <FormVisitantes/>
              </template>
            </Formulario>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" label="Fecha" width="180" />
    <el-table-column prop="name" label="Nombre" width="180" />
    <el-table-column prop="address" label="Dirección" />
    <el-table-column fixed="right" label="Acciones" min-width="120">
      <template #default>
        <el-button link type="primary" size="small" :icon="Edit"></el-button>
        <el-button link type="danger" size="small" :icon="Delete"></el-button>
      </template>
    </el-table-column>
  </el-table>          
        </template>


    </LayoutMain>
</template>

<style>

</style>

