<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h6 class="info--text">{{ meetup.title }}</h6>
          </v-card-title>
          <v-img
            :src="meetup.imageUrl"
            height="130px">
          </v-img>
          <v-card-text>
            <div class="info--text">{{ meetup.date }} where it took place</div>
            <div>Test will appear soon.</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="info">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ["id"],
    computed: {
      meetup () {
        return this.$store.getters.loadedMeetup(this.id)
      }
    }
  }
</script>