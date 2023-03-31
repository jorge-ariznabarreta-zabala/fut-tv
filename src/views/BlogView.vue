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
     

   //editar comentario
let comentarioId;
    let getData2 = ref(null)
       async function getcomentario(id) {
        const url = `http://localhost:3000/comments/${id}`;


      const getData = await axios.get(url)
        getData2.value = await getData.data

        console.log("data", getData2.value)
        nombreUsuario.value=getData2.value.usuario
        comentariobody.value=getData2.value.body
        comentarioId=getData2.value.id
       //recarga
        //location.reload();
      } 

     
     async function editarcomentario(id) {
       const url = `http://localhost:3000/comments/${id}`;
       this.isError = false
       this.isLoading = true
       const response = await fetch(url,{
                                 method: 'PUT',
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
</script>

<template>
  <TitlePages title="Blog"  class="mb-5"/>
  <div class="post container  rounded p-4" v-for="datos in datosPosts" :key="id">
    <h5 class="info mb-2">autor del post {{ datos.author }}</h5>
    <h2 class="content-post mb-5">{{ datos.title }}</h2>
    <p class="text"> {{ datos.content }}</p>
  </div>

  <h3 class="mt-3 text-center">Agregar comentario</h3>

  <div class="input-group container d-flex flex-wrap">

    <span class="input-group-text " id="addon-wrapping">@</span>

    <input type="text" class="rounded" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" v-model="nombreUsuario">

    <textarea class="w-100 mt-4 rounded" cols="28" rows="8" placeholder="Comentario" v-model="comentariobody"></textarea>

    <button class="btn btn-outline-primary mt-3  rounded" @click="enviarComentario()">Enviar</button>

    <button class="btn btn-outline-primary mt-3  rounded ms-3 " @click="editarcomentario(comentarioId)">Modificar</button>




    
  </div>



  <h3 class="mt-5 text-center ">Comentarios</h3>

  <div class="mostrarDatos rounded p-3 container mt-5 mb-5 d-flex flex-column " v-for="names in datosUsuario" :key="id">
    <div class="botones  d-flex justify-content-end">

    <i :id="names.id" class="fa-solid fa-trash mb-3 mx-2" @click=" deletecomentario(names.id)"></i>

    <i :id="names.id" class="fa-solid fa-pen-to-square" @click="getcomentario(names.id)"></i>
</div>
    <h7 class="border rounded px-4 mb-3 w-10 text-center">{{ names.usuario }}</h7>
    <p class="border rounded  ">{{ names.body }}</p>


  </div>

  
</template>

<style scoped>
 .post{
  border: 2px solid gray;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; }

  .mostrarDatos{
  border: 2px solid gray;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; }
</style>
