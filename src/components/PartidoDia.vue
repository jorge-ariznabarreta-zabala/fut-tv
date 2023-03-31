<template>
  <div class="mb-5">
    <TitlePages title="Partidos por Día" />
  </div>

  <div>
    <h1>Selecciona una fecha:</h1>
    <DayPicker @fecha-seleccionada="handleFechaSeleccionada" />
    <p>Fecha seleccionada: {{ fechaSeleccionada }}</p>
  </div>

  <table class="table table-info table-striped table-hover">
    <thead>
      <tr>
        <th class="text-center align-middle" scope="col">LOCAL</th>

        <th class="text-center align-middle" scope="col">MARCADOR</th>

        <th class="text-center align-middle" scope="col">VISITANTE</th>
        <th class="text-center align-middle" scope="col">COMPETICION</th>
        <th class="text-center align-middle" scope="col">GRUPO</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="partidoDay in listaPartidosDay" :key="partidoDay.Id">
        <!-- Agregado :key -->
        <td class="text-center align-middle">
          <span
            >{{ partidoDay.Events[0].T1[0].Nm }}
            <img
              :src="`https://lsm-static-prod.livescore.com/medium/${partidoDay.Events[0].T1[0].Img}`"
              class="me-5 ms-3"
              v-bind:alt="partidoDay.Events[0].T1[0].Img"
          /></span>
        </td>
        <td class="text-center align-middle">
          {{ partidoDay.Events[0].Tr1 }} - {{ partidoDay.Events[0].Tr2 }}
        </td>
        <td class="text-center align-middle">
          <span
            ><img
              :src="`https://lsm-static-prod.livescore.com/medium/${partidoDay.Events[0].T2[0].Img}`"
              class="me-5 ms-3"
              :alt="partidoDay.Events[0].T2[0].Img"
            />
            {{ partidoDay.Events[0].T2[0].Nm }}</span
          >
        </td>
        <td class="text-center align-middle">{{ partidoDay.CompN }}</td>
        <td class="text-center align-middle">{{ partidoDay.Snm }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import TitlePages from '../components/TitlePages.vue'
import DayPicker from '../components/DayPicker.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue'

const fechaSeleccionada = ref('')
const handleFechaSeleccionada = (fecha) => {
  fechaSeleccionada.value = fecha
  getData(fecha)
}
const listaPartidosDay = ref([])


 async function getData(date) {
   try {
     console.log(date)
     const { data } = await axios.request({
       method: 'GET',
       url: 'https://livescore6.p.rapidapi.com/matches/v2/list-by-date',
       params: { Category: 'soccer', Date: date, Timezone: '-7' },
       headers: {
         'X-RapidAPI-Key': '2354e7edb9mshf8c9fa220c15434p1804fajsn9793ea2f18a3',
         'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
       }
     })
     listaPartidosDay.value = data.Stages
     console.log(listaPartidosDay.value)
   } catch (error) {
     console.error(error)
   }
 }



 onMounted(() => {
   getData(new Date())
 })
</script>
<style>
table {
  font-size: 1.5vw;
  table-layout: auto;
}
td > img {
  max-width: 25%;
}
span {
  display: inline-flex;
  align-items: center;
}
</style>
