import { createStore } from 'vuex'
import pokeFavorites from './modules/pokeFavorites'
import pokeInfoList from './modules/pokeInfoList'

export default createStore({
    modules: {
        pokeFavorites,
        pokeInfoList
    }
})
