<template>
 <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app >
      <DBStructure/>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>PanoDB</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <body-content/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import DBStructure from "./components/DBStructure.vue";
import BodyContent from "./components/BodyContent.vue";

export default Vue.extend({
  name: "App",
  components: {
    DBStructure,
    BodyContent,
    },
  data: () => ({
    drawer: null
  }),
});
</script>
