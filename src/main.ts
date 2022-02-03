import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import routes from 'pages-generated'
import './index.css'
import { createPinia } from "pinia";

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).use(createPinia()).mount('#app')