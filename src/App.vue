<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item @click="">
          <v-list-item-action>
            <v-icon>fa fa-users</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>View Meetups</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>DevMeetUp</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
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
