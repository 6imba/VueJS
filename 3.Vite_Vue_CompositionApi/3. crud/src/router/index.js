import { createRouter, createWebHistory } from 'vue-router';
import  List from '../components/student/RetriveAll.vue';
import  Add from '../components/student/Create.vue';
import  View from '../components/student/RetriveOne.vue';
import  Edit from '../components/student/Update.vue';
import  NotFound from '../views/NotFound.vue';

const routes = [
    {
        path: '/',
        component: List,
        name: 'ListComponent'
    },
    {
        path: '/add',
        component: Add,
        name: 'AddComponent'
    },
    {
        path: '/detial/:id',
        component: View,
        name: 'ViewComponent'
    },
    {
        path: '/edit/:id',
        component: Edit,
        name: 'EditComponent'
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound,
        name: 'NotFoundComponent'
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router;