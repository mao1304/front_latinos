<script setup>
import servicios from '@/stores/service.js'
import { socialLinks, location, contactDetails, schedule } from '@/stores/contact/contactinfo';
const Ubicacion = location[0];
const Horario = schedule[0];
const Horario2 = schedule[1];
const year = new Date().getFullYear();
</script>
<template>
    <footer class="dm-footer pos-rel">
        <div class="dm-footer-line pt-125">
            <div class="container">
                <div class="row mt-none-40">
                    <div class="col-lg-3 col-md-6 footer-col mt-40">
                        <div class="footer-widget">
                            <div class="footer-logo mb-30">
                                <RouterLink to="/"><img src="/public/img/reales/logos/logo3.png" class="img-fluid"
                                        alt=""></RouterLink>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 footer-col mt-40">
                        <div class="footer-widget">
                            <h3 class="widget-title">Servicios</h3>
                            <ul class="footer-links">
                                <li v-for="service in servicios"><a href="#!">{{ service.title }}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 footer-col mt-40">
                        <div class="footer-widget">
                            <h3 class="widget-title">Mas información</h3>
                            <ul class="footer-links">
                                <li>
                                    <RouterLink to="/nosotros">Nosotros</RouterLink>
                                </li>
                                <li><a href="https://links.entrenandolatinosinroofing.com/#aeropuertos_cercanos"
                                        target="_blank">Donde
                                        encontrarnos</a></li>
                                <li>
                                    <RouterLink to="/contacto">Contacto</RouterLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 footer-col mt-40">
                        <div class="footer-widget">
                            <h3 class="widget-title">Boletín de noticias</h3>
                            <p>Mantente al día con nuestro boletín</p>
                            <form class="footer-newsletter mt-40" action="#">
                                <input type="text" placeholder="Email">
                                <button>Enviar <img src="/img/icon/arrow-right3.svg" alt=""></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6 footer-col mt-40">
                        <div class="footer-widget">
                            <div class="footer-logo mb-30">
                                <p>Nuestra misión es transformar subcontratistas en emprendedores prósperos, ofreciendo
                                    entrenamiento integral en ventas y marca, logrando impacto real en la industria del
                                    Roofing.</p>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 footer-col mt-40">
                        <div class="footer-widget">
                            <h3 class="widget-title">Horario</h3>
                            <p>{{ Horario }}</p>
                            <p> {{ Horario2 }}
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 footer-col mt-40">
                        <div class="footer-widget">
                            <h3 class="widget-title">Dirección</h3>
                            <p>{{ Ubicacion }}</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 footer-col mt-40">
                        <div class="footer-widget">
                            <h3 class="widget-title">Contacto</h3>
                            <ul class="footer-links">
                                <li v-for="contactDetail in contactDetails"><a :href="contactDetail.link"
                                        target="_blank">{{
                                            contactDetail.value }}</a></li>
                                <!-- <li>
                                    <ul>
                                        <li v-for="socialLink in socialLinks"><a :href="socialLink.link"
                                                target="_blank">{{
                                                    socialLink.label }}</a></li>
                                    </ul>
                                </li> -->
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="container">
            <div class="footer-copyright text-center">
                Copyright © {{ year }} <span>Todos los derechos reservados </span><br>
                Powered by <span>Entrenando Latinos In Roofing</span>
            </div>
        </div>
        <div class="dm-footer-bg_icon">
            <img src="/img/reales/ICONOS/logo2.svg" alt="">

        </div>
    </footer>
</template>

<style scoped>
.footer-copyright span {
    color: var(--color-primary);
}

.img-fluid {
    max-width: 100%;
    height: auto;
}

.widget-title {
    color: var(--color-primary);
}
</style>