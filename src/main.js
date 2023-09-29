import { createApp } from 'vue'

import router from './router/router.js'

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
// end bootstrap

import './style.css'
import App from './App.vue'

import PrimeVue from 'primevue/config';

//use(PrimeVue, { unstyled: true })
createApp(App).use(router).use(PrimeVue).mount('#app')
