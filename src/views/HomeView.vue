<script setup>
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
    <ul>
      <li v-for="equipos in equiposLiga" :key="equipos"><img :src="`https://lsm-static-prod.livescore.com/medium/${equipos.Img}`" >{{ equipos.Tnm }} --- {{ equipos.ptsn }}</li>
    </ul>
  </div>
</template>
