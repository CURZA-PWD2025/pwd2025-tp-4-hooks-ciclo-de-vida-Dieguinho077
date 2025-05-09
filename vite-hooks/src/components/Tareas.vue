<template>
    <div>
      <h2>Lista de Tareas</h2>
      <input type="text" v-model="nuevaTarea" @keyup.enter="agregarTarea" placeholder="Añadir nueva tarea">
      <button @click="agregarTarea">Agregar</button>
      <ul>
        <li v-for="item in listaTareas" ref="li">{{ item }}</li>
      </ul>
    </div>
  </template>

<script setup lang="ts">
import { ref, onBeforeUpdate, onUpdated} from 'vue';

const nuevaTarea = ref("");
const li = ref<HTMLElement[]>([]);
const listaTareas = ref(["Aprender Vue", "Aprender JavaScript", "Aprender Pinia"]);
const agregarTarea = () => {
  if (nuevaTarea.value) {
    listaTareas.value.push(nuevaTarea.value);
    nuevaTarea.value = ""; 
  }
};
onBeforeUpdate(() => {
  li.value.forEach((li) => {
    li.style.color = 'green'; 
  });
  console.log("Lista aún no modificada");
})
onUpdated(() => {
  console.log("Lista modificada");
})
</script>

<style scoped>

</style>