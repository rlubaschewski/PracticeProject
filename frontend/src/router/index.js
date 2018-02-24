import Vue from 'vue';
import Router from 'vue-router';
import register from '@/components/register'
import login from '@/components/login'
import home from '@/components/home'
import tabs from '@/components/tabs'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: register,
    },
    {
      path: '/login',
      name: 'Login',
      component: login,
    },
    {
      path: '/',
      name: 'Tabs',
      component: tabs
    }
  ],
});
