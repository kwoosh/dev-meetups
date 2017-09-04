<template lang="pug">
  v-app
    //- navigation-drawer content
    v-navigation-drawer( v-model="sideNav" temporary class="lol")
      v-list( class="lol" )
        v-list-tile( 
          v-for="(item, i) in menuItems" 
          :key="i"
          :to="item.link" )
          v-list-tile-action
            v-icon {{ item.icon }}
          v-list-tile-content {{ item.text }}

        v-list-tile( @click='onLogout' v-if='userIsAuthenticated')
          v-list-tile-action
            v-icon exit_to_app
          v-list-tile-content Выйти
         

    //- toolbar content
    v-toolbar( dark class="primary" )
      v-toolbar-side-icon( @click.stop="sideNav = !sideNav" class="hidden-sm-and-up" )
      v-toolbar-title( class="text-xs-center" ) 
        router-link(to="/" tag="span") Митапы
      v-spacer
      v-toolbar-items( class="hidden-xs-only" )
        v-btn( flat 
          v-for="(item, i) in menuItems" 
          :key="i"
          :to="item.link" )
          v-icon( dark ) {{ item.icon }}
          | {{ item.text }}

        v-btn( flat @click='onLogout' v-if='userIsAuthenticated')
          v-icon( dark ) exit_to_app
          | Выйти
    //- main content
    main 
      router-view

</template>


<script>
export default {
  data() {
    return {
      sideNav: false
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    menuItems() {
      let menuItems = [
        { icon: 'supervisor_account', text: 'Просмотреть встречи', link: '/meetups' },
        { icon: 'face', text: 'Зарегестрироваться', link: '/signup' },
        { icon: 'lock_open', text: 'Войти', link: '/signin' }
      ]

      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: 'supervisor_account', text: 'Просмотреть встречи', link: '/meetups' },
          { icon: 'room', text: 'Организовать встречу', link: '/meetup/new' },
          { icon: 'person', text: 'Профиль', link: '/profile' },
        ]
      }

      return menuItems
    },
    userIsAuthenticated() {
      let u = this.$store.getters.user
      return (u !== null && u !== undefined)
    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'

  #app {
    background: url(assets/sports.png)
  }
</style>
