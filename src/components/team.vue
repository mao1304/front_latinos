<script setup>
import { ref, onMounted } from "vue";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { Rotate3D } from "lucide-vue-next";

const sliderRef = ref(null);

onMounted(() => {
	 new Swiper(sliderRef.value, {
		loop: true,
		spaceBetween: 30,
		speed: 400,
		slidesPerView: 5,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		breakpoints: {
			'1600': {
				slidesPerView: 4,
            },
            '1200': {
                slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

});
</script>
<template>
                <section class="team-area z-3 pt-150 pb-150" style="overflow-x: hidden;">
                <div class="container">
                    <div class="section-title text-center mb-75">
                        <span class="sub-title wow fadeInRight" data-wow-duration=".7s">Equipo</span>
                        <div class="clearfix"></div>
                        <h3 class="title wow skewIn">"El Equipo Detrás de Entrenando Latinos in Roofing: <br> <span>Unidos por Tu Éxito</span>"</h3>
                    </div>
                </div>
                <div class="team-slider" ref="sliderRef">
                    <div class="swiper-wrapper" ref="sliderRef">
                        <div class="swiper-slide">
                            <div class="xb-team pos-rel">
                                <div class="xb-item--img"  :style="{ backgroundImage: 'url(https://entrenandolatinosinroofing.com/wp-content/uploads/2024/02/bg-form_banner_small.webp)' }">
                                    <img src="https://entrenandolatinosinroofing.com/wp-content/uploads/2024/11/32_eduard_moreno_backend_developer.webp" alt="">
                                </div>
                                <div class="xb-item--holder text-center">
                                    <h3 class="xb-item--title"><a href="team-single.html">Gohendra Maris</a></h3>
                                    <p class="xb-item--desig">Founder & CO</p>
                                    <ul class="xb-item--icon ul_li_center">
                                        <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="xb-team pos-rel">
                                <div class="xb-item--img"  :style="{ backgroundImage: 'url(https://entrenandolatinosinroofing.com/wp-content/uploads/2024/02/bg-form_banner_small.webp)'}">
                                    <img src="https://entrenandolatinosinroofing.com/wp-content/uploads/2024/11/32_eduard_moreno_backend_developer.webp" alt="">
                                </div>
                                <div class="xb-item--holder text-center">
                                    <h3 class="xb-item--title"><a href="team-single.html">Gohendra Maris</a></h3>
                                    <p class="xb-item--desig">Founder & CO</p>
                                    <ul class="xb-item--icon ul_li_center">
                                        <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>                        <div class="swiper-slide">
                            <div class="xb-team pos-rel">
                                <div class="xb-item--img"  :style="{ backgroundImage: 'url(https://entrenandolatinosinroofing.com/wp-content/uploads/2024/02/bg-form_banner_small.webp)' }">
                                    <img src="https://entrenandolatinosinroofing.com/wp-content/uploads/2024/11/31_jhonny_bohorquez_front_end_eveloper.webp" alt="">
                                </div>
                                <div class="xb-item--holder text-center">
                                    <h3 class="xb-item--title"><a href="team-single.html">Gohendra Maris</a></h3>
                                    <p class="xb-item--desig">Founder & CO</p>
                                    <ul class="xb-item--icon ul_li_center">
                                        <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>                        <div class="swiper-slide">
                            <div class="xb-team pos-rel">
                                <div class="xb-item--img"  :style="{ backgroundImage: 'url(https://entrenandolatinosinroofing.com/wp-content/uploads/2024/02/bg-form_banner_small.webp)' }">
                                    <img src="https://entrenandolatinosinroofing.com/wp-content/uploads/2024/07/26_camilo_barrera_backend_developer.webp" alt="">
                                </div>
                                <div class="xb-item--holder text-center">
                                    <h3 class="xb-item--title"><a href="team-single.html">Gohendra Maris</a></h3>
                                    <p class="xb-item--desig">Founder & CO</p>
                                    <ul class="xb-item--icon ul_li_center">
                                        <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>                        <div class="swiper-slide">
                            <div class="xb-team pos-rel">
                                <div class="xb-item--img"  :style="{ backgroundImage: 'url(https://entrenandolatinosinroofing.com/wp-content/uploads/2024/02/bg-form_banner_small.webp)' }">
                                    <img src="https://entrenandolatinosinroofing.com/wp-content/uploads/2024/11/31_jhonny_bohorquez_front_end_eveloper.webp" alt="">
                                </div>
                                <div class="xb-item--holder text-center">
                                    <h3 class="xb-item--title"><a href="team-single.html">Gohendra Maris</a></h3>
                                    <p class="xb-item--desig">Founder & CO</p>
                                    <ul class="xb-item--icon ul_li_center">
                                        <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>                        <div class="swiper-slide">
                            <div class="xb-team pos-rel">
                                <div class="xb-item--img">
                                    <img src="https://entrenandolatinosinroofing.com/wp-content/uploads/2024/07/26_camilo_barrera_backend_developer.webp" alt="">
                                </div>
                                <div class="xb-item--holder text-center">
                                    <h3 class="xb-item--title"><a href="team-single.html">Gohendra Maris</a></h3>
                                    <p class="xb-item--desig">Founder & CO</p>
                                    <ul class="xb-item--icon ul_li_center">
                                        <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- team section end  -->
</template>