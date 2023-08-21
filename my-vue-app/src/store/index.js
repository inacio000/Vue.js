import { createStore } from 'vuex'

export default createStore({
  state: {
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
    // Composto por uma serie de funções normais
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
  actions: {
  },
  // modules: {
  // }
})
