<template>
    <div v-if="favoritePoke.length">
        <h1 id="titulo">Tus Favoritos</h1>
        <div style="margin-top: 0.5em">
            <div class="p-grid">
                <div
                    class="p-col-6"
                    v-for="pokemon in favoritePoke"
                    :key="pokemon.id"
                >
                    <div class="box">
                        <PokeFavoriteCard data-test-id="pokecard" :pokemon="pokemon" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <h1 id="titulo">No tienes pokemones favoritos</h1>
    </div>
</template>
<script>
import PokeFavoriteCard from "../components/PokeFavoriteCard.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
    name: "PokeFavorites",
    components: { PokeFavoriteCard },
    setup() {
        const store = useStore();

        const favoritePoke = computed(() => store.state.pokeFavorites.pokemons);

        return {
            favoritePoke,
        };
    },
};
</script>
<style scoped lang="scss">
#titulo {
    font-weight: 400;
}
</style>