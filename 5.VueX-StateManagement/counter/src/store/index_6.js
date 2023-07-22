import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
    myColor: 'default black'
  },
  mutations: {
    add(state,base){
      state.counter = state.counter + base
    },
    sub(state,base){
      state.counter = state.counter - base
    }
  },
  actions: {
    async getIncreaseBase({commit}){
      const response = await axios.get('https://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=1')
      commit('add',response.data[0])
    },
    async getDecreaseBase({commit}){
      const response = await axios.get('https://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=1')
      commit('sub',response.data[0])
    }
  },
  getters: {
    squareCounter: state => state.counter ** 2
  },
  modules: {
  }
})



// Different section(objects) in our veuX store:
  // - state: store data of our app
  // - mutations: defined methods to mutate/change data_state.(only way to change or mutate the data in the state is by triggering/commiting a mutations_method. We can commit the mutation from anywhere in our app. We cannot trigger asynchronous code inside mutations. Only trigger synchronous code.) commit ~ triggering mutation
  // - actions: defined the asynchronous operation(Api call). They cannot change/mutate data in the state but can access the data in the state. If we need to change the data_state from the actions we need to commit/trigger mutations_methods. We call triggering actions as dispatching.
    // - Therefore we commit mutations and dispatch actions.
  // - getters: defined methods to get data from our store_state. we can directly get data from our store using $store but using getter methods we can change/manipulate/filter the data before rendering data to components.
  // - modules: include various breaked_individual_store_modules, with their own state,mutations,actions and getters.


  // $store.state
  // $store.commit('add')