import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/components/pages/ShoppingMall'
import Classify from '@/components/pages/Classify'
import Cart from '@/components/pages/Cart'
import Me from '@/components/pages/Me'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'ShoppingMall',
      component: ShoppingMall
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '*',
      redirect: '/',
    },
  ]
})