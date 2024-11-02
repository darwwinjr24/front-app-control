<template>
    <div class="container">
    <div class="container_header" v-if="mostrar">
        <h4 class="titulo">MODULO {{ titulo }}</h4>
    <el-row justify="center" ali-gn="middle">
        <el-button type="danger">Cancelar</el-button>
        <el-button type="primary">Guardar</el-button>
     </el-row>
     <slot name="slotform"></slot>
    </div>
    </div>

</template>

<script setup>
import { computed, ref } from 'vue';

const propiedad= defineProps({
  titulo: String,
  isOpen: Boolean
})
const mostrar= computed(()=>propiedad.isOpen)
</script>

<style scoped>

</style>