import { createRouter, createWebHistory } from 'vue-router'
// import { useStore } from "vuex";
import Home from '../views/Home.vue'
import PokeList from '@/views/PokeList.vue'
import PokeFavorites from '@/views/PokeFavorites.vue'

// const store = useStore();

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
        component: PokeFavorites,
        // Meta tag para bloquear la ruta
        // meta: {
        //     requireAuth: true
        // }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// router.beforeEach((to, from, next) => {
//     const isAuthRequired = to.matched.some(tags => tags.meta.requireAuth);

//     if (isAuthRequired && store.state.pokeUser.token == null) {
//         // Si la ruta está protegida y el usuario no tiene token redirige al inicio
//         next({ name: 'Home' });

//         /* Lo óptimo sería crear una vista para iniciar sesión
//         y usarla en el next en vez de mandarlo al inicio */
//     } else {
//         //Si el usuario tiene token continua a la ruta protegida
//         next()

//         /* Es necesario que se envíe el token del usuario que está en el store
//         desde las rutas protegidas hacia el endpoint del backend, de esta forma si algún
//         usuario malicioso quisiera poner un token aleatorio, de igual manera no podria
//         acceder al contenido bloqueado, sólo va a acceder a la ruta protegida
//         pero no al contenido que proviene del backend */

//         /* Si el proyecto crece, esta protección debería realizarse en el componente a proteger */
//     }
// })

export default router
