import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CouponOverview from './views/CouponOverview.vue'
import CouponDetails from './views/CouponDetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/coupons',
      name: 'coupons',
      component: CouponOverview
    },
    {
      path: '/coupon/:id',
      name: 'coupon',
      component: CouponDetails
    }
  ]
})
