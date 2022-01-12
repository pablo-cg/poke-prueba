import { mount } from "@vue/test-utils";
import PokeFavoriteCard from '@/components/PokeFavoriteCard.vue'

describe('PokeFavoriteCard', () => {
    it('muestra la imagen del pokémon favorito', () => {
        const pokemon = {
            name: "ditto",
            sprites: {
                other: {
                    home: {
                        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png"
                    }
                }
            }
        }
        const wrapper = mount(PokeFavoriteCard, {
            props: {
                pokemon
            }
        })

        const wrapperHtml = wrapper.html()
        expect(wrapperHtml).toContain(pokemon.name)
        expect(wrapperHtml).toContain(pokemon.sprites.other.home.front_default)
    })
})