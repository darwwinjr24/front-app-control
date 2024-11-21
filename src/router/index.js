import {createRouter,createWebHistory} from 'vue-router'
import Principal from '../views/Ejemplo/Principal.vue'
import layoutMain from '../components/LayoutMain.vue'
import Login from '../components/Login.vue'
import Navbar from '../components/NavBar.vue'
import Visitantes from '../views/Visitantes/Visitantes.vue'




const routes = [
    {
        path: '/',
        name: 'home',
        component: layoutMain,
    },

    {
        path: '/login',
        name: 'login',
        component: Login,
    },

    {
        path: '/navbar',
        name: 'navbar',
        component: Navbar,
    },

    {
        path: '/principal',
        name: 'principal',
        component: Principal,
    },

    {
        path: '/visitantes',
        name: 'Visitantes',
        component: Visitantes,
    },
]

const router= createRouter({
    history:createWebHistory(),
    routes
})

export default router;
