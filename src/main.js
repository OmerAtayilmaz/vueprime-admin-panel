import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia";
import {createRouter, createWebHistory} from "vue-router";
import HomePage from "./components/HomePage.vue";


const routes = [
    {
        path:"/",
        component:HomePage
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
});
const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(router);


app.mount('#app')
