<script setup>
import NavBar from './NavBar.vue'
import SideBarMenu from './SideBarMenu.vue'

</script>

<template>
    <div>

    </div>
    <el-container>
        <el-header>
            <NavBar/>
        </el-header>
        <el-container>
            <el-aside width="250px">
                <SideBarMenu/>
            </el-aside>
            <el-main>
                <slot name="slot1"></slot>
            </el-main>
        </el-container>
    </el-container>
</template>


<style scoped>
.el-header {
  padding: 0;
}

.el-aside {
  background-color: #f4f4f4;
}

.main-content {
  position: relative;
}
</style>
