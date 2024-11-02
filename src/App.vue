<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'
</script>

<template>

<h1 class="text-red-500">Hello World</h1>
<nav>
  <RouterLink to="/">Home </RouterLink>
  <RouterLink to="/about">about</RouterLink>
   <RouterLink to="/user/2">User </RouterLink>
</nav>

<HomeView />
  <RouterView />
</template>

