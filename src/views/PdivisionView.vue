<script setup>
import TitlePages from '../components/TitlePages.vue';

import axios from 'axios'
import { ref } from 'vue'

let callApiSoccer = {
  url: 'https://livescore6.p.rapidapi.com/leagues/v2/get-table?Category=soccer&Ccd=spain&Scd=laliga-santander',
  headers: {
    'X-RapidAPI-Key': '2354e7edb9mshf8c9fa220c15434p1804fajsn9793ea2f18a3'
  }
}
const equiposLiga = ref([])

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
    <div>
        <TitlePages title="Clasificaccion"/>
    </div>
    <table class="table">
        <thead>
            <tr>
                <th>Clubes</th>
                <th class="me-5">PJ</th>
                <th>V</th>
                <th>E</th>
                <th>D</th>
                <th>GF</th>
                <th>GC</th>
                <th>DG</th>
                <th>PST</th>
            </tr>
        </thead>
        <tbody>
           <tr>
            <tr v-for="equipos in equiposLiga" :key="equipos"><img :src="`https://lsm-static-prod.livescore.com/medium/${equipos.Img}`" >   <span class="ms-5 ">{{ equipos.Tnm }}</span></tr>
           </tr>
           

           <tr></tr>
        </tbody>
    </table>
</template>


