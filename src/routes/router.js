import { createWebHistory, createRouter } from 'vue-router';



const routes = [
    {
        path: '/',
        name: 'inicio',
        component: () => import('../views/home.vue'),
        meta: { title: 'Inicio' },
    },
    {
        path: '/contacto',
        name: 'contacto',
        component: () => import('../views/contact.vue'),
        meta: { title: 'Contacto' },
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('../views/blog.vue'),
        meta: { title: 'Nuestros Blog' },
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: () => import('../views/404.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
});

export default router;