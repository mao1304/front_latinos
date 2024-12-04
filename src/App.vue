<script setup>
import Footer from './components/footer.vue';
// import Navbar from './components/navbar.vue';
import Navbar from './components/navbar-2.vue';
import CanvasCursor from './components/cursor.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    <CanvasCursor />
    <transition name="slide" mode="out-in">
      <RouterView />
    </transition>
  </main>

  <Footer />
</template>
