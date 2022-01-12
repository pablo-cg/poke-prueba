const state ={
    jwtToken: null
}

const mutations={
    SET_TOKEN(state, token){
        state.jwtToken = token;
    }
}

const actions ={
    // login({commit}, user) {
    //     // Aquí vá la lógica para obtener el JWT desde el backend

    //     // Aquí guardamos el token obtenido en el store
    //     // Todo va a depender si el usuario tiene un token valido
    //     commit('SET_TOKEN', userDB.token);

    //     // Luego guardamos el token del usuario en el localStorage
    //     localStorage.setItem('pokeToken', userDB.token)
    // },


    // getUserToken({commit}){
    //     if (localStorage.getItem('pokeToken')) {
    //         // En caso de que exista un token en el localStorage se guarda en el store
    //         commit('SET_TOKEN', localStorage.getItem('pokeToken'))
    //     }else{
    //         // de lo contrario deja el token del store tal como está
    //         commit('SET_TOKEN', null)
    //     }
    // }
}

export default{
    namespaced: true,
    state, mutations, actions
}