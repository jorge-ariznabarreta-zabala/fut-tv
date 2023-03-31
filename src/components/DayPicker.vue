<template>
  <div>
    <input type="date" id="fecha" v-model="fechaSeleccionada" @change="emitFechaSeleccionada()"/>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const fechaSeleccionada = ref(new Date().toISOString().slice(0, 10))
const emitFechaSeleccionada = () => {
  const fecha = new Date(fechaSeleccionada.value)
  const fechaFormateada = fecha.toISOString().slice(0, 10).replace(/-/g, '')
  emit('fecha-seleccionada', fechaFormateada)
}

const emit = defineEmits(['fecha-seleccionada'])
</script>

<style lang="scss" scoped></style>
