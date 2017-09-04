export default {
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
}