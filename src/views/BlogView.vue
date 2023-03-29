<script setup>
import axios from 'axios'
import TitlePages from '../components/TitlePages.vue'
import { ref } from 'vue'

const datosPosts = ref([])
const comentariobody = ref([])
const nombreUsuario = ref([])

var config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:3000/posts',
  headers: {}
}

const getData = async () => {
  try {
    const response = await axios.request(config)
    datosPosts.value = response.data
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}
getData()

const datosUsuario = ref([])

var config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:3000/comments',
  headers: {}
}

const getName = async () => {
  try {
    const response = await axios.request(config)
    datosUsuario.value = response.data
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}
getName()                       
  async function enviarComentario() {
       const url = 'http://localhost:3000/comments';
       this.isError = false
       this.isLoading = true
       const response = await fetch(url,{
                                 method: 'POST',
                                 headers: {'Content-Type': 'application/json'},
                                 body: `{"usuario":"${this.nombreUsuario}","body":"${this.comentariobody}"}`
                               })
                               .catch((e) => {
                                console.log('****ERROR', e)
                                this.isLoading = false
                                this.isError = true
                              })    
       this.isLoading = false
       if (!this.isError && response?.ok) {
       } else {
         this.isError = true
       }
       //recarga
       location.reload();
     }  
     
     async function deletecomentario(id) {
       const url = `http://localhost:3000/comments/${id}`;
       this.isError = false
       this.isLoading = true
       const response = await fetch(url,{
                                 method: 'DELETE',
                                 headers: {'Content-Type': 'application/json'}
                                 
                               })
                               .catch((e) => {
                                console.log('****ERROR', e)
                                this.isLoading = false
                                this.isError = true
                              })    
       this.isLoading = false
       if (!this.isError && response?.ok) {
       } else {
         this.isError = true
       }
       //recarga
       location.reload();
     }    
</script>

<template>
  <TitlePages title="Blog" />
  <div class="post container" v-for="datos in datosPosts" :key="id">
    <div class="info ">{{ datos.author }}</div>

    <div class="content-post">
      <h2 class="title mb-5">{{ datos.title }}</h2>

      <p class="text">{{ datos.content }}</p>
    </div>
    <div class="sacarDatos" v-for="names in datosUsuario" :key="id">
      <h5>{{ names.usuario }}</h5>
      <p>{{ names.body }}</p>
      <i :id="names.id" class="fa-solid fa-trash mb-3" @click=" deletecomentario(names.id)"></i>
    </div>
 
  </div>
  <div class="contenedor">
    <div class="input-group flex-nowrap container" >
      <span class="input-group-text" id="addon-wrapping">@</span>
      <input type="text" class="" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" v-model="nombreUsuario">
    </div>
    <div class="container mt-5">
      <textarea name="" id="" cols="28" rows="8" placeholder="Comentario" v-model="comentariobody"></textarea>
    </div>
    <div class="arreglar container mt-2">
      <button class="btn btn-outline-primary col-sm-2 " @click="enviarComentario()">Enviar</button>
    </div>
  </div>
</template>
