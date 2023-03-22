<script setup>

</script>

<template>

    <ul>
      <li v-for="equipos in equiposLiga" :key="equipos"><img :src="`https://lsm-static-prod.livescore.com/medium/${equipos.Img}`" >{{ equipos.Tnm }} --- {{ equipos.ptsn }}</li>
    </ul>
  


</template>
