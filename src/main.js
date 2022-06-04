import { createApp } from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'
import './assets/styles/styles.scss'
import axios from 'axios'


const store = createStore({
    state: {
        products: []
    }, // статичные данные

    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        }
    }, // Синхронны

    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://localhost:3000/products', {
                method: "GET"
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data)
                    return products;
                })
                .catch((error) => {
                console.log(error)
                    return error;
            })
        }
    },  // Асинхронны

    getters: {
        PRODUCTS(state) {
            return state.products
        }
    } // Короткий путь до статичных данных !NB
})

createApp(App)
    .use(store)
    .mount('#app')
