<template>
<div class="container">
  <div class="demo-type">
    <div>
      <el-avatar
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />        <div>
        <el-button type="primary" @click="abrirForm1" >Registrar visitantes</el-button>
      </div>
    </div>

    <div>
      <el-avatar
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />        <div>
        <el-button type="success" @click="abrirForm2">Ingresar visitante</el-button>
      </div>
    </div>

    <div>
      <el-avatar
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <div>
        <el-button type="danger" @click="abrirForm3">Salida visitantes</el-button>
      </div>
    </div>
    
      <div>
        <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <div>
          <el-button type="warning" @click="abrirForm4">Consultar visitantes</el-button>
        </div>
      </div>
      
      <div>
        <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <div>
          <el-button type="info" @click="abrirForm5">Consultar Historial</el-button>
        </div>
      </div>
  </div>
  <slot name="slotvisitante"></slot>
</div>
</template>
  
  
<script setup>
import { Histogram, UserFilled } from '@element-plus/icons-vue'
defineProps({
  abrirForm1:{
    type:Function
  },
  abrirForm2:{
    type: Function
  },
  abrirForm3:{
    type: Function
  },
  abrirForm4:{
    type: Function
  },
  abrirForm5:{
    type: Function
  },
})
</script>


  <style scoped>
  .demo-type {
    display: flex;
  }
  .demo-type > div {
    flex: 1;
    text-align: center;
  }
  .demo-type-2 > div {
    flex: 1;
    text-align: center;
  }
  .demo-type > div:not(:last-child) {
    border-right: 1px solid var(--el-border-color);
  }
  </style>
  