import Vue from 'vue'
import VueRouter from 'vue-router'

// componnents
//import ThemeBTN from '@/components/ThemeBTN'
import Home from '@/components/Home'
import Meetups from '@/components/Meetup/Meetups'
import CreateMeetup from '@/components/Meetup/CreateMeetup'
import Profile from '@/components/User/Profile'
import SignIn from '@/components/User/SignIn'
import SignUp from '@/components/User/SignUp'
import Meetup from '@/components/Meetup/Meetup'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetups/:id',
      name: 'single meetup',
      props: true,
      component: Meetup
    },
    {
      path: '/meetup/new',
      name: 'New Meetup',
      component: CreateMeetup
    },
    {
      path: '/profile',
      name: 'User Profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'Sign in',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'Sign up',
      component: SignUp
    },
  ],
  mode: 'history'
})
