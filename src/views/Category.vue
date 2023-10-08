<script setup>
import { RouterLink } from 'vue-router';
import Layout from '../components/Layout.vue';
import ListProduct from '../components/Product/ListProduct.vue';
</script>
<template>
        <div class="flex justify-between">
            <span></span>
            <v-btn 
            prepend-icon="mdi-plus-circle"
            color="blue"
            to="/product-create"
            >
            Add Category
            </v-btn>
        </div>

        <ListProduct class="mt-7"></ListProduct>
</template>
