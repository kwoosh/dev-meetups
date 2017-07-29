<template lang="pug">
  v-container
    v-layout( row wrap )
      v-flex( xs12 )
        v-card
          v-card-title 
            h6.primary--text {{ meetup.title }}
          v-card-media( :src="meetup.imgUrl" height="400px" )
          v-card-text
            div.info--text {{ meetup.date }}
            div  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur optio eos magni quisquam animi, recusandae soluta sint, consectetur eveniet illo laudantium sapiente beatae fugiat quasi debitis rerum expedita fugit, delectus!
          v-card-actions
            v-spacer
            v-btn.primary Register
</template>
<script>
  export default {
    props: ['id'],
    computed: {
      meetup() {
        return this.$store.getters.loadedMeetup(this.id)
      }
    }
  }
</script>
