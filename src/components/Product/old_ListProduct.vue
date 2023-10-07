<script setup>
import 'vue3-easy-data-table/dist/style.css';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import {onMounted, ref} from "vue";
import axios from "axios";

const headers = [
  { text: "title", value: "title" },
  // { text: "description", value: "description"},
  { text: "price", value: "price"},
  { text: "discount Percentage", value: "discountPercentage"},
  { text: "stock", value: "stock", sortable: true},
  { text: "action", value: "action", sortable: false}
];

const items = ref([]);

onMounted(async () => {
  await axios.get('https://dummyjson.com/products?limit=10').then(res => {
    items.value = res.data.products;
    console.log(items.value);
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


const loading = ref(false)
// createApp(App).mount("#app");
</script>

<template>
  <Vue3EasyDataTable
      show-index
      :loading="loading"
      :headers="headers"
      :items="items"/>
</template>
