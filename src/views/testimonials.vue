<script setup>
import BannerSections from '../components/banner-sections.vue';
</script>

<template>
    <BannerSections />
            <!-- shop single start -->
            <section class="shop-single-section pt-110 pb-90">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="product-single-wrap mb-30">
                            <div class="product_details_img ">
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="pl_thumb">
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/VQ_Lht6eO2M?si=1MAX7qSi9SnqFEzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 product-details-col d-flex align-items-center">
                        <div class="product-details mb-30">
                            <h2>Así Cambió Su Vida: Una Historia Real de Perseverancia y Éxito | Con Byron Rodriguez</h2>
                            <p>Estaremos compartiendo la inspiradora historia de vida de Byron Rodríguez. 
                                🌟✨ ¡Te esperamos para escuchar su increíble trayectoria!</p>
                        </div> 
                    </div> <!-- end col -->
                </div>

                
            </div> <!-- end of container -->
        </section>
        <!-- shop single start -->
        <section class="shop-single-section pb-90">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 product-details-col d-flex align-items-center">
                        <div class="product-details mb-30">
                            <h2>Una Historia de Superación y Liderazgo</h2>

                            <p>Hoy Nelson Chávez nos comparte su inspiradora historia de vida: los desafíos, los obstáculos y cómo los superó para convertirse en un gran líder en la industria.</p>

                            
                        </div> 
                    </div> 
                    <div class="col-md-6">
                        <div class="product-single-wrap mb-30">
                            <div class="product_details_img ">
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="pl_thumb">
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/JrtKZ8iKRjg?si=G0scYgx9XGAvn46O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                
            </div> <!-- end of container -->
        </section>
</template>

<style scoped>  
  .shop-single-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #d69d15 0%, #fed95d 100%);
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  }
  
</style>