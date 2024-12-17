<template>
    <iframe loading="lazy" :width="width" :height="height" :src="src" :title="title" frameborder="0"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
    </iframe>
</template>

<script setup>
defineProps({
    src: { type: String, required: true },
    title: { type: String, default: 'YouTube video player' },
    width: { type: String, default: '100%' },
    height: { type: String, default: '200px' },
});
</script>