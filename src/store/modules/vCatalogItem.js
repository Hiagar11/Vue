import axios from "axios";

export default {
    actions: {
        GET_ARTICLE_FROM_DB({commit}) {
            return axios('http://localhost:3000/products', {
                method: "GET"
            }).then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products)
            })
        }
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products.data;
        }
    },

    state: {
        products: []
    },

    getters: {
        getArticle(state) {
            return state.products;
        }
    },
}