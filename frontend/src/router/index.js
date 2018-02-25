import Vue from 'vue';
import Router from 'vue-router';
import register from '@/components/register'
import login from '@/components/login'
import home from '@/components/home'
import articles from '@/components/articles'

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
      path: '/articles',
      name: 'Articles',
      component: articles
    }
  ],
});
