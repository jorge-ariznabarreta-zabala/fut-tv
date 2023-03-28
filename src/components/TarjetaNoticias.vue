<template>
  <div class="container">
    <ul class="row">
            <li class="col-lg-6 justify-content-center" v-for="noticias in noticias" v-bind:key="noticias">
        <div class="contenido">
                    <div class=" d-flex  align-items-center mt-5" style="width: 10rem;">
            <div class="card-body">
                            <a :href=primerLink+noticias.url target="_blank" class="d-flex" style="width: 20rem;">{{ noticias.title }}</a>
              <p>{{ noticias.publishedAt }}</p>
            </div>
                        <img :src=noticias.mainMedia.gallery.url class="card-img-top" alt="...">
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
 import TitlePages from '../components/TitlePages.vue';
 import TarjetaNoticias from '../components/TarjetaNoticias.vue';

// defineProps ({
//     noticias: {
//         type: String,
//         default: ''
//     }
// })
//  const linc = [{
//  link: 'https://as.com/futbol/mercado-de-fichajes-en-directo-altas-bajas-y-ultima-hora-hoy-n-43/?noti=mercado_mod_port',
//  foto: "",
//  name: 'Aprobados y suspensos del Barcelona: Sergi Roberto y Kessié, ‘héroes’ improvisados'},
//  {link:'https://as.com/futbol/primera/al-son-de-griezmann-n/',
//  foto: "",
//  name: 'El Real Madrid ‘amarga’ la noche a Piqué'},
//  {link:'https://as.com/futbol/primera/aubameyang-vuelve-a-un-clasico-n/',
//  foto: "",
//  name: 'Araújo rompe la racha de Ter Stegen en el Camp Nou: ¡1.124 minutos sin encajar un gol!'}]

const primerLink = "https://www.livescore.com" ;

let callApiNews = {
  url: 'https://livescore6.p.rapidapi.com/news/v2/list',
  headers: {
    'X-RapidAPI-Key': 'e388957e0cmshc456c83001b76b4p144d44jsn9e6c090f0124'
  }
}
const noticias = ref([])

const getInfo = async () => {
  try {
    const { data } = await axios.request(callApiNews)
    console.log(data.topStories);
     noticias.value = data.topStories;
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