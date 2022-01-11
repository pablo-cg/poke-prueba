import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PokeList from '@/views/PokeList.vue'
import PokeFavorites from '@/views/PokeFavorites.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/pokemones',
        name: 'PokeList',
        component: PokeList
    },
    {
        path: '/favoritos',
        name: 'PokeFavorites',
        component: PokeFavorites
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
