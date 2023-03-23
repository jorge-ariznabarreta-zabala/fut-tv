<script setup>
import TitlePages from '../components/TitlePages.vue'

import axios from 'axios'
import { ref } from 'vue'

let callApiSoccer = {
  method: 'GET',
  url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
  params: {Category: 'soccer'},
  headers: {
    'X-RapidAPI-Key': '63bb0a0088msh05d5b78a436734bp176171jsn37acd9384485',
    'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
  }
}
const listaPartidosLive = ref([]);

const getData = async () => {
  try {
    const { data } = await axios.request(callApiSoccer)
    console.log(data.Stages);
    listaPartidosLive.value = data.Stages;
    console.log(listaPartidosLive.value);
  } catch (error) {
    console.error(error)
  }
}
getData()
</script>
<template>
  <div class="mb-5">
    <TitlePages title="Partidos por Día" />
  </div>
  aqui va el selector de fecha
  <table class="table table-info table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">LOCAL</th>
      <th scope="col"></th>
      <th scope="col">MARCADOR</th>
      <th scope="col"></th>
      <th scope="col">VISITANTE</th>
      <th scope="col">COMPETICION</th>
      <th scope="col">GRUPO</th>
      
    </tr>
  </thead>
  <tbody>
    <tr v-for="partidoLive in listaPartidosLive" >
    
      <td> {{ partidoLive.Events[0].T1[0].CoNm}}</td>
      <td> <img :src="`https://lsm-static-prod.livescore.com/medium/${partidoLive.Events[0].T1[0].Img}`" class="me-5 ms-3"></td>
      <td>{{partidoLive.Events[0].Tr1}} -  {{partidoLive.Events[0].Tr2}}</td>
      <td><img :src="`https://lsm-static-prod.livescore.com/medium/${partidoLive.Events[0].T2[0].Img}`" class="me-5 ms-3"></td>
      <td> {{ partidoLive.Events[0].T2[0].CoNm}} </td>
      <td>{{ partidoLive.CompN }}</td>
      <td>{{ partidoLive.Snm }}</td>
      
    </tr>
   
  </tbody>
</table>
</template>
