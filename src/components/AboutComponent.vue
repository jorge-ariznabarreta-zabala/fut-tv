<script setup>
import { reactive } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "Mohamed",
  },
});
</script>
<template>
  <div class="card mb-4 m-3 p-2 container m-auto" >
    
      <div class="w-75 mx-auto">
        <img
          src="src/assets/image/football3.jpg"
          class="img-fluid rounded-start p-2 mt-4git"
          alt="..."
        />
      </div>
      <div class="pb-5">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text text-justify mt-4">
            Somos una pequeña empresa de programadores, que quiere darse a conocer con esta pagina
            web, dando una pequeña muestra de nuestro valor. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Odit, similique aut voluptas nemo est inventore. Saepe est impedit ut
            corporis nam ipsa optio necessitatibus, doloremque numquam in officiis, quis quos.
            Quisquam voluptatem cum odio incidunt in, dolores esse, libero unde tenetur excepturi
            consectetur necessitatibus nisi et. Dolorem soluta molestias assumenda enim error cum
            sed, nisi .
          </p>
        </div>
      </div>
    
  </div>

  <!-- Avatares about us -->
  <!-- <div class="container-card"> -->
  <div class="d-flex container-fluid  mb-5">
    <div class="card rounded-0 border-0">
      <img src="src/assets/Avatares/Jorge.svg" class="card-img-top circular--square" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center">Jorge</h5>
        <p class="card-text"></p>
      </div>
      <div class="card-footer text-center">
        <a
          href="https://github.com/jorge-ariznabarreta-zabala"
          class="card-link text-decoration-none"
          >Github</a
        >
        <small class="text-muted"></small>
      </div>
    </div>
    <div class="card rounded-0 border-0">
      <img src="src/assets/Avatares/Juan.svg" class="card-img-top circular--square" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center">Juan</h5>
        <p class="card-text"></p>
      </div>
      <div class="card-footer text-center">
        <a href="https://github.com/Juan-Little" class="card-link text-decoration-none">Github</a>
        <small class="text-muted"></small>
      </div>
    </div>
    <div class="card rounded-0 border-0 ">
      <img 
<<<<<<< HEAD
        src="src/assets/Avatares/Mohammed.svg"
=======
        src="src/assets/Avatares/Moha.png"
>>>>>>> f122da5c5d5da877b1ae6e068e3e856dbfac02da
        class="card-img-top circular--square "
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title text-center">{{props.title}}</h5>
        <p class="card-text"></p>
      </div>
      <div class="card-footer text-center">
        <a href="https://github.com/Medibra322" class="card-link text-decoration-none">Github</a>
        <small class="text-muted"></small>
      </div>
    </div>

    <div class="card rounded-0 border-0">
      <img src="src/assets/Avatares/Jesus.svg" class="card-img-top circular--square" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center">Jesus</h5>
        <p class="card-text"></p>
      </div>
      <div class="card-footer text-center">
        <a href="https://github.com/ikatza1967" class="card-link text-decoration-none">Github</a>
      </div>
    </div>
    <div class="card rounded-0 border-0">
      <img src="src/assets/Avatares/Mihai.svg" class="card-img-top circular--square" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center">Mihai</h5>
        <p class="card-text"></p>
      </div>
      <div class="card-footer text-center">
        <a href="https://github.com/mihaicce" class="card-link text-decoration-none">Github</a>
        <small class="text-muted"></small>
      </div>
    </div>
    <div class="card rounded-0 border-0">
      <img src="src/assets/Avatares/Anyell.svg" class="card-img-top circular--square" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center">Anyell</h5>
        <p class="card-text"></p>
      </div>
      <div class="card-footer text-center">
        <a href="https://github.com/anyellpenascal" class="card-link text-decoration-none"
          >Github</a
        >
        <small class="text-muted"></small>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.card {
  background-color: #acd6d4;
}

.circular--square {
  border-top-left-radius: 50% 50%;
  border-top-right-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
}

img {
 
  justify-content: center;
  padding: 1rem;
}
.a {
  text-decoration-color: none;
  color: #3a5e65;
}
.balon {
  width: 30rem;
  margin-bottom: 5rem;
}
.football {
  box-shadow: #acd6d4;
  width: 2000px;
  height: 10rem;
}
h5{
  font-size: 2vw;
}
</style>
