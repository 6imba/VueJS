<template>
    <div>
        <h1>Reactive count: {{ state.count }}</h1>
        <h1>Reactive name: {{ state.name }}</h1>
    </div>
</template>

<script setup>
import { reactive, watch } from 'vue';

const state = reactive({
    count: 3,
    name: 'who.r.u.simba'
})

for (let i = 3; i >= 1; i--) {
    setTimeout(() => state.count--, Number(`${i}000`));
}

setTimeout(() => state.name = "Amir Shrestha", 3000);

watch(() => state.count, () => console.log('Component render as its reactive state changes!'))
watch(() => state.name, () => console.log('name changed'))

console.log('debugging start.................')
console.log(state)
console.log(JSON.stringify(state))
console.log('debugging end.................')

</script>


<!-- 
    - used for reactive collections types i.e object, array, map, set
    - returns proxy of an original objects
    - state.dataName
    - reactive conversion is deep by default
    - nested state also return proxy

    - syntax:
    const state = reactive({
        bio: {name:'Amir', age:23},
        course: ['Science','Math','History']
    })
 -->
