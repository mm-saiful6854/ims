<script setup>
import {RouterLink} from 'vue-router';
import Layout from '../components/Layout.vue';
import ListProduct from '../components/Product/ListProduct.vue';
import {ref} from "vue";

const title = 'Product'
const breadcubms =ref(['Dashboard','Product','ListProduct'])
</script>
<template>
  <v-sheet class="my-2">
    <v-breadcrumbs :items="breadcubms">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
  </v-sheet>
  <v-card>
  <v-card-title>
    <v-row class="my-2 mx-2 flex justify-between">
      <h5>{{title}}</h5>
      <v-btn
          prepend-icon="mdi-plus-box-outline"
          color="blue"
          to="/product-create">
        Add Product
      </v-btn>
    </v-row>
  </v-card-title>
  <v-card-text>
    <ListProduct />
  </v-card-text>
</v-card>
</template>
