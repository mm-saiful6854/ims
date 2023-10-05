<script setup>
import { RouterLink } from 'vue-router';
import Layout from '../components/Layout.vue';
import ListProduct from '../components/Product/ListProduct.vue';
</script>
<template>
    <Layout>
        <div class="flex justify-between"> 
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Products List</h2>
            <v-btn 
            prepend-icon="mdi-plus-circle"
            color="blue"
            to="/product-create"
            >
            Add Product
            </v-btn>
        </div>

        <ListProduct class="mt-2"></ListProduct>
    </Layout>
</template>
