<template lang="pug">
  v-container
    v-layout( row v-if="error")
      v-flex( xs12 sm6 offset-sm3 )
        app-alert( @dissmissed='onDissmissed' :text='error.message')
    v-layout( row )
      v-flex( xs12 sm6 offset-sm3 )
        v-card
          v-card-text
            v-container
              form( @submit.prevent="onSignin" )
                v-layout( row )
                  v-text-field( 
                    name="email"
                    label="Електронная почта"
                    id="email"
                    v-model="email"
                    type="email"
                    required )
                v-layout( row )
                  v-text-field( 
                    name="password"
                    label="Пароль"
                    id="password"
                    v-model="password"
                    type="password"
                    required )
                v-btn( 
                  type="submit" 
                  class="primary"
                  :disabled='loading'
                  :loading='loading') 
                  | Войти
                  span( slot='loader' class='castom-loader')
                    v-icon( light) cached  
</template>
<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      }
    },
    computed: {
      loading() {
        return this.$store.getters.loading
      },
      user() {
        return this.$store.getters.user
      },
      error() {
        return this.$store.getters.error
      }
    },
    watch: {
      user(val) {
        if(val !== null && val !== undefined) {
          this.$router.push('/')
        }
      }
    },
    methods: {
      onSignin() {
        this.$store.dispatch('signUserIn', { 
          email: this.email,
          password: this.password
        })
      },
      onDissmissed() {
        console.log('Dissmissed Alert')
        this.$store.dispatch('clearError')
      }
    }
  }
</script>