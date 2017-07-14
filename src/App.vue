<template lang="pug">
  v-app
    //- navigation-drawer content
    v-navigation-drawer( v-model="sideNav" temporary class="green lighten-3")
      v-list( class="green lighten-3" )
        v-list-tile( v-for="(item, i) in nav" :key="i" )
          v-list-tile-action
            v-icon {{ item.icon }}
          v-list-tile-content {{ item.text }}
         

    //- toolbar content
    v-toolbar( dark class="primary" )
      v-toolbar-side-icon( @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up" )
      v-toolbar-title( class="text-xs-center" )="DevMeetups"
      v-spacer
      v-toolbar-items( class="hidden-xs-only" v-for="(item, i) in nav" :key="i" )
        v-btn(flat)
          v-icon( dark ) {{ item.icon }}
          | {{ item.text }}
    //- main content
    main 
</template>


<script>
  export default {
    data () {
      return {
        sideNav: false,
        nav: [
          { icon: 'supervisor_account', text: 'View Meetups' },
          { icon: 'note_add', text: 'New Meetup' },
          { icon: 'account_circle', text: 'Profile' },
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
