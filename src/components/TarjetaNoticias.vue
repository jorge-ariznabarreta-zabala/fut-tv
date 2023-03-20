<template>
    <a :href="linc">
    <ul>
        <li v-for="noticias in linc" v-bind:key="noticias">
        <div class="contenido">
            <div class=" d-flex  flex-row align-items-center mt-5" style="width: 5rem;">
                <div class="card-body">
                    <p class="" style="width: 30rem;">{{ noticias.name }}</p>
                </div>
                <img src="../assets/Football.jpg" class="card-img-top" alt="...">
            </div>
        </div>
        </li>
    </ul>
    </a>
</template>

<script setup>
const linc = [{ 
link: 'https://as.com/futbol/mercado-de-fichajes-en-directo-altas-bajas-y-ultima-hora-hoy-n-43/?noti=mercado_mod_port',
foto: "",
name: 'Aprobados y suspensos del Barcelona: Sergi Roberto y Kessié, ‘héroes’ improvisados'}, 
{link:'https://as.com/futbol/primera/al-son-de-griezmann-n/',
foto: "",
name: 'El Real Madrid ‘amarga’ la noche a Piqué'}, 
{link:'https://as.com/futbol/primera/aubameyang-vuelve-a-un-clasico-n/',
foto: "",
name: 'Araújo rompe la racha de Ter Stegen en el Camp Nou: ¡1.124 minutos sin encajar un gol!'}]

</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
}
</style>