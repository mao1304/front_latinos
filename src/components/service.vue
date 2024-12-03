<template>
   <main>
        <brands />
        <!-- service start -->
        <section class="service-4 pos-rel mb-130" style="overflow-x: hidden;">
            <div class="container">
                <div class="section-title section-title--dm mb-55">
                    <span class="sub-title mb-45 wow fadeInRight" data-wow-duration=".7s">services</span>
                    <div class="clearfix"></div>
                    <h3 class="title wow skewIn">Your Success with our <br> <span>Unmatched Experience</span></h3>
                </div>
            </div>
            <div class="services-inner pos-rel">
                <div class="services-bg bg_img" data-background="/img/digital-marketing/dm-service/srv-bg.jpg"></div>
            <div class="dm-service-slider">
                <div class="swiper-wrapper">
                    <div class="swiper-slide dm-service">
                        <div class="xb-item--holder">
                            <h2 class="xb-item--title"><a href="service-single.html">.01 <br> Development</a></h2>
                            <div class="xb-item--content">The whole community is interested in growing the FOX prize.The company is planning</div>
                        </div>
                        <div class="xb-item--image"><img src="/img/digital-marketing/dm-service/dm-srv01.png" alt=""></div>
                        <div class="xb-item--srv_link">
                            <a href="service-single.html">Learn More <span><img src="/img/digital-marketing/icon/dm-srv.png" alt=""></span></a>
                        </div>
                    </div>
                    <div class="swiper-slide dm-service">
                        <div class="xb-item--holder">
                            <h2 class="xb-item--title"><a href="service-single.html">.02 <br> Marketing strategy</a></h2>
                            <div class="xb-item--content">The whole community is interested in growing the FOX prize.The company is planning</div>
                        </div>
                        <div class="xb-item--image"><img src="/img/digital-marketing/dm-service/dm-srv02.png" alt=""></div>
                        <div class="xb-item--srv_link">
                            <a href="service-single.html">Learn More <span><img src="/img/digital-marketing/icon/dm-srv.png" alt=""></span></a>
                        </div>
                    </div>
                    <div class="swiper-slide dm-service">
                        <div class="xb-item--holder">
                            <h2 class="xb-item--title"><a href="service-single.html">.03 <br> UI Design</a></h2>
                            <div class="xb-item--content">The whole community is interested in growing the FOX prize.The company is planning</div>
                        </div>
                        <div class="xb-item--image"><img src="/img/digital-marketing/dm-service/dm-srv03.png" alt=""></div>
                        <div class="xb-item--srv_link">
                            <a href="service-single.html">Learn More <span><img src="/img/digital-marketing/icon/dm-srv.png" alt=""></span></a>
                        </div>
                    </div>
                    <div class="swiper-slide dm-service">
                        <div class="xb-item--holder">
                            <h2 class="xb-item--title"><a href="service-single.html">.04 <br> App Design</a></h2>
                            <div class="xb-item--content">The whole community is interested in growing the FOX prize.The company is planning</div>
                        </div>
                        <div class="xb-item--image"><img src="/img/digital-marketing/dm-service/dm-srv04.png" alt=""></div>
                        <div class="xb-item--srv_link">
                            <a href="service-single.html">Learn More <span><img src="/img/digital-marketing/icon/dm-srv.png" alt=""></span></a>
                        </div>
                    </div>
                    <div class="swiper-slide dm-service">
                        <div class="xb-item--holder">
                            <h2 class="xb-item--title"><a href="service-single.html">.02 <br> Marketing strategy</a></h2>
                            <div class="xb-item--content">The whole community is interested in growing the FOX prize.The company is planning</div>
                        </div>
                        <div class="xb-item--image"><img src="/img/digital-marketing/dm-service/dm-srv02.png" alt=""></div>
                        <div class="xb-item--srv_link">
                            <a href="service-single.html">Learn More <span><img src="/img/digital-marketing/icon/dm-srv.png" alt=""></span></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
        <!-- service end -->
    </main>
    <!-- main area end  -->
        <!-- service end -->
</template>
<script>
import brands from "./brands.vue";
import { onMounted } from "vue";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

export default {
  name: "Service",
  components: {
    brands, // Registramos el componente aquí
  },
  setup() {
    onMounted(() => {
      new Swiper(".dm-service-slider", {
        spaceBetween: 0,
        slidesPerView: 4,
        roundLengths: true,
        loop: true,
        autoplay: {
          enabled: true,
          delay: 5000,
        },
        speed: 400,
        breakpoints: {
          1600: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    });
  },
};

</script>