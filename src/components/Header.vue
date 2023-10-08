<script setup>
import {ref} from "vue";
const appName = "Inventory Management System"
const drawer = ref(null)
</script>
<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title>{{ appName }}</v-app-bar-title>
  </v-app-bar>
</template>