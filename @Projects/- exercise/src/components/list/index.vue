<template>
    <div>
        <ul class="list-wrapper">
            <li v-for="promo in promotions" :key="promo" :class="[{'active': isActive(promo)}]" @click="setActive(promo)"> {{ promo }} </li>
        </ul>
    </div>
</template>

<script setup>    
    import {ref} from 'vue'
    const promotions = ['sales', 'dev', 'manager']

    let activeElement = ref(null)

    const setActive = promo => activeElement = promo

    const isActive = promo => activeElement == promo
</script>

<style>
    .active{
        color: green;
    }
</style>