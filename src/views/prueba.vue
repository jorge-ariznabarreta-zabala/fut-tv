<template>
  <main class="main-loginregistro">

    <div class="contenedor__todo">
      <div class="caja__trasera">
        <div id="caja__trasera-login">
          <h3>¿Ya tienes una cuenta?</h3>
          <p>Inicia sesión para entrar en la página</p>
          <button class="btn4" @click='switchFormularioLogin' id="btn__iniciar-sesion">Iniciar Sesión</button>
        </div>
      </div>

      <!--Formulario de Login y registro-->
      <div class="contenedor__login-register">
        <!--Login-->
        <form action="" :class="show_formulario_login ? 'formulario__login__block' : 'formulario__login__none'">
          <!-- <form action="" class="formulario__login" v-show="show_formulario_login"> -->

          <h2 class="iniciarSesion-form">Iniciar Sesión</h2>
          <input type="text" placeholder="Correo Electronico" id="email" name="email_loguin">
          <input type="password" placeholder="Contraseña" id="password" name="password_loguin">
          <input type="button" value="Ingresar" id="btnIngresar">
          <p class="formulario__input-error-loguin">El usuario y/o la contraseña no existen. Si no tienes cuenta,
            registrate.</p>
        </form>
      </div>
    </div>
  </main>
</template>
<script setup>
import { computed, ref } from "vue";
//const rate=ref(0);
let show_formulario_login = ref(false);

function switchFormularioLogin() {
  show_formulario_login.value = !show_formulario_login.value;
}

</script>

<style lang="scss" scoped>
.formulario__login__block {
  opacity: 1;
  display: block;
}

.formulario__login__none {
  opacity: 1;
  display: none;
}
</style>