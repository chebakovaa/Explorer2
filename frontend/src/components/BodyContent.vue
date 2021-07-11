<template>
<div class="map-container">
    <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
             data-projection="EPSG:4326">
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

      <!-- <vl-geoloc @update:position="geolocPosition = $event">
        <template slot-scope="geoloc">
          <vl-feature v-if="geoloc.position" id="position-feature">
            <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
            <vl-style-box>
              <vl-style-icon src="_media/marker.png" :scale="0.4" :anchor="[0.5, 1]"></vl-style-icon>
            </vl-style-box>
          </vl-feature>
        </template>
      </vl-geoloc> -->

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
      <vl-layer-vector>
        
      </vl-layer-vector>
    </vl-map>
    <!-- <div>
      Zoom: {{ zoom }}<br>
      Center: {{ center }}<br>
      Rotation: {{ rotation }}<br>
      My geolocation: {{ geolocPosition }}
    </div> -->
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