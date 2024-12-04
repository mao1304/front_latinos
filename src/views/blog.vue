<script setup>
import BannerSections from '../components/banner-sections.vue';
import  blog  from '../stores/blogs.js';
import SideBarBlog from '../components/sideBarBlog.vue';
import { ref, computed } from 'vue';

// Estado para la paginación
const currentPage = ref(1);
const itemsPerPage = 2;

// Computar el total de páginas
const totalPages = computed(() => Math.ceil(blog.length / itemsPerPage));

// Computar los posts que se deben mostrar en la página actual
const paginatedPosts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return blog.slice(start, end);
});

// Método para cambiar de página
const changePage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
};

// Método para ir a la siguiente página
const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

// Método para ir a la página anterior
const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};
</script>

<template>
    <banner-sections />
    <!-- blog start -->
    <section class="blog pt-110 pb-130">
        <div class="container">
            <div class="row mt-none-30">
                <div class="col-lg-8 mt-30">
                    <div class="blog-post-wrapper">
                        <article v-for="post in paginatedPosts" :key="post.slug" class="single-post-item">
                            <div class="post-thumbnail-wrapper">
                                <a href="blog-single.html"><img :src="post.img" alt=""></a>
                            </div>
                            <div class="post-content-wrapper">
                                <ul class="post-meta ul_li">
                                    <li><span><i class="far fa-user"></i><span class="author vcard">{{ post.author }}</span></span></li>
                                    <li><span class="posted-on"><i class="far fa-clock"></i> <a href="#!">{{ post.date }}</a></span></li>
                                </ul>
                                <h3 class="post-title border_effect">
                                    <router-link :to="'/blog-details/' + post.slug">{{ post.title }}</router-link>
                                </h3>
                                <div class="post-excerpt">
                                    <p>{{ post.description }}</p>
                                </div>
                                <div class="post-read-more">
                                    <a href="#!" class="btn-link ul_li">Continuar Leyendo <span><img src="/img/icon/arrow-right2.svg" alt=""></span></a>
                                </div>
                            </div>
                        </article>
                        
                        <!-- Paginación -->
                        <div class="pagination_wrap pt-10" v-if="totalPages > 1">
                            <ul>
                                <li v-if="currentPage > 1">
                                    <a href="#" @click.prevent="prevPage">Prev</a>
                                </li>
                                <li v-for="page in totalPages" :key="page">
                                    <a 
                                        href="#" 
                                        @click.prevent="changePage(page)"
                                        :class="{ current_page: currentPage === page }"
                                    >
                                        {{ String(page).padStart(2, '0') }}
                                    </a>
                                </li>
                                <li v-if="currentPage < totalPages">
                                    <a class="pagination-next" href="#" @click.prevent="nextPage">Next</a>
                                </li>
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

<style scoped>
.pagination_wrap ul li a {
    cursor: pointer;
}
</style>