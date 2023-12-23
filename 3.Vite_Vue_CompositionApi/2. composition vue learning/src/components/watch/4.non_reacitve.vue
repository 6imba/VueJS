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

<!-- <template>
    <div>
        <button @click="norVar++">change normal var</button> {{ norVar }}
    </div>
</template>

<script setup>
    import { watch } from 'vue'

    // normal variable
    let norVar = 0;
    watch( norVar, (newVal) => {
        console.log(`I am ${newVal} number.`)
    })
    // [Vue warn]: Invalid watch source:  0 A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.
</script> -->
