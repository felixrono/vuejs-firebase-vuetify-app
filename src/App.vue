<template>
  <v-app id="example-1" toolbar footer>
    <v-navigation-drawer
      v-model="drawer"
      light
      enable-resize-watcher
      absolute
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
                <v-list-tile @click="">
                <v-list-tile-action>
                  <v-icon>supervisor_account</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>View Meetups</v-list-tile-title>
                </v-list-tile-content>
                </v-list-tile>
      </v-list>

    </v-navigation-drawer>
    <v-toolbar class="indigo" dark fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Devmeetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat>
          <v-icon>supervisor_account</v-icon>
          View Meetups
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>
    <main>
      <v-container fluid>
        <!--v-router-->
      </v-container>
    </main>
    <v-footer class="indigo">
      <span class="white--text">© 2017</span>
    </v-footer>
  </v-app>
</template>
<script>
  export default {
    data() {
      return {
        drawer: true,
      };
    },
  };
</script>
</script>

<style lang="stylus">
  @import './stylus/main'
</style>