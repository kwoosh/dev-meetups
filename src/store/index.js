import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [],
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
    },
    SET_LOADED_MEETUPS(state, payload) {
      state.loadedMeetups = payload
    }
  },
  actions: {
    logout({commit}) {
      firebase.auth().signOut()

      commit('SET_USER', null)
    },
    loadMeetups({commit}) {
      commit('SET_LOADING', true)
      firebase.database().ref('meetups').once('value')
        .then(data => {
          const meetups = []
          const obj = data.val()
          
          for(let key in obj) {
            meetups.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              imgUrl: obj[key].imgUrl,
              date: obj[key].date,
              creatorId: obj[key].creatorId,
            })
          }
          commit('SET_LOADED_MEETUPS', meetups)
          commit('SET_LOADING', false)
        })
        .catch((err) => {
          console.log(err)
          commit('SET_LOADING', false)          
        })
    },
    createMeetup({commit, getters}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        imgUrl: payload.imgUrl,
        date: payload.date.toISOString(),
        creatorId: getters.user.id
      }

      firebase.database().ref('meetups').push(meetup)
        .then(data => {
          const key = data.key
          commit('CREATE_MEETUP', {
            ...meetup,
            id: key
          })
        }).catch(err => {
          console.log(err)
        })
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
    autoSignIn({commit}, payload) {
      commit('SET_USER', {id: payload.uid, registeredMeetups: []})
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