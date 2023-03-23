<template>
<label>Elige fecha: <input @change=changeDate() type="date" id="datetime-local"  v-model=fecha > para mostrar partidos de ESE día</label>
<pre>{{ fecha }}</pre>
</template>

<script setup>
import { ref } from 'vue';

        let fecha = ref(new Date().toLocaleDateString("es", "ES"))
    console.log(fecha);
        function changeDate() {
          console.log(this.fecha);
        };  
</script>