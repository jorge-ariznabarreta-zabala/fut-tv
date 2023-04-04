<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="cerrarsesion">
      </div>
      <a class="navbar-brand" href="#"><img src="../assets/image/image1.png" alt="" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Inicio</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/Noticias" class="nav-link">Noticias</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Competiciones
            </a>
            <ul class="dropdown-menu">
              <li><RouterLink to="/Pdivision" class="dropdown-item" href="#"
                  >Primera división</RouterLink
                ></li>
              <li><a class="dropdown-item disabled" >Segunda división</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item disabled">Tercera división</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <RouterLink to="/About" class="nav-link">Sobre Nosotros</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/Contact" class="nav-link d">Contacto</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/BlogView" class="nav-link">Blog</RouterLink>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/logIn">Login admin</router-link>
          </li>
        </ul>
        
      </div>
    </div>
</nav>

</template>

<style scoped>
/* @import "src/assets/css/style.css"; */
nav {
  background-color: #acd6d4;
}

.navbar-nav {
  flex-grow: 0 !important;
}
</style>
