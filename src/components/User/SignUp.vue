<template lang="pug">
  v-container
    v-layout( row )
      v-flex( xs12 sm6 offset-sm3 )
        v-card
          v-card-text
            v-container
              form( @submit.prevent="onSignup" )
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
                v-layout( row )
                  v-text-field( 
                    name="confirmPassword"
                    label="Подтвердить пароль"
                    id="confirmPassword"
                    v-model="confirmPassword"
                    type="password" 
                    :rules="[comparePasswords]" )
                v-layout( row )
                  v-flex( xs12 )
                    v-btn( type="submit" class="primary") Зарегестрироваться
</template>
<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
      }
    },
    computed: {
      comparePasswords() {
        return this.password !== this.confirmPassword ? 'Пароли не совпадают' : true 
      },
      user() {
        return this.$store.getters.user
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
      onSignup() {
        this.$store.dispatch('signUserUp', { 
          email: this.email,
          password: this.password
        })
      }
    }
  }
</script>