<script setup>
import { Histogram, UserFilled } from '@element-plus/icons-vue'
</script>


<template>
<div class="container">

  <div class="demo-type">
    <div>
      <el-avatar
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />        <div>
        <el-button type="primary">Registrar visitantes</el-button>
      </div>
    </div>
    <div>
      <el-avatar
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <div>
        <el-button type="danger">Salida visitantes</el-button>
      </div>
    </div>
    <div>
      <el-avatar
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <div>
        <el-button type="success">Consultar visitantes</el-button>
      </div>
    </div>
    <div>
      <el-avatar :icon="Histogram" />
      <div>
        <el-button type="info">Consultar Historial</el-button>
      </div>
    </div>
  </div>
  <slot name="slotvisitante"></slot>
</div>
</template>
  
  
  <style scoped>
 
  .demo-type {
    display: flex;
  }
  .demo-type > div {
    flex: 1;
    text-align: center;
  }
  
  .demo-type > div:not(:last-child) {
    border-right: 1px solid var(--el-border-color);
  }
  </style>
  