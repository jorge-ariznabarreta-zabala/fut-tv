<template>
  <div class="card mb-5 m-3 p-2" style="max-height: 600px ">
  <div class="row g-4">
    <div class="col-md-2">
      <img src="src/assets/football3.jpg" class="img-fluid rounded-start  " alt="...">
    </div>
    <div class="col-md-3">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">Somos una pequeña empresa de programadores,que queremos darnos a conocer        enseñandos,con  esta pagina web una pequeña muestra de nuestro valor</p>
        <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
      </div>
    </div>
  </div>
</div>
   <!-- <div> -->
   
   <!-- Avatares about us -->
  <!-- <div class="container-card"> -->
 <div class="card-group container-fluid flex-wrap">
  <div class="card border-0">
    <img src="src/assets/Avatares/Jorge.svg" 
    class="card-img-top circular--square " alt="...">
    <div class="card-body ">
      <h5 class="card-title text-center">Jorge</h5>
      <p class="card-text"></p>
    </div>
    <div class="card-footer text-center">
        <a href="" class="card-link  text-decoration-none">Github</a>
      <small class="text-muted"></small>
    </div>
  </div>
  <div class="card border-0">
    <img src="src/assets/Avatares/Juan.svg" class="card-img-top circular--square" alt="...">
    <div class="card-body">
      <h5 class="card-title text-center">Juan</h5>
      <p class="card-text"></p>
    </div>
    <div class="card-footer text-center">
        <a href="" class="card-link text-decoration-none ">Github</a>
      <small class="text-muted"></small>
    </div>
  </div>
  <div class="card border-0">
    <img src="src/assets/Avatares/Mohammed1.png" class="card-img-top circular--square" alt="...">
    <div class="card-body">
      <h5 class="card-title text-center">Mohammed</h5>
      <p class="card-text"></p>
    </div>
    <div class="card-footer text-center">
        <a href="" class="card-link text-decoration-none">Github</a>
      <small class="text-muted"></small>
    </div>
  </div>
<!-- </div>
<div class="card-group  container-fluid border-0"> -->
  <div class="card  border-0">
    <img src="src/assets/Avatares/Jesus.svg" class="card-img-top circular--square" alt="...">
    <div class="card-body">
      <h5 class="card-title text-center">Jesus</h5>
      <p class="card-text"></p>
    </div>
    <div class="card-footer text-center">
        <a href="https://github.com/ikatza1967" class="card-link text-decoration-none">Github</a>
    </div>
  </div>
  <div class="card border-0">
    <img src="src/assets/Avatares/Mihai.svg" class="card-img-top circular--square" alt="...">
    <div class="card-body">
      <h5 class="card-title text-center">Mihai</h5>
      <p class="card-text"></p>
    </div>
    <div class="card-footer text-center">
        <a href="" class="card-link text-decoration-none">Github</a>
      <small class="text-muted"></small>
    </div>
  </div>
  <div class="card border-0">
    <img src="src/assets/Avatares/Anyell.svg" class="card-img-top circular--square" alt="...">
    <div class="card-body">
      <h5 class="card-title text-center">Anyell</h5>
      <p class="card-text"></p>
    </div>
    <div class="card-footer text-center">
        <a href="" class="card-link text-decoration-none">Github</a>
      <small class="text-muted"></small>
    </div>
  </div>
</div>
<!-- </div> -->
</template>

<script setup></script>

<style lang="scss" scoped>
.card{
  background-color: #ACD6D4;
}
.card-img-top{
   background-blend-mode : 20px;
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
img{
  // width: 10rem;
  // height: 10rem;
  justify-content: center;
  padding: 1rem;

}
.a{
    text-decoration-color: none;
  color: #3A5E65;
}
.balon{
  width: 30rem;
  margin-bottom: 5rem;
}
.football{
  box-shadow: #ACD6D4;
  width: 2000px;
  height: 10rem;
}


</style>
