<script setup>
  import { onMounted } from 'vue';
  import ComponentOne from './components/ComponentOne.vue'
  import ReactiveState from './components/2.1.RectiveState.vue'
  onMounted(()=> console.log('Parent....'))
</script>

<template>
  <header>
    <h3 class="some">Parent H3</h3>
    <!-- <ComponentOne/> -->
    <ReactiveState/>
  </header>
</template>

<style scoped>
  h3 {
    color: green;
  }
</style>
