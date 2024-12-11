
<template>
            <!-- dm-brand start -->
            <section class="brand pt-165 pb-130">
            <div class="container">
                <span class="dm-brand-title d-block text-center mb-60" style="font-size: 40px; font-family: var(--font-heading); line-height: 35px; color: var(--color-primary);">NUESTRA RED DE COLABORADORES</span>
                <div class="dm-brand-slider swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide dm-brand" >
                            <a href="#!"><img src="https://eagleexpresscontractor.com/static/app_core/images/logoedit.webp" alt=""></a>
                        </div>
                        <div class="swiper-slide dm-brand">
                            <a href="#!"><img src="https://triplerroofingomaha.com/static/app_core/assets/images/logo.webp" alt=""></a>
                        </div>
                        <div class="swiper-slide dm-brand">
                            <a href="#!"><img src="https://precisionrestorationroofing.com/static/app_core/assets/img/logo/logo4.png" alt=""></a>
                        </div>
                        <div class="swiper-slide dm-brand">
                            <a href="#!"><img src="https://stevensroofingconstruction.com/static/app_core/images/log2.webp" alt=""></a>
                        </div>
                        <div class="swiper-slide dm-brand">
                            <a href="#!"><img src="https://1knox.com/static/app_core/assets/img/KNOX-10.png" alt=""></a>
                        </div>
                        <div class="swiper-slide dm-brand">
                            <a href="#!"><img src="/img/digital-marketing/dm-brand/dm-brand06.png" alt=""></a>
                        </div>
                        <div class="swiper-slide dm-brand">
                            <a href="#!"><img src="/img/digital-marketing/dm-brand/dm-brand03.png" alt=""></a>
                        </div>
                        <div class="swiper-slide dm-brand">
                            <a href="#!"><img src="/img/digital-marketing/dm-brand/dm-brand04.png" alt=""></a>
                        </div>
                        <div class="swiper-slide dm-brand">
                            <a href="#!"><img src="/img/digital-marketing/dm-brand/dm-brand01.png" alt=""></a>
                        </div>
                        <div class="swiper-slide dm-brand">
                            <a href="#!"><img src="/img/digital-marketing/dm-brand/dm-brand02.png" alt=""></a>
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
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 3,
				spaceBetween: 50,
			},
			'576': {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			'0': {
				slidesPerView: 2,
				spaceBetween: 20,
			},
        },
      });
    });
  },
};
</script>

<style scoped>
 /* .dm-brand{
    width: 100%;
    height: auto;
 } */
</style>
