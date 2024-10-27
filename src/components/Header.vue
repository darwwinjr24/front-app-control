<template>
<div class="container">
    <div class="container_header">
        <h4 class="titulo">MODULO {{ titulo }}</h4>
    <el-row justify="center" ali-gn="middle">
        <el-button type="danger">{{ tituloBoton }}</el-button>
     </el-row>
    </div>
   

</div>


</template>

<script setup>
defineProps({
  titulo: String,
  tituloBoton: String,
})
</script>

<style scoped>
.container{
    margin-bottom: 10px;
}

.container_header{
    display: flex;
    justify-content: space-between;
}

</style>