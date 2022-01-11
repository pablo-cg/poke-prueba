<template>
    <PokeNavBar :items="items"/>
    <router-view />
</template>

<script>
import PokeNavBar from './components/PokeNavBar.vue'
import { ref } from "vue";

export default {
    components: {
        PokeNavBar,
    },
    setup() {
        const items = ref([
            {
                label: "Inicio",
                to: { name: "Home" },
            },
            {
                label: "Pokemones",
                to: { name: "PokeList" },
            },
            {
                label: "Favoritos",
                to: { name: "PokeFavorites" },
            },
        ]);

        return { items };
    },
};
</script>