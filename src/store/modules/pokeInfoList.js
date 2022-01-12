const state = {
    pokemons: [],
};
const mutations = {
    ADD_POKEMON(state, pokemon) {
        state.pokemons.push(pokemon)
    },
    REMOVE_POKEMON(state, pokeName) {
        state.pokemons = state.pokemons.filter(poke => poke.name != pokeName);
    },
};
const actions = {
    addPokemon({ commit, state }, pokemon) {
        const existingPoke = state.pokemons.find(poke => poke.name == pokemon.name);
        if (!existingPoke) {
            commit('ADD_POKEMON', pokemon);
        }
    },

    removePokemon({ commit }, pokeName) {
        commit('REMOVE_POKEMON', pokeName);
    },
}


export default {
    namespaced: true,
    state, mutations, actions
}