<template>
  <v-card
    class="mx-auto"
    max-width="700"
  >
    <v-sheet class="pa-4 primary lighten-2">
      <v-text-field
        v-model="search"
        label="Search Company Directory"
        dark
        flat
        solo-inverted
        hide-details
        clearable
        clear-icon="mdi-close-circle-outline"
        dense
      ></v-text-field>
      <br/>
      <v-text-field
            label="Row Count"
            outlined
            dense
            v-model="rowCount"
          ></v-text-field>
      <v-checkbox
        v-model="caseSensitive"
        dark
        hide-details
        label="Case sensitive search"
      ></v-checkbox>
    </v-sheet>
    <v-card-text>
      <v-treeview
        activatable
        hoverable
        :items="items"
        :search="searched"
        :filter="filter"
        :open.sync="open"
        :load-children="fetchObjects"
      >
        <template v-slot:prepend="{ item }">
          <v-icon
            v-if="item.children"
            v-text="`mdi-${item.otype === 'item' ? 'card-text-outline' : 'folder-network'}`"
          ></v-icon>
        </template>
        <template v-slot:append="{ item }">
          {{item.cnt}}
        </template>
      </v-treeview>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import INode from "@/model/INode";
  import StructureSercice from "@/services/StructureService";
  import Vue from "vue";

  const service = new StructureSercice("http://localhost:3086/content");
  const rootNode = {    
        mnem: "root",
        name: "Месторождения",
        id: 0,
        pid: -1,
        otype: "folder",
        cnt: 5,
      };

  export default Vue.extend({
    name: "DBStructure",
    data: () => ({
      nodes: new Array<INode>(rootNode),
      rowCount: 5,
      open: [],
      search: null,
      caseSensitive: false,
    }),
    methods: {
      async fetchObjects(item: any) {
        service.subPath(this.$data.nodes, 0, 5)
        .then(v => (item.children.push(v.children)));
      },
    },
    computed: {
      filter () {
        return this.$data.caseSensitive
          ? (item:any, search:any, textKey: any) => item[textKey].indexOf(search) > -1
          : undefined
      },
      items () {
        return this.$data.nodes.map((v: INode) => ({id: v.id, mnem: v.mnem,  name: v.name, otype: v.otype, cnt: v.cnt, children: []}));
      },
      searched () { return this.$data.search; }
    },
    // mounted() {
    //   service.subPath(new Array<INode>(0), 0, 5)
    //   .then(
    //     v => {
    //       this.nodes = v.children;
    //     }
    //   );
    // },
  })
</script>