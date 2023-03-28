<template>
    <div>
        <TitlePages title='Noticias'/>
        <TarjetaNoticias noticias=""/>
        <tarjetaCarousel />
    </div>
   
</template>

<script setup>
import TitlePages from '../components/TitlePages.vue';
import TarjetaNoticias from '../components/TarjetaNoticias.vue';
import tarjetaCarousel from '../components/tarjetaCarousel.vue';
</script>

<style scoped>
a {
    font-size: 1.5vw;
}
</style>