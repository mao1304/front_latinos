
<template>
    <div class="social-sidebar">
      <div class="follow-text">FOLLOW ME</div>
      <div class="social-links">
        <a href="#" class="social-link" aria-label="Facebook">
          <div class="icon-circle">
            <FacebookIcon class="icon" />
          </div>
        </a>
        <a href="#" class="social-link" aria-label="Twitter">
          <div class="icon-circle">
            <TikTok class="icon" />
          </div>
        </a>
        <a href="#" class="social-link" aria-label="LinkedIn">
          <div class="icon-circle">
            <LinkedinIcon class="icon" />
          </div>
        </a>
        <a href="#" class="social-link" aria-label="Youtube">
          <div class="icon-circle">
            <YoutubeIcon class="icon" />
          </div>
        </a>
        <a href="#" class="social-link" aria-label="Instagram">
          <div class="icon-circle">
            <InstagramIcon class="icon" />
          </div>
        </a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Facebook as FacebookIcon, Twitter as TwitterIcon, Linkedin as LinkedinIcon, Youtube as YoutubeIcon, Globe as GlobeIcon , Instagram as InstagramIcon } from 'lucide-vue-next'
  import TikTok from './icons/TikTok.vue';
 </script>
  
  <style scoped>
  .social-sidebar {
    position: fixed;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    /* background-color: #000000; */
    padding: 2rem 0.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    z-index: 50;
  }
  
  .follow-text {
    writing-mode: vertical-rl;
    transform: rotate(360deg);
    color: white;
    font-size: 0.875rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  
  .social-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .social-link {
    color: white;
    transition: all 0.3s ease;
  }
  
  .icon-circle {
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }
  
  .icon {
    color: var(--color-primary);
    width: 20px;
    height: 20px;
  }
  
  .social-link:hover .icon-circle {
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    .social-sidebar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      top: auto;
      transform: none;
      padding: 0.75rem;
      flex-direction: row;
      justify-content: center;
    }
  
    .follow-text {
      display: none;
    }
  
    .social-links {
      flex-direction: row;
    }
  }
  </style>

  <script>
  export default {
    name: 'SideSocial',
  };
  </script>