import { createApp } from 'vue'
import App from './App.vue'
import curves from './curve-ui'
import router from './router'

createApp(App).use(router).use(curves).mount('#app')
