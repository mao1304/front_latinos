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
        meta: { title: "Nuestros Blog's" },
    },
    {
        path: '/blog-details/blog-1',
        name: 'blog-1',
        component: () => import('../views/blog1.vue'),
        meta: { title: ' Cuando la Determinación Supera los Obstáculos' },
    },
    {
        path: '/blog-details/blog-2',
        name: 'blog-2',
        component: () => import('../views/blog2.vue'),
        meta: { title: '{{ post.title }}' },
    },
    {
        path: '/blog-details/blog-3',
        name: 'blog-3',
        component: () => import('../views/blog3.vue'),
        meta: { title: '{{ post.title }}' },
    },
    {
        path: '/blog-details/blog-4',
        name: 'blog-4',
        component: () => import('../views/blog4.vue'),
        meta: { title: '{{ post.title }}' },
    },
    {
        path: '/nosotros',
        name: 'about',
        component: () => import('../views/about.vue'),
        meta: { title: 'Acerca de nosotros' },
    },
    {
        path: '/detalle-servicio-seguros',
        name: 'seguros',
        component: () => import('../views/service1.vue'),
        meta: { title: 'Nuestro Servicio de seguros' },
    },
    {
        path: '/detalle-servicio-Capacitacion',
        name: 'Capacitacion',
        component: () => import('../views/service2.vue'),
        meta: { title: 'Nuestro Servicio de Capacitación' },
    },
    {
        path: '/detalle-servicio-marketing',
        name: 'marketing',
        component: () => import('../views/service3.vue'),
        meta: { title: 'Nuestro Servicio de Marketing' },
    },
    {
        path: '/detalle-servicio-suplementos',
        name: 'suplementos',
        component: () => import('../views/service4.vue'),
        meta: { title: 'Nuestro Servicio de Suplementos' },
    },
    {
        path: '/testimonios',
        name: 'testimonios',
        component: () => import('../views/testimonials.vue'),
        meta: { title: 'Historias de vida' },
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
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {
                top: 0,
                behavior: 'smooth', // Desplazamiento suave
            };
        }
    },
});

export default router;