<template>
  <div class="container">
    <ul class="row">
      <li class="col-12 col-lg-6 justify-content-center" v-for="noticias in noticias" v-bind:key="noticias">
        <div class="contenido">
          <div class="d-flex align-items-center mt-5" style="width: 10rem">
            <div class="card-body">
              <a :href="primerLink + noticias.url" target="_blank" class="d-flex" style="width: 20rem">{{ noticias.title
              }}</a>
              <p>{{ noticias.publishedAt }}</p>
            </div>
            <img :src="noticias.mainMedia.gallery.url" class="card-img-top" alt="..." />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
//import axios from 'axios'
import { ref, onMounted } from 'vue'
import info from '../assets/modulos/livescoreAPI';
console.log(info);

const primerLink = 'https://www.livescore.com'
const noticias = ref(onMounted(async () => {
  noticias.value = await info.getNewsList()
  console.log(noticias);
}));
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: black;
}

li {
  list-style: none;
}
</style>
