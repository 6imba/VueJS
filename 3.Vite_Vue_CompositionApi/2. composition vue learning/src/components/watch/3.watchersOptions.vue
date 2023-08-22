<template>
    <div>
        <button @click="count--">-</button>
        {{ count }}
        <button @click="count++">+</button><br><br>
    </div>
</template>

<script setup>
    import { ref, watch } from 'vue'

    const count = ref(0)

    watch(
        count,
        (newCount) => {
            console.log(`I am ${newCount} number.`)
        },
        {
            immediate: true,
            deep: true,
            flush: 'post'
        }
    )

</script>
