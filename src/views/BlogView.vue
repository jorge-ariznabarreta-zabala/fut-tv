<script setup>
import axios from 'axios'
import TitlePages from '../components/TitlePages.vue'
import { ref } from 'vue'

const datosPosts = ref([])

var config = {
  method: 'get',
maxBodyLength: Infinity,
  url: 'http://localhost:3000/posts',
  headers: { }
};

const getData = async () => {
  try {
    const  response  = await axios.request(config)
    datosPosts.value = response.data
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}
getData()
</script>

<template>
  <TitlePages title="Blog" />
  <div class="post container" v-for="datos in datosPosts" :key="id">
    <div class="info m-3">{{ datos.author }}</div>

    <div class="content-post">
      <h2 class="title mb-5"> {{ datos.title }}</h2>

      <p class="text">{{ datos.content }}</p>
    </div>
    <div class="input-group flex-nowrap container">
  <span class="input-group-text" id="addon-wrapping">@</span>
  <input type="text" class="" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
  </div>
  <div class="container mt-5">
    <textarea name="" id="" cols="30" rows="10" placeholder="Comentario"></textarea>
  </div>
  <button class="btn btn-outline-primary">Enviar</button>
  </div>
  

</template>
