<template>
    <div class="banner" :style="{ backgroundImage: 'url(' + img + ')' }">
        <span v-if="isBanner" class="sub-title">Entrenando Latinos In Roofing</span>
        <div v-if="isBanner" class="bottom-info">
            <h1 class="title">Próximos eventos</h1>
            <h2>no te quedes fuera</h2>
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
import { ref } from 'vue';
const props = defineProps<{
    targetDate: string;
    title: string;
    isBanner: boolean;
    img: string;
}>();

const { timeRemaining, calculateTimeRemaining } = useCountdown(props.targetDate);
const title = ref(props.title);
const img = ref(props.img);

</script>

<style scoped>
.banner {
    width: 100%;
    height: 80vh;
    /* background-size: cover; */
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: end;
    overflow: hidden;
    background-color: rgb(32, 32, 32);
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
        margin-bottom: 1.5rem;
    }
}

.sub-title {
    padding-top: 10px;
    position: absolute;
    top: 0;
    font-size: 1.5rem;
    letter-spacing: 4px;
    font-weight: bold;
    color: var(--color-primary);
    text-transform: uppercase;
}

.bottom-info {
    text-align: center;
    position: absolute;
    bottom: 0;
    margin-bottom: 10px;
}
</style>