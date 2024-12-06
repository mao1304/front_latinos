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
    <!-- <router-view v-slot="{ Component }">
      <transition >
        <component :is="Component" />
      </transition>
    </router-view> -->
    <transition name="fade" mode="out-in">
      <RouterView />
    </transition>
  </main>

  <Footer />
</template>
