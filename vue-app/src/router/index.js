import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      requiredAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router

router.beforeEach(async (to, from, next) => {
  let app = router.app.$data || { isAuthenticated: false };
  if (app.isAuthenticated) {
    next();
  } else if (to.matched.some(record => record.meta.requiredAuth)) {
   //authentication is required. Trigger the sign in process, including the return URI
   let authenticate = router.app.authenticate
   authenticate(to.path).then(() => {
     console.log('authenticating a protected url:' + to.path);
     next();
   });
  }else{
    next();
  }
})

