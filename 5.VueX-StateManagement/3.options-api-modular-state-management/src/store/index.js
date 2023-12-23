import {createStore} from 'vuex';
import users from './modules/user'
import posts from './modules/post'
import companies from './modules/company'


const store = createStore({
    modules: {
        users,
        posts,
        companies
    },
})
export default store
