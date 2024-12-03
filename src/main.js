import './assets/main.css'
import "ukiyojs";
// import '../src/assets/js/jquery-3.7.1.min.js'
// import '../src/assets/js/jquery-ui.min.js'
// import '../src/assets/js/appear.js'
// import '../src/assets/js/bootstrap.bundle.min.js'
// import '../src/assets/js/swiper.min.js'
// import '../src/assets/js/wow.min.js'
// import '../src/assets/js/gsap.min.js'
// import '../src/assets/js/ScrollSmoother.min.js'
// import '../src/assets/js/ScrollTrigger.min.js'
// import '../src/assets/js/SplitText.min.js'
// import '../src/assets/js/odometer.min.js'
// import '../src/assets/js/imagesloaded.pkgd.min.js'
// import '../src/assets/js/jquery.marquee.min.js'
// import '../src/assets/js/isotope.pkgd.min.js'
// import '../src/assets/js/jquery.magnific-popup.min.js'
// import '../src/assets/js/touchspin.js'
// import '../src/assets/js/imageRevealHover.js'
// import '../src/assets/js/TweenMax.min.js'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './routes/router.js';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


