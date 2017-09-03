<template lang="pug">
  v-container

    v-layout( row wrap )
      v-flex( xs12 sm6 class="text-xs-center text-sm-right")
        v-btn( large to="/meetups" class="primary") Просмотреть встречи
      v-flex( xs12 sm6 class="text-xs-center text-sm-left")
        v-btn( large to="/meetup/new" class="primary") Организовать Встречу

    v-layout( v-if='loading')
      v-flex( xs12 class="text-xs-center")    
        v-progress-circular( indeterminate 
        :size="70" 
        :width="7" 
        class="purple--text"
        )
    v-layout( row wrap class="mt-2" v-if='!loading')
      v-carousel
        v-carousel-item(
          v-for="(item,i) in meetups"
          :key="i"
          :src="item.imgUrl"
          @click="onLoadMeetup(item.id)" )
          div.title {{ item.title }}
    
    v-layout( row wrap class="mt-2")
      v-flex( xs12 class="text-xs-center")
        p Присоединяйся к нашим невероятным встречам!

</template>
<script>
export default {
  computed: {
    meetups() {
      return this.$store.getters.featuredMeetups
    },
    loading() {
      return this.$store.getters.loading
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

