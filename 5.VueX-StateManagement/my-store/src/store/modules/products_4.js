import axios from 'axios';

const state = {};

const mutations = {
    setProducts: (state, resData) => {
        state.products_2 = resData
    },
};

const actions = {
    async getAllProducts({commit}){
        let response = await axios.get("http://localhost:3000/products")
        console.log(response)
        commit("setProducts", response.data)
    }
};

export default { state, mutations, actions }
