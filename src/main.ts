import { createApp } from 'vue'
import { router } from './router/routes'
import pinia from './stores/pinia'
import App from './App.vue'

import './style.css'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
