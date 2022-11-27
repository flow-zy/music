import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router'
import '@/assets/styles/index.less'
import '@/assets/styles/tailwind.css'

import registerDirective from '@/directives'
const app = createApp(App)
registerDirective(app)
app.use(router).use(createPinia()).mount('#app')
