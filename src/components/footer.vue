<script setup>
const year = new Date().getFullYear();
</script>
<template>
        <footer class="dm-footer pos-rel">
        <div class="dm-footer-line pt-125 pb-120">
            <div class="container">
                <div class="row mt-none-40">
                    <div class="col-lg-4 col-md-6 footer-col mt-40">
                        <div class="footer-widget">
                            <div class="footer-logo mb-30">
                                <a href="index.html"><img src="/img/logo/logo.svg" alt=""></a>
                            </div>
                            <p>Auxa, creativity knows no limits, and we are <br> committed to bringing your brand's story to life in <br> ways that resonate and endure."</p>
                            <ul class="social-list ul_li mt-40">
                                <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#!"><i class="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 footer-col mt-40">
                        <div class="footer-widget">
                            <h3 class="widget-title">About US</h3>
                            <ul class="footer-links">
                                <li><a href="#!">About US</a></li>
                                <li><a href="#!">Contact</a></li>
                                <li><a href="#!">Faq</a></li>
                                <li><a href="#!">Our Company</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 footer-col mt-40">
                        <div class="footer-widget">
                            <h3 class="widget-title">MORE INFO</h3>
                            <ul class="footer-links">
                                <li><a href="#!">Career</a></li>
                                <li><a href="#!">Team</a></li>
                                <li><a href="#!">Services</a></li>
                                <li><a href="#!">Portfolio</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 footer-col mt-40">
                        <div class="footer-widget">
                            <h3 class="widget-title">Newsletter</h3>
                            <p>Frigate mackerel snake mackerel</p>
                            <form class="footer-newsletter mt-40" action="#">
                                <input type="text" placeholder="Email">
                                <button>Send <img src="/img/icon/arrow-right3.svg" alt=""></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="footer-copyright text-center">
                Copyright © {{ year }} <a href="">Entrenando Latinos In Roofing</a><br>
                Powered by <a href="">Entrenando Latinos In Roofing</a>
            </div>
        </div>
        <div class="dm-footer-bg_icon">
            <img src="/img/digital-marketing/icon/dm-footer.png" alt="">
        </div>
    </footer>
    <!-- footer start -->
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer-copyright a {
  color: var(--color-primary);
}
</style>