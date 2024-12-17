<template>
    <!-- contact start -->
    <section class="contact pt-110">
        <div class="container">
            <div class="row pb-125">
                <div class="section-title pb-60">
                    <h3 class="title wow skewIn">"Déjanos Saber en Qué <br> <span>Podemos Ayudarte Hoy"</span></h3>
                </div>
                <ul class="contact-location">
                    <ContactInfo title="Ubicación" :content="location" />
                    <ContactInfo title="Contáctenos" :content="contactDetails" :links="true" />
                    <ContactInfo title="Redes Sociales" :content="socialLinks" :isSocial="true" />
                    <ContactInfo title="Horarios" :content="schedule" />
                </ul>
            </div>
            <div class="row">
                <contactForm />
            </div>
        </div>
        <Map />
        <BrandSection />
    </section>
    <!-- contact end -->
</template>
<script setup>
import { Facebook as FacebookIcon, Linkedin as LinkedinIcon, Youtube as YoutubeIcon, Globe as GlobeIcon, Instagram as InstagramIcon, Instagram } from 'lucide-vue-next'
import TikTok from './icons/TikTok.vue';
import Map from './map.vue';
import BrandSection from './brands.vue';
import { location, contactDetails, socialLinks, schedule } from '../stores/contact/contactinfo';
import ContactInfo from './contact/ContactInfo.vue';
import contactForm from './contact/contactForm.vue';
</script>


<style scoped>
.contact-icon {
    display: flex;
    align-items: flex-start;
    transition: 1s;
    padding: 0 5px;
}

.contact-icon svg {
    margin-right: 10px;
}

.contact-icon:hover {
    /* background-color: #3e8e41; */
    color: var(--color-primary);
}

.link-social {
    color: white;
}

.contact-subtitle {
    text-decoration-line: underline;
}

.item:hover {
    transition: 1s;
    color: var(--color-primary);

}
</style>