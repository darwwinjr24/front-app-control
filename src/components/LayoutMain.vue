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
            <el-aside width="400px">
                <SideBarMenu/>
            </el-aside>
            <el-main>
                <slot name="slot1"></slot>
            </el-main>
        </el-container>
    </el-container>
</template>


<style lang="css">
.el-container {
    flex: 1
}
</style>
