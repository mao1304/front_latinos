<script setup>
import team from '@/components/team.vue';
import BannerSections from '../components/banner-sections.vue';
import aboutSection from '@/components/aboutSection.vue';
import Objetives from '@/components/objetives.vue';
import bento from '@/components/bento.vue';
// import test from '@/components/test.vue';
</script>

<template>
    <div>
        <BannerSections />
        <bento />
        <aboutSection />
        <Objetives />
        <team />
        <!-- <test /> -->
    </div>
</template>