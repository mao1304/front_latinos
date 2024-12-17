<template>
    <div class="menu-flotante" :class="{ 'expandido': menuExpandido }" @click="toggleMenu">
        <div class="eventos-slider" ref="sliderRef">
            <div class="swiper-wrapper">
                <conten v-for="evento in eventos" :target-date="evento.date" :title="evento.titulo" :img="evento.img"
                    :isBanner="evento.is_banner" class="swiper-slide banner" />
            </div>
        </div>
    </div>
</template>
<!-- <div v-for="(evento, index) in eventos" :key="index" class="swiper-slide">
                                <img :src="evento.img" alt="Imagen del evento" class="imagen-evento">
                                <h3>{{ evento.titulo }}</h3>
                                <p>{{ evento.descripcion }}</p>
                                <p>{{ evento.date }}</p>
                            </div> -->
<script setup lang="ts">

import conten from './conten.vue'
import { ref, onMounted } from "vue";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const sliderRef = ref(null);
onMounted(() => {
    new Swiper(sliderRef.value, {
        spaceBetween: 0,
        slidesPerView: 1,
        roundLengths: true,
        loop: true,
        autoplay: {
            enabled: true,
            delay: 8000,
        },
        speed: 400,
        breakpoints: {
            1600: { slidesPerView: 1 },
            1200: { slidesPerView: 1 },
            992: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
        },
    });
});

const menuExpandido = ref(false);
const eventos = ref([
    { id: 0, titulo: 'Proximos eventos', descripcion: 'Descripción del evento 1', date: '2024-12-21T10:25:00', img: "/img/reales/FOTOGRAFIAS/luis-velasquez.png", is_banner: true },
    { id: 1, titulo: 'Taller de conocimiento', descripcion: 'Descripción del evento 1', date: '2024-12-21T10:25:00', img: "/img/reales/FOTOGRAFIAS/about.jpg", is_banner: false },
    { id: 2, titulo: 'Entrenamiento 39', descripcion: 'Descripción del evento 2', date: '2025-01-31T08:00:00', img: "/img/reales/FOTOGRAFIAS/about-1.jpg", is_banner: false },
    { id: 3, titulo: 'Premios Entrenando Latinos 2024', descripcion: 'Descripción del evento 3', date: '2025-02-01T18:00:00', img: "/img/reales/FOTOGRAFIAS/about-2.jpg", is_banner: false },
]);

const toggleMenu = () => {
    menuExpandido.value = !menuExpandido.value;
};
</script>
<style scoped>
.menu-flotante {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #f0f0f0;
    border-radius: 10px 0 0 10px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    width: 40px;
    cursor: pointer;
}

.menu-flotante.expandido {
    width: auto;
}

.eventos-slider {
    width: 50vw;
    height: auto;
}
</style>
<!-- <style scoped>


.banner {
    width: 100%;
    height: 100vh;
    /* background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80'); */
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.banner::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
}

.countdown-container {
    position: relative;
    z-index: 1;
    text-align: center;
    color: white;
}

.title {
    font-size: 1.5rem;
    letter-spacing: 4px;
    margin-bottom: 2rem;
    font-weight: 300;
    text-transform: uppercase;
}

.countdown {
    display: flex;
    justify-content: center;
    gap: 3rem;
}

.countdown-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.number {
    font-size: 6rem;
    font-weight: 300;
    line-height: 1;
    margin-bottom: 0.5rem;
}

.label {
    font-size: 0.875rem;
    letter-spacing: 2px;
    opacity: 0.8;
}

@media (max-width: 768px) {
    .countdown {
        gap: 1.5rem;
    }

    .number {
        font-size: 3rem;
    }

    .label {
        font-size: 0.75rem;
    }
}

@media (max-width: 480px) {
    .countdown {
        gap: 1rem;
    }

    .number {
        font-size: 2rem;
    }

    .title {
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
    }
}
</style> -->