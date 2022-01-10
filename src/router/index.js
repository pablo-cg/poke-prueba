import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pokemones from '@/views/Pokemones.vue'
import Favoritos from '@/views/Favoritos.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/pokemones',
        name: 'Pokemones',
        component: Pokemones
    },
    {
        path: '/favoritos',
        name: 'Favoritos',
        component: Favoritos
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
