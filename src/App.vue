<script setup>
import Footer from './components/footer.vue';
// import Navbar from './components/navbar.vue';
import Navbar from './components/navbar-2.vue';
import CanvasCursor from './components/cursor.vue'
import whatsappContact from './components/whatsappContact.vue';
import sideMenu from './components/banner/sideMenu.vue';
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    <whatsappContact />
    <sideMenu />
    <CanvasCursor />
    <transition name="fade" mode="out-in">
      <RouterView />
    </transition>
  </main>

  <Footer />
</template>
