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
})
