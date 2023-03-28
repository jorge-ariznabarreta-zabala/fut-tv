<script setup>
import router from '@/router'
import axios from 'axios'
import { ref } from 'vue'

const nombre = ref('')
const apellido = ref('')
const correo = ref('')
const contraseña = ref('')
const direccion = ref('')

const nuevoUsuario = async () => {

  const url = 'http://localhost:3000/usuarios'
  await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      name: nombre.value,
      lastname: apellido.value,
      email: correo.value,
      password: contraseña.value,
      address: direccion.value
    })
  })
}




</script>

<template>
  <div class="formularioRegistro">
    <div class="formularios">
    <FormKit
      type="text"
      label="Usuario"
      name="usuario"
      v-model="usuario"
      validation="required|length:4"
      validation-messages="este campo es obligatorio"

    />

    <FormKit
      type="text"
      label="Nombre Completo"
      name="nombre"
      v-model="nombre"
      validation="required|length:4"
      validation-messages="este campo es obligatorio"


    />

    <FormKit
      type="email"
      label="Correo"
      name="correo"
      v-model="correo"
      validation="required|Correo"
      validation-messages="este campo es obligatorio"

    />

    <FormKit
      type="password"
      name="Contraseña"
      v-model="contraseña"
      label="Password"
      validation="required"
      validation-visibility="live"
      validation-messages="este campo es obligatorio"
    />
  
    <FormKit 
     type="submit"
      label="registrarte"
       name="enviar"
       @click="nuevoUsuario" 
       />

  </div>
  </div>
</template>

<style scoped>
.formularioRegistro {
  padding: 5rem 0;
  background-color: #acd6d4;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.formularios{
  background-color: rgb(252, 250, 247);
  border: 1px solid black;
  border-radius: 10px;
  padding: 6rem;
}
</style>
