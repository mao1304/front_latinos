<script setup>
import Timer from './timer.vue';
// import { MapPin  } from 'lucide-vue-next';
import  MapPin  from '../components/icons/MapPin.vue';
import SideSocial from './sideSocial.vue';
</script>

<template>
    <!-- hero section start  -->
    <section class="video-banner">
      <SideSocial/>
    <video autoplay loop muted playsinline>
      <!-- <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4"> -->
      <source src="../../public/C3308_1.mp4" type="video/mp4">
      Tu navegador no soporta el elemento de video.
    </video>
    <div class="overlay"></div>
    <div class="content">
      <div class="footer-gradient">
        <div class=" containerP ">       
          <p>No esperes mas para hacer el cambio</p>
          <h1>a tu vida</h1>
          <div class="counter"><Timer target-date="2024-12-16T05:25:00" /></div>
        </div>
        <div class="containerP " style="border-left: solid 2px #fff; display: flex ; flex-direction: column; align-items: center; ">
          <h3 class="location"><MapPin class="icon"/>Frankfort KY</h3>
          <div class="location-image">
            <img src="https://lh5.googleusercontent.com/p/AF1QipMZdeDkyKlNH-SrNOl3U8GglxjYZsqmmRBsH2R9=w540-h312-n-k-no" alt="location-image" style="width: 100px; height: 100px;">
          </div>
          <p style="font-size: 20px;">Av. 5 de Febrero 123</p>
          <p style="font-size: 20px;">16-17 / DIC</p>
          <p style="font-size: 20px;">¡Nos vemos allá! 🚀</p>
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
             /* height: calc(100vh / 1.5);  */
            height: calc(100vh - 70px);
            background-color:aqua;
        }
    } 
     
    
    .video-banner {
        height: calc(100vh);
        background-color: aliceblue;
    } 
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    
    .text-3xl {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    .location{
      display: flex;
      justify-content: center;
      font-size: 20px;
    }
    .icon{
      margin-right: 5px;
    }
    /* Estilos para la sección de video */
    .video-banner video {
      /* position: absolute; */
      /* top: 0; */
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* Capa de superposición */
    .video-banner .overlay {
      height: 100vh;
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.3);
    }

    /* Contenedor de contenido */
    .video-banner .content {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      /* align-items: center; */
      color: white;
      /* text-align: center; */
      height: 100vh;
      /* background: linear-gradient(to top, black, transparent); */
      background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(121,92,21,0) 40%, rgba(137,104,24,0) 60%, rgba(0,0,0,1) 100%);
      /* background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 35%); */

    }

    .video-banner .content h1 {
      font-size: 2.5rem;
      font-weight: bold;
      /* margin-bottom: 1rem; */
    }

    .video-banner .content p {
      font-size: 1.5rem;
      /* margin-bottom: 2rem; */
    }

.location-image{
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #acacac;
}
    /* Gradiente inferior */
    .video-banner .footer-gradient {
      display: flex;
      justify-content: center;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      overflow: hidden;
      border-bottom: 2px solid var(--color-primary);

    }

    .video-banner .footer-gradient .counter {
      font-size: 2rem;
      font-weight: bold;
      color: white;
    }

    /* Responsividad */
    @media (min-width: 768px) {
      .video-banner .content h1 {
        font-size: 4rem;
      }

      .video-banner .content p {
        font-size: 2rem;
      }
      .textSmall{
    }

      .video-banner .footer-gradient .counter {
        font-size: 3rem;
      }
    }

    .containerP{
      width: fit-content;
      background-color: rgba(255,255,255,0.1);
      padding: 10px 10px 0px;
      /* box-shadow: 0px 5px 5px #987820; */
    }
    </style>