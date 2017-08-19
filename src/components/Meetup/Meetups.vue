<template lang="pug">
  v-container
    v-layout( row wrap v-for="(meetup, i) in meetups" :key="i" class="mb-4")
      v-flex( xs12 sm10 md8 offset-sm1 offset-md2 )
        v-card( class="info" )
          v-container( fluid )
            v-layout( row )
              v-flex( xs5 sm4 md3 )
                v-card-media( :src="meetup.imgUrl" height="130px" )
              v-flex( xs7 sm8 md9 )
                v-card-title
                  div
                    h5.white--text {{ meetup.title }}
                    div {{ meetup.date | fancyDate }}
                v-card-actions
                  v-btn( flat :to="'/meetups/' + meetup.id" )
                    v-icon( left light) arrow_forward
                    | К просмотру
</template>
<script>
  export default {
    computed: {
      meetups() {
        return this.$store.getters.loadedMeetups
      }
    }
  }
</script>