<script setup>
import { RouterLink } from 'vue-router';
import Layout from '../components/Layout.vue';
import ListProduct from '../components/Product/ListProduct.vue';
</script>
<template>
    <Layout>
        <div class="flex justify-between"> 
            <span></span>
            <v-btn 
            prepend-icon="mdi-plus-circle"
            color="blue"
            to="/product-create"
            >
            Add Product
            </v-btn>
        </div>

        <ListProduct class="mt-7"></ListProduct>
    </Layout>
</template>
