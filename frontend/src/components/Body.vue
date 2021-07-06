<template>
  <div class="body-container">
    <div class="sidepanel">
      <StructureViewer/>
    </div>
    <div class="content">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import StructureViewer from "./StructureViewer";

export default Vue.extend({
  name: "Body",
  components: {
    StructureViewer
  }
});
</script>

<style scoped>
  .body-container {
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
  }
  .sidepanel {
    width: 500px;
    border: 2px solid gray;
  }
  .content {
    flex-grow: 1;
  }

</style>