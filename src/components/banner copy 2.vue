<template>
<!-- hero section start  -->
<section class="video-banner"> 
    <div class="relative w-full h-[80vh] overflow-hidden">
    <video
      class="absolute top-0 left-0 w-full h-full object-cover"
      autoplay
      loop
      muted
      playsinline
    >
      <source src="/video.mp4" type="video/mp4" />
      Tu navegador no soporta el elemento de video.
    </video>
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">Video Banner</h1>
      <p class="text-xl md:text-2xl mb-8">Con contador en la parte inferior</p>
    </div>
    <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
      <div class="container mx-auto flex justify-center">
        <div class="text-white text-3xl font-bold">
          {{ formattedCount }}
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'banner',
};
</script>

<style scoped>
.video-banner {
    height: calc(100vh - 102px);
    background-color: aliceblue;
}
@media (max-width: 991px) {
    .video-banner {
        height: calc(100vh / 1.5);
        background-color:aqua;
        /* width: auto; */
    }
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.text-3xl {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>