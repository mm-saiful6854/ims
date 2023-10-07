<script setup>
import {reactive, ref} from 'vue'
import {useTheme} from 'vuetify'
import Footer from "@/components/Footer.vue";

const appName = "Inventory Management System"
const drawer = ref(true)
const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const items = reactive([
  {text: 'Dashboard', icon: 'mdi-car-cruise-control', url: "dashboard"},
  {text: 'Product', icon: 'mdi-cube-outline', url: "products"},
  {text: 'User', icon: 'mdi-account', url: ""},
  // {text: 'Category', icon: 'mdi-star',url:""},
  // {text: 'Settings', icon: 'mdi-settings-box',url:""},

])
</script>

<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>{{ appName }}</v-app-bar-title>
      <v-btn @click="toggleTheme" prepend-icon="mdi-white-balance-sunny">
        {{ theme.global.current.value.dark ? 'Light' : 'Dark' }}
      </v-btn>
      <v-avatar class="m-4" size="36px">
        <v-img
            alt="user"
            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"/>
      </v-avatar>


    </v-app-bar>

    <!-- sidebar end -->
    <v-navigation-drawer permanent absolute v-model="drawer">
      <v-list
          :lines="false"
          density="compact" nav>
        <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            color="primary">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <router-link :to="item.url">
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- sidebar end -->
    <v-main class="bg-grey-lighten-2">
      <v-container>
        <slot></slot>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>
