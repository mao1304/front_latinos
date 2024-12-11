<script setup>
import bannerSections from '@/components/banner-sections.vue';
import { onMounted } from "vue";
import "swiper/swiper-bundle.css";
import Social from '@/components/social.vue';
onMounted(() => {

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
            <div class="service-details pt-125">
                <div class="container">
                    <div class="row mt-none-30 align-items-center">
                        <div class="col-lg-6 mt-30">
                            <div class="section-title">
                                <span class="sub-title wow fadeInRight" data-wow-duration=".7s">Detalles del Servicio</span>
                                <div class="clearfix"></div>
                                <h3 class="title wow skewIn mb-15">Gestión de <span>estimados y suplementos</span></h3>
                            </div>
                            <div class="service-single-content">
                                <p class="wow fadeInUp" data-wow-duration=".7s">En esta industria del roofing sabemos que las compañías 
                                    de seguro minimizan los daños de la vivienda a los dueños de casa, nuestro equipo de consultores y
                                     analistas identifica el alcance de ese trabajo y determinan una respuesta razonable en materiales 
                                     y mano de obra para ejecutar un proyecto con todas las garantías necesarias con estándares de calidad y presupuesto.</p>
                                    <h2 class="wow fadeInUp" data-wow-delay="200ms" data-wow-duration=".7s" style="padding: 20px 0;">¿Qué puedes esperar de nuestros servicios de "Estimados y Suplementos"?​</h2>
                                <!-- <p class="wow fadeInUp" data-wow-delay="200ms" data-wow-duration=".7s">
                                    Descubra por qué la gestión de reclamaciones de seguros es esencial en la industria del roofing. Aprende cómo
                                     los profesionales del roofing aseguran la compensación adecuada para reparaciones vitales.
                                </p> -->
                            </div>
                        </div>
                        <div class="col-lg-6 mt-30">
                            <div class="service-details_image">
                                <img class="ukiyo" data-u-speed="1.2" src="https://entrenandolatinosinroofing.com/wp-content/uploads/2023/10/foto-2-seccion-estimados.png" alt="">
                            </div>
                            <h2 style="color: var(--color-primary)">¡Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar el éxito en tus proyectos de roofing!</h2>
                        </div>
                    </div>
                    <section class="faq pt-80">
            <!-- <div class="ds-section-title text-center mb-40">
                <span class="sub-title">Ofertas exclusivas Para nuestros increíbles clientes</span>
                <h2 class="title" style="color: var(--color-primary)">lo que hacemos</h2>
            </div> -->
            <div class="pos-rel">
                <div class="container ">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="faq-wrap">
                                <ul class="accordion_box clearfix">
                                    <li class="block accordion active  active-block pos-rel">
                                        <div class="acc-btn">
                                            Evaluación Profesional:
                                        </div>
                                        <div class="acc_body current">
                                            <div class="content">
                                                <p>Nuestros expertos realizan una evaluación exhaustiva de los daños en las viviendas y en los proyectos de roofing.
                                                     Utilizamos nuestra experiencia para garantizar que todos los trabajos necesarios se tengan en cuenta.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="accordion block">
                                        <div class="acc-btn">
                                            Presupuesto Transparente:
                                        </div>
                                        <div class="acc_body">
                                            <div class="content">
                                                <p>Creemos en la transparencia en todo momento. Proporcionamos presupuestos detallados que reflejan
                                                     con precisión el alcance del trabajo y los costos asociados.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="accordion block">
                                        <div class="acc-btn">
                                            Materiales de Calidad:
                                        </div>
                                        <div class="acc_body">
                                            <div class="content">
                                                <p>Seleccionamos cuidadosamente los materiales de la más alta calidad para 
                                                    garantizar la durabilidad y la integridad de cada proyecto en la industria del roofing.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="accordion block">
                                        <div class="acc-btn">
                                            Mano de Obra Calificada:
                                        </div>
                                        <div class="acc_body">
                                            <div class="content">
                                                <p>Nuestra mano de obra está compuesta por profesionales altamente calificados y
                                                     certificados que ejecutan cada proyecto con los más altos estándares de calidad.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="accordion block">
                                        <div class="acc-btn">
                                            Garantías Aseguradas:
                                        </div>
                                        <div class="acc_body">
                                            <div class="content">
                                                <p>Nos enorgullece respaldar nuestros proyectos con garantías sólidas,
                                                     brindando a nuestros clientes la tranquilidad que se merecen.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="accordion block">
                                        <div class="acc-btn">
                                            Asesoría Personalizada:
                                        </div>
                                        <div class="acc_body">
                                            <div class="content">
                                                <p>Entendemos que cada proyecto y propietario es único. Nuestros consultores ofrecen asesoría personalizada para abordar 
                                                    tus necesidades específicas y garantizar que se satisfagan todas tus preocupaciones.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="ds-faq-img bg_img ukiyo" :style="{ backgroundImage: `url('/img/digital-studio/faq/faq-img01.jpg')`, left: 'unset' }"></div>
                        </div>

                    </div>
                </div>
            </div>
            <p class="wow fadeInUp" data-wow-duration=".7s" style="padding: 20px 0;">
            Si estás buscando una solución integral y confiable en la industria del roofing,
             no busques más allá de nuestros servicios de «Estimados y Suplementos«. Te ofrecemos 
             la tranquilidad de saber que tu proyecto se gestionará con profesionalismo y se ejecutará 
             con los más altos estándares de calidad.
            </p>

        </section>
        <!-- faq end -->
                </div>
            </div>

            <div class="services-nav pt-140 pb-150">
                <div class="container">
                    <div class="ul_li_between">
                            <RouterLink to="/detalle-servicio-suplementos" class="service-nav-item">
                                <span class="sd-link"><i class="fal fa-long-arrow-left"></i> Anterior</span>
                                <h2 class="sd-title">Estimados y gestión de suplementos</h2>
                            </RouterLink>
                        <!-- <a href="service.html"><img src="/img/icon/SD.svg" alt=""></a> -->
                        <RouterLink to="/detalle-servicio-capacitacion" class="service-nav-item service-nav-item--next">
                            <span class="sd-link">Siguiente <i class="fal fa-long-arrow-right"></i></span>
                            <h2 class="sd-title">Capacitación privada personalizada</h2>
                        </RouterLink>
                    </div>
                </div>
            </div>

<Social />
</template>

<style scoped>
    .service-details_image:hover{
        filter: none;
    }
</style>