<script setup>
import LayoutMain from '../../components/layoutMain.vue';
import Options from '../../components/Options.vue';
import FormNuevoVisitante from './FormNuevoVisitante.vue';
</script>

<template>
  <LayoutMain>
      <template #slot1>
        <Options>
          <template #slotvisitante>
            <div class="container">
            <FormNuevoVisitante/>
          </div>
        </template>
      </Options>
    </template>
  </LayoutMain>
    </template>

<style scoped>
.container {
  margin-top: 45px;
}
</style>