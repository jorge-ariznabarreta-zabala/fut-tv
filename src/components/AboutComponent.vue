<script setup>
const props =({
  title: "Mohamed" 
})
</script>
<template>
  <div class="card mb-4 m-3 p-2 container m-auto " >
    
      <div class="w-75 mx-auto">
        <img
          src="src/assets/image/Sin título.png"
          class="img-fluid rounded-4 p-2 mt-4"
          alt="..."
        />
      </div>
      <div class="pb-5">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text text-justify mt-4">
           <!-- En los últimos años, el fútbol se ha convertido en uno de los deportes más populares del mundo, con millones de aficionados en todos los rincones del planeta. En este contexto, ha surgido una nueva startup de fútbol que busca revolucionar la forma en que se juega, se entrena y se disfruta el deporte rey.

 La startup en cuestión se llama "Fut-tv" y su objetivo es crear una plataforma que permita a los aficionados conectarse y mejorar su experiencia de fútbol. La idea principal detrás de Fut-tv es utilizar tecnologías de vanguardia para crear una comunidad de fútbol global.

Uno de los principales servicios ofrecidos por Fut-tv es su sistema de muestra de partidos en vivo, proximos, así seleccionarlos para una fecha . Utilizando tecnologías de inteligencia artificial y aprendizaje automático, la plataforma es capaz de recopilar datos sobre el rendimiento de los jugadores durante los partidos y los entrenamientos. Estos datos son analizados y utilizados para proporcionar información valiosa sobre los puntos fuertes y débiles de los jugadores, así como para identificar áreas en las que se pueden realizar mejoras.

Otro servicio ofrecido por Fut-tv es su plataforma de formación en línea. Utilizando herramientas de videoconferencia y tutoría en línea, los jugadores pueden acceder a entrenadores y expertos de fútbol de todo el mundo. Estos entrenadores y expertos pueden proporcionar consejos y orientación personalizados a los jugadores, ayudándoles a mejorar su juego y a alcanzar sus objetivos.

Fut-tv también tiene como objetivo fomentar la colaboración entre los clubes y los jugadores. A través de su plataforma, los clubes pueden buscar y reclutar jugadores de todo el mundo, y los jugadores pueden buscar y solicitar oportunidades de prueba en diferentes clubes. Esto significa que los jugadores talentosos tienen la oportunidad de ser descubiertos y reclutados por clubes de élite, independientemente de su ubicación geográfica. -->
Somos una pequeña empresa creada por desarrolladores web que tiene como objetivo presentar información de una forma dinámica a los aficionados al fútbol. Ofrecemos información sobre partidos en directo, horarios de partidos, noticias deportivas, y un blog donde los usuarios pueden hacer comentarios.


          </p>
        </div>
      </div>
    
  </div>

  <!-- Avatares about us -->
  <!-- <div class="container-card"> -->
  <div class=" cardteam d-flex container-fluid  mb-5 ">
    <div class="card-integrantes rounded-0 border-0">
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
    <div class="card-integrantes rounded-0 border-0">
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
    <div class="card-integrantes rounded-0 border-0 ">
      <img 
        src="src/assets/Avatares/moha.png"
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

    <div class="card-integrantes rounded-0 border-0">
      <img src="src/assets/Avatares/Jesus.svg" class="card-img-top circular--square" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center">Jesus</h5>
        <p class="card-text"></p>
      </div>
      <div class="card-footer text-center">
        <a href="https://github.com/ikatza1967" class="card-link text-decoration-none">Github</a>
      </div>
    </div>
    <div class="card-integrantes rounded-0 border-0">
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
    <div class="card-integrantes rounded-0 border-0">
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


h5{
  font-size: 2vw;
}

  


 @media (max-width: 570px) {

   .cardteam{
     flex-wrap: wrap;
    justify-content: center;
   }

 .card-integrantes{
 width: 30%;
margin-bottom: 2rem;
  }

}
</style>
