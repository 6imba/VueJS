<script setup>
  import { RouterView } from 'vue-router';
</script>

<template>
  <h1>Vue Composition API CRUD with API Call</h1>
  <router-link to="/add"><button> Add Student </button></router-link> | 
  <router-link to="/"> <button>Home</button> </router-link> <hr>
  <RouterView/>
</template>

<style scoped></style>
