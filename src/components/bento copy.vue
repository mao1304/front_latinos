<template>
    <div class="showcase">
      <div class="grid">
        <!-- Top Row -->
        <div class="card firma">
          <img src="/img/reales/firma-luis.png" alt="S Pen" style="object-fit: cover;" >
        </div>
  
        <div class="card wide ">
          <h2 style="margin: 0 0 15px ;">Entrenando <span class="highlight">Latinos in Roofing</span></h2>
          <!-- <img src="" alt="S Pen" class="s-pen-image"> -->
        </div>
  
        <div class="card">
          <h3>CEO &</h3>
          <span class="large-text highlight">Coach</span>
        </div>
        
        <div class="card">

        </div>
        
        <!-- Second Row -->
        <div class="card snapdragon">
          <!-- <img src="https://ecosupplyllc.com/static/app_core/images/logo_white_3.webp" alt="Eco Supply"> -->
          <img src="https://ahprusa.com/static/app_core/assets/img/normal/about_2.png" alt="Eco Supply">
        </div>
  
        <div class="card">
          <!-- <div class="large-text highlight">30%</div> -->
          <!-- <img src="/img/reales/logo-blanco-entrenado-latinos.png" alt="Galaxy S24 Ultra" > -->

        </div>
  
        <!-- Central Phone Image -->
        <div class="card phone-showcase">
          <img src="/img/reales/LUIS.png" alt="Galaxy S24 Ultra" class="phone-image">
          <!-- <h1 class="phone-title"><span class="name-1">Luis</span><span class="name-2">Velasquez</span></h1> -->
        </div>
  
        <!-- Feature Grid -->
        <!-- <div class="feature-grid">
          <div class="card">
            <span ><whatsappIcon /></span>
            <h3>Linea 1</h3>
          </div>
          <div class="card">
            <span><whatsappIcon /></span>
            <h3>Linea 2</h3>
          </div>
          <div class="card">
            <span ><whatsappIcon /></span>
            <h3>Linea 3</h3>
          </div>
          <div class="card">
            <span ><whatsappIcon /></span>
            <h3>Linea 4</h3>
          </div>
        </div> -->

                <!-- Feature Grid -->
        <div class="feature-grid">
          <div class="card letra">
            <h3 class="side-text">Enfoque</h3>
          </div>
          <div class="card">
            <h3 class="side-text">Disciplina</h3>
          </div>
        </div>
  
        <!-- Bottom Features -->
        <div class="social-grid">
          <div class="card social">

          </div>
          <div class="card ">
          <span class="highlight"><instagram /></span>
          <h3>Instagram</h3>
          </div>
        </div>

        <!-- <div class="card extra">
            <span><span class="highlight">5000</span> mAh</span>
        </div> -->

        <div class="card dsd">
          <img src="https://dynamicsignsdesigns.site/wp-content/uploads/2024/05/logo_color_dsdusa.webp" alt="Galaxy S24 Ultra">

            <!-- <span class="highlight">200 MP</span>
            <div>Wide-angle Camera</div> -->
        </div>
  
  
        <div class="card">
          <span><linkedin /></span>
          <h3>LinkedIn</h3>
        </div>
  
        <!-- Security Feature -->
        <div class="card ">
          <span class="highlight"><youtube /></span>
          <h3>YouTube</h3>
        </div>
         <!-- Top Row -->
         <div class="card">
          <img src="/img/reales/logo-blanco-entrenado-latinos.png" alt="Galaxy S24 Ultra" >

        </div>
        
        <div class="card">
          <img src="https://ecosupplyllc.com/static/app_core/images/logo_white_3.webp" alt="Eco Supply">

        </div>
  
        <div class="card wide">
          <h2>Luis  <span class="highlight">Velasquez</span></h2>
          <!-- <img src="" alt="S Pen" class="s-pen-image"> -->
        </div>
  
        <div class="card">
            <span class="highlight"><tok /></span>
          <h3>Tik Tok</h3>
        </div>
        
        <div class="card">
          <span class="highlight"><facebook /></span>
          <h3>Facebook</h3>
        </div>
        
      </div>
    </div>
  </template>
  
  <script setup>
  import { Battery, Shield, Search, Languages } from 'lucide-vue-next'
  import tok from './icons/tok.vue';
  import facebook from './icons/facebook.vue';
  import linkedin from './icons/linkedin.vue';
  import youtube from './icons/youtube.vue';
  import instagram from './icons/instagram.vue';
  import whatsappIcon from './icons/whatsappIcon.vue';
  </script>
  
  <style scoped>
  .showcase {
    background-color: #16171b;
    color: #fff;
    padding: 24px;
    /* min-height: 100vh; */
    font-family: Arial, sans-serif;
  }
  .social{
    grid-row: span .5;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 16px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .card {
    background-color: #000;
    border-radius: 8px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .firma{
    background-color: #fff;
    grid-column: span 2; 
  }
  .card:hover {

    transform: scale(1.04);
    transition: transform 0.5s ease-in-out;
    border-color: var(--color-primary);
  }
  .card span,
  .card h3 {
    text-align: center;
}
  .dsd {
    background-color: #fff;
      grid-column: span 2;
  }
  /* .social {
   grid-row: span 2;  
  }
  .extra {
    grid-row: span 1;
  } */
  .wide {
    grid-column: span 2;
    text-align: center;
    text-transform: uppercase;
  }

  .company {
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  
  .highlight {
    color: var(--color-primary);
  }

  .letras {
    background-color: #fff;
    color: #000;
  }
  
  .large-text {
    font-size: 2rem;
    font-weight: bold;
  }
  
  .snapdragon {
    /* background-color: #FFF8E7; */
    color: #000;
    display: flex;
    align-items: center;
  }
  
  .snapdragon-logo {
    width: 60px;
    height: 60px;
    margin-right: 8px;
  }
  
  .phone-showcase {
    /* background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(121,92,21,0) 31%); */
    position: relative;
    grid-column: span 2;
    grid-row: span 2;
    text-align: center;
    background-color: #fff;

  }
  .phone-showcase::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 21%);
  }
  
  .phone-image {
    position: absolute;
    max-width: 100%;
    height: 110%;
    left: 0px;
    bottom: 0;
    object-fit: cover;
  }

  .phone-title {
    display: flex;
    justify-content: space-between;
    color: var(--color-primary);
  }
  
  .name-1 {
    writing-mode: vertical-lr; /* Cambia la dirección del texto a vertical */
    text-orientation: upright; 
      /* transform: rotate(90deg); */
      position: relative;
      line-height: 1.5;
      /* left: -30px; */
  }

  .name-2 {
    writing-mode: vertical-lr; /* Cambia la dirección del texto a vertical */
    text-orientation: upright;
      position: relative;
      line-height: 1.5;
      /* transform: rotate(90deg); */
      /* right: -70px; */
    
  }
  .feature-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-template-rows: 1fr 1fr; */
    gap: 16px;
  }
  .social-grid {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 16px;

  }
  .feature {
    display: grid;
    background-color: #FFF8E7;
    gap: 16px;
    grid-template-rows: 1fr 1fr;
    /* grid-row: span 1; */
    text-align: center;
  }
  
  .icon {
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }
  
  .green {
    color: #4CAF50;
  }
  
  .feature-row {
    display: flex;
    align-items: center;
  }
  
  .zoom-feature {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .zoom-levels {
    display: flex;
    gap: 4px;
  }
  .side-text {
    margin: auto;
    text-align: center;
    text-orientation: upright;
    writing-mode: vertical-rl;
    transform: rotate(360deg);
    color: white;
    /* font-size: 0.875rem; */
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: bold;
    /* margin-bottom: 1rem; */
  }
  
  .zoom-levels span {
    width: 16px;
    height: 16px;
    background-color: #333;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
  }
  
  .s-pen-image {
    max-width: 200px;
    margin-left: auto;
  }
  
  @media (max-width: 900px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }}
  
    /* .wide, .phone-showcase {
      grid-column: span 2;
    }
  } */
  
  /* @media (max-width: 640px) {
    .grid {
      grid-template-columns: 1fr;
    }
  
    .wide, .phone-showcase {
      grid-column: span 1;
    }
  } */
  </style>
