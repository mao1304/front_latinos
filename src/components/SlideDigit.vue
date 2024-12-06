<script setup lang="ts">
import { ref, watch, computed } from 'vue';

const props = defineProps<{
  digit: number;
}>();

const currentDigit = ref(props.digit);
const isAnimating = ref(false);

const digitList = computed(() => {
  const list = [];
  for (let i = 0; i <= 9; i++) {
    list.push(i);
  }
  return list;
});

const translateY = computed(() => {
  return `translateY(-${currentDigit.value * 10}%)`;
});

watch(() => props.digit, (newDigit) => {
  if (newDigit !== currentDigit.value) {
    isAnimating.value = true;
    currentDigit.value = newDigit;
    setTimeout(() => {
      isAnimating.value = false;
    }, 500);
  }
});
</script>

<template>
  <div class="digit-wrapper">
    <div 
      class="digit-strip"
      :style="{ transform: translateY }"
      :class="{ 'animating': isAnimating }"
    >
      <div 
        v-for="num in digitList" 
        :key="num" 
        class="digit"
      >
        {{ num }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.digit-wrapper {
  display: inline-block;
  height: 1em;
  overflow: hidden;
  position: relative;
  width: 0.8em;

}

.digit-strip {
  position: relative;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.digit-strip.animating {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.digit {
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}
</style>