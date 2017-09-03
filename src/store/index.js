import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imgUrl: 'https://a6d083dea07dca1c73fc-cb58174e03923271eac4a1b3e4a70779.ssl.cf2.rackcdn.com/uploads/city_info/file/0059/tokyo-01.jpg',
        title: 'Meetup in Tokyo',
        id: 0,
        date: '2017-07-18',
        location: 'Tokyo',
        description: 'asddddddddddddddddddddaf.kasdlfknaslkdjfnALKWDJFN;ALwkdfm;laskdf;laskdfnm;klasjdfgaklj ;awkd fa e ogjas l ag; a ;glai dgo;id sfjg osdif jgosdi fgiuos diofuhg isoudfng d aosfk gaoe dfig jsod'
      },
      {
        imgUrl: 'https://www.holidayguru.ie/wp-content/uploads/2017/01/Time-Square-New-York-City-iStock-487537456-2.jpg',
        title: 'Meetup in New York',
        id: 1,
        date: '2017-07-13',
        location: 'York',
        description: 'asddddddddddddddddddddaf.kasdlfknaslkdjfnALKWDJFN;ALwkdfm;laskdf;laskdfnm;klasjdfgaklj ;awkd fa e ogjas l ag; a ;glai dgo;id sfjg osdif jgosdi fgiuos diofuhg isoudfng d aosfk gaoe dfig jsod'
      },
      {
        imgUrl: 'http://kyivcity.travel/KyivPan5.jpg',
        title: 'Meetup in Kyiv',
        id: 2,
        date: '2017-07-15',
        location: 'Kyiv',
        description: 'asddddddddddddddddddddaf.kasdlfknaslkdjfnALKWDJFN;ALwkdfm;laskdf;laskdfnm;klasjdfgaklj ;awkd fa e ogjas l ag; a ;glai dgo;id sfjg osdif jgosdi fgiuos diofuhg isoudfng d aosfk gaoe dfig jsod'
      },
    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    CREATE_MEETUP(state, payload) {
      state.loadedMeetups.push(payload)
    },
    SET_USER(state, payload) {
      state.user = payload
    },
    SET_LOADING(state, payload) {
      state.loading = payload
    },
    SET_ERROR(state, payload) {
      state.error = payload
    },
    CLEAR_ERROR(state, payload) {
      state.error = null
    }
  },
  actions: {
    createMeetup({commit}, payload) {
      const meetup = {
        id: 'daadf', //TODO: u need a dimamical id for meetups
        title: payload.title,
        location: payload.location,
        description: payload.description,
        imgUrl: payload.imgUrl,
        date: payload.date
      }
      // reach out firebase and store it  
      commit('CREATE_MEETUP', meetup)
    },
    signUserUp({commit}, payload) {
      commit('SET_LOADING', true)
      commit('CLEAR_ERROR')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user =>{
          commit('SET_LOADING', false)
          const newUser = {
            id: user.uid,
            registeredMeetups: [],
          }
          commit('SET_USER', newUser)
        })
        .catch(err => {
          commit('SET_LOADING', false)
          commit('SET_ERROR', err)
          console.log(err)
        })
    },
    signUserIn({commit}, payload) {
      commit('SET_LOADING', true)
      commit('CLEAR_ERROR')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit('SET_LOADING', false)
          const newUser = {
            id: user.uid,
            registeredMeetups: [], //TODO: тут нужены митапы этого юзера, а не пустой массив
          }
          commit('SET_USER', newUser)
        })
        .catch(err => {
          commit('SET_LOADING', false)
          commit('SET_ERROR', err)
          console.log(err)
        })
    },
    clearError({commit}) {
      commit('CLEAR_ERROR')
    }
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((MeetupA, MeetupB) => MeetupA.date > MeetupB.date)
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup(state) {
      return (id) => state.loadedMeetups.find(meetup => meetup.id == id)
    },
    user(state) {
      return state.user
    },
    error(state) {
      return state.error
    },
    loading(state) {
      return state.loading
    }
  }
})