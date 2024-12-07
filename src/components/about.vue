<template>
    <!-- about start  -->
    <section class="about pos-rel" style="overflow-x: hidden;">
        <div class="container">
            <div class="section-title section-title--dm mb-195">
                <span class="sub-title mb-45 wow fadeInRight" data-wow-duration=".7s">about agency</span>
                <div class="clearfix"></div>
                <h3 class="title wow skewIn">create <span>special Things</span></h3>
            </div>
            <div class="section-title">
                <h3 class="title title-dm"><span>“Somos forjadores de sueños </span> <span> y victorias mediante la</span> <span> <span class="sp-one"> constancia y la disciplina”</span></span><span style="font-size: 16px; text-align: end;">"Entrenando Latinos In Roofing"</span></h3>
            </div>
            <div class="dm-about--counter pt-80">
                <div class="dm-about--wrapper">
                    <div class="inner ul_li mb-55 cont">
                        <div>
                            <div class="icon">
                                <img src="/img/icon/hero01.svg" alt="">
                            </div>
                            <div class="holder">
                                <h3 class="number xb-odm"><NumberCounter :end-value="30" prefix="+"/></h3>
                                <p class="content">Entrenamientos realizados</p>
                            </div>
                        </div>
                        <div>
                            <div class="icon">
                                <img src="/img/icon/hero01.svg" alt="">
                            </div>
                            <div class="holder">
                                <h3 class="number xb-odm"><NumberCounter :end-value="2000" suffix="K" prefix="+"/></h3>
                                <p class="content">Latinos entrenados</p>
                            </div>
                        </div>

                    </div>
                    <div class="inner ul_li mb-55 cont">
                        <div>
                        <div class="icon">
                            <img src="/img/icon/hero02.svg" alt="">
                        </div>
                        <div class="holder">
                            <h3 class="number xb-odm"><NumberCounter :end-value="50" prefix="+"/></h3>
                            <p class="content">compañías con soporte</p>
                        </div>
                    </div>
                        <div>
                            <div class="icon">
                                <img src="/img/icon/hero01.svg" alt="">
                            </div>
                            <div class="holder">
                                <h3 class="number xb-odm"><NumberCounter :end-value="1000" suffix="M" prefix="+$" /></h3>
                                <p class="content">Dólares en la industria</p>
                            </div>
                        </div>
                    </div>
                </div>
                <span class="dm-about--content d-block pt-45">
                    En Entrenando Latinos In Roofing ofrecemos entrenamiento práctico y teórico en ventas por insurance claim,
                     estrategias y posicionamiento de marca. Ayudamos a hispanos a dejar de subcontratar y convertirse en
                      contratistas exitosos, dueños de su propia compañía y con resultados tangibles.
                </span>
            </div>
            <div class="dm-about--button xb-element-parallax">
                <a href="about.html" class="circle-btn port-btn about-btn dm-btn">
                    <div class="button__bg"></div>Explore <br> more
                </a>
            </div>
        </div>
        <div class="dm-about--image bg_img"
        :style="{ backgroundImage: `url('https://html.xpressbuddy.com/auxa/assets/img/digital-marketing/about/about-img01.jpg')` }"
            ></div>
    </section>
    <!-- about end  -->
</template>
<script setup lang="ts" >
import NumberCounter from './NumberCounter.vue';
</script>
<!-- <script>
import { onMounted } from 'vue';
import NumberCounter from './NumberCounter.vue';

export default {
  name: 'About',
  setup() {

    onMounted(() => {
	/*------------------------------------------
	= counter
	-------------------------------------------*/
	if ($(".xbo").length) {
		$('.xbo').appear();
		$(document.body).on('appear', '.xbo', function (e) {
			var odo = $(".xbo");
			odo.each(function () {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
			window.xboOptions = {
				format: 'd',
			};
		});
	}

	if ($(".xbo_trigger").length) {
		var odo = $(".xbo_trigger");
		odo.each(function () {
			var countNumber = $(this).attr("data-count");
			var odometerInstance = new Odometer({
				el: this,
				value: 0,
				format: 'd',
			});
			odometerInstance.render();
			odometerInstance.update(countNumber);
		});

		$('.xbo_trigger').appear();
		$(document.body).on('appear', '.xboh', function (e) {
			// This event handler can be empty or used for additional functionality if needed
		});
	}
    });
  },
};
</script> -->

<style scoped>
.cont{
    display: flex;
    flex-direction: row; 
    justify-content: space-around;
}

@media  (max-width: 1200px) {
    .cont{
        padding-left: 60px;
        justify-content: flex-start;

    }
    
}
</style>

