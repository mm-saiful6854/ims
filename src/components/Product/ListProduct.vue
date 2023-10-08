<script setup>
import axios from "axios";
import {onBeforeMount, onMounted, reactive, ref} from "vue";
import {VDataTableServer} from 'vuetify/labs/VDataTable'

const itemsPerPage = ref(5)

const headers = reactive([
  {title: 'S/L', key: 'id', align: 'start', sortable: false},
  {title: 'Title', key: 'title', align: 'start', sortable: false},
  {title: 'Brand', key: 'brand', align: 'end'},
  {title: 'Price', key: 'price', align: 'end'},
  {title: 'Discount Percentage', key: 'discountPercentage', align: 'center'},
  {title: 'Stock', key: 'stock', align: 'end'},
  {title: 'Actions', key: 'actions', sortable: false, align: 'center'},
])


const search = ref('')
const name = ref('') //remove
const totalItems = ref(0)
const loading = ref(false)

const items = ref([]);

onBeforeMount(async () => {
  await axios.get(`https://dummyjson.com/products?limit=${itemsPerPage.value}`).then(res => {
    items.value = res.data.products;
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
  <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items-length="totalItems"
      :items="items"
      :loading="loading"
      loading-text="Loading... Please wait"
      :search="search"
      class="elevation-1"
      item-value="name"
  >
    <template v-slot:item.actions="{ item }">
        <v-btn size="small"
               color="warning"
               prepend-icon="mdi-eye"
               :to="{ name: 'productDetails', params: { id: item.id }}"
        >
          Details
        </v-btn>
    </template>
    <template v-slot:top>
      <div class="w-75">
        <v-text-field v-model="search" hide-details placeholder="Search name..." class="ma-2 w-25"
                      density="compact">
        </v-text-field>
      </div>
    </template>

  </v-data-table-server>
</template>
