export default {
    actions: {
        ADD_TO_CART({commit}, product) {
            commit('SET_CART', product)
        },
        DELETE_DROM_CART({commit}, index) {
            commit('REMOVE_FROM_CART', index)
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
        }
    },

    state: {
        cart: []
    },

    getters: {
        CART(state) {
            return state.cart
        }
    },
}