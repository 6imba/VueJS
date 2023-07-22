import axios from 'axios';

const state = {
    products_2: [],
    update: false, 
    fruit: "apple"
};

const getters = {
    individualState: state => {
        // alert("getters!")
        return state
    },
    allProducts_2: state => {
        // alert("getters!")
        return state.products_2
    },
    updateState: state => state.update,
    // getFruit: state => state.fruit,
};

const mutations = {
    setProducts: (state, resData) => {
        state.products_2 = resData
    },
    addNewProduct: (state, newProduct) => {
        state.products_2.unshift(newProduct)
    },
    editUpdateStatus: state => state.update = !state.update,
    editProduct: (state, productId) => {
        state.products_2 =  state.products_2.filter(product => product.id != productId)
        // const newProductList = state.products_2.filter(product => product.id != productId)
        // console.log(newProductList)
        // state.products_2 = newProductList
    },
    removeProduct: (state, productId) => {
        state.products_2 =  state.products_2.filter(product => product.id != productId)
        // const newProductList = state.products_2.filter(product => product.id != productId)
        // console.log(newProductList)
        // state.products_2 = newProductList
    },
};

const actions = {
    async getAllProducts({commit}){
        let response = await axios.get("http://localhost:3000/products")
        commit("setProducts", response.data)
    },
    async addProduct({commit},newProduct){
        let response = await axios.post("http://localhost:3000/products",newProduct)
        commit("addNewProduct", response.data)
    },
    async updateProduct({commit},productId){
        commit("editUpdateStatus")
        console.log(productId)
        // await axios.put(`http://localhost:3000/products/${productId}`,updateData)
        // commit("editProduct", productId,updateData)
    },
    async deleteProduct({commit},productId){
        await axios.delete(`http://localhost:3000/products/${productId}`)
        commit("removeProduct", productId)
    },
};

export default { state, getters, mutations, actions }