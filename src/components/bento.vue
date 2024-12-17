<template>
  <div class="showcase">
    <div class="grid">
      <!-- Top Row -->
      <a href="https://www.dynamicrestorationky.com/" target="_blank" class="card pos-4">
        <div class="img-container">
          <img src="/img/reales/logos/dinamicRestoration.png" alt="">
        </div>
      </a>

      <div class="card pos-4">
        <h3>CEO &</h3>
        <span class="large-text highlight">Coach</span>
      </div>

      <div class="card wide pos-5" style="background-color: var(--color-primary);">
        <h2 style="margin: 0 0 15px; font-family: 'Bebas Neue'; font-weight: bold; color:#000">Entrenando Latinos in
          Roofing</h2>
      </div>

      <a href="https://www.linkedin.com/in/luisvelasquezcaicedo/" class="card pos2 " target="_blank">
        <div class="card-2 ">
          <span>
            <linkedin />
          </span>
          <h3>LinkedIn</h3>
        </div>
      </a>

      <a href="https://www.youtube.com/@EntrenandoLatinosnRoofing" class="card pos2" target="_blank">
        <div class="card-2">
          <span class="highlight">
            <youtube />
          </span>
          <h3>YouTube</h3>
        </div>
      </a>
      <!-- Second Row -->
      <a href="https://ahprusa.com/" class="card snapdragon pos-1" target="_blank">
        <div class="img-container">
          <!-- <img src="https://ecosupplyllc.com/static/app_core/images/logo_white_3.webp" alt="Eco Supply"> -->
          <img src="https://ahprusa.com/static/app_core/assets/img/normal/about_2.png" alt="ahprusa">
        </div>
      </a>

      <div class="card img-container pos-1">
        <img src="/img/reales/logos/logo-premios.png" alt="">
        <h4 style="text-align: center; font-family: 'Bebas Neue'; font-size: 22px;">
          próximamente 2025</h4>

      </div>

      <!-- Central Phone Image -->
      <div class="card phone-showcase pos0">
        <img src="/img/reales/FOTOGRAFIAS/luis-velasquez.png" alt="Galaxy S24 Ultra" class="phone-image">
      </div>

      <div class="feature-grid pos4">
        <div class="card letra">
          <h3 class="side-text">Enfoque</h3>
        </div>
        <div class="card letra">
          <h3 class="side-text">Disciplina</h3>
        </div>
      </div>

      <!-- Bottom Features -->
      <div class="social-grid pos5">
        <a href="https://wa.me/+15023204804" target="_blank" class="card social">
          <div class="card-2">
            <span class="highlight">
              <whatsappIcon />
            </span>
            <h3>whatsapp</h3>
          </div>
        </a>

        <a href="https://www.instagram.com/entrenandolatinosnroofing/" target="_blank" class="card social">
          <div class="card-2 ">
            <span class="highlight">
              <instagram />
            </span>
            <h3>Instagram</h3>
          </div>
        </a>
      </div>

      <!-- <div class="card extra">
            <span><span class="highlight">5000</span> mAh</span>
        </div> -->
      <a href="https://dynamicsignsdesigns.site/" target="_blank" class="card dsd pos-2">
        <div class="img-container">
          <img src="https://dynamicsignsdesigns.site/wp-content/uploads/2024/05/logo_color_dsdusa.webp"
            alt="Galaxy S24 Ultra">
        </div>
      </a>

      <!-- aqui la firma  -->
      <div class="card firma pos8">
        <div class="img-container">
          <img src="/img/reales/firma-luis.png" alt="S Pen" style="object-fit: cover;">
        </div>
      </div>
      <!-- Top Row -->
      <div class="card img-container pos-3">
        <img src="/img/reales/logo-blanco-entrenado-latinos.png" alt="Galaxy S24 Ultra">

      </div>

      <a href="https://ecosupplyllc.com/" class="card pos-3" target="_blank">
        <div class="img-container">
          <img src="https://www.e-c-o-supply.com/wp-content/uploads/2024/06/cropped-logoECOSUPPLY-1-2.png"
            alt="Eco Supply">

        </div>
      </a>

      <a href="https://luisvelasquez.me/es/" class="card wide pos1 " style="background-color: var(--color-primary);"
        target="_blank">
        <div>
          <h2 style="font-family: 'Bebas Neue'; font-weight: bold; color:#000; ">
            Luis Velásquez</h2>
          <!-- <img src="" alt="S Pen" class="s-pen-image"> -->
        </div>
      </a>

      <a href="https://www.tiktok.com/@luisvelasquez5575" class="card pos3" target="_blank">
        <div class="card-2">
          <span class="highlight">
            <tok />
          </span>
          <h3>Tik Tok</h3>
        </div>
      </a>

      <a href="https://www.facebook.com/entrenandolatinosinroofing/" class="card pos3" target="_blank">
        <div class="card-2">
          <span class="highlight">
            <facebook />
          </span>
          <h3>Facebook</h3>
        </div>
      </a>

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


.social {
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

.card-2 {
  background-color: #000;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.firma {
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

.large-text {
  font-size: 2rem;
  font-weight: bold;
}

.snapdragon {
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
  position: relative;
  grid-column: span 2;
  grid-row: span 2;
  text-align: center;
  background-color: #fff;

}

@media (max-width: 900px) {
  .phone-showcase {
    height: 500px;
  }

  .phone-image {
    left: 29%;
  }
}

@media (max-width: 768px) {
  .phone-image {
    left: 23%;
  }

}


@media (max-width: 572px) {
  .phone-image {
    left: 15%;
  }
}

@media screen and (max-width: 500px) {
  .phone-image {
    left: -1%;
  }

}

.phone-showcase::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0) 21%);
}

.phone-image {
  position: absolute;
  max-width: 100%;
  height: 110%;
  /* left: 0px; */
  bottom: 0;
  object-fit: cover;
  overflow: visible;
}

.phone-title {
  display: flex;
  justify-content: space-between;
  color: var(--color-primary);
}

.name-1 {
  writing-mode: vertical-lr;
  /* Cambia la dirección del texto a vertical */
  text-orientation: upright;
  /* transform: rotate(90deg); */
  position: relative;
  line-height: 1.5;
  /* left: -30px; */
}

.name-2 {
  writing-mode: vertical-lr;
  /* Cambia la dirección del texto a vertical */
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
  color: rgb(255, 255, 255);
  /* font-size: 0.875rem; */
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: bold;
  font-family: 'Bebas Neue';
  /* margin-bottom: 1rem; */
}

.side-text-2 {
  margin: auto;
  text-align: center;
  /* text-orientation: upright; */
  writing-mode: vertical-rl;
  transform: rotate(360deg);
  color: rgb(255, 255, 255);
  /* font-size: 0.875rem; */
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: bold;
  font-family: 'Bebas Neue';
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
  }
}

.img-container {
  display: flex;
  justify-content: center;
}

/* responsive */
@media screen and (max-width: 900px) {
  .pos-10 {
    order: -10;
  }

  .pos-9 {
    order: -9;
  }

  .pos-8 {
    order: -8;
  }

  .pos-7 {
    order: -7;
  }

  .pos-6 {
    order: -6;
  }

  .pos-5 {
    order: -5;
  }

  .pos-4 {
    order: -4;
  }

  .pos-3 {
    order: -3;
  }

  .pos-2 {
    order: -2;
  }

  .pos-1 {
    order: -1;
  }

  .pos0 {
    order: 0;
  }

  .pos1 {
    order: 1;
  }

  .pos2 {
    order: 2;
  }

  .pos3 {
    order: 3;
  }

  .pos4 {
    order: 4;
  }

  .pos5 {
    order: 5;
  }

  .pos6 {
    order: 6;
  }

  .pos7 {
    order: 7;
  }

  .pos8 {
    order: 8;
  }

  .pos9 {
    order: 9;
  }
}


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
/* .letra {
    background-color: #fff;
    color: #000;
   } */
</style>
