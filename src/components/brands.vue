<template>
    <!-- dm-brand start -->
    <section class="brand pt-165 pb-130">
        <div class="container">
            <span class="dm-brand-title d-block text-center mb-60"
                style="font-size: 40px; font-family: var(--font-heading); line-height: 35px; color: var(--color-primary);">NUESTRA
                RED DE ALIADOS</span>
            <div class="dm-brand-slider swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide dm-brand">
                        <br>
                        <a href="https://ky.ecosupplyllc.com/es/" target="_blank"><img
                                src="https://ky.ecosupplyllc.com/static/app_core/images/additional/logo_color_5.webp"
                                alt="EcoSupply Kentucky LLC" class="image"></a><br>
                    </div>
                    <div class="swiper-slide dm-brand">
                        <br>
                        <a href="https://wa.ecosupplyllc.com/es/" target="_blank"><img
                                src="https://wa.ecosupplyllc.com/static/app_core/images/additional/logo_color_3.webp"
                                alt="EcoSupply Washington LLC" class="image"></a><br>
                    </div>
                    <div class="swiper-slide dm-brand">
                        <br>
                        <a href="https://ct.ecosupplyllc.com/es/" target="_blank"><img
                                src="https://ct.ecosupplyllc.com/static/app_core/images/additional/logo_color_5.webp"
                                alt="EcoSupply Connecticut LLC" class="image"></a>
                        <br>
                    </div>
                    <div class="swiper-slide dm-brand">
                        <br>
                        <a href="https://ecosupplyllc.com/" target="_blank"><img
                                src="https://ecosupplyllc.com/static/app_core/images/logo_white_3.webp"
                                alt="EcoSupply New Jersey LLC" class="image"></a><br>
                    </div>
                    <div class="swiper-slide dm-brand">
                        <br>
                        <a href="https://dynamicsignsdesigns.site/" target="_blank"><img
                                src="https://dynamicsignsdesigns.site/wp-content/uploads/2024/05/logo_white_dsdusa.webp"
                                alt="Dynamic Signs & Designs" class="image"></a><br>
                    </div>
                    <div class="swiper-slide dm-brand">
                        <br>
                        <a href="https://ahprusa.com/" target="_blank"><img
                                src="https://ahprusa.com/static/app_core/assets/img/normal/about_2.png" alt="ahprusa"
                                class="image"></a>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- dm-brand end -->
</template>

<script>
import { onMounted } from "vue";
import Swiper from "swiper";
import { Autoplay } from 'swiper/modules';
import "swiper/swiper-bundle.css";

export default {
    name: "BrandSection",
    setup() {
        onMounted(() => {
            Swiper.use([Autoplay]);

            new Swiper(".dm-brand-slider", {
                modules: [Autoplay],
                slidesPerView: 4,
                spaceBetween: 30,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                loop: true,
                speed: 1000,
                breakpoints: {
                    '1600': {
                        slidesPerView: 3,
                    },
                    '1200': {
                        slidesPerView: 3,
                    },
                    '992': {
                        slidesPerView: 3,
                    },
                    '768': {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    '576': {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    '0': {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                },
            });
        });
    },
};
</script>

<style scoped>
.image {
    height: 100px;
    width: 230px;
    object-position: center;
    object-fit: contain;

}

.dm-brand {
    overflow: hidden;
}
</style>
