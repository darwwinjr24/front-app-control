<template>
    <div class="container">
    <div class="container_header">
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
defineProps({
  titulo: String,
})
</script>

<style scoped>

</style>