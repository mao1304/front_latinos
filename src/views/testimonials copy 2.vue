<script setup>
import BannerSections from '../components/banner-sections.vue';
import videosTestimonials from '@/stores/videos';
import brands from '@/components/brands.vue';
import { ref } from 'vue';

const videos = videosTestimonials;
const selectedKey = ref(0);
function selectVideo(index) {
    if (selectedKey.value !== index) {
        selectedKey.value = index;
    }
}
</script>

<template>
    <div>
        <BannerSections />
        <div class="container">
            <!-- Título de la sección (sin cambios) -->
            <div class="row mt-60 mb-60 align-items-center">
                <div class="section-title">
                    <h3 class="title wow skewIn mb-15">
                        ¿Tienes dudas? Descubre cómo nuestros
                        clientes <span>transformaron sus dificultades</span> en historias de <span>superación y
                            éxito</span>.
                    </h3>
                </div>
            </div>

            <!-- Contenido de los videos -->
            <div class="row">
                <!-- Video principal -->
                <div class="col-12 col-lg-8  video-container">
                    <div class="video-wrapper">
                        <transition name="fade" mode="out-in">
                            <iframe :key="videos[selectedKey].id" width="100%" height="600px"
                                :src="`https://www.youtube.com/embed/${videos[selectedKey].link}`"
                                :title="`Video testimonial - ${videos[selectedKey].title}`" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </transition>
                    </div>
                </div>

                <!-- Lista de videos secundarios -->
                <div class="col-12 col-lg-4 ">
                    <div class="video-list-wrapper">
                        <div class="video-list">
                            <div v-for="(video, index) in videos" :key="video.id" class="video-thumbnail"
                                :class="{ 'active': selectedKey === index }" @click="selectVideo(index)">
                                <img :src="`https://img.youtube.com/vi/${video.link}/mqdefault.jpg`" :alt="video.title"
                                    class="thumbnail-image" loading="lazy">
                                <div class="video-info">
                                    <p class="video-title">{{ video.title }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Título y descripción del video principal -->
            <div class="row mt-3">
                <div class="col-12 col-lg-8">
                    <transition name="fade" mode="out-in">
                        <div :key="videos[selectedKey].id">
                            <div class="row pt-40 pb-80">
                                <div class="col-12 col-lg-9 ">
                                    <h2 class="video-main-title">{{ videos[selectedKey].title }}</h2>
                                    <p class="video-description">{{ videos[selectedKey].description }}</p>
                                    <p v-if="videos[selectedKey].description2" class="video-description">{{
                                        videos[selectedKey].description2 }}</p>
                                    <p class="video-company text-center text-lg-start">{{ videos[selectedKey].company }}
                                    </p>

                                </div>
                                <div class="col-12 col-lg-3 d-flex align-items-center justify-content-center">
                                    <img :src="videos[selectedKey].logo" alt="Imagen del video principal"
                                        class="video-image" loading="lazy">
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>

        </div>
        <brands />
    </div>
</template>

<style scoped>
/* Estilos existentes... */

/* Contenedor del video principal */
.video-wrapper {
    width: 100%;
    background: #000;
    height: 600px;
    /* overflow-y: scroll;
    scroll-behavior: smooth;
    overscroll-behavior: contain; */
    /* Altura fija para evitar saltos */
}

/* Contenedor de la lista de videos */
.video-list-wrapper {
    width: 100%;
    height: 600px;
    background: #f5f5f5;
    border-radius: 8px;


}

.video-list {
    padding: 10px;
    width: 100%;
    height: 600px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    overscroll-behavior: contain;
}



.video-list:focus {
    outline: none;
}

/* Estilos para el thumbnail */
.video-thumbnail {
    aspect-ratio: 16/9;
    background: white;
    border-radius: 8px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.video-thumbnail.active {
    border-color: #d69d15;
    background: #fff8e8;
}

.video-thumbnail:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Mejoras en la transición */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Estilos del scroll */
.video-list::-webkit-scrollbar {
    width: 6px;
}

.video-list::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

.video-list::-webkit-scrollbar-thumb {
    background: #d69d15;
    border-radius: 10px;
}

.video-list::-webkit-scrollbar-thumb:hover {
    background: #b58412;
}

/* Resto de tus estilos... */

.thumbnail-image {
    width: 100%;
    height: 180px;
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

.video-company {
    margin-top: 5px;
    color: #fff;
}

@media (max-width: 992px) {
    .video-list {
        display: flex;
        height: 300px;
        flex-direction: row;
        overflow-y: hidden;
        margin-top: 15px;
        /* padding: 0 10px; */
    }

    .video-list-wrapper {
        height: auto;
    }

    .video-thumbnail {
        margin: 0 10px;
    }

    .video-image {
        padding-top: 20px;
        width: 200px;
    }
}
</style>
