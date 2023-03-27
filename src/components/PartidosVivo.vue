<script setup>
import TitlePages from '../components/TitlePages.vue'

import axios from 'axios'
import { ref } from 'vue'

let callApiSoccer = {
  url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
  params: {category: 'soccer', Timezone: '-7'},
  headers: {
    'X-RapidAPI-Key': 'cd269c7843mshf8d04a2f30c4420p1495d4jsn0146dd168b25',
    'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
  }
}
const listaPartidosLive = ref([]);

async function  getData() {
  try {
    const { data } = await axios.request(callApiSoccer)
    //console.log(data.Stages);
    listaPartidosLive.value = data.Stages;
    //console.log(listaPartidosLive.value);
  } catch (error) {
    console.error(error)
  }
}
getData();
</script>
<template>
  <div class="mb-5">
    <TitlePages title="Partidos en Directo" />
  </div>
  
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
    
      <td> {{ partidoLive.Events[0].T1[0].Nm}}</td>
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
