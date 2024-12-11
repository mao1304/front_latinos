<script setup>
import bannerSections from '@/components/banner-sections.vue';
// import { onMounted } from 'vue';
import { ref, onMounted } from "vue";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
const sliderRef = ref(null);

onMounted(() => {

    new Swiper(sliderRef.value, {
		spaceBetween: 30,
		slidesPerView: 5,
		roundLengths: true,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		autoplay: {
			enabled: true,
			delay: 6000
		},
		speed: 400,
		breakpoints: {
			'1600': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

    if ($(".accordion_box").length) {
		$(".accordion_box").on("click", ".acc-btn", function () {
			var outerBox = $(this).parents(".accordion_box");
			var target = $(this).parents(".accordion");

			if ($(this).next(".acc_body").is(":visible")) {
				$(this).removeClass("active");
				$(this).next(".acc_body").slideUp(300);
				$(outerBox).children(".accordion").removeClass("active-block");
			} else {
				$(outerBox).find(".accordion .acc-btn").removeClass("active");
				$(this).addClass("active");
				$(outerBox).children(".accordion").removeClass("active-block");
				$(outerBox).find(".accordion").children(".acc_body").slideUp(300);
				target.addClass("active-block");
				$(this).next(".acc_body").slideDown(300);
			}
		});
	} 
})

</script>

<template>  
<bannerSections />
            <!-- hero section end  -->
            <!-- service details area start -->
            <div class="service-details pt-125 ">
                <div class="container">
                    <div class="row mt-none-30 align-items-center justify-content-center">
                        <div class="col-lg-8 mt-30 ">
                            <div class="section-title">
                                <span class="sub-title wow fadeInRight" data-wow-duration=".7s">Detalles del Servicio</span>
                                <div class="clearfix"></div>
                                <h3 class="title wow skewIn mb-15">capacitación <span>privada personalizada</span></h3>
                            </div>
                            <div class="service-single-content">
                                <p class="wow fadeInUp" data-wow-duration=".7s">Conoce nuestras capacitaciones privadas en la gestión de ventas y reclamación de seguros
                                     en la industria del Roofing, nos trasladamos a tu compañía y adaptamos el entrenamiento según tus necesidades específicas.
                                      Prepárate, conoce y emprende con nuestro entrenamiento personalizado, garantizando resultados reales.</p>
                                    <h2 class="wow fadeInUp" data-wow-delay="200ms" data-wow-duration=".7s" style="padding: 20px 0;">¡Contáctenos hoy mismo para obtener más información sobre nuestras capacitaciones privadas!</h2>
                                <p class="wow fadeInUp" data-wow-delay="200ms" data-wow-duration=".7s">
                                    En Entrenando Latinos in Roofing , entendemos que la gestión de ventas y reclamaciones de seguros
                                     en la industria del techado es una habilidad fundamental. Cuando un cliente se enfrenta a daños 
                                     en su techo, es crucial que los profesionales del roofing estén preparados para guiarlos a través
                                      del proceso de reclamación de seguros.<br>
                                     Nuestras capacitaciones privadas están diseñadas para brindarte la formación más efectiva y 
                                     personalizada posible.
                                </p>
                            </div>
                        </div>
                        <!-- <div class="col-lg-6 mt-30">
                            <div class="service-details_image">
                                <img class="ukiyo" data-u-speed="1.2" src="https://entrenandolatinosinroofing.com/wp-content/uploads/2023/10/foto-grafia-entrenamiento-1024x768.png" alt="">
                            </div>
                            <h2 style="color: var(--color-primary)">¡Optimiza tus conocimientos y éxito en el sector!​</h2>
                        </div> -->
                    </div>
                            <!-- faq start -->
        <section class="faq pt-130">
            <div class="ds-section-title text-center mb-40">
                <span class="sub-title">Ofertas exclusivas Para nuestros increíbles clientes</span>
                <h2 class="title" style="color: var(--color-primary)">lo que hacemos</h2>
            </div>
            <div class="pos-rel">
                <div class="container ">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="ds-faq-img bg_img ukiyo" :style="{ backgroundImage: `url('/img/digital-studio/faq/faq-img01.jpg')` }"></div>
                        </div>
                        <div class="col-lg-7">
                            <div class="faq-wrap">
                                <ul class="accordion_box clearfix">
                                    <li class="block accordion active  active-block pos-rel">
                                        <div class="acc-btn">
                                            Adaptación a Tus Necesidades
                                        </div>
                                        <div class="acc_body current">
                                            <div class="content">
                                                <p>Nos trasladamos a tu compañía para brindarte la capacitación directamente en tu entorno laboral. Esto nos permite adaptar
                                                     el entrenamiento según tus necesidades específicas y desafíos particulares.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="accordion block">
                                        <div class="acc-btn">
                                            Entrenamiento Personalizado
                                        </div>
                                        <div class="acc_body">
                                            <div class="content">
                                                <p>No creemos en el enfoque de talla única para todos. En su lugar, nos enfocamos en entender tus objetivos y
                                                     requisitos únicos, y desarrollamos un programa de capacitación que se ajusta perfectamente a tus necesidades. </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="accordion block">
                                        <div class="acc-btn">
                                            Resultados Reales y Tangibles
                                        </div>
                                        <div class="acc_body">
                                            <div class="content">
                                                <p>Nuestro enfoque se centra en brindarte habilidades prácticas y aplicables en situaciones del mundo real.
                                                     No solo aprenderás teoría; saldrán de nuestras capacitaciones listas para aplicar tus conocimientos con confianza. </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="accordion block">
                                        <div class="acc-btn">
                                            Instrucción de Expertos
                                        </div>
                                        <div class="acc_body">
                                            <div class="content">
                                                <p>Contamos con un equipo de instructores expertos con años de experiencia
                                                     en la industria del roofing y en la gestión de ventas y reclamaciones de
                                                      seguros. Aprenderás de los mejores en el campo.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="accordion block">
                                        <div class="acc-btn">
                                            Éxito Garantizado
                                        </div>
                                        <div class="acc_body">
                                            <div class="content">
                                                <p>Nuestras capacitaciones están diseñadas para garantizar resultados reales y
                                                     duraderos. Te proporcionamos las herramientas necesarias para sobresalir 
                                                     en la gestión de ventas y reclamaciones de seguros.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- faq end -->
        <div class="row mt-30 align-items-center justify-content-center">
                        <div class="col-lg-8 mt-30 ">
                            <div class="section-title">
                                <!-- <span class="sub-title wow fadeInRight" data-wow-duration=".7s">Detalles del Servicio</span> -->
                                <div class="clearfix"></div>
                                <h2 class="wow fadeInUp" data-wow-delay="200ms" data-wow-duration=".7s" style="padding: 20px 0; color: var(--color-primary)">¿Qué puedes esperar de nuestras capacitaciones?</h2>
                                <h3 ><strong class="wow fadeInUp" data-wow-delay="200ms" data-wow-duration=".7s" style="padding: 20px 0; color: var(--color-primary)">¿Estás listo para dar un paso adelante en tu carrera y tu negocio en la industria del roofing?</strong></h3>
                            </div>
                            <br>
                            <div class="service-single-content">
                                <p class="wow fadeInUp" data-wow-duration=".7s">¡Contáctanos hoy mismo para obtener más información sobre nuestras capacitaciones privadas en la gestión de ventas y reclamaciones de seguros!</p>
                                    <!-- <h2 class="wow fadeInUp" data-wow-delay="200ms" data-wow-duration=".7s" style="padding: 20px 0; color: var(--color-primary)">¡Contáctenos hoy mismo para obtener más información sobre nuestras capacitaciones privadas!</h2> -->
                                <p class="wow fadeInUp" data-wow-delay="200ms" data-wow-duration=".7s"><br>
                                   <strong> No pierdas la oportunidad de potenciar tu éxito.</strong>
                                </p>
                            </div>
                        </div>
                        <!-- <div class="col-lg-6 mt-30">
                            <div class="service-details_image">
                                <img class="ukiyo" data-u-speed="1.2" src="https://entrenandolatinosinroofing.com/wp-content/uploads/2023/10/foto-grafia-entrenamiento-1024x768.png" alt="">
                            </div>
                            <h2 style="color: var(--color-primary)">¡Optimiza tus conocimientos y éxito en el sector!​</h2>
                        </div> -->
                    </div>
                </div>
            </div>
            <!-- service details area end  -->

            <!-- service details slider area two end  -->
            <section class="service_details-slider z-3 pt-130">
                <div class="service-gallery-slider swiper-container" ref="sliderRef">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="xb-item--image">
                                <img src="https://entrenandolatinosinroofing.com/wp-content/uploads/2023/10/foto-capacitacion-3.png" alt="">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="xb-item--image">
                                <img src="https://entrenandolatinosinroofing.com/wp-content/uploads/2023/10/foto-capacitacion-1.png" alt="">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="xb-item--image">
                                <img src="https://entrenandolatinosinroofing.com/wp-content/uploads/2023/10/foto-capacitacion-3.png" alt="">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="xb-item--image">
                                <img src="https://entrenandolatinosinroofing.com/wp-content/uploads/2023/10/foto-capacitacion-2.png" alt="">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="xb-item--image">
                                <img src="https://entrenandolatinosinroofing.com/wp-content/uploads/2023/10/foto-capacitacion-4.png" alt="">
                            </div>
                        </div>
                        <!-- <div class="swiper-slide">
                            <div class="xb-item--image">
                                <img src="/img/searvice/sg_01.jpg" alt="">
                            </div>
                        </div> -->
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <!-- <div class="container">
                    <h3 class="sd-contents pt-125">Great user experience design lets users focus on the task they have
                        to complete & <br> evokes emotion without distracting them. Bonus points for when it also looks
                        <br> & feels aesthetically pleasing!</h3>
                </div> -->
            </section>
            <!-- service details slider area two end  -->



            <!-- services-nav area start  -->
            <div class="services-nav pt-140 pb-150">
                <div class="container">
                    <div class="ul_li_between">
                        <RouterLink to="/detalle-servicio-seguros" class="service-nav-item">
                            <span class="sd-link"><i class="fal fa-long-arrow-left"></i> Anterior</span>
                            <h2 class="sd-title">Entrenamiento en reclamos de seguro</h2>
                        </RouterLink>
                        <!-- <a href="service.html"><img src="/img/icon/SD.svg" alt=""></a> -->
                        <RouterLink to="/detalle-servicio-marketing" class="service-nav-item service-nav-item--next">
                            <span class="sd-link">Siguiente <i class="fal fa-long-arrow-right"></i></span>
                            <h2 class="sd-title">Estrategias de Marketing y publicidad</h2>
                        </RouterLink>
                    </div>
                </div>
            </div>
            <!-- services-nav area end -->
</template>

<style scoped>
    .service-details_image:hover{
        filter: none;
    }
</style>