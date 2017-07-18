<template lang="pug">
  v-app
    //- navigation-drawer content
    v-navigation-drawer( v-model="sideNav" temporary class="lol")
      v-list( class="lol" )
        v-list-tile( v-for="(item, i) in menuItem" :key="i" )
          v-list-tile-action
            v-icon {{ item.icon }}
          v-list-tile-content {{ item.text }}
         

    //- toolbar content
    v-toolbar( dark class="primary" )
      v-toolbar-side-icon( @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up" )
      v-toolbar-title( class="text-xs-center" )="DevMeetups"
      v-spacer
      v-toolbar-items( class="hidden-xs-only" v-for="(item, i) in menuItem" :key="i" )
        v-btn(flat)
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
        { icon: 'supervisor_account', text: 'View Meetups' },
        { icon: 'room', text: 'Organize Meetup' },
        { icon: 'person', text: 'Profile' },
        { icon: 'face', text: 'Sign up' },
        { icon: 'lock_open', text: 'Sign in' }
      ]
    }
  },
  components: { ThemeBtn }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
