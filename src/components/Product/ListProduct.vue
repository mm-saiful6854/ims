<script setup>
import 'vue3-easy-data-table/dist/style.css';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import {onMounted, ref} from "vue";

const headers = [
  { text: "title", value: "title" },
  { text: "description", value: "description"},
  { text: "price", value: "price"},
  { text: "discountPercentage", value: "discountPercentage"},
  { text: "rating", value: "rating"},
  { text: "stock", value: "stock", sortable: true}
];

const items = ref([]);

onMounted(async () => {
  const resJson = await fetch('https://dummyjson.com/products?limit=3').then(resText => {
    return resText.json();
  })
  items.value = resJson.products;
  console.log(items.value)
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
