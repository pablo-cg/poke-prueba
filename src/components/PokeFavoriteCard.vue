<template>
    <Fieldset :legend="pokemon.name">
        <img :src="pokeImage" :alt="pokemon.name" width="250">
    </Fieldset>
</template>

<script>
import Fieldset from 'primevue/fieldset';
import { computed } from '@vue/reactivity';
export default {
    props:['pokemon'],
    components :{
        Fieldset
    },
    setup(props){
        const pokeImage = computed(()=>{
            return props.pokemon.sprites.other.home.front_default
        })

        return {
            pokeImage
        }
    }
}
</script>
<style scoped lang="scss">
::v-deep(.p-fieldset-legend){
    text-transform: capitalize;
}

::v-deep(.p-fieldset-content){
    text-align: center;
}
</style>