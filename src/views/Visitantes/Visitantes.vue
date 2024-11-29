<script setup>
import LayoutMain from '../../components/LayoutMain.vue';
import Options from '../../components/Options.vue';
import FormNuevoVisitante from './Registro visitantes/FormNuevoVisitante.vue';
import FormIngresoVisitante from './Ingreso Visitante/FormIngresoVisitante.vue';
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
            <FormIngresoVisitante/>
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