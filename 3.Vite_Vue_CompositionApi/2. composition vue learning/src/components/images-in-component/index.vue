<script setup>
import { ref } from "vue"
    const darkImg = ref('https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg')
</script>

<template>
    <div>
        <!-- local image -->
        <img src="../../assets/images/bluesh.jpg" alt="">
        <img src="../../assets/images/bluesh.jpg" width="1000">
        <img src="../../assets/images/bluesh.jpg" height="1000">
        <!-- network img -->
        <img src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg" height="1000">
        <!-- state img -->
        <img :src="darkImg" height="1000">
</div>
</template>

<style></style>
