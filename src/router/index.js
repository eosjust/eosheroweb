import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import booking from '@/components/booking'
import rules from '@/components/rules'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'booking',
      component: booking
    },
    {
      path: '/rules',
      name: 'rules',
      component: rules
    }
  ]
})
