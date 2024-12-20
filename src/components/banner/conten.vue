<template>
    <div class="banner" :style="{ backgroundImage: 'url(' + img + ')' }">
        <div v-if="isBanner" class="banner">
            <img src="/img/reales/eventos/bannerBG.png" alt=""
                style=" position: absolute; top: 0; padding: 10px 10px; max-width: 80%;">
            <span class="sub-title">Entrenando Latinos In Roofing</span>
            <div
                style="display: flex; justify-content: center; align-items: center; width: 100%;  height: 100%; z-index: 1;">
                <img :src="img" alt="" class="img-banner">
            </div>
            <div class="bottom-info">
                <h1 class="title">Próximos eventos</h1>
                <h2 class="subtitle">no te quedes fuera</h2>
                <a class="button-banner" href="https://links.entrenandolatinosinroofing.com/">Inscripciones aquí</a>
            </div>
        </div>
        <div v-else class="countdown-container">
            <h1 class="title">{{ title }}</h1>
            <div class="countdown">
                <div class="countdown-item">
                    <span class="number">{{ timeRemaining.days }}</span>
                    <span class="label">Dias</span>
                </div>
                <div class="countdown-item">
                    <span class="number">{{ timeRemaining.hours }}</span>
                    <span class="label">Horas</span>
                </div>
                <div class="countdown-item">
                    <span class="number">{{ timeRemaining.minutes }}</span>
                    <span class="label">Minutos</span>
                </div>
                <div class="countdown-item">
                    <span class="number">{{ timeRemaining.seconds }}</span>
                    <span class="label">Segundos</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCountdown } from '../../stores/timer/timer';
import { ref, onMounted } from 'vue';
import isMobile from '../../stores/isMobile.js';
const props = defineProps<{
    targetDate: string;
    title: string;
    isBanner: boolean;
    img: string;
}>();

const { timeRemaining, calculateTimeRemaining } = useCountdown(props.targetDate);
const title = ref(props.title);
const img = ref(props.img);

onMounted(() => {
    if (isMobile()) {
        //     const container = document.querySelectorAll('.countdown-container');
        const banner = document.querySelectorAll('.banner');
        //     const bannerContent = document.querySelector('.bottom-info');

        //     (bannerContent as HTMLElement).style.marginBottom = '60px';

        //     container.forEach(element => {
        //         (element as HTMLElement).style.marginBottom = '60px';
        //     });

        banner.forEach(element => {
            (element as HTMLElement).style.height = 'calc(100vh - 60px)';
        })
        console.log('isMobile');
    }
})
</script>

<style scoped>
.banner {
    width: 100%;
    height: 95vh;
    /* background-size: cover; */
    background-repeat: no-repeat;
    background-position: center;
    /* position: relative; */
    display: flex;
    justify-content: center;
    align-items: end;
    overflow: hidden;
    background-color: rgb(32, 32, 32);
}

@media screen and (max-width: 596px) {

    .banner {
        height: 100vh;

    }
}

.banner::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
}

.button-banner {
    background: var(--color-primary);
    border-radius: 10px;
    padding: 12px 26px;
    color: rgba(0, 0, 0, 1);
    font-family: "Bebas Neue", sans-serif;
    line-height: 1;
    letter-spacing: 4px;
    font-size: 22px;
    margin: 0;
    position: relative;
    bottom: 20px;
}

.subtitle {
    margin: 0 0 40px;
}

.countdown-container {
    padding: 10px;
    position: relative;
    z-index: 1;
    text-align: center;
    color: white;
    background: rgba(255, 255, 255, .25);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    border: 1.5px solid rgba(209, 213, 219, 0.3);
    min-width: 570px;
}

.title {
    font-size: 1.5rem;
    letter-spacing: 4px;
    /* margin-bottom: 2rem; */
    width: 100%;
    font-weight: bold;
    color: var(--color-primary);
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

.img-banner {
    /* top: 0;
    left: 0;
    max-width: 50%; */
    position: absolute;
    height: 95%;
    bottom: 0;
}


@media screen and (max-width: 830px) {
    .img-banner {
        height: 85%;
    }

}

.label {
    font-size: 0.875rem;
    letter-spacing: 2px;
    opacity: 0.8;
    text-transform: uppercase;
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
        /* margin-bottom: 1.5rem; */
    }
}

.sub-title {
    z-index: 2;
    padding: 40px 20px 0;
    position: absolute;
    top: 0;
    font-size: 1.5rem;
    letter-spacing: 4px;
    font-weight: bold;
    color: var(--color-primary);
    text-transform: uppercase;
    text-align: center;
}

.bottom-info {
    text-align: center;
    position: absolute;
    bottom: 0;
    margin-bottom: 10px;
    z-index: 2;
}
</style>