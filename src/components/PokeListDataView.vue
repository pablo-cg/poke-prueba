<template>
    <div v-if="pokemons">
        <Fieldset legend="Lista de Pokemones">
            <DataView :value="pokemons" :layout="layout" :rows="5">
                <template #grid="slotProps">
                    <div class="p-col-6">
                        <div class="p-grid">
                            <div class="p-col">
                                <div class="box poke-name">
                                    {{ slotProps.data.name }}
                                </div>
                            </div>
                            <div class="p-col to-end">
                                <div class="box">
                                    <Button
                                        label="Info"
                                        icon="pi pi-info-circle"
                                        class="p-button-info poke-info-btn"
                                        @click="getInfo(slotProps.data)"
                                    />
                                </div>
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
    setup() {
        const layout = ref("grid");

        function getInfo(pokeData) {
            console.log(pokeData);
        }

        return {
            layout,
            getInfo,
        };
    },
};
</script>

<style scoped lang="scss">
.to-end {
    text-align: end;
    padding-right: 20%;
}

.poke-info-btn {
    background-color: #17a2b8 !important;
    border-radius: 10px !important;
}

.poke-name {
    text-transform: capitalize;
    font-size: 1.3rem;
}
</style>