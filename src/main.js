import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes'

/* 
  the below written code
  is how you access the 
  vue-router
  but first we need to install the vue-router
  to install vue-router
  1. go to terminal
  2. npm install vue-router
     or 
     npm install --save vue-router (to save the routing package)
  3. we can see that it automatically installs the latest version of vue-router
  4. import VueRouter from'vue-router' (the name is of your choice)
  5. Vue.use(Router);
     way to acces vue-router
*/

Vue.use(VueRouter);

/* 
    here, we are creating a constant router
    where we have new VueRouter
    that is, all the packages of VueRouter is stored
    in a constant called router
    then we access the routes from routes.js

*/

/* 
    mode: 'history'
    gives us the removal of # in our url
*/

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition;
    }
    if(to.hash){
      return {selector: to.hash};
    }
    return {x: 0, y: 0};
  }
});

router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next();
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
