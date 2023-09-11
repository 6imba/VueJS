<script setup>

import {  onMounted, onUpdated, onUnmounted } from 'vue'

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 23,
        required: true
    },
})

onMounted(() => {
  console.log('Child component mounted.')
})

onUpdated(() => {
  console.log('Child component updated.')
})

onUnmounted(() => {
  console.log('Child component unmounted.')
})

console.log(props.name)

</script>

<template>
  <div>
    Name: {{ name }}
    Age: {{ age }}
    <button @click="$emit('chnage')">click</button>
  </div>
</template>

<style scoped></style>
