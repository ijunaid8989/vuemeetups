<template>
  <v-app>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link"
          >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">DevMeetUp</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          text
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link"
          >
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <main>
        <router-view></router-view>
      </main>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  props: {
    source: String,
  },
  data: () => ({
    drawer: false,
    menuItems: [
      {icon: "fa fa-users", title: "View Meetups", link: "/meetups"},
      {icon: "fa fa-map-marker", title: "Organize Meetup", link: "/meetup/new"},
      {icon: "fa fa-user-circle", title: "Profile", link: "/profile"},
      {icon: "fa fa-key", title: "Sign In", link: "/signin"},
      {icon: "fa fa-plug", title: "Sign Up", link: "/signup"}
    ]
  }),
};
</script>
