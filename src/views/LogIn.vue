<script setup>
import router from "@/router";
import axios from "axios";




const nuevoUsuario = async () => {
  const url = "http://localhost:3000/usuarios";
  const response = await fetch(url,
  {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({
      name: document.getElementById("name").value,
      lastname: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      address : document.getElementById("address").value,
      
    })
 
  });
 
}


function redirectToPage(){
  router.push("/");

  nuevoUsuario();
  validateForm();

}


function validateForm() {
  var name = document.getElementById('name').value
  if (name == '') {
    document.querySelector('.status').innerHTML = alert('Name cannot be empty')
    return false
  }
  var email = document.getElementById('email').value
  if (email == '') {
    document.querySelector('.status').innerHTML = alert('Email cannot be empty')
    return false
  } else {
    var re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(email)) {
      document.querySelector('.status').innerHTML = alert('Email format invalid')
      return false
    }
  }
  var subject = document.getElementById('subject').value
  if (subject == '') {
    document.querySelector('.status').innerHTML = alert('Subject cannot be empty')
    return false
  }
  var message = document.getElementById('message').value
  if (message == '') {
    document.querySelector('.status').innerHTML = alert('Message cannot be empty')
    return false
  }
  document.querySelector('.status').innerHTML = alert('Sending...')
}
</script>

<template>
<div class="col-lg-8 mx-auto ">

    <div id="containerRegister">
  <div class=" datospersonales bd-exampledropdown-menu mx-auto form-color col-lg-7 col-md-8 m-5" >
    <form class="px-5 py-3 needs-validation "  id="formulario2">
          <h3 class="text-center pb-3">Registro</h3>
      <div class="mb-3 ">
            <label for="DropdownFormName1" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="name" v-model="name">
          </div>
          <div class="mb-3">
            <label for="DropdownFormlastname" class="form-label">Apellido</label>
          <input type="text" class="form-control" id="lastname" v-model="apellido">
          </div>
          <div class="mb-3">
            <label for="DropdownFormdirection" class="form-label">Direccion</label>
          <input type="text" class="form-control" id="address" v-model="direccion">
          </div>
          <div class="mb-3">
            <label for="DropdownFormEmail1" class="form-label">Correo Electronico</label>
        <input type="email" class="form-control" id="email" v-model="email">
          </div>
          <div class="mb-3">
            <label class="form-label">Contraseña</label>
        <input type="email" class="form-control" id="password" v-model="password">
          </div>
          <div class="mb-3 d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-outline-primary" @click="redirectToPage()">Registrate</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<style scoped>
#containerRegister {
    background-color: #ACD6D4;
}

</style>
