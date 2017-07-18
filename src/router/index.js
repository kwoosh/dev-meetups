import Vue from 'vue'
import VueRouter from 'vue-router'

// componnents
import ThemeBTN from '../components/ThemeBTN'
import Home from '../components/Home'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/buttons',
      name: 'Buttons',
      component: ThemeBTN
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
