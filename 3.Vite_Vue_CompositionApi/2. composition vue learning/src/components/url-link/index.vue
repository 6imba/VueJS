<script setup>
    import {ref} from 'vue'
    const vitestUrl = ref('https://vitest.dev/guide/features.html')
</script>

<template>
    <div>
        <a href="https://vitest.dev/guide/features.html" target="_blank"> ViTest</a>
        <a :href="vitestUrl" target="_blank"> ViTest</a>
    </div>
</template>

<style></style>
