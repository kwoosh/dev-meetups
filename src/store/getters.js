export default {
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