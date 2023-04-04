<script setup>
import TitlePages from '../components/TitlePages.vue'

import axios from 'axios'
import { ref, onMounted } from 'vue'
import info from '../assets/modulos/livescoreAPI';

const equiposLiga = ref([])
let callApiSoccer = {
  url: 'https://livescore6.p.rapidapi.com/leagues/v2/get-table?Category=soccer&Ccd=spain&Scd=laliga-santander',
  headers: {
    'X-RapidAPI-Key': '714442dd51msh83097c2755da9a1p1efd32jsnecc4f48508ab'
  }
}

const getData = async () => {
  try {
    const { data } = await axios.request(callApiSoccer)
    console.log(data.LeagueTable.L[0].Tables[0].team)
    equiposLiga.value = data.LeagueTable.L[0].Tables[0].team
  } catch (error) {
    console.log(error)
  }
}
getData()
</script>
<template>
  
    <TitlePages title="Clasificaccion" />
 
<div class="tabla mt-5 container">
  <table class="table table-info table-striped table-hover">
    <thead>
      <tr>
        <th scope="col">Clubes</th>
        <th scope="col">PJ</th>
        <th scope="col">V</th>
        <th scope="col">E</th>
        <th scope="col">D</th>
        <th scope="col">GF</th>
        <th scope="col">GC</th>
        <th scope="col">DG</th>
        <th scope="col">Pts</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="equipo in equiposLiga" key="equipos.Tnm">
        <td scope="row">
          {{ equipo.rnk }}
          <img
            :src="`https://lsm-static-prod.livescore.com/medium/${equipo.Img}`"
            class="me-5 ms-3"
          />
          {{ equipo.Tnm }}
        </td>
        <td>{{ equipo.pld }}</td>
        <td>{{ equipo.win }}</td>
        <td>{{ equipo.drw }}</td>
        <td>{{ equipo.lst }}</td>
        <td>{{ equipo.gf }}</td>
        <td>{{ equipo.ga }}</td>
        <td>{{ equipo.gd }}</td>
        <td>{{ equipo.ptsn }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>
