<script setup>
import TitlePages from '../components/TitlePages.vue'
</script>

<template>
  <TitlePages title="Contacto" />

  <div class="contacto container">
    <div class="mapa mt-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23203.64230036141!2d-2.5239120163551965!3d43.367503414434715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e26da4bdd072b%3A0xf70d22df22b24213!2sLequeitio%2C%20Vizcaya!5e0!3m2!1ses!2ses!4v1679564168839!5m2!1ses!2ses"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <div class="formulario">
      <p class="text-center w-responsive mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact us directly. Our team will come
        back to you within a matter of hours to help you.
      </p>

      <div class="row">
        <!--Grid column-->
        <div class="col-md-9 mb-md-0 mb-5">
          <form id="contact-form" name="contact-form" action="mail.php" method="POST">
            <!--Grid row-->
            <div class="row">
              <!--Grid column-->
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <label for="name" class="">Nombre</label>
                  <input type="text" id="name" name="name" class="form-control" />
                </div>
              </div>
              <!--Grid column-->

              <!--Grid column-->
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <label for="email" class="">Correo</label>
                  <input type="text" id="email" name="email" class="form-control" />
                </div>
              </div>
              <!--Grid column-->
            </div>
            <!--Grid row-->

            <!--Grid row-->
            <div class="row">
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <label for="subject" class="">Asunto</label>
                  <input type="text" id="subject" name="subject" class="form-control mb-2" />
                </div>
              </div>
            </div>
            <!--Grid row-->

            <!--Grid row-->
            <div class="row">
              <!--Grid column-->
              <div class="col-md-12">
                <div class="md-form">
                  <label for="message">Mensaje</label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    class="form-control md-textarea"
                  ></textarea>
                </div>
              </div>
            </div>
            <!--Grid row-->
          </form>

          <div class="text-center text-md-left mt-5">
            <input type="submit" class="btn btn-outline-primary" id="btn" />
          </div>
          <div class="status"></div>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-md-3 text-center">
          <ul class="list-unstyled mb-0">
            <li>
              <i class="fas fa-map-marker-alt fa-2x"></i>
              <p>Lekeitio,Bizkaia, 48280</p>
            </li>

            <li>
              <i class="fas fa-phone mt-4 fa-2x"></i>
              <p>+ 34 643 353 431</p>
            </li>

            <li>
              <i class="fas fa-envelope mt-4 fa-2x"></i>
              <p>contact@fut-tv.com</p>
            </li>
          </ul>
        </div>
        <!--Grid column-->
      </div>
    </div>
  </div>
</template>

<style scoped>
.formulario {
  width: 50%;
  margin: 3rem auto;
}
</style>
