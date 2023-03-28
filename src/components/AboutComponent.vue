<template>
  <div class="card mb-4 m-3 p-2" style="max-height: 800px">
    <div class="row g-3">
      <div class="col-md-2">
        <img
          src="src/assets/image/football3.jpg"
          class="img-fluid rounded-start p-2 mt-4git"
          alt="..."
        />
      </div>
      <div class="col-md-8">
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
  </div>

  <!-- Avatares about us -->
  <!-- <div class="container-card"> -->
  <div class="card-group container-fluid flex-wrap mb-2">
    <div class="card border-0">
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
    <div class="card border-0">
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
    <div class="card border-0">
      <img
        src="src/assets/Avatares/Mohammed1.png"
        class="card-img-top circular--square"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title text-center">Mohammed</h5>
        <p class="card-text"></p>
      </div>
      <div class="card-footer text-center">
        <a href="https://github.com/Medibra322" class="card-link text-decoration-none">Github</a>
        <small class="text-muted"></small>
      </div>
    </div>

    <div class="card border-0">
      <img src="src/assets/Avatares/Jesus.svg" class="card-img-top circular--square" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center">Jesus</h5>
        <p class="card-text"></p>
      </div>
      <div class="card-footer text-center">
        <a href="https://github.com/ikatza1967" class="card-link text-decoration-none">Github</a>
      </div>
    </div>
    <div class="card border-0">
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
    <div class="card border-0">
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
  <!-- </div> -->
</template>

<script setup></script>

<style lang="scss" scoped>
.card {
  background-color: #acd6d4;
}
.card-img-top {
  background-blend-mode: 20px;
}
.circular--square {
  border-top-left-radius: 50% 50%;
  border-top-right-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
}
// .card-group{
//   margin-left: 10rem;
//   margin-right: 10rem;
//   margin-top: 1rem;
// }
img {
  // width: 10rem;
  // height: 10rem;
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
</style>
