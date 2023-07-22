const state = {
    products_1: [
        {
            id: 1,
            title: "product_1",
            price: "200"
        },
        {
            id: 2,
            title: "product_2",
            price: "250"
        }
    ]
};

const getters = {
    allProducts_1: state => state.products_1,
};

const mutations = {};
const actions = {};

export default { state, getters, mutations, actions }