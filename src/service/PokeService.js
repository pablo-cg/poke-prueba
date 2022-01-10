import axios from "axios";

const apiPokemon = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {

    async getAllPokemons(){
        return await apiPokemon.get('/pokemon');
    },

    async getSomePokemons(limit, offset){
        return await apiPokemon.get(`/pokemon?limit=${limit}&offset=${offset}`)
    },

    async getPokemon(name){
        return await apiPokemon.get(`/pokemon/${name}`)
    }
}