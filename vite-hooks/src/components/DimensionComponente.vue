<template>
  <div class="dimension-component">
    <h2>Dimensiones de la ventana</h2>
    <p>Ancho: {{ ancho }} px</p>
    <p>Alto: {{ alto }} px</p>
  </div>
</template>

<script setup> 
import { ref, onMounted, onUnmounted } from 'vue';

const ancho = ref(window.innerWidth);
const alto = ref(window.innerHeight);

const actualizarDimensiones = () => {
  ancho.value = window.innerWidth;
  alto.value = window.innerHeight;
};

onMounted(() => {
  window.addEventListener('resize', actualizarDimensiones);
  console.log("Componente montado");
});

onUnmounted(() => {
  window.removeEventListener('resize', actualizarDimensiones);
  console.log("Componente desmontado");
});
</script>
  
  <style scoped>
.dimension-component {
 border: 1px solid #ccc;
 padding: 20px;
 border-radius: 5px;
 text-align: center;
}
  
h2 {
 margin-top: 0;
 color: #555;
}
  </style>