<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

const props = defineProps<{
  endValue: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}>();

const currentValue = ref(0);
const targetRef = ref<HTMLElement | null>(null);
const hasAnimated = ref(false);

const animateValue = (start: number, end: number, duration: number) => {
  const startTime = performance.now();
  const range = end - start;

  const update = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Use easeOutExpo for smooth deceleration
    const easeOutExpo = 1 - Math.pow(2, -10 * progress);
    currentValue.value = Math.floor(start + (range * easeOutExpo));

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      currentValue.value = end;
    }
  };

  requestAnimationFrame(update);
};

const { stop } = useIntersectionObserver(
  targetRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting && !hasAnimated.value) {
      hasAnimated.value = true;
      animateValue(0, props.endValue, props.duration || 2000);
    }
  },
  { threshold: 0.5 }
);

onMounted(() => {
  watch(() => props.endValue, (newValue) => {
    if (hasAnimated.value) {
      animateValue(currentValue.value, newValue, props.duration || 2000);
    }
  });
});
</script>

<template>
  <div ref="targetRef" class="number-counter">
    <span v-if="prefix" class="prefix">{{ prefix }}</span>
    <span class="value">{{ currentValue }}</span>
    <span v-if="suffix" class="suffix">{{ suffix }}</span>
  </div>
</template>


<style scoped>
.number-counter {
  display: inline-flex;
  align-items: center;
  /* font-size: 2.5rem; */
  /* font-weight: bold; */
  color: #ffffff;
  /* font-family: 'Roboto Mono', monospace; */
}

.value {
  min-width: 3ch;
  /* text-align: right; */
}

.suffix {
  /* margin-left: 0.5rem; */
  font-size: 0.8em;
  color: #ffffff;
}
</style>

