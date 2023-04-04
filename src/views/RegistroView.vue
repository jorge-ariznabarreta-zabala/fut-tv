<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user'
// import { useRouter } from 'vue-router';

const email= ref("")
const password= ref("")

// const router = useRouter()
const userStore = useUserStore()


const handlerSubmit = async () => {

  if(!email.value || !password.value.length > 6){
    return alert("rellena los campos");
    }

   await userStore.registerUser(email.value, password.value);
    // router.push('/')
}



</script>


<template>
    <div class="registro">
        <h2 class="mb-5">Registrate</h2>

        <form @submit.prevent="handlerSubmit">
          <input type="email" placeholder="email" v-model.trim ="email">

          <input type="password" placeholder="password" v-model.trim ="password">
          <button type="submit">Crear usuario</button>
          </form>

  </div>

</template>
<style scoped>

.registro{
    text-align: center;
}
</style>