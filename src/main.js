/* import Vue from 'vue'; */
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";


/* Vue.prototype.$http = axios; */

createApp(App).use(router).mount('#app')
