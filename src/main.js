import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

import App from './App.vue'

import 'nprogress/nprogress.css'
import './assets/css/styles.css'

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app')
