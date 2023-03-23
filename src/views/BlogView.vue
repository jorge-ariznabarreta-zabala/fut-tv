<template>
    <TitlePages title="Blog"/>
    <BlogComponent />
  
</template>

<script setup
  components: { BlogComponent },>
import { RouterView } from 'vue-router';
import BlogComponent from '../components/BlogComponent.vue';
import TitlePages from '../components/TitlePages.vue';

</script>

<style>

</style>