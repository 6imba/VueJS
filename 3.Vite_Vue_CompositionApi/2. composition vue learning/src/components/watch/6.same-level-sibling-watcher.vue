<template>
    <div>
        <button @click="stateOne++">Handler</button> => {{ stateOne }}
    </div>
</template>

<script setup>
    import { ref, watch, computed } from 'vue'

    const stateOne = ref(0)
    const computedOne = computed(() => {
        return `${stateOne.value} computed`
    })

    watch(
        stateOne,
        (newStateOne) => {
            console.log(`I am new newStateOne, ${newStateOne}.`)
        }
    )
    watch(
        computedOne,
        (newComputedOne) => {
            console.log(`I am new newComputedOne, ${newComputedOne}.`)
        }
    )
</script>
