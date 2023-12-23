<template>
    <div>
        <h1>State: </h1> {{ state }}
        <h1>Reactive count: {{ state.count }}</h1>
        <h1>Reactive name: {{ state.name }}</h1>
        <button @click="changeNestedState">Change nested state</button> {{ nestedState }}
        <br>
        <button @click="addNewNonReactivePropertyOnState">Add new non reactive property on state</button><br>
        <button @click="changeNewNonReactivePropertyOnState">Change new non reactive property on state</button>
    </div>
</template>

<script setup>
import { reactive, watch, onMounted, onUpdated, computed } from 'vue';

const state = reactive({
    count: 3,
    name: 'who.r.u.simba',
    level1: {
        level2: {
            level3: {
                level4: {
                    level5: {
                        level6: {
                            level7: {
                                level8: {
                                    level9: {
                                        level10: 7,
                                    },
                                }
                            },
                        }
                    },
                },
            },
        }
    },
})

for (let i = 3; i >= 1; i--) {
    setTimeout(() => state.count--, Number(`${i}000`));
}

setTimeout(() => state.name = "Amir Shrestha", 3000);

watch(() => state.count, () => console.log('watching changes in reactive property i.e count.'))
watch(() => state.name, () => console.log('watching changes in reactive property i.e name.'))

// onMounted(() => console.log('Component mounted!'))
// onUpdated(() => console.log('Component updated!'))

console.log('debugging start.................')
console.log(state)
console.log(JSON.stringify(state))
console.log('debugging end.................')

const nestedState = computed(() => state.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10);
const changeNestedState = () => {
    state.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10 = 20;
} // In Vue 3, when you create a reactive object using the reactive function, all nested properties within that object, regardless of how deeply nested they are reactive. This means that changes to properties at any level of nesting will trigger reactivity.

const addNewNonReactivePropertyOnState = () => {
    state.newProperty_1 = 'new property';
}
const changeNewNonReactivePropertyOnState = () => {
    state.newProperty_1 = 'new property changed';
}
watch(() => state.newProperty_1, () => console.log('new property changed'))
// It's important to note that when you add new properties to a reactive object after it has been created, those new properties won't be automatically reactive. To make them reactive, you would need to use the ref or reactive functions on those properties individually. i.e // Adding a new property myObject.prop2 = ref('Hello');
// Does above statement even applicable in composition api state defined using reactive function?
// The statement you provided is accurate in the context of Vue 2.x's options API, but in the Composition API introduced in Vue 3, things work a bit differently.
// In the Composition API, the reactive function creates a reactive object, and any properties added to that object afterward will automatically be reactive. The reactivity is not limited to the initial properties defined when creating the object.
// So, to answer your question: No, in the Composition API using the reactive function, new properties added to the reactive object after its creation will still be automatically reactive.
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
