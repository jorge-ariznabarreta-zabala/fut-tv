<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavbarComponent.vue'
import Footer from './components/FooterComponent.vue'
import About from './components/AboutComponent.vue'
</script>

<template>
  <NavBar />
  <RouterView />
  <Footer/>
</template>
