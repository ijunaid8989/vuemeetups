import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      { 
        imageUrl: "https://blog.hotelscombined.com/wp-content/uploads/2016/12/New-York-Times-Square.jpg",
        id: "1",
        title: "Meetup in New York",
        date: "2017-07-19"
      },
      {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQue7DMZ_lbT8lV8a23Lx6JZ9S71uix3W07SWfE1pFPe-bAl-EZ",
        id: "dfdsgdsg",
        title: "Meetup in New York",
        date: "2017-07-17"
      }
    ],
    user: {
      id: "dsdsds98",
      registeredMeetups: ["dfdsgdsg"]
    }
  },
  mutations: {

  },
  actions: {

  },
  getters:  {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup(state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
