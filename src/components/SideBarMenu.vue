<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        :default-active="$route.path"
        router
        background-color="#e8e0df"
      text-color="#050505"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Administrador</span>
          </template>
            <el-menu-item index="1-1">Colaboradores</el-menu-item>
            <el-menu-item index="principal">Usuarios</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Recepción</span>
          </template>
            <el-menu-item index="visitantes">Control de visitantes</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Administrativo</span>
          </template>
            <el-menu-item index="1-1">Visitas</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="1">
          <template #title>
            <el-icon><setting /></el-icon>
            <span>Configuración</span>
          </template>
            <el-menu-item index="1-1">Cambio de Clave</el-menu-item>
            <el-menu-item index="1-2">Actualizar Datos</el-menu-item>
            </el-sub-menu>
      
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
