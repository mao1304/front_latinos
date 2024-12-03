<template>
    <canvas id="canvas" ref="canvas"></canvas>
  </template>
  
  <script>
  import { ref } from "vue";
  import useCanvasCursor from "../stores/cursor.js";
  
  export default {
    name: "CanvasCursor",
    setup() {
      const canvas = ref(null);
      useCanvasCursor(canvas);
  
      return {
        canvas,
      };
    },
  };
  </script>
  
  <style scoped>
  #canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    pointer-events: none;
  }
  </style>