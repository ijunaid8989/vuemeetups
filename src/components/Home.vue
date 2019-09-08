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
            @click="onLoadMeetup(meetup.id)"
          >
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>


<script>
  export default {
    computed: {
      meetups () {
        return this.$store.getters.featuredMeetups
      }
    },

    methods: {
      onLoadMeetup(id) {
        this.$router.push("/meetups/" + id)
      }
    }
  }
</script>
