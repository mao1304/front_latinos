<template>
    <section class="about-area pt-110">
        <div class="container">
            <div class="section-title mb-55">
                <span class="sub-title wow fadeInRight" data-wow-duration=".7s">Sobre nosotros</span>
                <div class="clearfix"></div>
                <div class="clearfix"></div>
                <h3 class="title wow skewIn mb-35">Entrenando Latinos in Roofing: <br> <span>Nuestra Pasión, </span>
                    <span style="color:#fff">Tu Futuro</span>
                </h3>
                <p class="section-content wow fadeInRight" data-wow-delay="200ms" data-wow-duration=".7s">
                    Nos visualizamos generando un cambio positivo para los subcontratistas de
                    origen latino en la industria del Roofing, al promover la excelencia y la seguridad a través de
                    nuestros entrenamientos.<br>
                    Queremos ser líderes en entrenamiento en la industria del Roofing, inspirando contratistas altamente
                    competentes que sean líderes capaces de reunir todos los estándares
                    superiores en calidad y servicio mediante el crecimiento y confianza en ello, para un futuro seguro
                    y sostenible en los Estados Unidos.</p>
            </div>
            <div class="about-img pos-rel">
                <img src="/img/reales/FOTOGRAFIAS/about.jpg" alt="">
                <div class="about-year">
                    <!-- <h2 class="xb-odm experience"><NumberCounter :end-value="10" prefix="+" /></h2>
                            <p style="margin-top: 20px;">Year of <br>Experience</p> -->
                    <h2 class="xb-odm">
                        <NumberCounter :end-value="10" prefix="+" style="color: #000; width: auto; display: block;" />
                    </h2>
                    <p style="margin-top: 10px; padding: 0 10px;">Entrenando personas <br>de origen latino</p>

                </div>
            </div>
            <div class="row mt-50">
                <div class="col-xl-8 offset-xl-4">
                    <h2>Misión</h2>
                    <p class="section-content section-content-bottom mb-80">Nuestra misión es ayudar al subcontratista
                        con la principal fuente que es el
                        conocimiento y entrenamiento constante, para convertirlos en emprendedores exitosos y prósperos
                        en la industria del Roofing,
                        dueños de su propia compañía. Ofrecemos un entrenamiento integral, que abarca desde el dominio
                        en ventas hasta
                        el posicionamiento de marca en la industria del Roofing.<br>
                        Medimos el éxito no solo en términos de capacitación, sino también en el
                        impacto y resultado real que nuestros estudiantes generan en los propietarios de vivienda. </p>
                    <div class="row mt-none-30">
                        <div class="col-lg-3 col-md-3 col-sm-6 col-6 mt-30">
                            <div class="xb-funfact text-center">
                                <h3 class="xb-item--number xb-odm">
                                    <NumberCounter :end-value="30" prefix="+" />
                                </h3>
                                <h6 class="xb-item--title">Entrenamientos realizados</h6>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 col-6 mt-30">
                            <div class="xb-funfact text-center">
                                <h3 class="xb-item--number xb-odm">
                                    <NumberCounter :end-value="2000" suffix="K" prefix="+" />
                                </h3>
                                <h6 class="xb-item--title">Latinos entrenados</h6>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 col-6 mt-30">
                            <div class="xb-funfact text-center">
                                <h3 class="xb-item--number">
                                    <NumberCounter :end-value="50" prefix="+" />
                                </h3>
                                <h6 class="xb-item--title">compañías con soporte</h6>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 col-6 mt-30">
                            <div class="xb-funfact text-center">
                                <h3 class="xb-item--number xb-odm">
                                    <NumberCounter :end-value="100" suffix="M" prefix="+$" />
                                </h3>
                                <h6 class="xb-item--title">Dólares en la industria</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- about section end  -->
</template>

<script setup lang="ts">
import NumberCounter from './NumberCounter.vue';
</script>


<style scoped>
.experience {
    height: 105px;
    overflow: hidden;
    padding-bottom: 10px;
}

@media (max-width: 769px) {
    .experience {
        height: 44px;
        padding-bottom: 0px;

    }
}
</style>