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
                to: { name: "Pokemones" },
            },
            {
                label: "Favoritos",
                to: { name: "Favoritos" },
            },
        ]);

        return { items };
    },
};
</script>