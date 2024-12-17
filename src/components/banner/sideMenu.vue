<template>
    <div class="menu-flotante" :class="{ 'expandido': menuExpandido }" @click="toggleMenu">
        <div class="eventos-slider" ref="sliderRef">
            <div class="swiper-wrapper">
                <div v-for="evento in eventos" :key="evento.id" class="swiper-slide banner">
                    <div class="countdown-container">
                        <h1 class="title">COUNTDOWN TO EARTH</h1>
                        <timer />
                        <div class="countdown">
                            <div class="countdown-item">
                                <span class="number">{{ months }}</span>
                                <span class="label">MONTHS</span>
                            </div>
                            <div class="countdown-item">
                                <span class="number">{{ days }}</span>
                                <span class="label">DAYS</span>
                            </div>
                            <div class="countdown-item">
                                <span class="number">{{ hours }}</span>
                                <span class="label">HOURS</span>
                            </div>
                            <div class="countdown-item">
                                <span class="number">{{ minutes }}</span>
                                <span class="label">MINUTES</span>
                            </div>
                        </div>
                    </div>
                </div>
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
<script setup>
import { ref, onMounted } from "vue";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import timeRemaining from "../timer.vue";
console.log(timeRemaining.value);
const sliderRef = ref(null);
console.log(sliderRef.value);
onMounted(() => {
    console.log(sliderRef.value);
    new Swiper(sliderRef.value, {
        spaceBetween: 0,
        slidesPerView: 1,
        roundLengths: true,
        loop: true,
        autoplay: {
            enabled: true,
            delay: 4000,
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
    { titulo: 'Evento 1', descripcion: 'Descripción del evento 1', date: 'Fecha del evento 1', img: '/img/reales/FOTOGRAFIAS/about.jpg' },
    { titulo: 'Evento 2', descripcion: 'Descripción del evento 2', date: 'Fecha del evento 1', img: '/img/reales/FOTOGRAFIAS/about-1.jpg' },
    { titulo: 'Evento 3', descripcion: 'Descripción del evento 3', date: 'Fecha del evento 1', img: '/img/reales/FOTOGRAFIAS/about-2.jpg' },
]);

const toggleMenu = () => {
    menuExpandido.value = !menuExpandido.value;
};
const months = ref('7');
const days = ref('20');
const hours = ref('3');
const minutes = ref('10');
</script>

<style scoped>
.menu-flotante {
    position: fixed;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #f0f0f0;
    border-radius: 0 10px 10px 0;
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

.banner {
    width: 100%;
    height: 100vh;
    background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80');
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
</style>