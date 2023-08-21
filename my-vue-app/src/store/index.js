import { createStore } from 'vuex'

export default createStore({
  state: { // Para leituras
    user: {
      firstName: 'Inacio',
      lastName: 'Raimundo',
      email: 'raimundo@gmail.com'
    },
    products: [
      {
        id: 1,
        name: 'Ball',
        price: 100
      },
      {
        id: 2,
        name: 'T-Shirt',
        price: 200
      },
      {
        id: 3,
        name: 'Short',
        price: 300
      }
    ],
    cart: [],
  },
  mutations: {
    // Composto por uma serie de funções normais, desparadas usando commits
    storeUser(state, data) {
      state.user = data;
      console.log('store user', data)
    },

    addProduct(state, data) {
      state.cart.push(data);
    },

    removeProduct(state, id) {
      const index = state.cart.findIndex(product => product.id === id);
      state.cart.splice(index, 1);
    }
  },
  getters: {
    total(state) {
      // dependence
      return state.cart.reduce((total, item) => total += item.price, 0);
    }
  },
  actions: { // return a promise
    storeUser({ commit }, data) {
      console.log(commit, data);
      
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('storeUser', data);
          resolve()
          console.log('here')
        }, 3000)
      })
    }
  },
  // modules: {
  // }
})
