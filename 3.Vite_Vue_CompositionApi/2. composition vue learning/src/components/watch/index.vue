<template>
    <div>
        <button @click="count--">-</button>
        {{ count }}
        <button @click="count++">+</button>
        <h3>{{ parity }}</h3>
    </div>
</template>

<script setup>
    import { ref, watch, computed } from 'vue'

    const count = ref(0)
    const parity = computed(() => count.value%2==0 ? 'even' : 'odd' )

    watch( count, (newCount, oldCount) => {
        console.log(`oldCount: ${oldCount}, newCount: ${newCount}`)
    } )

    watch(parity, (newCount) => {
        console.log(`I am ${newCount} number.`)
    })
</script>