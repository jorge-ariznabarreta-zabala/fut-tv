<template>
  <div class="contenedor mt-3">
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  title: {
    type: String,
    default: ''
  }
})

//const names = ref(['Noticias', 'Sobre Nosotros', 'Contacto', 'Classificacion'])
</script>

<style lang="scss" scoped>
.contenedor {
  text-align: center;
}
</style>
