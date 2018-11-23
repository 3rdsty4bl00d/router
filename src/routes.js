import User from './components/user/User.vue';
import Home from './components/Home.vue';

/* 
    the below code
    is the path in url and
    component that is to be loaded from the url
*/

export const routes = [
    { path: '', component: Home },
    { path: '/user/:id', component: User }
];