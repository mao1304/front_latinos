<script setup>
import whatsappIcon from './icons/whatsappIcon.vue'
</script>
<template>
    <section class="why_us pt-130 pb-130" style="border-top: 2px solid var(--color-primary);">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="why_us-image">
                        <!-- <img src="/img/why-us/img01.jpg" alt=""> -->
                        <img src="/img/reales/FOTOGRAFIAS/membresia.jpg" alt="">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="section-title mb-30">
                        <h3 class="title wow skewIn mb-20">Eleva tu experiencia con nuestra <br> <span>Membresía
                                Premium</span></h3>
                        <div class="row g-0">
                            <div class="col-lg-12">
                                <div class="ds-pricing-plan">
                                    <div class="xb-item--holder">
                                        <!-- <h2 class="xb-item--title">All plans include</h2> -->
                                        <p class="xb-item--content">Únete a nuestro equipo y adquiere una membresía
                                            premium
                                            que te brinda descuentos en servicios y productos.
                                            Además, recibirás soporte para impulsar el crecimiento de
                                            tu compañía en la industria del roofing.</p>
                                    </div>
                                    <div class="xb-item--list ul_li">
                                        <li class="pos-rel">
                                            Descuentos en servicios y productos</li>
                                        <li class="pos-rel">
                                            Red de profesionales </li>
                                        <li class="pos-rel">Soporte empresarial</li>
                                        <li class="pos-rel">Oportunidades de crecimiento</li>
                                    </div>
                                    <h2 class="xb-item--title" style="margin-top: 20px; text-align: center;">
                                        <whatsappIcon class="icon-whatsapp" /> Soporte 24/7
                                    </h2>

                                    <div class="ds-pricing-info"
                                        style="display: flex; justify-content: space-evenly; padding: 10px; flex-wrap: wrap;">
                                        <a class="xb-item--btn" style="margin-bottom: 10px;" href="#!">+15023204804</a>
                                        <a class="xb-item--btn" style="margin-bottom: 10px;" href="#!">+15026927019</a>
                                        <a class="xb-item--btn" style="margin-bottom: 10px;" href="#!">+15026002652</a>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="xb-experience ul_li">
                    <div class="xb-item--experience_box mt-15">
                        <span class="xb-item--title">FRONTEND</span>

                    </div>
                    <div class="xb-item--experience_box mt-15">
                        <span class="xb-item--title">BACKEND</span>

                    </div>
                    <div class="xb-item--experience_box mt-15">
                        <span class="xb-item--title">MOBILE DEVELOPMENT</span>

                    </div>
                </div> -->
                </div>
            </div>
        </div>
    </section>
    <!-- why-us section end  -->
</template>

<script>

export default {
    name: 'Membrecia'
}
</script>

<style scoped>
.icon-whatsapp {
    margin-bottom: 5px;
    width: 40px;
    height: 40px;
    font-size: 40px;
}
</style>