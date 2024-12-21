<template>
    <div class="menu-flotante" :class="{ 'expandido': menuExpandido }">
        <div class="menu-flotante-bottom">
            <button class="close-button" @click="toggleMenu"> Encuentra aquí los próximos eventos</button>
        </div>

        <div class="eventos-slider" :class="{ 'expandido': menuExpandido }" ref="sliderRef">
            <button class="botom-close" @click="toggleMenu"> <svg viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg" id="X--Streamline-Unicons" height="40" width="40">
                    <desc>X Streamline Icon: https://streamlinehq.com</desc>
                    <path
                        d="M4.2333125 13.216687499999999c-0.64975 0 -1.2729375 -0.2581875 -1.7323749999999998 -0.7176250000000001 -0.45949999999999996 -0.4594375 -0.7176250000000001 -1.082625 -0.7176250000000001 -1.7323749999999998V4.2333125c0 -0.64975 0.258125 -1.2729375 0.7176250000000001 -1.7323749999999998 0.4594375 -0.45949999999999996 1.082625 -0.7176250000000001 1.7323749999999998 -0.7176250000000001 0.216625 0 0.4243125 -0.086 0.5775 -0.2391875 0.153125 -0.153125 0.2391875 -0.360875 0.2391875 -0.5774375s-0.08606249999999999 -0.4243125 -0.2391875 -0.5775C4.657625 0.23606249999999998 4.4499375 0.15 4.2333125 0.15c-1.0829374999999999 0 -2.1215625 0.4301875 -2.8873125 1.196C0.5801875 2.11175 0.15 3.1503750000000004 0.15 4.2333125v6.533375c0 1.0829374999999999 0.4301875 2.121625 1.196 2.8873125 0.76575 0.7658125 1.804375 1.196 2.8873125 1.196 0.216625 0 0.4243125 -0.08606249999999999 0.5775 -0.2391875 0.153125 -0.153125 0.2391875 -0.360875 0.2391875 -0.5775 0 -0.2165625 -0.08606249999999999 -0.4243125 -0.2391875 -0.5774375 -0.1531875 -0.153125 -0.360875 -0.2391875 -0.5775 -0.2391875Zm6.2965 -2.686875c0.0765625 -0.07593749999999999 0.1373125 -0.16625 0.1788125 -0.26568749999999997 0.0414375 -0.0995625 0.06275 -0.2063125 0.06275 -0.31412500000000004s-0.021312499999999998 -0.2145 -0.06275 -0.31406249999999997c-0.0415 -0.0995 -0.10225 -0.18981250000000002 -0.1788125 -0.26575000000000004L8.6515 7.5l1.8783125 -1.8701875000000001c0.15381250000000002 -0.15375 0.2401875 -0.3623125 0.2401875 -0.5798125s-0.086375 -0.4260625 -0.2401875 -0.5798125c-0.15375 -0.15381250000000002 -0.3623125 -0.2401875 -0.5798125 -0.2401875s-0.4260625 0.086375 -0.5798125 0.2401875L7.5 6.3485000000000005 5.6298125 4.4701875c-0.15375 -0.15381250000000002 -0.3623125 -0.2401875 -0.5798125 -0.2401875s-0.4260625 0.086375 -0.5798125 0.2401875c-0.15381250000000002 0.15375 -0.2401875 0.3623125 -0.2401875 0.5798125s0.086375 0.4260625 0.2401875 0.5798125L6.3485000000000005 7.5l-1.8783125 1.8701875000000001c-0.0765625 0.07593749999999999 -0.1373125 0.16625 -0.17875 0.26575000000000004 -0.0415 0.0995 -0.06281250000000001 0.20625000000000002 -0.06281250000000001 0.31406249999999997s0.021312499999999998 0.2145625 0.06281250000000001 0.31406249999999997c0.0414375 0.0995 0.1021875 0.18981250000000002 0.17875 0.26575000000000004 0.075875 0.0765625 0.16625 0.1373125 0.26575000000000004 0.1788125 0.0995 0.0414375 0.20625000000000002 0.06275 0.31406249999999997 0.06275 0.10781249999999999 0 0.2145625 -0.021312499999999998 0.31406249999999997 -0.06275 0.0995625 -0.0415 0.18987500000000002 -0.10225 0.2658125 -0.1788125L7.5 8.6515l1.8701875000000001 1.8783125c0.07593749999999999 0.0765625 0.16625 0.1373125 0.26575000000000004 0.1788125 0.0995625 0.0414375 0.20625000000000002 0.06275 0.31406249999999997 0.06275s0.2145625 -0.021312499999999998 0.31412500000000004 -0.06275c0.0994375 -0.0415 0.18974999999999997 -0.10225 0.26575000000000004 -0.1788125ZM10.7666875 0.15c-0.216625 0 -0.42437500000000006 0.08606249999999999 -0.5775 0.2391875 -0.153125 0.1531875 -0.2391875 0.360875 -0.2391875 0.5775s0.08606249999999999 0.4243125 0.2391875 0.5774375c0.153125 0.1531875 0.360875 0.2391875 0.5775 0.2391875 0.64975 0 1.2729375 0.258125 1.7323749999999998 0.7176250000000001 0.4594375 0.4594375 0.7176250000000001 1.082625 0.7176250000000001 1.7323749999999998v6.533375c0 0.6496875000000001 -0.2581875 1.2729375 -0.7176250000000001 1.7323749999999998 -0.4594375 0.4594375 -1.082625 0.7176250000000001 -1.7323749999999998 0.7176250000000001 -0.216625 0 -0.42437500000000006 0.08606249999999999 -0.5775 0.2391875s-0.2391875 0.360875 -0.2391875 0.5774375c0 0.216625 0.08606249999999999 0.42437500000000006 0.2391875 0.5775s0.360875 0.2391875 0.5775 0.2391875c1.0829374999999999 0 2.121625 -0.4301875 2.8873125 -1.196 0.7658125 -0.7656875000000001 1.196 -1.804375 1.196 -2.8873125V4.2333125c0 -1.0829374999999999 -0.4301875 -2.1215625 -1.196 -2.8873125C12.888312500000001 0.5801875 11.849625 0.15 10.7666875 0.15Z"
                        fill="var(--color-primary)" stroke-width="1"></path>
                </svg></button>
            <div class="swiper-wrapper">
                <conten v-for="evento in eventos" :target-date="evento.date" :final-date="evento.dateFinal"
                    :title="evento.titulo" :img="evento.img" :imgMobile="evento.imgMobile" :isBanner="evento.is_banner"
                    class="swiper-slide banner" data-swiper-autoplay="4000" loading="lazy" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

import conten from './conten.vue'
import { ref, onMounted } from "vue";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import isMobile from '../../stores/isMobile.js';

const sliderRef = ref(null);
onMounted(() => {
    new Swiper(sliderRef.value, {

        spaceBetween: 0,
        slidesPerView: 1,
        roundLengths: true,
        loop: true,
        autoplay: {
            // enabled: true,
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
    { id: 0, titulo: 'Proximos eventos', descripcion: 'Descripción del evento 1', date: '2024-12-21T09:00:00', dateFinal: '2024-12-21T18:00:00', img: "/img/reales/eventos/banner.png", imgMobile: "/img", is_banner: true, isActive: true },
    { id: 1, titulo: 'Taller de conocimiento', descripcion: 'Descripción del evento 1', date: '2024-12-21T09:00:00', dateFinal: '2024-12-21T21:00:00', img: "/img/reales/eventos/taller.jpg", imgMobile: "/img/reales/eventos/tallerMobile.jpg", is_banner: false, isActive: true },
    { id: 2, titulo: 'Entrenamiento 39', descripcion: 'Descripción del evento 2', date: '2025-01-30T08:00:00', dateFinal: '2025-01-311T21:00:00', img: "/img/reales/eventos/30-31.jpg", imgMobile: "/img/reales/eventos/30-31Mobile.jpg", is_banner: false, isActive: true },
    { id: 3, titulo: 'Premios Entrenando Latinos 2024', descripcion: 'Descripción del evento 3', date: '2025-02-01T19:00:00', dateFinal: '2024-12-21T23:59:59', img: "/img/reales/eventos/premiosweb.webp", imgMobile: "/img/reales/eventos/premios-mobile.webp", is_banner: false, isActive: true },
]);
function scrolltop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
const toggleMenu = () => {
    menuExpandido.value = !menuExpandido.value;
    if (isMobile()) {
        const body = document.querySelector('body');
        const html = document.querySelector('html');

        if (menuExpandido.value === true) {
            (body as HTMLElement).style.overflow = 'hidden';
            (html as HTMLElement).style.overflow = 'hidden';
        }
        else {
            (html as HTMLElement).style.overflow = '';
            (body as HTMLElement).style.overflow = '';

        }
        const menu = document.querySelector('.menu-flotante');
        (menu as HTMLElement).style.height = 'calc(100vh - 60px)';
        console.log('isMobile desde el menu');
    }
};

</script>
<style scoped>
.menu-flotante {
    /* visibility: hidden; */
    position: fixed;
    right: 0;
    height: 100vh;
    width: auto;
    z-index: 1001;
    display: flex;
    align-items: center;
    pointer-events: none;
}



.menu-flotante.expandido::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
}

.eventos-slider {
    width: .1px;
    opacity: 0;
    overflow: hidden;
    /* transition: linear all .3s; */
    transition: ease all 1s;
    opacity: 0;
    pointer-events: auto;

}

.eventos-slider.expandido {
    height: 100%;
    transition: ease all 1s;
    /* transition: linear all .3s; */
    width: 900px;
    opacity: 1;
}

@media screen and (max-width: 900px) {
    .eventos-slider.expandido {
        width: 100vw;
    }
}

/*
@media screen and (max-width: 991px) {
    .eventos-slider.expandido {
        width: 70vw;
    }
}

@media screen and (max-width: 596px) {

    .eventos-slider.expandido {
        width: 100vw;
    }
} */

.close-button {
    padding: 5px;
    border-radius: 10px 0 0 10px;
    writing-mode: vertical-lr;
    position: relative;
    line-height: 1.5;
    font-family: var(--font-body);
    background-color: rgba(0, 0, 0, 0.5);
    color: var(--color-primary);
    text-transform: uppercase;
    letter-spacing: 1px;
    pointer-events: auto;
    font-weight: bold;

}

.botom-close {
    padding-top: 5px;
    position: absolute;
    z-index: 1001;
    background-color: transparent;
    pointer-events: auto;

}

.slide-enter-active,
.slide-leave-active {
    transition: transform 1s ease-in-out, opacity 1s ease-in-out;
}

.slide-enter-from {
    transform: translateX(100%);
    opacity: 0;
}

.slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
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