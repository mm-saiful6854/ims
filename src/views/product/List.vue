<script setup>
    import 'vue3-easy-data-table/dist/style.css';
    import Vue3EasyDataTable from 'vue3-easy-data-table';
    import {onMounted, ref} from "vue";
    import { RouterLink } from 'vue-router';

    const headers = [
        { text: "Title", value: "title", sortable: true },
        { text: "Price", value: "price", sortable: true},
        { text: "Discount", value: "discountPercentage", sortable: true},
        { text: "Rating", value: "rating", sortable: true},
        { text: "Quantity", value: "stock", sortable: true},
        { text: "Action", value: "operations" },
    ];

    const items = ref([]);
    const loading = ref(true)
    const itemsSelected = ref([]);
    const rowsPerPage = ref(10);

    onMounted(async () => {
        const res = await fetch('https://dummyjson.com/products')
        .then(res => {
            loading.value = false;
            return res.json();
        })
        items.value = res.products;
    })


    const deleteItem = (Item) => {
      items.value = items.value.filter((item) => item.id !== Item.id);
    };

   
</script>

<template>
    <!-- Breadcrumb -->
    <nav class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
                <router-link to="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                    </svg>
                    Home
                </router-link>
            </li>
            <li aria-current="page">
                <div class="flex items-center">
                    <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Product</span>
                </div>
            </li>
        </ol>
    </nav>
    <br>
    <Vue3EasyDataTable
        :rows-per-page=rowsPerPage
        show-index
        alternating
        border-cell
        buttons-pagination
        :loading="loading"
        :headers="headers"
        :items="items"
        v-model:items-selected="itemsSelected"
    >
        <template #expand="item">
            <div style="padding: 14px;">
               <strong>Description:</strong> {{ item.description }}
            </div>
        </template>
        <template #loading>
            <img
            src="https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif"
            style="width: 100px; height: 80px;"
            />
        </template>
        <template #item-operations="items">
            <RouterLink  :to="{ name: 'product-details', params: { id: items.id } }" title="Details">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
            </RouterLink>
        </template>
    </Vue3EasyDataTable>
</template>