<script setup>
    import { onMounted } from 'vue';
    onMounted(()=> console.log('ComponentTwo....'))
</script>

<template>
    <h3 class="some">ChildTwo h3</h3>
</template>

<style scoped>
    h3 {
        color: blue;
    }
</style>