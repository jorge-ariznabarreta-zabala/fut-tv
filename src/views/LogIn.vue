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

  await userStore.loginUser(email.value, password.value)
  // router.push('/intranet')
}
</script>

<template>
  <div class="Login">
    <h2 class="mb-5">Login</h2>

    <form @submit.prevent="handlerSubmit" class="d-flex flex-column mb-5 w-50 mx-auto">
      <input type="email" placeholder="email" v-model.trim="email" class="mb-4" />

      <input type="password" placeholder="password" v-model.trim="password" class="mb-4" />

      <button
        class="w-25 mx-auto btn text-white bg-success"
        type="submit"
        :disabled="userStore.loadingUser"
      >
        acceso
      </button>
    </form>
  </div>
</template>
<style scoped>
.Login{
  text-align: center;
}
</style>
