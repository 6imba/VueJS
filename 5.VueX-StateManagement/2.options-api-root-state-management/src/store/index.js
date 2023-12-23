import {createStore} from 'vuex';
const store = createStore({
    state: {
        stateProperty_1: 0,
    },
    mutations: {
        changeProperty1(state){
            state.stateProperty_1 += 5
        },
        change2Property1(state,param1){
            console.log(param1)
            state.stateProperty_1 += param1
        },
        change3Property1(state,payload){
            state.stateProperty_1 = state.stateProperty_1 + payload.a + payload.b
        }
    },
    actions: {
        async userAPI(){
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
            console.log(response)
        }
    },
    getters: {
        squareStateProp1(state){
            return state.stateProperty_1**2
        },
        cubeStateProp1(state){
            return state.stateProperty_1**3
        },
    },
    modules: {},
})
export default store
