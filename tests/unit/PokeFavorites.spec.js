import PokeFavorites from '@/views/PokeFavorites.vue'
import { mount } from "@vue/test-utils";
import store from '@/store'
import router from '@/router'

const mountPokeFavorites = () => {
    return mount(PokeFavorites, {
        global: {
            plugins: [store, router]
        },
    })
}

describe('PokeFavorites', () => {
    it('debe mostrar los pokemones favoritos', () => {
        const wrapper = mountPokeFavorites();

        expect(wrapper.exists()).toBeTruthy()
    })

    describe('El Titulo', () => {
        it('se muestra con el mensaje correcto cuando no hay pokemones favoritos', () => {
            const wrapper = mountPokeFavorites();

            const title = wrapper.find('[id=titulo]')
            expect(title.exists()).toBeTruthy()
            expect(title.text()).toContain('No tienes pokemones favoritos')
        })
    })
})