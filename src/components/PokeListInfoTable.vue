<template>
    <div class="table-margin">
        <DataTable
            :value="pokemonInfoList"
            :paginator="true"
            :rows="5"
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            :rowsPerPageOptions="[5, 10, 15]"
            currentPageReportTemplate="Mostrando registros del {first} al {last} de un total de {totalRecords}"
        >
            <template #empty> No has seleccionado un pokémon. </template>
            <Column header="Favorito">
                <template #body="{ data }">
                    <Button
                        label="Agregar"
                        class="p-button-sm"
                        @click="addPokeToFavorites(data)"
                    />
                </template>
            </Column>
            <Column field="name" header="Nombre">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
            </Column>
            <Column field="height" header="Alto"></Column>
            <Column field="weight" header="Peso"></Column>
            <Column field="sprites.front_default" header="Imagen">
                <template #body="{ data }">
                    <img
                        :src="data.sprites.front_default"
                        :alt="data.sprites.front_default"
                        width="86"
                        style="vertical-align: middle"
                    />
                </template>
            </Column>
            <Column header="Eliminar">
                <template #body="{ data }">
                    <Button
                        icon="pi pi-trash"
                        class="p-button-rounded p-button-danger"
                        @click="deletePokemon(data.name)"
                    />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
    name: "PokeListInfoTable",
    components: {
        DataTable,
        Column,
        Button,
    },
    setup() {
        const store = useStore();
        const pokemonInfoList = computed(() => store.state.pokeInfoList);

        const deletePokemon = (name) => {
            store.dispatch("removePokeFromList", name);
        };

        const addPokeToFavorites = (pokemon) => {
            store.dispatch("addPokeToFavList", pokemon);
            deletePokemon(pokemon.name);
        };

        return {
            deletePokemon,
            pokemonInfoList,
            addPokeToFavorites,
        };
    },
};
</script>

<style lang="scss" scoped>
.table-margin {
    margin-top: 5rem;
}

::v-deep(.p-button.p-button-sm) {
    background-color: #17a2b8 !important;
    border-radius: 8px !important;
    width: 100px;
    font-family: "Rubik", sans-serif;
}

::v-deep(.p-datatable) {
    font-family: "Rubik", sans-serif;
    .p-datatable-tbody {
        text-transform: capitalize;
    }
    .p-column-title {
        font-weight: 600;
    }
}

::v-deep(.p-paginator) {
    font-family: "Rubik", sans-serif;
    .p-highlight {
        background-color: #eaeaea !important;
    }
}
</style>