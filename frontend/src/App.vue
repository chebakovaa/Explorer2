<template>
  <v-app>
    <v-main>
      <div id="app1">
        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import VueRouter from 'vue-router'
export default Vue.extend({
  
})
</script>


<style lang="scss">
html {
  overflow-y: hidden !important;
}
#app1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0.2vh;
  height: 99vh;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0.2vh;
  height: 99vh;
}

</style>
