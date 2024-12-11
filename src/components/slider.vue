// src/components/ImageSlider.vue
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Swiper from "swiper";
import { Autoplay } from 'swiper/modules';
import "swiper/swiper-bundle.css";

const props = defineProps({
  images: {
    type: Array,
    required: true,
    // Espera un array de objetos con esta estructura: [{src: string, alt: string}]
  },
  delay: {
    type: Number,
    default: 3000
  }
});

const sliderRef = ref(null);
let swiperInstance = null;

const createSliderConfig = () => ({
  modules: [Autoplay],
  spaceBetween: 0,
  slidesPerView: 4,
  roundLengths: true,
  loop: true,
  autoplay: {
    enabled: true,
    delay: props.delay
  },
  speed: 400,
  breakpoints: {
    '1600': {slidesPerView: 4},
    '1200': {slidesPerView: 4},
    '992': {slidesPerView: 4},
    '768': {slidesPerView: 3},
    '365': {slidesPerView: 2},
    '0': {slidesPerView: 1},
  },
});

onMounted(() => {
  swiperInstance = new Swiper(sliderRef.value, createSliderConfig());
});

onBeforeUnmount(() => {
  if (swiperInstance) {
    swiperInstance.destroy();
  }
});
</script>

<template>
  <div class="instragram-slider" ref="sliderRef" style="overflow: hidden;">
    <div class="swiper-wrapper">
      <div v-for="(image, index) in images" 
           :key="index" 
           class="swiper-slide"
      >
        <div class="instragram-img pos-rel">
          <img 
            :src="image.src" 
            :alt="image.alt"
            loading="lazy"
            style="width: 320px; height: 320px; object-fit: cover; object-position: center;"
          >
          <!-- <a :href="image.link || '#!'" class="ins_link">
            <img 
              src="/img/digital-marketing/icon/ins01.svg" 
              alt="Instagram icon"
            >
          </a> -->
        </div>
      </div>
    </div>
    <!-- Agregar navegación opcional -->
    <!-- <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
  </div>
</template>

<!-- <style scoped>
.instragram-slider {
  position: relative;
  width: 100%;
}

.instragram-img {
  position: relative;
  overflow: hidden;
}

.instragram-img img {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.ins_link {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.instragram-img:hover img {
  transform: scale(1.1);
}

.instragram-img:hover .ins_link {
  opacity: 1;
}
</style> -->