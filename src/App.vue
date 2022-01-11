<template>
    <div id="app">
        <PokeNavBar :items="items" />
        <div class="view">
            <router-view />
        </div>
    </div>
</template>

<script>
import PokeNavBar from "./components/PokeNavBar.vue";
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
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600&display=swap');

#app {
    font-family: 'Rubik', sans-serif;
}

.view{
    margin: 3rem
}
</style>