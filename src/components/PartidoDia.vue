<template>
  <div class="mb-5">
    <TitlePages title="Partidos por Día" />
  </div>
  <div class="tabla mt-5 container">
    <h1>Selecciona una fecha:</h1>
    <DayPicker @fecha-seleccionada="handleFechaSeleccionada" />
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
          <td class="text-center align-middle justify-content-between">
            <span class="col-8 p-1">{{ partidoDay.Events[0].T1[0].Nm }}</span>
              <img :src="`https://lsm-static-prod.livescore.com/medium/${partidoDay.Events[0].T1[0].Img}`"
                class="col-4 p-1" v-bind:alt="partidoDay.Events[0].T1[0].Img" />
          </td>
          <td class="text-center align-middle">
            {{ partidoDay.Events[0].Tr1 }} - {{ partidoDay.Events[0].Tr2 }}
          </td>
          <td class="text-center align-middle">
            <img :src="`https://lsm-static-prod.livescore.com/medium/${partidoDay.Events[0].T2[0].Img}`"
            class="col-4 p-1" :alt="partidoDay.Events[0].T2[0].Img" />
              <span class="col-8 p-1">{{ partidoDay.Events[0].T2[0].Nm }}</span>
          </td>
          <td class="text-center align-middle">{{ partidoDay.CompN }}</td>
          <td class="text-center align-middle">{{ partidoDay.Snm }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import TitlePages from '../components/TitlePages.vue'
import DayPicker from '../components/DayPicker.vue'
import { ref, onMounted } from 'vue'
import info from '../assets/modulos/livescoreAPI';

let listaPartidosDay = ref(onMounted(async () => {
  listaPartidosDay.value = await info.getListByDate(fechaSeleccionada)
  console.log(listaPartidosDay);
}));
const fechaSeleccionada = ref('')
const handleFechaSeleccionada = async (fecha) => {
  fechaSeleccionada.value = fecha
  listaPartidosDay.value = await info.getListByDate(fecha)
};
</script>
<style scoped>
table {
  font-size: 1.vw;
  /* table-layout: auto; */
}

td>img {
  max-width: 25%;
}
td {
  max-height: 1vw;
}
span {
  display: inline-flex;
  align-items: center;
}
</style>
