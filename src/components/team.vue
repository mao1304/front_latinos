<script setup>
import { ref, onMounted, computed } from "vue";
import Swiper from "swiper";
import { Autoplay } from 'swiper/modules';

import "swiper/swiper-bundle.css";
import equipo from "@/stores/team";
const sliderRef = ref(null);

const activeTeam = computed(() => equipo.filter(person => person.active));
onMounted(() => {
    Swiper.use([Autoplay]);
    new Swiper(sliderRef.value, {
        // modules: [Autoplay],
        loop: true,
        spaceBetween: 30,
        speed: 400,
        slidesPerView: 5,
        autoplay: {
            enabled: true,
            delay: 4000
        },
        breakpoints: {
            '1600': {
                slidesPerView: 5,
            },
            '1400': {
                slidesPerView: 4,
            },
            '1200': {
                slidesPerView: 4,
            },
            '768': {
                slidesPerView: 3,
            },
            '576': {
                slidesPerView: 2,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });

});
</script>
<template>
    <section class="team-area z-3 pt-150 pb-150" style="overflow-x: hidden;">
        <div class="container">
            <div class="section-title text-center mb-75">
                <span class="sub-title wow fadeInRight" data-wow-duration=".7s">Equipo</span>
                <div class="clearfix"></div>
                <h3 class="title wow skewIn">"El Equipo Detrás de <br> <span>Entrenando Latinos in Roofing</span>
                    <!-- Unidos por
                    Tu Éxito " -->
                </h3>
            </div>
        </div>
        <div class="team-slider" ref="sliderRef">
            <div class="swiper-wrapper" ref="sliderRef">
                <div v-for="person in activeTeam" class="swiper-slide" data-swiper-autoplay="3000">
                    <div class="xb-team pos-rel backgroundImage">
                        <div class="xb-item--img"
                            :style="{ backgroundImage: 'url(https://entrenandolatinosinroofing.com/wp-content/uploads/2024/02/bg-form_banner_small.webp)' }"
                            style="background-position: center; background-size: contain; background-repeat: no-repeat; ">
                            <img :src="person.img" alt="">
                        </div>
                        <div class="xb-item--holder text-center">
                            <h3 class="xb-item--title">{{ person.name }}</h3>
                            <p class="xb-item--desig">{{ person.role }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- team section end  -->
</template>
