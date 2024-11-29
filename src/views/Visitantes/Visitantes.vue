<script setup>
import LayoutMain from '../../components/layoutMain.vue';
import Options from '../../components/Options.vue';
import FormNuevoVisitante from './Ingreso visitantes/FormNuevoVisitante.vue';
import FormSalidaVisitante from './Salida visitantes/FormSalidaVisitante.vue';
import FormConsultaVisitantesVue from './Consultar visitantes/FormConsultaVisitantes.vue.vue';
import FormConsultaHistorial from './Consultar historial/FormConsultaHistorial.vue';

</script>

<template>
  <LayoutMain>
      <template #slot1>
        <Options>
          <template #slotvisitante>
            <div class="container">
            <FormNuevoVisitante/>
            <FormSalidaVisitante/>
            <FormConsultaVisitantesVue/>
            <FormConsultaHistorial/>
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