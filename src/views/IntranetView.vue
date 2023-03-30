<script setup>
import TitlePages from '../components/TitlePages.vue'
import { ref } from 'vue'
import axios from 'axios'

const title = ref('')
const author = ref('')
const content = ref('')

const CreatePost = async () => {
   await axios({
    method: 'post',
    url: 'http://localhost:3000/posts',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      "title": title.value,
      "author": author.value,
      "content": content.value
    }
  })
   reload()
}

function reload() {
  alert('POst publicado exitosamente')
  location.reload();


}


</script>

<template>
  <TitlePages title="IntraNet" />


  <div class="intranet">
    <h2 class="my-5 text-center">postea en el blog</h2>


    <form class="form" action="">
      <div class="inputs">
        <label for="titulo">Titulo: </label>
        <input class="rounded" type="text" name="titulo" id="titulo" v-model="title" />
      </div>

      <div class="inputs">
        <label for="author">Author: </label>
        <input class="rounded" type="text" name="author" id="author" v-model="author" />
      </div>
      <div class="inputs-text">
        <textarea class="rounded" name="contenido" id="contenido" cols="90" rows="10" v-model="content"></textarea>
      </div>
      <input class="rounded btn btn-info" type="submit" name="enviar" id="enviar" @click="CreatePost" />
      </form>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.inputs {
  margin: 1rem 0;
}

.inputs-text {
  margin: 1rem 0;
}

.inputs-boton {
  margin: 1rem 0;
}
</style>
