<script setup>
    import { onMounted } from 'vue';
    import ComponentTwo from './ComponentTwo.vue'
    onMounted(()=> console.log('ComponentOne....'))
</script>

<template>
    <h3 class="some">ChildOne h3</h3>
    <ComponentTwo/>
</template>

<style scoped>
    h3 {
        color: red;
    }
</style>