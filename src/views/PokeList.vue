<template>
    <div>
        <PokeListDataView :pokemons="pokemons" @getPokeInfo="getPokeInfo" />
        <div class="p-grid p-fluid poke-pages-btn">
            <div class="p-col-1" v-if="pageOffset > 0">
                <div class="p-inputgroup">
                    <Button
                        label="Anterior"
                        class="p-button-sm p-button-outlined poke-prev-btn"
                        @click="previousPage"
                    />
                </div>
            </div>
            <div class="p-col">
                <div class="p-inputgroup">
                    <Button
                        label="Siguiente"
                        class="p-button-sm poke-next-btn"
                        @click="nextPage"
                    />
                </div>
            </div>
        </div>
    </div>
    <PokeListInfoTable />
</template>

<script>
import PokeService from "../service/PokeService";
import PokeListDataView from "../components/PokeListDataView.vue";
import PokeListInfoTable from "../components/PokeListInfoTable.vue";
import Button from "primevue/button";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

export default {
    name: "PokeList",

    components: {
        PokeListDataView,
        PokeListInfoTable,
        Button,
    },

    setup() {
        const pokemons = ref();
        const pokeInfoList = ref([]);
        const crash = ref();
        const layout = ref("grid");
        const pageOffset = ref(0);
        const limitList = 10;
        const store = useStore();

        const getPokemons = async (limit, offset) => {
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
        };

        const nextPage = async () => {
            await getPokemons(limitList, pageOffset.value + 10);
            pageOffset.value += 10;
        };

        const previousPage = async () => {
            await getPokemons(limitList, pageOffset.value - 10);
            pageOffset.value -= 10;
        };

        const getPokeInfo = async (pokeName) => {
            try {
                const { data, error } = await PokeService.getPokemon(pokeName);
                if (error) throw error;
                store.dispatch("pokeInfoList/addPokemon", data);
            } catch (error) {
                crash.value = error;
            }
        };

        onMounted(() => {
            getPokemons(limitList, pageOffset.value);
        });

        return {
            pokemons,
            layout,
            pageOffset,
            nextPage,
            previousPage,
            getPokeInfo,
            pokeInfoList,
        };
    },
};
</script>
<style lang="scss" scoped>
.poke-pages-btn {
    margin-top: 0.5rem;
}

::v-deep(.p-button-sm.p-button-outlined.poke-prev-btn) {
    color: #7c7c7c !important;
    width: 110px !important;
    font-family: "Rubik", sans-serif;
}

::v-deep(.p-button-sm.poke-next-btn) {
    width: 110px !important;
    background-color: #7c7c7c !important;
    font-family: "Rubik", sans-serif;
}
</style>