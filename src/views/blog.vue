<script setup>
    import BannerSections from '../components/banner-sections.vue';
    import  blog  from '../stores/blogs.js';
    import SideBarBlog from '../components/sideBarBlog.vue';

</script>
<template>
    <banner-sections />
            <!-- blog start -->
            <section class="blog pt-110 pb-130">
            <div class="container">
                <div class="row mt-none-30">
                    <div class="col-lg-8 mt-30">
                        <div class="blog-post-wrapper">
                            <article v-for="post in blog" class="single-post-item">
                                <div class="post-thumbnail-wrapper">
                                    <a href="blog-single.html"><img v-bind:src="post.img" alt=""></a>
                                </div>
                                <div class="post-content-wrapper">
                                    <ul class="post-meta ul_li">
                                        <li><span><i class="far fa-user"></i><span class="author vcard">{{ post.author }}</span></span></li>
                                        <!-- <li><a href="#!"><i class="far fa-comments"></i> Comments (3)</a></li> -->
                                        <li><span class="posted-on"><i class="far fa-clock"></i> <a href="#!">{{ post.date }}</a></span></li>
                                    </ul>
                                    <h3 class="post-title border_effect"><router-link :to="'/blog-details/' + post.slug">{{ post.title }}</router-link></h3>
                                    <div class="post-excerpt">
                                        <p>{{ post.description }}</p>
                                    </div>
                                    <div class="post-read-more">
                                        <a href="#!" class="btn-link ul_li">Continuar Leyendo <span><img src="/img/icon/arrow-right2.svg" alt=""></span></a>
                                    </div>
                                </div>
                            </article>
                            <div class="pagination_wrap pt-10">
                                <ul>
                                    <li><a href="#" class="current_page">01</a></li>
                                    <li><a href="#">02</a></li>
                                    <li><a href="#">03</a></li>
                                    <li><a class="pagination-next" href="#">Next</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <SideBarBlog />
                </div>
            </div>
        </section>
        <!-- blog end -->
</template>