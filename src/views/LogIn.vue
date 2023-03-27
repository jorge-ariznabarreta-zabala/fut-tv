<template>
<div class="col-lg-8 mx-auto ">

<div id="containerRegister">
  <div class=" datospersonales bd-exampledropdown-menu mx-auto form-color col-lg-7 col-md-8 m-5" >
    <form class="px-5 py-3 needs-validation "  id="formulario2">
      <h3 class="text-center pb-3">Registro</h3>
      <div class="mb-3 ">
          <label for="DropdownFormName1" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="DropdownFormName1" disabled v-model="name">
      </div>
      <div class="mb-3">
          <label for="DropdownFormlastname" class="form-label">Apellido</label>
          <input type="text" class="form-control" id="DropdownFormlastName" disabled v-model="apellido">
      </div>
      <div class="mb-3">
          <label for="DropdownFormdirection" class="form-label">Direccion</label>
          <input type="text" class="form-control" id="DropdownFormdirection" disabled v-model="direccion">
      </div>
      <div class="mb-3">
        <label for="DropdownFormEmail1" class="form-label">Correo Electronico</label>
        <input type="email" class="form-control" id="DropdownFormEmail1" disabled v-model="email">
      </div>
      <div class="mb-3 d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-outline-primary" @click="crearUsuario()">Log In</button>
      </div>
    </form>
  </div>
</div>
</div>
</template>

<script setup>

</script>

<style scoped>
#containerRegister {
    background-color: #ACD6D4;
}

</style>