import { createStore } from 'vuex'
import products_1_module from './modules/products_1'
import products_2_module from './modules/products_2'
import products_module from './modules/products'

const store = createStore({
  modules: {
    products_1_module,
    products_2_module,
    products_module,
  }
})

export default store
