<script setup>
import LayoutMain from '../../components/LayoutMain.vue';
import Header from '../../components/Header.vue'
</script>

<template>
    <LayoutMain>
        <template #slot1>
            <Header
            :titulo="'VISITANTES'"
            :tituloBoton="'Nuevo registro'"
            >

            </Header>
          
        </template>


    </LayoutMain>
</template>

<style>

</style>

