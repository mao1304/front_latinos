<template>
    <li class="contact-location-item">
        <h3 class="contact-subtitle">{{ title }}</h3>
        <div v-if="isSocial" style="display: contents;">
            <a v-for="(link, index) in content" :key="index" :href="link.link" class="contact-icon link-social "
                target="_blank" rel="noopener noreferrer">
                <component :is="link.icon" />
                <span>{{ link.label }}</span>
            </a>
        </div>
        <div v-else-if="links">
            <a v-for="(item, index) in content" :key="index" :href="item.link" class="link-social">
                {{ item.value }}
            </a>
        </div>
        <div v-else>
            <p v-for="(item, index) in content" :key="index" class="link-social">{{ item }} </p>
        </div>
    </li>
</template>

<script setup>
import { Facebook as FacebookIcon, Linkedin as LinkedinIcon, Youtube as YoutubeIcon, Globe as GlobeIcon, Instagram as InstagramIcon } from 'lucide-vue-next'
defineProps({
    title: { type: String, required: true },
    content: { type: [Array, String], required: true },
    links: { type: Boolean, default: false },
    isSocial: { type: Boolean, default: false },
});

</script>

<style scoped>
/* .contact-location-item {
    margin-bottom: var(--spacing-large);
} */

.contact-subtitle {
    color: var(--color-secondary);
}

.contact-icon {
    display: flex;
    align-items: center;

}

.link-social {
    color: var(--color-text);
    transition: color 0.3s ease;
    padding: 0 0.5rem;
}

.link-social:hover {
    color: var(--color-primary);
}
</style>