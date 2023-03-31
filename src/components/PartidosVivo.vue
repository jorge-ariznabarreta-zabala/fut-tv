<script setup>
import TitlePages from '../components/TitlePages.vue'

import axios from 'axios'
import { ref } from 'vue'

let callApiSoccer = {
  url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
  params: { category: 'soccer', Timezone: '-7' },
  headers: {
    'X-RapidAPI-Key': '2354e7edb9mshf8c9fa220c15434p1804fajsn9793ea2f18a3',
    'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
  }
}
const listaPartidosLive = ref([])

async function getData() {
  try {
    const { data } = await axios.request(callApiSoccer)
    //console.log(data.Stages);
    listaPartidosLive.value = data.Stages
    //console.log(listaPartidosLive.value);
  } catch (error) {
    console.error(error)
  }
}
getData()
</script>
<template>
  <div class="mb-5">
    <TitlePages title="Partidos en Directo" />
  </div>

  <div class="tabla mt-5 container">
  <table class="table table-info table-striped table-hover">
    <thead>
      <tr>
        <th class="text-center" scope="col">LOCAL</th>

        <th class="text-center" scope="col">MARCADOR</th>

        <th class="text-center" scope="col">VISITANTE</th>
        <th class="text-center" scope="col">COMPETICION</th>
        <th class="text-center" scope="col">GRUPO</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="partidoLive in listaPartidosLive" :key="partidoLive.Id">
        <td class="text-center">
          {{ partidoLive.Events[0].T1[0].Nm
          }}<img
            :src="`https://lsm-static-prod.livescore.com/medium/${partidoLive.Events[0].T1[0].Img}`"
            class="me-5 ms-3"
          />
        </td>
        <td class="text-center">
          {{ partidoLive.Events[0].Tr1 }} - {{ partidoLive.Events[0].Tr2 }}
        </td>
        <td class="text-center">
          <img
            :src="`https://lsm-static-prod.livescore.com/medium/${partidoLive.Events[0].T2[0].Img}`"
            class="me-5 ms-3"
          />{{ partidoLive.Events[0].T2[0].CoNm }}
        </td>
        <td class="text-center">{{ partidoLive.CompN }}</td>
        <td class="text-center">{{ partidoLive.Snm }}</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>
<style>
table {
  font-size: 0.5rem;
  table-layout: auto;
}
td > img {
  max-width: 25%;
}
th td {
  text-align: center !important;
}
</style>
