<template lang="pug">
  v-app
    //- navigation-drawer content
    v-navigation-drawer( v-model="sideNav" temporary class="lol")
      v-list( class="lol" )
        v-list-tile( 
          v-for="(item, i) in menuItem" 
          :key="i"
          :to="item.link" )
          v-list-tile-action
            v-icon {{ item.icon }}
          v-list-tile-content {{ item.text }}
         

    //- toolbar content
    v-toolbar( dark class="primary" )
      v-toolbar-side-icon( @click.stop="sideNav = !sideNav" class="hidden-sm-and-up" )
      v-toolbar-title( class="text-xs-center" ) 
        router-link(to="/" tag="span") DevMeetups
      v-spacer
      v-toolbar-items( class="hidden-xs-only" )
        v-btn(
          flat 
          v-for="(item, i) in menuItem" 
          :key="i"
          :to="item.link" )
          v-icon( dark ) {{ item.icon }}
          | {{ item.text }}
    //- main content
    main 
      router-view

</template>


<script>
import ThemeBtn from './components/ThemeBtn'

export default {
  data() {
    return {
      sideNav: false,
      menuItem: [
        { icon: 'supervisor_account', text: 'View Meetups', link: '/meetups' },
        { icon: 'room', text: 'Organize Meetup', link: '/meetup/new' },
        { icon: 'person', text: 'Profile', link: '/profile' },
        { icon: 'face', text: 'Sign up', link: '/signup' },
        { icon: 'lock_open', text: 'Sign in', link: '/signin' }
      ]
    }
  },
  components: { ThemeBtn }
}
</script>

<style lang="stylus">
  @import './stylus/main'

  #app {
    background-image: url(assets/sports.png)
    background-repeat: repeat
  }
</style>
