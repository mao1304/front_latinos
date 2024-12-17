<template>
    <!-- portfolio start -->
    <section class="portfolio pt-130 pb-130">
        <div class="container">
            <div class="section-title section-title--dm mb-30">
                <span class="sub-title mb-45 wow fadeInRight" data-wow-duration=".7s">Testimonios</span>
                <div class="ul_li_between align-items-end">
                    <h3 class="title wow skewIn mb-20">Las historias de vida <br> <span> de nuestros clientes</span>
                    </h3>
                    <RouterLink to="/testimonios" class="d-block dm-port-link mb-20">Ver historias <svg width="19"
                            height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.9981 2.06238C19.0325 1.51117 18.6136 1.0364 18.0624 1.00195L9.07991 0.440543C8.5287 0.406092 8.05392 0.825008 8.01947 1.37622C7.98502 1.92743 8.40394 2.4022 8.95515 2.43665L16.9396 2.93567L16.4405 10.9201C16.4061 11.4713 16.825 11.9461 17.3762 11.9805C17.9274 12.015 18.4022 11.5961 18.4366 11.0449L18.9981 2.06238ZM1.66162 17.7498L18.6616 2.74984L17.3384 1.25016L0.338378 16.2502L1.66162 17.7498Z"
                                fill="white" />
                        </svg></RouterLink>
                </div>
            </div>
            <div class="dm-portfolio-slider swiper-container">
                <div class="swiper-wrapper">
                    <!-- <div v-for="video in videos" :key="video.id" class="swiper-slide dm-portfolio xb-hover-zoom"> -->
                    <div v-for="(video, index) in videos" :key="video.id"
                        class="swiper-slide dm-portfolio xb-hov er-zoom video-thumbnail"
                        @click="router.push('/testimonios')">
                        <img :src="`https://img.youtube.com/vi/${video.link}/mqdefault.jpg`" :alt="video.title"
                            class="thumbnail-image" loading="lazy">
                        <div class="video-info">
                            <p class="video-title">{{ video.title }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- portfolio end -->
</template>

<script setup>
import videos from "@/stores/videos.js";
import { onMounted } from "vue";
import Swiper from "swiper";
import { Autoplay } from 'swiper/modules';
import "swiper/swiper-bundle.css";
import router from "@/routes/router";

onMounted(() => {
    Swiper.use([Autoplay]);

    new Swiper('.dm-portfolio-slider', {
        spaceBetween: 30,
        slidesPerView: 2,
        roundLengths: true,
        loop: true,
        autoplay: {
            enabled: true,
            delay: 4000
        },
        speed: 400,
        breakpoints: {
            '1600': {
                slidesPerView: 2,
            },
            '1200': {
                slidesPerView: 2,
            },
            '992': {
                slidesPerView: 2,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },

    });
});
</script>

<style scoped>
.video-thumbnail {
    height: fit-content;
    aspect-ratio: 16/9;
    background: white;
    border-radius: 8px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.video-thumbnail:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.thumbnail-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
}

.video-info {
    padding: 10px;
}

.video-title {
    font-size: 16px;
    margin: 0;
    color: #333;
}
</style>
