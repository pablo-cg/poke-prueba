import { createStore } from 'vuex'

export default createStore({
    state: {
        pokeInfoList: [],
        pokeFavList: [],
    },
    mutations: {
        ADD_TO_INFOLIST(state, pokemon) {
            state.pokeInfoList.push(pokemon)
        },
        REMOVE_FROM_INFOLIST(state, pokeName) {
            state.pokeInfoList = state.pokeInfoList.filter(poke => poke.name != pokeName);
        },
        ADD_TO_FAVLIST(state, pokemon) {
            state.pokeFavList.push(pokemon)
        }
    },
    actions: {
        addPokeToList({ commit, state }, pokemon) {
            const existingPoke = state.pokeInfoList.find(poke => poke.name == pokemon.name);
            if (!existingPoke) {
                commit('ADD_TO_INFOLIST', pokemon);
            }
        },

        removePokeFromList({ commit }, pokeName) {
            commit('REMOVE_FROM_INFOLIST', pokeName);
        },

        addPokeToFavList({ commit, state }, pokemon) {
            const existingPoke = state.pokeFavList.find(poke => poke.name == pokemon.name);
            if (!existingPoke) {
                commit('ADD_TO_FAVLIST', pokemon);
            }
        }
    },
    modules: {
    }
})
