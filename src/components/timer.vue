<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useCountdown } from '../stores/timer/timer';

const props = defineProps<{
  targetDate: string;
}>();

const { timeRemaining, calculateTimeRemaining } = useCountdown(props.targetDate);

//
//  interface TimeRemaining {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }

// const props = defineProps<{
//   targetDate: string;
// }>();

// const timeRemaining = ref<TimeRemaining>({
//   days: 0,
//   hours: 0,
//   minutes: 0,
//   seconds: 0,
// });

// let timer: number;

// const calculateTimeRemaining = () => {
//   const now = new Date().getTime();
//   const target = new Date(props.targetDate).getTime();
//   const difference = target - now;

//   if (difference > 0) {
//     timeRemaining.value = {
//       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//       hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//       minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
//       seconds: Math.floor((difference % (1000 * 60)) / 1000),
//     };
//   } else {
//     timeRemaining.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
//   }
// };

// onMounted(() => {
//   calculateTimeRemaining();
//   timer = setInterval(calculateTimeRemaining, 1000); 
// });

// onUnmounted(() => {
//   clearInterval(timer);
// });

</script>

<template>
  <!-- <h1 class="title-timer">Próximo evento</h1> -->
  <div class="countdown">
    <div class="countdown-item">
      <span class="number">{{ timeRemaining.days }}</span>
      <span class="label">días</span>
    </div>
    <div class="countdown-item">
      <span class="number">{{ timeRemaining.hours }}</span>
      <span class="label">horas</span>
    </div>
    <div class="countdown-item">
      <span class="number">{{ timeRemaining.minutes }}</span>
      <span class="label">minutos</span>
    </div>
    <div class="countdown-item seconds">
      <span class="number">{{ timeRemaining.seconds }}</span>
      <span class="label">segundos</span>
    </div>
  </div>
</template>

<style scoped>
/* @import --color-primary from '@/assets/css/variables.css'; */
.title-timer {
  text-transform: uppercase;
  font-size: 40px;
}

.countdown {
  display: flex;
  /* gap: 2rem; */
  justify-content: center;
  /* padding: 0 2rem 2rem; */
}

.countdown-item {
  background: rgba(0, 0, 0, 0.6);
  padding: 10px;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100px;
  margin: 0 5px;
}

@media (max-width: 860px) {
  .countdown {
    padding: 0.5rem 2rem 4rem;

  }
}


.number {
  display: flex;
  align-items: center;
  height: 2.5rem;
  font-size: 2.5rem;
  font-weight: bold;
  background: var(--gradient-primary);
  /* Gradiente como fondo */
  -webkit-background-clip: text;
  /* Usado en WebKit para aplicar el fondo solo al texto */
  background-clip: text;
  /* Para otros navegadores */
  color: transparent;
  /* Hacemos el texto transparente para que se vea el gradiente */
}

.label {
  font-size: 1rem;
  /* color: #666; */
  margin-top: 0.5rem;
}

@media (max-width: 460px) {
  .seconds {
    display: none;
  }
}
</style>

<script lang="ts">
export default {
  name: 'Timer'
}
</script>