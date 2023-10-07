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
  {title: 'Actions', key: 'actions', sortable: false,align: 'center'},
])


const search = ref('')
const totalItems = ref(0)
const loading = ref(false)
const showDetailsView = ref(false)

const items = ref([]);

onBeforeMount(async () => {
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


function showDetails(){
  showDetailsView.value = true;
}

</script>

<template>
  <div v-if="showDetailsView">
    <h1>Product Details</h1>
    <div class="d-flex">
      <div class="p-2">
        <img  class="img-fluid">
      </div>
    </div>
    <table class="table table-bordered mt-4">
      <thead class="thead-dark">
      <tr>
        <th scope="col">S/L</th>
        <th scope="col">Title</th>
        <th scope="col">Brand</th>
        <th scope="col">Price</th>
        <th scope="col">Discount Percentage</th>
        <th scope="col">Stock</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1</td> <!-- Replace with dynamic data -->
        <td>Sample Product</td> <!-- Replace with dynamic data -->
        <td>Sample Brand</td> <!-- Replace with dynamic data -->
        <td>$99.99</td> <!-- Replace with dynamic data -->
        <td>10%</td> <!-- Replace with dynamic data -->
        <td>50</td> <!-- Replace with dynamic data -->
        <td>
          <button class="btn btn-primary">Edit</button>
          <button class="btn btn-danger">Delete</button>
        </td>
      </tr>
      <!-- More rows can be added dynamically based on your data -->
      </tbody>
    </table>
  </div>
  <v-data-table-server
      v-else
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
      <v-icon size="small" class="me-2"
       @click="showDetails(item)"
      >
        mdi-eye
      </v-icon>
    </template>
    <template v-slot:top>
      <div class="w-75">
        <v-text-field v-model="name" hide-details placeholder="Search name..." class="ma-2 w-25"
                      density="compact">
        </v-text-field>
      </div>
    </template>

  </v-data-table-server>
</template>
