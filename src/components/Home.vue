<template>
  <v-container text-sm-center fluid>
    <v-layout row wrap justify="center">
      <v-flex xs12 sm6>
        <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6>
        <v-btn large router to="/meetup/new" class="info">Organize Meetups</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap mt-5>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id"
          ></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        meetups: [
          { imageUrl: "https://blog.hotelscombined.com/wp-content/uploads/2016/12/New-York-Times-Square.jpg", id: "dsgsgsd335", title: "Meetup in New York"},
          {
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQue7DMZ_lbT8lV8a23Lx6JZ9S71uix3W07SWfE1pFPe-bAl-EZ", id: "dfdsgdsg", title: "Meetup in New York"
          }
        ]
      }
    }
  }
</script>