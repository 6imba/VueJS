<script setup>
import ChildComponent from './child.vue';
import { ref } from 'vue'

const naam =ref("Simba")

</script>

<template>
  <div>
    <ChildComponent :name="naam" :age=17 @chnage="() => naam = 'Amir'" v-if="naam == 'Simba'"/>
  </div>
</template>

<style scoped></style>
