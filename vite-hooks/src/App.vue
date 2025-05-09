<template>
  <div class="containerApp">
    <nav>
      <RouterLink to="/home"><Icon icon="material-symbols:home" width="24" height="24" /> Home</RouterLink>
      <RouterLink to="/tareas"><Icon icon="material-symbols:task" width="24" height="24" /> Tareas</RouterLink>
      <RouterLink to="/alertas"><Icon icon="mdi:alert" width="24" height="24" /> Alertas</RouterLink>
      <RouterLink to="/dimension"><Icon icon="bxs:component" width="24" height="24" /> Dimension Componente</RouterLink>
    </nav>
<br><br>
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
/* El que más me costó fue el de Dimension Componente, ya que no sabía cómo hacer para que
se mostrarán los datos del ancho y alto de la pantalla. Por eso gran parte del código fue ayuda de la IA.
Luego en el de Tareas tuve que modificarlo con la clase pasada que nos diste una guia muy util.
Luego lo demás no fue gran cosa ya que es lo mismo que hemos hecho en clase.
Pero bueno a seguir practicando y aprendiendo.
*/
import { Icon } from '@iconify/vue';
</script>

<style scoped>
.containerApp {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

nav {
  width: 100%;
  height: 60px;
  background-color: #333;
  font-weight: bold;
  display: flex;
}

nav > * {
  margin: 0 15px; 
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
}
</style>