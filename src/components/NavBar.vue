<template>
    <el-menu 
      :default-active="activeIndex"
      background-color="#b32011"
      text-color="#fcfafa"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">
        <img
        src="../image/img1.jpg" class="img-thumbnail border-3" alt="..." width="65px"/>
          <!-- style="width: 100px"
          alt="Element logo" -->
        <!-- /> -->
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title >Darwin Rivera</template>
        <el-menu-item index="2-1">Perfil</el-menu-item>
        <el-menu-item index="2-3">Cerrar Sesión</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const activeIndex = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  
  <style>
  .el-menu--horizontal > .el-menu-item:nth-child(1) {
    margin-right: auto;
  }
  </style>
  