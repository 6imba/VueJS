<template>
    <div>
        <button @click="x--">-</button>
        x: {{ x }}
        <button @click="x++">+</button>
    </div>
</template>

<script setup>
    import { watch } from 'vue'
    let x = 3;

    watch( () => x, (x2, x1) => {
        console.log(`oldCount: ${x1}, newCount: ${x2}`)
    }, { shallow: true })

    // x = 6;
    
</script>
