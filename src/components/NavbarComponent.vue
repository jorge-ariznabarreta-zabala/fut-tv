<script setup>
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid contenedor">
      <a class="navbar-brand" href="#"><img src="../assets/image/image_1-removebg-preview_1_50.png" alt=""></a>
      <a class="navbar-brand" href="#"><img src="src/assets/image/image_1-removebg-preview_1_50.png" alt=""></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class ="collapse navbar-collapse " id="navbarSupportedContent ">
        <ul class="navbar-nav mb-2 mb-lg-0 d-flex me-5">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/Noticias" class="nav-link">Noticias</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Competiciones
            </a>
            <ul class="dropdown-menu">
              <li>
                <RouterLink to="/Pdivision" class="dropdown-item" href="#"
                  >Primera division</RouterLink
                >
              </li>
              <li><a class="dropdown-item disabled" href="#">Segunda division</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <RouterLink to="/About" class="nav-link">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/Contact" class="nav-link d">Contacto</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  background-color: #ACD6D4;
}
.navbar-nav {
  flex-grow: 0 !important;
}

</style>
