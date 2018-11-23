import User from './components/user/User.vue';

import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';
/* 
    the below code
    is the path in url and
    component that is to be loaded from the url
*/

export const routes = [
    { path: '', component: Home, name: 'home' },
    { path: '/user', component: User, children: [
        { path: '', component: UserStart },
        { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
            console.log('inside route setup');
            next();
        } },
        { path: ':id/edit', component: UserEdit, name: 'userEdit' },
        { path: '/redirect-me', redirect: { name: 'home' } },
        { path: '/*', redirect: { name: 'home' } }
    ] }
];