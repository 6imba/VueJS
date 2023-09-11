<template>
    <div>
        <button @click="age--">-</button>
        Age: {{ age }}
        <button @click="age++">+</button>
    </div>
</template>

<script setup>
    import { ref, computed, watch } from 'vue'
    const age = ref(0);
    const bsAge = computed(() => age.value+10)

    // watch(bsAge, (newAge, oldAge) => {
    //     console.log(`bsAge: ${bsAge.value} oldAge: ${oldAge}, newAge: ${newAge}`)
    // })

    // vs
    
    // watch(bsAge.value, (newAge, oldAge) => {
    //     console.log(`bsAge: ${bsAge.value} oldAge: ${oldAge}, newAge: ${newAge}`)
    // })

    // vs
    
    watch(() => bsAge.value, (newAge, oldAge) => {
        console.log(`bsAge: ${bsAge.value} oldAge: ${oldAge}, newAge: ${newAge}`)
    })
    
</script>

<!--
    Way to watch computed property in vue:
    - vue@2: watch(computedProperty, () => {})
    - vue@3: watch(() =>computedProperty.value, () => {})
-->
