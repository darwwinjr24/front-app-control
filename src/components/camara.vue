<template>
    <div>
      <video ref="video" autoplay playsinline width="320" height="240"></video>
      <canvas ref="canvas" width="320" height="240" style="display: none;"></canvas>
  
      <div v-if="foto">
        <h3>Foto capturada:</h3>
        <img :src="foto" alt="Foto" />
      </div>
  
      <button type="button" @click="iniciarCamara">Iniciar cámara</button>
      <button type="button" @click="tomarFoto">Tomar foto</button>
  
  <slot name="slotcamara"></slot>
</div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const video = ref(null);
  const canvas = ref(null);
  const foto = ref(null);
  
  const iniciarCamara = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      video.value.srcObject = stream;
      video.value.onloadedmetadata = () => {
        video.value.play();
      };
    } catch (error) {
      console.error('Error al acceder a la cámara:', error);
    }
  };
  
  const tomarFoto = () => {
    const context = canvas.value.getContext('2d');
    context.drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);
    foto.value = canvas.value.toDataURL('image/png');
  };
  </script>
  
