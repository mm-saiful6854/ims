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
  {text: 'Dashboard', icon: 'mdi-car-cruise-control', url: "/dashboard"},
  {text: 'Product', icon: 'mdi-cube-outline', url: "/products"},
  {text: 'Stock', icon: 'mdi-codepen', url: ""},
  {text: 'Category', icon: 'mdi-format-list-bulleted', url: ""},
  {text: 'Brand', icon: 'mdi-format-list-bulleted', url: ""},
  {text: 'Settings', icon: 'mdi-cogs', url: ""},
  {text: 'Users', icon: 'mdi-account', url: ""},

])
</script>

<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>
        <router-link to="dashboard">{{ appName }}</router-link>
      </v-app-bar-title>
      <v-btn @click="toggleTheme" prepend-icon="mdi-white-balance-sunny">
        {{ theme.global.current.value.dark ? 'Light' : 'Dark' }}
      </v-btn>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-avatar class="m-4 cursor-pointer" v-bind="props" size="36px">
            <v-img
                alt="user"
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"/>
          </v-avatar>
        </template>
        <v-list>
          <v-list-item>
            <router-link :to="{name:login}">
              <v-list-item-title to="login">
                <v-icon icon="mdi-power"></v-icon>
                Logout
              </v-list-item-title>
            </router-link>
          </v-list-item>
        </v-list>
      </v-menu>
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
