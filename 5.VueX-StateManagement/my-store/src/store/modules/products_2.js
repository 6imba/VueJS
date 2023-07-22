import axios from 'axios';

const state = {
    // products_2: []
};

// const getters = {
//     allProducts_2: state => {
//         // alert("getters!")
//         return state.products_2
//     },
// };

const mutations = {
    setProducts: (state, resData) => {
        state.products_2 = resData
    },
};

const actions = {
    async getAllProducts({commit}){
        let response = await axios.get("http://localhost:3000/products_2")
        console.log(response)
        console.log(response.data)
        // commit("setProducts", response.data)
        // commit("setProducts", 2)
        commit("setProducts", response.data)
    }
};

// export default { state, getters, mutations, actions }
export default { state, mutations, actions }