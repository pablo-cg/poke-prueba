<template>
    <div v-if="pokemons">
        <Fieldset legend="Lista de Pokemones">
            <DataView :value="pokemons" :layout="layout">
                <template #grid="slotProps">
                    <div class="p-col-6">
                        <div class="p-grid">
                            <div class="p-col">
                                {{ slotProps.data.name }}
                            </div>
                            <div class="p-col to-end">
                                <Button
                                    label="Info"
                                    class="p-button-sm"
                                    @click="sendPokeName(slotProps.data.name)"
                                />
                            </div>
                        </div>
                    </div>
                </template>
            </DataView>
        </Fieldset>
    </div>
</template>

<script>
import Fieldset from "primevue/fieldset";
import DataView from "primevue/dataview";
import Button from "primevue/button";
import { ref } from "@vue/reactivity";

export default {
    name: "Pokemones",

    components: {
        Fieldset,
        DataView,
        Button,
    },

    props: ["pokemons"],

    emits: ["getPokeInfo"],

    setup(props, { emit }) {
        const layout = ref("grid");

        const sendPokeName = (pokeName) => {
            emit("getPokeInfo", pokeName);
        };

        return {
            layout,
            sendPokeName,
        };
    },
};
</script>

<style scoped lang="scss">
.to-end {
    text-align: end;
    margin-right: 3rem;
}

::v-deep(.p-button.p-button-sm) {
    background-color: #17a2b8 !important;
    border-radius: 8px !important;
    width: 80px;
    font-family: "Montserrat", sans-serif;
}

::v-deep(.p-dataview-grid) {
    text-transform: capitalize;
    font-size: 1.2rem;
    font-family: "Montserrat", sans-serif;
}

::v-deep(.p-fieldset) {
    border-color: #7c7c7c;
    .p-fieldset-content {
        margin-left: 3rem;
        padding: 0;
    }
}
</style>