<template>
<div class="config-frame">
  <SettingsLeftPanel/>
  <SettingsView/>
</div>  
</template>

<script lang="ts">
import Vue from 'vue'
import SettingsLeftPanel from '@/components/SettingsLeftPanel.vue'
import SettingsView from '@/components/SettingsView.vue'

export default Vue.extend({
  name: "Settings",
  components: {
    SettingsLeftPanel,
    SettingsView
  },
})
</script>


<style scoped>
  .config-frame {
    background-color: bisque;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: stretch;
    position: absolute;
    bottom: 5px;
    top: 5px;
    right: 5px;
    left: 5px;
  }
</style>
