<template>
    <div>
        <PokeListDataView :pokemons="pokemons" />
        <div class="p-grid p-fluid poke-pages-btn">
            <div class="p-col-1" v-if="pageOffset > 0">
                <div class="p-inputgroup">
                    <Button
                        label="Anterior"
                        class="p-button-outlined"
                        @click="previousPage"
                    />
                </div>
            </div>
            <div class="p-col">
                <div class="p-inputgroup">
                    <Button label="Siguiente" @click="nextPage" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PokeService from "../service/PokeService";
import PokeListDataView from "../components/PokeListDataView.vue";
import Button from "primevue/button";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

export default {
    name: "PokeList",
    components: {
        PokeListDataView,
        Button,
    },
    setup() {
        let pokemons = ref();
        const crash = ref();
        const layout = ref("grid");
        const pageOffset = ref(0);
        const limitList = 10;

        async function getPokemons(limit, offset) {
            try {
                const { data, error } = await PokeService.getSomePokemons(
                    limit,
                    offset
                );
                if (error) throw error;
                pokemons.value = data.results;
            } catch (error) {
                crash.value = error;
            }
        }

        async function nextPage() {
            await getPokemons(limitList, pageOffset.value + 10);
            pageOffset.value += 10;
        }

        async function previousPage() {
            await getPokemons(limitList, pageOffset.value - 10);
            pageOffset.value -= 10;
        }

        onMounted(() => {
            getPokemons(limitList, pageOffset.value);
        });

        return {
            pokemons,
            layout,
            pageOffset,
            nextPage,
            previousPage,
        };
    },
};
</script>
<style lang="scss" scoped>
.poke-pages-btn {
    margin-top: 0.5rem;
}
</style>