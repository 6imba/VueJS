import { createWebHistory,createRouter } from "vue-router";

import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import Profile from './components/Profile.vue';
import LogIn from './components/LogIn.vue';
import AddRestaurant from './components/AddRestaurant.vue';
import UpdateRestaurant from './components/UpdateRestaurant.vue';

const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: Home
    },
    {
        name: 'SignUpPage',
        path: '/signup',
        component: SignUp
    },
    {
        name: 'ProfilePage',
        path: '/profile',
        component: Profile
    },
    {
        name: 'LogInPage',
        path: '/login',
        component: LogIn
    },
    {
        name: 'AddRestaurantPage',
        path: '/add-restaurant',
        component: AddRestaurant
    },
    {
        name: 'UpdateRestaurantPage',
        path: '/update-restaurant/:id',
        component: UpdateRestaurant
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;


