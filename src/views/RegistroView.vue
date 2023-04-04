<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user'
// import { useRouter } from 'vue-router';

const email = ref('')
const password = ref('')

// const router = useRouter()
const userStore = useUserStore()

const handlerSubmit = async () => {
  if (!email.value || !password.value.length > 6) {
    return alert('rellena los campos')
  }

  await userStore.registerUser(email.value, password.value)
  // router.push('/')
}
</script>

<template>
  <div class="registro">
    <h2 class="mb-5 mt-5">Registrate</h2>

    <form @submit.prevent="handlerSubmit" class="d-flex flex-column mb-5 w-50 mx-auto">
      <input type="email" placeholder="email" v-model.trim="email" class="mb-4" />

      <input type="password" placeholder="password" v-model.trim="password" class="mb-4" />

      <button type="submit" class="w-25 mx-auto btn text-white bg-success">Crear usuario</button>
    </form>
  </div>
</template>
<style scoped>
.registro {
  text-align: center;
}
</style>
