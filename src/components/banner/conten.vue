<template>
    <div class="banner">
        <div class="countdown-container">
            <h1 class="title">COUNTDOWN TO EARTH</h1>
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
</template>

<script setup>
import { ref } from 'vue';

// Estos valores vendrían de tu script de contador existente
const months = ref('7');
const days = ref('20');
const hours = ref('3');
const minutes = ref('10');
</script>

<style scoped>
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