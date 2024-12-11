// src/views/service3.vue
<script setup>
import { ref } from 'vue';
import bannerSections from '@/components/banner-sections.vue';
import ImageSlider from '@/components/slider.vue';
import { onBeforeMount } from 'vue';
// Define tus imágenes una sola vez
const marketingImages = [
  {
    src: "https://entrenandolatinosinroofing.com/wp-content/uploads/2023/10/marketing_5.png",
    alt: 'Marketing Digital 1',
    link: '#'
  },
  {
    src: '/img/digital-marketing/instragram/ins02.jpg',
    alt: 'Marketing Digital 2',
    link: '#'
  },
  {
    src: '/img/digital-marketing/instragram/ins03.jpg',
    alt: 'Marketing Digital 3',
    link: '#'
  },
  {
    src: '/img/digital-marketing/instragram/ins04.jpg',
    alt: 'Marketing Digital 4',
    link: '#'
  },
  {
    src: '/img/digital-marketing/instragram/ins05.jpg',
    alt: 'Marketing Digital 5',
    link: '#'
  },
  {
    src: '/img/digital-marketing/instragram/ins06.jpg',
    alt: 'Marketing Digital 6',
    link: '#'
  },
  {
    src: '/img/digital-marketing/instragram/ins03.jpg',
    alt: 'Marketing Digital 7',
    link: '#'
  }
];
</script>

<template>
  <bannerSections />
  <div class="container">
    <div class="row mt-none-30 align-items-center justify-content-center">
      <div class="col-lg-12 mt-30">
        <div class="section-title">
          <span class="sub-title wow fadeInRight" data-wow-duration=".7s">
            Detalles del Servicio
          </span>
          <div class="clearfix"></div>
          <h3 class="title wow skewIn mb-15">
            Estrategias de <span>Marketing Digital y publicidad</span>
          </h3>
        </div>
        <!-- ... resto del contenido ... -->
      </div>
    </div>
  </div>

  <div class="container mt-30 mb-60" style="box-shadow: 0px 0px 0px 2px #353741; background-color: #16171b;">
    <div class="row mt-none-30 align-items-center justify-content-center">
      <div class="col-lg-12 mt-30">
        <h2>Digital marketing (redes sociales):</h2>
        <p style="color:#fff">Ofrecemos el servicio de <strong>REDES SOCIALES</strong> para posicionar tu compañía en la industria
                     del Roofing como la primera opción cuando los propietarios de vivienda buscan servicios
                      en línea. Nuestra estrategia incluye la creación de contenido de calidad, interacción
                       activa con tus clientes y una eficiente gestión de palabras clave.<br>

Aumentando la visibilidad y fortaleciendo la relación con tus potenciales clientes.</p>
      </div>
      <div class="col-lg-12 mt-30">
        <section class="instragram pt-10 pb-130">
          <ImageSlider :images="marketingImages" :delay="3000" />
        </section>
      </div>
    </div>
  </div>

  <!-- Segundo slider con las mismas imágenes pero diferente delay -->
  <div class="container mt-30" style="box-shadow: 0px 0px 0px 2px #353741; background-color: #16171b;">
    <div class="row mt-none-30 align-items-center justify-content-center">
      <div class="col-lg-12 mt-30">
        <h2>Yard signs:</h2>
        <p style="color:#fff">Potencia tu marca en los lugares donde estás trabajando con las YARD SIGNS.
             Son la herramienta ideal para destacar tu compañía y llegar a tus potenciales clientes de manera efectiva.</p>
      </div>
      <div class="col-lg-12 mt-30">
        <section class="instragram pt-10 pb-130">
          <ImageSlider :images="marketingImages" :delay="3000" />
        </section>
      </div>
    </div>
  </div>
</template>