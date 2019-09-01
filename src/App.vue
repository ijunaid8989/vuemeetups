<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item @click="">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>DevMeetUp</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text>
          <v-icon>fa fa-users</v-icon> View Meetup
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
      </v-container>
    </v-content>
<!--     <v-card
      color="grey lighten-4"
      flat
      tile
    >
      <v-toolbar dense>
        <v-toolbar-title>DevMeetup</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat>
            <v-icon>fa fa-users</v-icon> View Meetup
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-card> -->
    <main></main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  props: {
    source: String,
  },
  data: () => ({
    drawer: false
  }),
};
</script>
