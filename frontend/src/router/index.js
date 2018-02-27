import Vue from 'vue';
import Router from 'vue-router';
import register from '@/components/register'
import login from '@/components/login'
import articles from '@/components/articles'
import createArticle from '@/components/createArticle'

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
      path: '/articles/:sub',
      name: 'Articles',
      component: articles
    },
    {
      path: '/create/:user',
      name: 'Create',
      component: createArticle
    }
  ],
});
