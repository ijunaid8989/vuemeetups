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
  </v-container>
</template>