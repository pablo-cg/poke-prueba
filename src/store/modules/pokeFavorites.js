const state = {
    pokemons: [],
}
const mutations = {
    ADD_POKEMON(state, pokemon) {
        state.pokemons.push(pokemon)
    }
}
const actions = {
    addPokemon({ commit, state }, pokemon) {
        const existingPoke = state.pokemons.find(poke => poke.name == pokemon.name);
        if (!existingPoke) {
            commit('ADD_POKEMON', pokemon);
        }
    }
}
export default {
    namespaced: true,
    state, mutations, actions
}