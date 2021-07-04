<template>
  <div class="gl-container" ref="element" style="width: 100%; height: 100%;">
    <teleport
      v-for="{ id, type, element } in componentInstances"
      :key="id"
      :to="element">
      <component :is="type"></component>
    </teleport>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Body",
});
</script>

<style scoped>
</style>