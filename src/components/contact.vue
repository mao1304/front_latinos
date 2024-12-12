<template>
            <!-- contact start -->
            <section class="contact pt-110">
            <div class="container">
                <div class="row pb-125">
                    <div class="section-title pb-60">
                        <h3 class="title wow skewIn">"Déjanos Saber en Qué <br> <span>Podemos Ayudarte Hoy"</span></h3>
                    </div>
                    <ul class="contact-location">
                        <li><h3 class="contact-subtitle">Ubicación</h3><span>2855 Louisville Rd, Frankfort, KY 40601, Estados Unidos</span></li>
                        <li class="text-lowercase">
                            <h3 class="contact-subtitle">Contáctenos</h3>
                            <span>
                                <a href="mailto:auxa@example.com" class="link-social"><span class="contact-icon">entrenandolatinosroofing@gmail.com</span></a>
                                <span style="display: flex; flex-direction: row; justify-content: space-between;"><a href="tel:+1 800 123 456 789" class="link-social"><span class="contact-icon">+1 502 3204804</span></a><a href="tel:+1 800 123 456 789" class="link-social"><span class="contact-icon">+1 502 3204804</span></a></span>
                            </span>
                            </li>
                        <li>
                            <h3 class="contact-subtitle">Redes Sociales</h3>
                            <a href="https://www.instagram.com/entrenandolatinosnroofing/" target="_blank" class="link-social"><span class="contact-icon"><Instagram /> Instagram</span></a>
                            <a href="https://www.youtube.com/channel/UC0b5vPdHhKOQvn02CNJCndw" target="_blank" class="link-social"><span class="contact-icon"> <YoutubeIcon /> YouTube</span></a>
                            <a href="https://www.facebook.com/entrenandolatinosinroofing/" target="_blank" class="link-social"><span class="contact-icon"> <FacebookIcon />  Facebook</span> </a>
                            <a href="https://www.tiktok.com/@entrenandolatinosinroofi" target="_blank" class="link-social"><span class="contact-icon"> <TikTok /> TikTok</span></a>
                            <a href="https://www.linkedin.com/in/luisvelasquezcaicedo" target="_blank" class="link-social"><span class="contact-icon"> <LinkedinIcon /> LinkedIn</span></a>
                        </li>
                        <li><h3 class="contact-subtitle">Horarios</h3>
                            <span style="display: inline-grid;">
                                <span>Lunes a Viernes de 8:00 am - 10:00 pm</span> 
                                <span>Sabados de 9:00 am - 1:00 pm</span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <div class="section-title contact-title mb-35">
                        <span class="sub-title" style="font-size: 18px;">Cuéntenos sus preocupaciones <br> y le ayudaremos a encontrar<br> la mejor solución</span>
                    </div>
                    <div class="contact-form-inner">
                        <form class="contact-form pos-rel" action="#">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="xb-item--field">
                                        <label for="name">Tu Nombre</label>
                                        <input id="name" type="text" placeholder="Gomez Golatria">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="xb-item--field">
                                        <label for="mail">Email</label>
                                        <input id="mail" type="text" placeholder="gomez@example.com">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="xb-item--field">
                                        <label for="number">Teléfono</label>
                                        <input id="number" type="text" placeholder="+1 800 123 456 789">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="xb-item--field">
                                        <label for="service">Compañía</label>
                                        <input id="service" type="text" placeholder="xpressbuddy Digital Solutions">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="xb-item--field xb-item--textarea">
                                        <label for="message">Mensaje</label>
                                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Hola equipo de Entrenando Latinos, necesito ..."></textarea>
                                    </div>
                                    <button type="submit" class="circle-btn port-btn xb-element-parallax">
                                        <span class="button__bg"></span>Enviar
                                    </button>    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Map />
            <BrandSection />
        </section>
        <!-- contact end -->
</template>
<script setup>
import { Facebook as FacebookIcon, Linkedin as LinkedinIcon, Youtube as YoutubeIcon, Globe as GlobeIcon , Instagram as InstagramIcon, Instagram } from 'lucide-vue-next'
import TikTok from './icons/TikTok.vue';
import Map from './map.vue';
import BrandSection from './brands.vue';
</script>
<script>
export default {
    name: 'Contact'
}
</script>
<style scoped>
    .contact-icon{
        display: flex;
        align-items: flex-start;
        transition: 1s;
        padding: 0 5px;
    }
    .contact-icon svg{
        margin-right: 10px;
    }

    .contact-icon:hover {
        /* background-color: #3e8e41; */
        color: var(--color-primary);
}
.link-social{
    color:white;
}

.contact-subtitle{
    text-decoration-line: underline;
}
</style>