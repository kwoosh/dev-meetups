<template lang="pug">
  v-container
    v-layout( row )
      v-flex( xs12 sm6 offset-sm3)
        h4.secondary--text Create a new Meetup  
    v-layout( row )
      v-flex( xs12 )
        form( @submit.prevent="onCreateMeetup")
          v-layout( row )
            v-flex( xs12 sm6 offset-sm3 )
              v-text-field( 
                name="title" 
                label="Title" 
                id="title"
                v-model="title" 
                required )
          v-layout( row )
            v-flex( xs12 sm6 offset-sm3 )
              v-text-field( 
                name="location" 
                label="Location" 
                id="location"
                v-model="location" 
                required )
          v-layout( row )
            v-flex( xs12 sm6 offset-sm3 )
              v-text-field( 
                name="imgUrl" 
                label="Image URL" 
                id="img-url"
                v-model="imgUrl" 
                required )
          v-layout( row )
            v-flex( xs12 sm6 offset-sm3 )
              img( :src="imgUrl" height="180px")
          v-layout( row )
            v-flex( xs12 sm6 offset-sm3 )
              v-text-field( 
                name="description" 
                label="Description" 
                id="description"
                v-model="description" 
                multi-line 
                required )
          v-layout( row )
            v-flex( xs12 sm6 offset-sm3 )
              v-btn.primary( :disabled="!formIsValid" type="submit" ) Create Meetup
</template>
<script>
  export default {
    data() {
      return {
        title: '',
        location: '',
        description: '',
        imgUrl: ''
      }
    },
    computed: {
      formIsValid() {
        return (this.title !== '' 
          && this.location !== '' 
          && this.description !== '' 
          && this.imgUrl !== '')
      }
    },
    methods: {
      onCreateMeetup() {
        if (!this.formIsValid) {
          return
        }
        const meetupData = {
          title: this.title,
          location: this.location,
          description: this.description,
          imgUrl: this.imgUrl,
          date: new Date()
        }

        this.$store.dispatch('createMeetup', meetupData)
        this.$router.push('/meetups')
      }
    }
  }
</script>