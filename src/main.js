import { createApp } from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'
import './assets/styles/styles.scss'
import posts from './vuex/modules/posts'


const store = createStore({
    modules: {
        posts
    }
})

createApp(App)
    .use(store)
    .mount('#app')
