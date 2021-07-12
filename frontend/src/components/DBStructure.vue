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
        :search="search"
        :filter="filter"
        :open.sync="open"
      >
        <template v-slot:prepend="{ item }">
          <v-icon
            v-if="item"
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

<script>
  import INode from "@/model/INode";

  export default {
    name: "DBStructure",
    props: {
      nodes: {
        type: Array,
        required: true,
        default: new Array<INode>(0),
      }, 
    },
    data: () => ({
      rowCount: 5,
      // items: [
      //   {
      //     id: 1,
      //     name: 'Vuetify Human Resources',
      //     children: [
      //       {
      //         id: 2,
      //         name: 'Core team',
      //         children: [
      //           {
      //             id: 201,
      //             name: 'John',
      //           },
      //           {
      //             id: 202,
      //             name: 'Kael',
      //           },
      //           {
      //             id: 203,
      //             name: 'Nekosaur',
      //           },
      //           {
      //             id: 204,
      //             name: 'Jacek',
      //           },
      //           {
      //             id: 205,
      //             name: 'Andrew',
      //           },
      //         ],
      //       },
      //       {
      //         id: 3,
      //         name: 'Administrators',
      //         children: [
      //           {
      //             id: 301,
      //             name: 'Mike',
      //           },
      //           {
      //             id: 302,
      //             name: 'Hunt',
      //           },
      //         ],
      //       },
      //       {
      //         id: 4,
      //         name: 'Contributors',
      //         children: [
      //           {
      //             id: 401,
      //             name: 'Phlow',
      //           },
      //           {
      //             id: 402,
      //             name: 'Brandon',
      //           },
      //           {
      //             id: 403,
      //             name: 'Sean',
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // ],
      open: [1, 2],
      search: null,
      caseSensitive: false,
    }),
    computed: {
      filter () {
        return this.caseSensitive
          ? (item, search, textKey) => item[textKey].indexOf(search) > -1
          : undefined
      },
      items () {
        return this.nodes.map(v => ({id: v.id, name: v.name, otype: v.otype, cnt: v.cnt}));
      },
    },
  }
</script>