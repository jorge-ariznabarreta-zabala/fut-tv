<template>
<input :value="fecha" type="date" id="datetime-local">

</template>

<script setup>
import { ref } from "vue";
export {



  const fecha = ref('')
  //Whatever code
   fecha= new Date();
  return {fecha}


}
</script>