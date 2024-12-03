<template>
    <section
      class="breadcrumb pt-190 pb-120"
      :class="{ 'breadcrumb--active': isActive }"
    >
      <div class="container">
        <div class="breadcrumb__content text-center">
          <h2 class="breadcrumb__title">{{ $route.meta.title || 'Página' }}</h2>
          <ul class="breadcrumb__list">
            <li class="breadcrumb-item">
              <router-link to="/"><span>Inicio</span></router-link>
            </li>
            <li class="breadcrumb-item">{{ $route.meta.title || 'Página' }}</li>
          </ul>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    name: 'BannerSections',
    setup() {
      const isActive = ref(false);
  
      onMounted(() => {
        // Activar la animación después de montar el componente
        setTimeout(() => {
          isActive.value = true;
        }, 100); // Retraso opcional para suavizar
      });
  
      return { isActive };
    },
  };
  </script>
  
  <style scoped>
  .breadcrumb {
    position: relative;
  }
  
  .breadcrumb::before {
    content: '';
    position: absolute;
    top: 416px;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #d69d15 0%, #fed95d 100%);
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  }
  
  .breadcrumb--active::before {
    opacity: 1;
    transform: translateY(0);
  }
  
  @media (max-width: 767px) {
    .breadcrumb::before {
      top: 325px;
    }
  }
  </style>
  