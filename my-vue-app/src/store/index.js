import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      firstName: 'Inacio',
      lastName: 'Raimundo',
      email: 'raimundo@gmail.com'
    },
    products: [],
    cart: [],
  },
<<<<<<< HEAD
  mutations: {
    // Composto por uma serie de funções normais
    storeUser(state, data) {
      state.user = data;
      console.log('store user', data)
    }
  },
  actions: {
  },
  getters: {
  },
  // modules: {
  // }
=======
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
>>>>>>> c6e24e6bbd6df24b048f7cae81e3956125d32c9c
})
