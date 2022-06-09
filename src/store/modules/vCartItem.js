export default {
    actions: {
        ADD_TO_CART({commit}, product) {
            commit('SET_CART', product)
        },
        DELETE_DROM_CART({commit}, index) {
            commit('REMOVE_FROM_CART', index)
        },
        INCREMENT({commit}, index) {
            commit('INCREMENT', index)
        },
        DECREMENT({commit}, index) {
            commit('DECREMENT', index)
        }
    },
    mutations: {
        SET_CART: (state, product) => {
            if (state.cart.length) {
                let isProductExist = false;
                state.cart.map(function (item) {
                    if(item.article === product.article) {
                        isProductExist = true;
                        item.quantity ++
                    }
                })
                if(!isProductExist) {
                    product.quantity = 1
                    state.cart.push(product)
                }
            } else {
                product.quantity = 1
                state.cart.push(product)
            }

        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        },
        INCREMENT: (state, index) => {
            state.cart[index].quantity++
        },
        DECREMENT: (state, index) => {
            if (state.cart[index].quantity > 1) {
                state.cart[index].quantity--
            }
        },
    },

    state: {
        cart: [],
    },

    getters: {
        CART(state) {
            return state.cart
        },
    },
}