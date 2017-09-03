import Vue from 'vue'
import Vuetify from 'vuetify'
import * as firebase from 'firebase'
import App from './App'
import router from './router'
import { store } from './store'
import { fancyDate } from './filters'
import Alert from './components/Shared/Alert'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('fancyDate', fancyDate)
Vue.component('app-alert', Alert)


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD3Q4awtKJ4hqxP-rPNKdwQByx--89UWmE',
      authDomain: 'kwoosh-devmeetups.firebaseapp.com',
      databaseURL: 'https://kwoosh-devmeetups.firebaseio.com',
      projectId: 'kwoosh-devmeetups',
      storageBucket: 'kwoosh-devmeetups.appspot.com',
    })

    this.$store.dispatch('loadMeetups')
  }
})
