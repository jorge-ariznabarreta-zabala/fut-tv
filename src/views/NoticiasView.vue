<template>
    <div>
        <TitlePages title='Noticias'/>
        <TarjetaNoticias />
    </div>
   
</template>

<script setup>
import { RouterView } from 'vue-router';
import TitlePages from '../components/TitlePages.vue';
import TarjetaNoticias from '../components/TarjetaNoticias.vue';

</script>

<style lang="scss" scoped>

</style>