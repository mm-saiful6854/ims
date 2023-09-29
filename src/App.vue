<script setup>

</script>

<template>
<!--  router-view named-->
  <div class="d-flex flex-column">
    <div>
      <router-view name="topbar"></router-view>
    </div>
    <div class="min-vh-100">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>

</style>
