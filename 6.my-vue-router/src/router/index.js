import { createWebHistory, createRouter } from 'vue-router';

import HomeComponent from '../components/1.RoutingHome.vue'
import AboutComponent from '../components/2.RoutingAbout.vue'
import ContactComponent from '../components/3.RoutingContact.vue'
import ProfileComponent from '../components/4.RoutingProfile.vue'
import BioComponent from '../components/5.RoutingBio.vue'
import PageNotFoundComponent from '../components/6.PageNotFound.vue'

const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: HomeComponent
    },
    {
        name: 'AboutPage',
        path: '/about',
        component: AboutComponent
    },
    {
        name: 'ContactPage',
        path: '/contact',
        component: ContactComponent
    },
    {
        name: 'ProfilePage',
        path: '/profile/:name',
        component: ProfileComponent
    },
    {
        name: 'BioPage',
        path: '/profile/:name/:age',
        component: BioComponent
    },
    {
        name: 'PageNotFound',
        path: '/:pathMatch(.*)',
        component: PageNotFoundComponent
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
