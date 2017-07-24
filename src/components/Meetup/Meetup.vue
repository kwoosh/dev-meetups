<template lang="pug">
  v-container
    v-layout( row wrap )
      v-flex( xs12 )
        v-card
          v-card-title 
            h6.primary--text My meetup
          v-card-media( src="https://a6d083dea07dca1c73fc-cb58174e03923271eac4a1b3e4a70779.ssl.cf2.rackcdn.com/uploads/city_info/file/0059/tokyo-01.jpg" height="400px" )
          v-card-text
            div.info--text 17th July 2017 -- lol kek
            div  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur optio eos magni quisquam animi, recusandae soluta sint, consectetur eveniet illo laudantium sapiente beatae fugiat quasi debitis rerum expedita fugit, delectus!
          v-card-actions
            v-spacer
            v-btn.primary Register
</template>
