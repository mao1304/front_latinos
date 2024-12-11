<template>
  <div class="center">
    <div id="circle">
      texto circular de ejemplo
    </div>
  </div>
</template>
  
<style scoped>
.center {
  display: grid;
  place-items: center;
  height: 100vh;
}
  
#circle {
  position: relative;
  height: 140px;
  width: 140px;
  border: 1px solid #000; /* Borde visible para referencia */
  border-radius: 50%;
}
#circle span {
  position: absolute;
  left: 50%;
  top: 0;
  transform-origin: 0 70px; /* La mitad de la altura del círculo */
  font-size: 18px;
}
</style>
  
<script>
import { onMounted } from "vue";
  
export default {
  name: "Test",
  setup() {
    onMounted(() => {
      const circle = document.getElementById("circle");
      const text = circle.textContent.trim();
      circle.textContent = "";
  
      text.split("").forEach((char, index) => {
        const span = document.createElement("span");
        const angle = (360 / text.length) * index;
        span.style.transform = `rotate(${angle}deg)`;
        span.textContent = char;
        circle.appendChild(span);
      });
    });
  },
};
</script>
