<script setup>
import services from "../stores/service.js";
import brands from "./brands.vue";
import { ref, onMounted } from "vue";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const sliderRef = ref(null);

onMounted(() => {
  new Swiper(sliderRef.value, {
    spaceBetween: 0,
    slidesPerView: 4,
    roundLengths: true,
    loop: true,
    autoplay: {
      enabled: true,
      delay: 5000,
    },
    speed: 400,
    breakpoints: {
      1600: { slidesPerView: 4 },
      1200: { slidesPerView: 3 },
      992: { slidesPerView: 3 },
      768: { slidesPerView: 2 },
      576: { slidesPerView: 2 },
      0: { slidesPerView: 1 },
    },
  });
});
</script>

<template>
  <main>
    <brands />
    <section class="service-4 pos-rel mb-130" style="overflow-x: hidden; ">
      <div class="container">
        <div class="section-title section-title--dm mb-55">
          <span class="sub-title mb-45 wow fadeInRight" data-wow-duration=".7s">SERVICIOS</span>
          <div class="clearfix"></div>
          <h3 class="title wow skewIn">Su éxito con nuestra <br /> <span>experiencia inigualable</span></h3>
        </div>
      </div>
      <div class="services-inner pos-rel">
        <div
          class="services-bg bg_img"
          :style="{ backgroundImage: `url('https://img.freepik.com/fotos-premium/casal-feliz-chegou-a-um-acordo-com-seu-agente-de-seguros-em-uma-reuniao-no-escritorio_637285-951.jpg')` }"
        ></div>
        <div class="dm-service-slider" ref="sliderRef">
          <div class="swiper-wrapper">
            <div v-for="service in services" :key="service.id" class="swiper-slide  dm-service">
              <div class="xb-item--holder per">
                <h2 class="xb-item--title"><a href="service-single.html">.0{{service.id}} <br />{{ service.title }}</a></h2>
                <div class="xb-item--content">{{ service.description }}</div>
              </div>
              <div class="xb-item--image">
                <img :src="service.img" alt="" style="height: 324px; width: 315px; object-fit: cover; object-position: center" />
              </div>
              <div class="xb-item--srv_link">
                <router-link :to="service.link">Conoce más <span><img src="/img/digital-marketing/icon/dm-srv.png" alt="" /></span></router-link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.per {
   height: 300px;
}
@media (max-width: 1500px) {
  .per {
    height: 220px;
  }
}

@media screen and (max-width: 768px) {
  .per {
    height: 240px;
  }
}
</style>