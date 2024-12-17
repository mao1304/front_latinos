<script setup>
import { ref, onMounted } from 'vue';
import "leaflet/dist/leaflet.css"
import * as L from 'leaflet';

const initialMap = ref(null);
onMounted(() => {
    initialMap.value = L.map('map', {
        center: [42.28518016016038, -71.72828292352045], // Coordenadas iniciales
        // center: [38.164422134300445, -84.94264876652947], // Coordenadas iniciales
        zoom: 16,                   // Nivel de zoom inicial
        dragging: true,           // Deshabilitar arrastre
        zoomControl: true,        // Ocultar controles de zoom
        scrollWheelZoom: false,    // Deshabilitar zoom con scroll
        doubleClickZoom: true,    // Deshabilitar doble clic para zoom
        boxZoom: false,            // Deshabilitar zoom de caja
        keyboard: false,
        minZoom: 3,
        maxZoom: 4,         // Deshabilitar navegación con teclado
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(initialMap.value);

    L.marker([42.28518016016038, -71.72828292352045]).addTo(initialMap.value)
        .bindPopup('<p style="font-weight: bold; font-size: 18px; font-family: Bebas Neue; text-transform: uppercase; text-align: center; letter-spacing: 1px; ">Entrenando Latinos in Roofing</p>')
        .openPopup();
    // L.marker([38.16450294097263, -84.94257447956747]).addTo(initialMap.value)
    //     .bindPopup('<p style="font-weight: bold; font-size: 18px; font-family: Bebas Neue; text-transform: uppercase; text-align: center; letter-spacing: 1px; ">Dinamic Restoration</p>')
    //     .openPopup();
});
</script>

<template>
    <div class="map">
        <div id="map" style="height:600px;"></div>
    </div>
</template>

<script>
export default {
    name: 'Map'
}
</script>

<style scoped>
.map {
    margin: 130px 0px 0px;
}

#map {
    /* filter: grayscale(100%); */
}
</style>