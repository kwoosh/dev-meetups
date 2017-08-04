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
              h4 Choose Date & Time          
          v-layout( row class="mb-3")
            v-flex( xs12 sm6 offset-sm3 )
              v-date-picker( v-model="date" landscape )
              p {{ date }}
          v-layout( row )
            v-flex( xs12 sm6 offset-sm3 )
              v-time-picker( v-model="time" landscape format="24hr")
              p {{ time }}
          v-layout( row )
            v-flex( xs12 sm6 offset-sm3 )
              v-btn.primary( :disabled="!formIsValid" type="submit" ) Create Meetup
              p {{ validDate }}
</template>
<script>
  export default {
    data() {
      return {
        title: '',
        location: '',
        description: '',
        imgUrl: '',
        date: new Date(),
        time: new Date()
      }
    },
    computed: {
      formIsValid() {
        return (this.title !== '' 
          && this.location !== '' 
          && this.description !== '' 
          && this.imgUrl !== '')
      },
      validDate() {
        const date = new Date(this.date)

        if(typeof this.time === 'string') {
          const hours = this.time.match(/^(\d+)/)[1]
          const minutes = this.time.match(/:(\d+)/)[1]
          date.setHours(hours)
          date.setMinutes(minutes)
        } else {
          date.setHours(this.time.getHours())
          date.setMinutes(this.time.getMinutes())
        }
        
        return date
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
          date: this.validDate
        }

        this.$store.dispatch('createMeetup', meetupData)
        this.$router.push('/meetups')
      }
    }
  }
</script>