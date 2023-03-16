<script setup>
import { RouterView } from 'vue-router';
import  axios  from "axios";
import headerComp from "./components/HeaderComp.vue";
import footerComp from "./components/FooterComp.vue";
import { ref } from "vue"
import NavBar from './components/NavbarComponent.vue'

</script>

<template>
  <headerComp />
    <NavBar />  
  <RouterView />
  <footerComp />
</template>
