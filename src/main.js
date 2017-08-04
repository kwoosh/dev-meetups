import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import { store } from './store'
import { fancyDate } from './filters'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('fancyDate', fancyDate)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
