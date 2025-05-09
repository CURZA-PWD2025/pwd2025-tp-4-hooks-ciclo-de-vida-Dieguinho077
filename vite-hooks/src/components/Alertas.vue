<template>
    <div>
        <h1>Alertas</h1>
    </div>
    <button @click="alerta">Pulsa el botton de alerta</button>
</template>

<script setup lang="ts">

function alerta() {
    alert('Usted ha pulsado el botón de alerta');
}

</script>

<style scoped>

</style>