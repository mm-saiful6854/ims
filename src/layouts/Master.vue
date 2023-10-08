<script setup>
import { RouterView } from 'vue-router';
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import Footer from './Footer.vue';

</script>
<template>
    <Header></Header>
    <Sidebar></Sidebar>
    <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <router-view></router-view>
        </div>
    </div>
    <Footer></Footer>
</template>