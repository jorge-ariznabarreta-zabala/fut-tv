<template>
  <div class="container">
    <ul class="row">
      <li
        class="col-12 col-lg-6 justify-content-center"
        v-for="noticias in noticias"
        v-bind:key="noticias"
      >
        <div class="contenido">
          <div class="d-flex align-items-center mt-5" style="width: 10rem">
            <div class="card-body">
              <a
                :href="primerLink + noticias.url"
                target="_blank"
                class="d-flex"
                style="width: 20rem"
                >{{ noticias.title }}</a
              >
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
import axios from 'axios'
import { ref } from 'vue'
import TitlePages from '../components/TitlePages.vue'
import TarjetaNoticias from '../components/TarjetaNoticias.vue'


const primerLink = 'https://www.livescore.com'
const noticias = ref([])

let callApiNews = {
  url: 'https://livescore6.p.rapidapi.com/news/v2/list',
  headers: {
    'X-RapidAPI-Key': '714442dd51msh83097c2755da9a1p1efd32jsnecc4f48508ab'
  }
}

const getInfo = async () => {
  try {
    const { data } = await axios.request(callApiNews)
    console.log(data.topStories)
    noticias.value = data.topStories
  } catch (error) {
    console.log(error)
  }
}
getInfo()
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
