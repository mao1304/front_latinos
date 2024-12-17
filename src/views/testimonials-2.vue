<script setup>
import { onMounted } from 'vue';
import BannerSections from '../components/banner-sections.vue';
import videosTestimonials from '@/stores/videos';
import brands from '@/components/brands.vue';
import { ref } from 'vue';
import Ukiyo from 'ukiyojs';
import Rellax from 'rellax';

const videos = videosTestimonials;
const selectedKey = ref(0);

function selectVideo(index) {
    if (selectedKey.value !== index) {
        selectedKey.value = index;
    }
}

</script>

<template>
    <BannerSections />
    <div class="row">
        <div class="col-8">
            <iframe width="100%" height="600px"
                src="https://www.youtube-nocookie.com/embed/VuOcLnzhbDw?si=4oz9BMrgE94cbjnR&amp;controls=0"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
        </div>
        <div class="col-4">
            <div style="overflow-y: scroll; height: 600px;">
                <!-- bucle 1 -->
                <div v-for="(video, index) in videos" :key="index"
                    style="width: 100%; height: 200px; background-color: lightgrey;" data-rellax-speed="-2">
                    <h1>Hello</h1>
                </div>
                <!-- bucle 2 -->
                <iframe v-for="(video, index) in videos" :key="'iframe-' + index" width="100%" height="200px"
                    src="https://www.youtube-nocookie.com/embed/VuOcLnzhbDw?si=4oz9BMrgE94cbjnR&amp;controls=0"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
            </div>
        </div>
    </div>
</template>
