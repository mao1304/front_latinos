<script setup>
import blog from '../stores/blogs.js';
import { ref } from 'vue';

const searchQuery = ref('');
const emit = defineEmits(['search']);

const handleSearch = () => {
    console.log(searchQuery.value);
    emit('search', searchQuery.value);
};
</script>

<template>
    <div class="col-lg-4 mt-30">
    <div class="blog-sidebar sidebar-area mt-none-40" style="position: sticky; top: 20px; bottom: 20px;">
        <div class="widget mt-40">
            <h2 class="widget__title">Buscar</h2>
            <form class="widget__search" @submit.prevent="handleSearch">
                    <input 
                        type="text" 
                        v-model="searchQuery"
                        placeholder="Buscar..."
                        @input="handleSearch"
                    >
                    <button type="submit"><i class="far fa-search"></i></button>
                </form>
        </div>
        <!-- <div class="widget mt-40">
            <h2 class="widget__title">
                <span>Categoría</span>
            </h2>
            <ul class="widget__category list-unstyled">
                <li><a href="#!">Todos </a></li>
                <!-- <li><a href="#!">STRATEGY <span>(30)</span></a></li>
                <li><a href="#!">DESIGN <span>(24)</span></a></li>
                <li><a href="#!">UI/UX Experience <span>(15)</span></a></li>
                <li><a href="#!">WORK CULTURE <span>(10)</span></a></li>
                <li><a href="#!">Digital Marketing <span>(13)</span></a></li>
                <li><a href="#!">Product Design <span>(05)</span></a></li>
                <li><a href="#!">Web Development <span>(03)</span></a></li> 
            </ul>
        </div> -->
        <div class="widget mt-40">
            <h2 class="widget__title">Publicaciones recientes</h2>
            <div class="widget__post">
                <div v-for="post in blog" class="widget__post-item ul_li">
                    <div class="post-thumb">
                        <a href="blog-single.html"><img v-bind:src="post.img" alt=""></a>
                    </div>
                    <div class="post-content">
                        <div class="post-meta">
                            <a href="#!"><i class="invite-text-gr-color far fa-user"></i>{{ post.author }}</a>
                            <a href="#!"><i class="invite-text-gr-color far fa-calendar"></i>{{ post.short_date }}</a>
                        </div>
                        <h4 class="post-title border-effect-2"><a href="blog-single.html">{{ post.title }}</a></h4>
                    </div>
                </div>
            </div>
        </div>

        
        <!-- <div class="widget mt-40">
            <h2 class="widget__title">
                <span>Tags</span>
            </h2>
            <div class="tagcloud">
                <a href="#!">Design</a>
                <a href="#!">Development</a>
                <a href="#!">Startup</a>
                <a href="#!">Strategu</a>
                <a href="#!">Management</a>
                <a href="#!">UI/UX</a>
                <a href="#!">Optimization</a>
                <a href="#!">Planning</a>
            </div>
        </div> -->
    </div>
</div>
</template>

<script>
export default {
    name: 'SideBarBlog',
    // props: ['blog']
}
</script>