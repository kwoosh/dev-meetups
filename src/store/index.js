import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imgUrl: 'https://a6d083dea07dca1c73fc-cb58174e03923271eac4a1b3e4a70779.ssl.cf2.rackcdn.com/uploads/city_info/file/0059/tokyo-01.jpg',
        title: 'Meetup in Tokyo',
        id: 0,
        date: '2017-07-18'
      },
      {
        imgUrl: 'https://www.holidayguru.ie/wp-content/uploads/2017/01/Time-Square-New-York-City-iStock-487537456-2.jpg',
        title: 'Meetup in New York',
        id: 1,
        date: '2017-07-13'
      },
      {
        imgUrl: 'http://kyivcity.travel/KyivPan5.jpg',
        title: 'Meetup in Kyiv',
        id: 2,
        date: '2017-07-15'
      },
    ],
    user: {
      id: 'ada123',
      registeredMeetups: ['asdasfd']
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((MeetupA, MeetupB) => MeetupA.date > MeetupB.date)
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup(state) {
      return (id) => state.loadedMeetups.find(meetup => meetup.id == id)
    }
  }
})