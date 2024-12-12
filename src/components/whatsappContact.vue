<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const contacts = [
  {
    name: 'Membresía Premium',
    encargado: 'Luis Velásquez',
    phoneVisible: '+1 (502)-320-4804',
    phone: '+15023204804',
    color: '#25D366'
  },
  {
    name: 'Soporte',

    encargado: 'Luis Gerardo',
    phoneVisible: '+1 (502)-692-7019',
    phone: '+15026927019',
    color: '#128C7E'
  },
  {
    name: 'Estimados y Suplementos',
    encargado: 'Zharick',
    phoneVisible: '+1 (502)-699-1093',
    phone: '+15026991093',
    color: '#075E54'
  },
  {
    name: 'Atención al Cliente',
    encargado: 'Aura',
    // phone: '+1 (502) 682-2038',
    phoneVisible: '+1 (502)-682-2038',
    phone: '+15026822038',
    color: '#34B7F1'
  }
];

const openWhatsApp = (phone) => {
  const message = encodeURIComponent('Hola, me gustaría obtener más información.');
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="whatsapp-container">
    <!-- Menú desplegable -->
    <div class="whatsapp-menu" :class="{ 'menu-open': isMenuOpen }">
      <div v-for="(contact, index) in contacts" 
           :key="index" 
           class="menu-item"
           :style="{ '--delay': `${index * 0.1}s`, '--color': contact.color }"
           @click="openWhatsApp(contact.phone)"
      >
        <span class="contact-name">{{ contact.name }}</span>
        <span class="contact-lider">{{ contact.encargado }}</span>
        <span class="contact-phone">{{ contact.phoneVisible }}</span>

      </div>
    </div>

    <!-- Botón principal -->
    <button 
      class="whatsapp-button"
      :class="{ 'button-active': isMenuOpen }"
      @click="toggleMenu"
      aria-label="WhatsApp Contact Menu"
    >
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 448 512" 
        width="40" 
        height="40"
      class="whatsapp-icon">
        <path
        fill="currentColor" 
        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
    </button>
  </div>
</template>

<style scoped>
.whatsapp-container {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
}

.whatsapp-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #25D366;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.whatsapp-button:hover {
  transform: scale(1.1);
}

.button-active {
  background-color: #128C7E;
}

.whatsapp-icon {
  color: white;
  transition: transform 0.3s ease;
}

.button-active .whatsapp-icon {
  transform: rotate(180deg);
}

.whatsapp-menu {
  position: absolute;
  bottom: 80px;
  right: 0;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 250px;
  overflow: hidden;
  transform: scale(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
  opacity: 0;
}

.menu-open {
  transform: scale(1);
  opacity: 1;
}

.menu-item {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: background-color 0.3s ease;
  transform: translateY(20px);
  opacity: 0;
  animation: slideIn 0.3s ease forwards;
  animation-delay: var(--delay);
  border-left: 4px solid var(--color);
}

.menu-item:hover {
  background-color: #f5f5f5;
}

.contact-name {
  font-weight: bold;
  color: #333;
  margin-bottom: 0.25rem;
}
.contact-lider {
  color: #000;
    
}
.contact-phone {
  color: #666;
  font-size: 0.875rem;
}

@keyframes slideIn {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .whatsapp-container {
    bottom: 1rem;
    right: 1rem;
  }

  .whatsapp-menu {
    width: calc(100vw - 2rem);
    right: 0;
    max-width: 300px;
  }
}
</style>