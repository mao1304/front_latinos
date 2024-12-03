<template>
    <div class="relative w-screen h-screen overflow-hidden">
      <!-- Video de fondo -->
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
  
      <!-- Contenido superpuesto -->
      <div class="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-40 pb-16">
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-8 text-center px-4">
          Entrenando Latinos in Roofing
        </h1>
        <p class="text-xl md:text-2xl text-white mb-4">Próximo evento en:</p>
  
        <!-- Componente Countdown -->
      </div>
    </div>
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