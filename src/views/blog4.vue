<script setup>
import sideBarBlog from '@/components/sideBarBlog.vue';
import BannerSections from '../components/banner-sections.vue';
</script>
<template>

    <section class="breadcrumb pt-190 pb-120" :class="{ 'breadcrumb--active': isActive }">
        <div class="container">
            <div class="breadcrumb__content text-center">
                <!-- <h2 class="breadcrumb__title" v-if="$route.path.startsWith('/blog-details')">{{ $route.meta.title || 'Página' }}</h2> -->
                <h2 class="breadcrumb__title">{{ $route.meta.title || 'Página' }}</h2>
                <ul class="breadcrumb__list">
                    <li class="breadcrumb-item">
                        <router-link to="/"><span>Inicio</span></router-link>
                    </li>
                    <li v-if="$route.path.startsWith('/blog-details')" class="breadcrumb-item">
                        <router-link to="/blog"><span>blog's</span></router-link>
                    </li>
                    <li class="breadcrumb-item">{{ $route.meta.title || 'Página' }}</li>
                </ul>
            </div>
        </div>
    </section>

    <section class="blog pt-110 pb-130">
        <div class="container">
            <div class="row mt-none-30">
                <div class="col-lg-8 mt-30">
                    <div class="blog-post-wrapper">
                        <article class="post-details">
                            <div class="post-thumb">
                                <img src="/img/blog/post_02.jpg" alt="">
                            </div>
                            <ul class="post-meta ul_li">
                                <li><span><i class="far fa-user"></i><span class="author vcard">Admin</span></span></li>
                                <li><a href="#!"><i class="far fa-comments"></i> Comments (3)</a></li>
                                <li><span class="posted-on"><i class="far fa-clock"></i> <a href="#!">August 4,
                                            2023</a></span></li>
                            </ul>
                            <h2>Power of Digital Product Design for Series A Funding</h2>
                            <p>Financial growth and wealth accumulation are common goals for individuals and businesses
                                alike. However, navigating the complex world of finance, investments, and money
                                management can be challenging. This is where a financial consultant can make a
                                significant difference. Let's explore. </p>
                            <p>One of the key ways to grow wealth is through investments. Financial consultants are
                                experts in various investment opportunities, from stocks and bonds to real estate and
                                alternative investments. They can guide you in making informed investment decisions
                                based on your financial objectives.</p>
                            <blockquote>
                                <p>"Creativity is allowing yourself to make mistakes. You only have to do a few things
                                    right in your life so long as you don’t do too many things."</p>
                                <span>Cameron Williamson</span>
                                <div class="quote"><img src="/img/icon/b-quote.png" alt=""></div>
                            </blockquote>
                            <p>The phrase "with confidence" signifies that seeking expert guidance can provide you with
                                a sense of assurance and self-assuredness throughout the application journey. It
                                highlights that you're not alone in facing the challenges of the application process.It
                                positions expert guidance as a powerful tool that can significantly impact.</p>
                            <p>consultants provide continuous support, helping you navigate any additional requests from
                                immigration authorities and addressing any concerns that may arise during the processing
                                period.</p>
                            <div class="row align-items-center mt-none-20 mb-30">
                                <div class="col-lg-6 col-md-6 mt-30">
                                    <img src="/img/blog/post_05.jpg" alt="">
                                </div>
                                <div class="col-lg-6 col-md-6 mt-30">
                                    <ul class="post-info-list list-unstyled">
                                        <li>Personalized Financial Planning</li>
                                        <li>Expert Investment Strategies</li>
                                        <li>Tax Optimization</li>
                                        <li>Education and Awareness</li>
                                        <li>Long-Term Perspective</li>
                                        <li>Estate Planning</li>
                                    </ul>
                                </div>
                            </div>
                            <h3>Design that drives growth: a wellness
                                app</h3>
                            <p>consulting is an invaluable resource for anyone navigating the complexities of
                                international travel, work, or family reunification. By enlisting the expertise of
                                consultant, you can save time, reduce stress, and increase your chances of a successful
                                application. Make sure to do your due diligence when choosing a consultant, and you'll
                                be well on your way to realizing your global aspirations.</p>
                        </article>
                        <div class="post-footer mt-10 mb-40 ul_li_between">
                            <div class="post-tags ul_li mt-20">
                                <h5 class="tag-title">Tags:</h5>
                                <span class="tags-links">
                                    <a href="#!" rel="tag">Consulting</a>
                                    <a href="#!" rel="tag">Management</a>
                                    <a href="#!" rel="tag">Data</a>
                                </span>
                            </div>
                            <div class="social-share ul_li mt-20">
                                <h5 class="title">Share:</h5>
                                <ul class="post-share ul_li">
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#!">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#!">
                                            <i class="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#!">
                                            <i class="fab fa-pinterest"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <sideBarBlog />
            </div>
        </div>
    </section>
    <!-- blog end -->
</template>