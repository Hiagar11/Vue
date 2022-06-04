import { createApp } from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'
import './assets/styles/styles.scss'


import cartItem from './store/modules/vCartItem'
import vCatalogItem from './store/modules/vCatalogItem'


const store = createStore({
    modules: {
        cartItem,
        vCatalogItem
    }
})

createApp(App)
    .use(store)
    .mount('#app')