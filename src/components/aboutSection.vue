<template>
                <section class="about-area pt-110">
                <div class="container">
                    <div class="section-title mb-55">
                        <span class="sub-title wow fadeInRight" data-wow-duration=".7s">Sobre nosotros</span>
                        <div class="clearfix"></div>
                        <div class="clearfix"></div>
                        <h3 class="title wow skewIn mb-35">Entrenando Latinos in Roofing: <br> <span>Nuestra Pasión, </span> <span style="color:#fff">Tu Futuro</span></h3>
                        <p class="section-content wow fadeInRight" data-wow-delay="200ms" data-wow-duration=".7s">
                            Nos visualizamos generando un cambio positivo para los subcontratistas de
                             origen latino en la industria del Roofing, al promover la excelencia y la seguridad a través de nuestros entrenamientos.<br>
                            Queremos ser líderes en entrenamiento en la industria del Roofing, inspirando contratistas altamente competentes que sean líderes capaces de reunir todos los estándares
                            superiores en calidad y servicio mediante el crecimiento y confianza en ello, para un futuro seguro y sostenible en los Estados Unidos.</p>
                    </div>
                    <div class="about-img pos-rel">
                        <img src="/img/about/img02.jpg" alt="">
                        <div class="about-year">
                            <h2 class="xb-odm"><span class="xbo" data-count="22">00</span></h2>
                            <p>Year of <br>Experience</p>
                        </div>
                    </div>
                    <div class="row mt-50">
                        <div class="col-xl-8 offset-xl-4">
                            <h2>Misión</h2>
                            <p class="section-content section-content-bottom mb-80">Nuestra misión es ayudar al subcontratista con la principal fuente que es el
                                 conocimiento y entrenamiento constante, para convertirlos en emprendedores exitosos y prósperos en la industria del Roofing,
                                  dueños de su propia compañía. Ofrecemos un entrenamiento integral, que abarca desde el dominio en ventas hasta
                                   el posicionamiento de marca en la industria del Roofing.<br>
                                    Medimos el éxito no solo en términos de capacitación, sino también en el 
                                    impacto y resultado real que nuestros estudiantes generan en los propietarios de vivienda. </p>
                            <div class="row mt-none-30">
                                <div class="col-lg-3 col-md-3 col-sm-6 col-6 mt-30">
                                    <div class="xb-funfact text-center">
                                        <h3 class="xb-item--number xb-odm"><span class="xbo"
                                                data-count="90">00</span><span class="suffix">+</span></h3>
                                        <h6 class="xb-item--title">Project Delivered</h6>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-6 col-6 mt-30">
                                    <div class="xb-funfact text-center">
                                        <h3 class="xb-item--number xb-odm"><span class="xbo" data-count="13">00</span>
                                        </h3>
                                        <h6 class="xb-item--title">Awards</h6>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-6 col-6 mt-30">
                                    <div class="xb-funfact text-center">
                                        <h3 class="xb-item--number">
                                            <NumberCounter :end-value="1000" suffix="M" prefix="+$" />
                                        </h3>
                                        <h6 class="xb-item--title">Years Experience</h6>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-6 col-6 mt-30">
                                    <div class="xb-funfact text-center">
                                        <h3 class="xb-item--number xb-odm">
                                            <span class="xbo" data-count="88">00</span>
                                            <span class="suffix">+</span>
                                        </h3>
                                        <h6 class="xb-item--title">Happy Clients</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- about section end  -->
</template>

<script setup lang="ts" >
import NumberCounter from './NumberCounter.vue';
</script>