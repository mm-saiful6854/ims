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
const totalItems = ref(0)
const loading = ref(false)
const showDetailsView = ref(false)
const productDetails = ref()

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


function showDetails(item) {
  showDetailsView.value = true;
  productDetails.value = item;
}

</script>

<template>
  <div v-if="showDetailsView">
    <h1>Product Details</h1>
    <div class="d-flex">
      <div class="p-2">
        <img :src="productDetails.thumbnail" class="img-fluid">
      </div>
      <div>
          <v-sheet
              class="px-4"
              min-height="250"
              rounded
              max-width="800"
              width="100%">
            <div class="p-2">
              <h2 class="text-h4 my-2 font-weight-black text-orange">{{ productDetails.title }}</h2>
              <h4>Category: {{productDetails.category}}</h4>
              <h4>Brand: {{productDetails.brand}}</h4>
              <p class="text-body-2 mt-4 mb-4">
                {{ productDetails.description }}
              </p>
                <h2 class="text-h4 text-decoration-line-through w-50 font-weight-black text-orange border">${{ productDetails.price }}</h2>
            <h5>Stock:{{productDetails.stock}}</h5>


            </div>
          </v-sheet>
      </div>

    </div>
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
