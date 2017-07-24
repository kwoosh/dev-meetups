<template lang="pug">
  v-container

    v-layout( row wrap )
      v-flex( xs12 sm6 class="text-xs-center text-sm-right")
        v-btn( large to="/meetups" class="primary") Explore Meetups
      v-flex( xs12 sm6 class="text-xs-center text-sm-left")
        v-btn( large to="/meetup/new" class="primary") Organize Meetup
    
    v-layout( row wrap class="mt-2")
      v-carousel
        v-carousel-item(
          v-for="(item,i) in meetups"
          :key="i"
          :src="item.imgUrl"
          @click="onLoadMeetup(item.id)" )
          div.title {{ item.title }}
    
    v-layout( row wrap class="mt-2")
      v-flex( xs12 class="text-xs-center")
        p Join to our awesome meetups!

</template>
<script>
  export default {
    data() {
      return {
        meetups: [
          {
            imgUrl:'https://a6d083dea07dca1c73fc-cb58174e03923271eac4a1b3e4a70779.ssl.cf2.rackcdn.com/uploads/city_info/file/0059/tokyo-01.jpg',
            title: 'Meetup in Tokyo',
            id: 0
          },
          {
            imgUrl:'https://www.holidayguru.ie/wp-content/uploads/2017/01/Time-Square-New-York-City-iStock-487537456-2.jpg',
            title: 'Meetup in New York',
            id: 1
          },
          {
            imgUrl:'http://kyivcity.travel/KyivPan5.jpg',
            title: 'Meetup in Kyiv',
            id: 2
          },
        ]
      }
    },
    methods: {
      findMeetup(id) {
        console.log(id, this.meetups)
        const meetup = this.meetups.filter((item, i) => i === id)
        console.log(meetup)
      },
      onLoadMeetup(id) {
        this.$router.push(`/meetups/${id}`)
      }
    }
  }
</script>
<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 2em;
    padding: 20px
  }

  
</style>

