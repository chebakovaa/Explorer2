<template>
  <div class="map-container">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: "BodyContent",
  data: function() {
    return {
      zoom: 7,
      center: [65.5097856, 57.157222399999995],
      rotation: 0,
      geolocPosition: undefined,
    }
  }
})
</script>

<style lang="scss" scoped>
  .map-container {
    height: 100%;
  }
</style>