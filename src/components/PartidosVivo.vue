<script setup>
import TitlePages from '../components/TitlePages.vue'
import { ref, onMounted } from 'vue'
import info from '../assets/modulos/livescoreAPI';
let listaPartidosLive = ref(onMounted(async () => {
  listaPartidosLive.value = await info.getListLive()
  console.log(listaPartidosLive);
}));
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
            <span>{{ partidoLive.Events[0].T1[0].Nm
            }}</span>
            <img :src="`https://lsm-static-prod.livescore.com/medium/${partidoLive.Events[0].T1[0].Img}`"
              class="me-5 ms-3" />
          </td>
          <td class="text-center">
            {{ partidoLive.Events[0].Tr1 }} - {{ partidoLive.Events[0].Tr2 }}
          </td>
          <td class="text-center">
            <img :src="`https://lsm-static-prod.livescore.com/medium/${partidoLive.Events[0].T2[0].Img}`"
              class="me-5 ms-3" />
              <span>{{ partidoLive.Events[0].T2[0].CoNm }}</span>
          </td>
          <td class="text-center">{{ partidoLive.CompN }}</td>
          <td class="text-center">{{ partidoLive.Snm }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
table {
  font-size: 0.75rem;
  table-layout: auto;
}

img {
  max-width: 1vw;
  height: auto;
}

th td {
  text-align: center !important;
}
</style>
