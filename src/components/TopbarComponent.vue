<script setup>
import ToggleButton from 'primevue/togglebutton';
import MegaMenu from 'primevue/megamenu';
import { usePrimeVue } from 'primevue/config';
import {ref} from "vue";

const checked = ref(false)
const PrimeVue = usePrimeVue();

let currentTheme =  'md-light-indigo'
const toggleTheme = () => {
  // What is next theme? (2nd parameter)
  let nextTheme = '';
  if (currentTheme === 'md-light-indigo') nextTheme = 'mdc-dark-indigo';
  else if (currentTheme === 'mdc-dark-indigo') nextTheme = 'md-light-indigo';

  // 1. Current theme name
  // 2. Next theme name
  // 3. id of <link>, what reference to where set theme css file --> fix, single id to <link>
  PrimeVue.changeTheme(currentTheme, nextTheme, 'theme-link', () => {
    console.log("theme changed");
  });
  // So current theme now:
  currentTheme = nextTheme;
}

const items = ref([
  {
    label: 'Videos',
    icon: 'pi pi-fw pi-video',
    items: [
      [
        {
          label: 'Video 1',
          items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
        },
        {
          label: 'Video 2',
          items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
        }
      ],
      [
        {
          label: 'Video 3',
          items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
        },
        {
          label: 'Video 4',
          items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
        }
      ]
    ]
  },
  {
    label: 'Users',
    icon: 'pi pi-fw pi-users',
    items: [
      [
        {
          label: 'User 1',
          items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
        },
        {
          label: 'User 2',
          items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
        }
      ],
      [
        {
          label: 'User 3',
          items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
        },
        {
          label: 'User 4',
          items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
        }
      ],
      [
        {
          label: 'User 5',
          items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
        },
        {
          label: 'User 6',
          items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
        }
      ]
    ]
  },
  {
    label: 'Events',
    icon: 'pi pi-fw pi-calendar',
    items: [
      [
        {
          label: 'Event 1',
          items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
        },
        {
          label: 'Event 2',
          items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
        }
      ],
      [
        {
          label: 'Event 3',
          items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
        },
        {
          label: 'Event 4',
          items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
        }
      ]
    ]
  },
  {
    label: 'Settings',
    icon: 'pi pi-fw pi-cog',
    items: [
      [
        {
          label: 'Setting 1',
          items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
        },
        {
          label: 'Setting 2',
          items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
        },
        {
          label: 'Setting 3',
          items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
        }
      ],
      [
        {
          label: 'Technology 4',
          items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
        }
      ]
    ]
  }
]);

</script>

<template>
  <div class="d-flex justify-content-evenly">
    <!--    logo-->
    <router-link to="/">
      <img class="img-position-style" src="../assets/ims.png" alt="logo" srcset=""
           style="width: 100%; height: 100%">
    </router-link>
    <!--    title-->
    <h3>Inventory</h3>


    <!--    menu-->
    <div class="card">
      <MegaMenu :model="items" />
    </div>


    <!--    theme toggler-->
    <div>
      <ToggleButton @change="toggleTheme" onLabel="Dark" off-label="Light" v-model="checked" class="w-8rem" />
    </div>
  </div>
</template>

<style scoped>
</style>
