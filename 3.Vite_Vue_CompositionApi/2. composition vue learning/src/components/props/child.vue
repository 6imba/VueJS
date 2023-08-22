<script setup>

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


console.log(props.name)

</script>

<template>
  <div>
    Name: {{ name }}
    Age: {{ age }}
  </div>
</template>

<style scoped></style>
