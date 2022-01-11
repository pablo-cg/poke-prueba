<template>
    <div>
        <Menubar :model="items">
            <template #start> API-Pokémon </template>
        </Menubar>
    </div>
</template>

<script>
import Menubar from "primevue/menubar";

export default {
    name: "PokeNavBar",
    components: {
        Menubar,
    },
    props: ["items"],
};
</script>
<style scoped lang="scss">
::v-deep(.p-menubar) {
    background-color: #7c7c7c;
    font-weight: 600;
    font-size: 2rem;
    color: whitesmoke;
    height: 7rem;
    justify-content: space-between;
    padding-left: 3rem;
    padding-right: 3rem;
    margin-bottom: 3rem;
    font-family: "Rubik", sans-serif;
    .p-menuitem-text {
        color: whitesmoke !important;
        font-weight: 300;
    }
}
</style>