<script setup>
import bannerSections from '@/components/banner-sections.vue';
</script>

<template>
    <div>
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
                            <h3 class="title wow skewIn mb-15">Entrenamiento en <span>reclamos de seguro</span></h3>
                        </div>
                        <div class="service-single-content">
                            <p class="wow fadeInUp" data-wow-duration=".7s">Domina la gestión de ventas y
                                reclamaciones de seguro en la industria del Roofing. Emprende tu camino hacia el éxito
                                en nuestra
                                escuela Entrenando latinos in Roofing, con el mejor entrenamiento y resultados
                                tangibles.
                                Siempre hay algo nuevo que aprender.</p>
                            <h2 class="wow fadeInUp" data-wow-delay="200ms" data-wow-duration=".7s">Gestión de
                                Reclamaciones de Seguro: Clave para Restauraciones Exitosas</h2>
                            <p class="wow fadeInUp" data-wow-delay="200ms" data-wow-duration=".7s">
                                Descubra por qué la gestión de reclamaciones de seguros es esencial en la industria del
                                roofing. Aprende cómo
                                los profesionales del roofing aseguran la compensación adecuada para reparaciones
                                vitales.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-30">
                        <div class="service-details_image">
                            <img class="ukiyo" data-u-speed="1.2"
                                src="https://entrenandolatinosinroofing.com/wp-content/uploads/2023/10/foto-grafia-entrenamiento-1024x768.png"
                                alt="">
                        </div>
                        <h2 style="color: var(--color-primary)">¡Optimiza tus conocimientos y éxito en el sector!​</h2>
                    </div>
                </div>
                <div class="row pt-40">
                    <div class="col-lg-6">
                        <div class="sv-details mt-30">
                            <h3 class="sv-title" style="color: var(--color-primary);">La importancia de un entrenamiento
                                especializado <br> </h3>
                            <p class="wow fadeInUp" data-wow-delay="200ms" data-wow-duration=".7s">En Entrenando Latinos
                                in Roofing, ofrecemos un programa de entrenamiento especializado diseñado para aquellos
                                que buscan sobresalir
                                en la gestión de ventas y reclamaciones de seguros en la industria del techado.</p>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-30">
                        <div class="sd-details">
                            <h3 class="sd-title">Nuestro programa abarca una amplia gama de temas, incluyendo:</h3>
                            <ul class="sv-list">
                                <li>Comprensión de Pólizas de Seguro.</li>
                                <li>Proceso de Reclamación.</li>
                                <li>Negociación de Reclamaciones.</li>
                                <li>Cumplimiento Normativo</li>
                                <li>Actualizaciones Continuas</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h3>Tu Camino al Dominio en Seguros</h3>
                <p> la gestión de ventas y reclamaciones de seguros con la guía de instructores expertos y una formación
                    práctica.</p>
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

    </div>
</template>

<style scoped>
.service-details_image:hover {
    filter: none;
}
</style>