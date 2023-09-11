<template>
    <div>
        <button @click="count--">-</button>
        {{ count }}
        <button @click="count++">+</button><br><br>
        <button @click="handler">Handler</button>
    </div>
</template>

<script setup>
    import { ref, watch, computed } from 'vue'

    const count = ref(0)

    const handler = () => {
        console.log('Handler call count: ', count.value)
        count.value = 99
        console.log('Handler call count: ', count.value)
        watch(
            count,
            (newCount) => {
                console.log(`I am ${newCount} number.`)
            }
        )
    }

</script>
<!-- 
    - It doesn't make sense to watch same reactive property in both global level and local level.
    - So never watch same reative state in global level if it's already watched in local level.
    - But its okay to watch same reactive property in multiple different local level.
-->
