<script setup>
import axios from "axios";
import {onBeforeMount, onMounted, reactive, ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const loading = ref(true)
const item = ref([]);
const breadcrumbs = ref(['Dashboard', 'Product', 'Product Details'])

onBeforeMount(async () => {
  await axios.get(`https://dummyjson.com/products/${route.params.id}`).then(res => {
    item.value = res.data;
  }).catch((error) => {
    if (error.response) {
      toastr.error(error.response.data.message, "Error");
      if (error.response && error.response.data.errors) {
        console.log(error.response.data.errors)
      }
    } else {
      toastr.error(error.message, "Error");
    }
  });
})
</script>

<template>
  <v-sheet class="my-2 d-flex justify-between align-center">
    <v-breadcrumbs :items="breadcrumbs">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
    <v-btn class="mx-1"
           size="small"
           color="orange-darken-2"
           prepend-icon="mdi-arrow-left"
           to="/products">
      Back
    </v-btn>
  </v-sheet>
  <v-card title="Product Details">
    <h1></h1>
    <div class="d-flex">
      <div class="p-2">
        <img :src="item.thumbnail" class="img-fluid">
      </div>
      <div>
        <v-sheet
            class="px-4"
            min-height="250"
            rounded
            max-width="800"
            width="100%">
          <div class="p-2">
            <h2 class="text-h4 my-2 font-weight-black text-orange">{{ item.title }}</h2>
            <h4>Category: {{ item.category }}</h4>
            <h4>Brand: {{ item.brand }}</h4>
            <p class="text-body-2 mt-4 mb-4">
              {{ item.description }}
            </p>
            <h2 class="text-h4 w-50 font-weight-black text-primary-500 border">${{item.price}}</h2>
            <h5>Stock:{{ item.stock }}</h5>
          </div>
        </v-sheet>
      </div>

    </div>
  </v-card>
</template>
