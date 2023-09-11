<!-- why and what is nested watcher -->

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

    // watch(
    //     stateOne,
    //     (newStateOne) => {
    //         console.log(`I am new newStateOne, ${newStateOne}.`)
    //         watch( // every time stateOne changes, this watch is setted up again and again which is not good because it will cause memory leak in long run.
    //             computedOne,
    //             (newComputedOne) => {
    //                 console.log(`I am new newComputedOne, ${newComputedOne}.`)
    //             }
    //         )
    //     }
    // )

    console.log('set parent watcher')
    watch(
        stateOne,
        () => {
            console.log('parent watcher handler')
            console.log('set child watcher')
            watch( // every time stateOne changes, this watch is setted up again and again which is not good because it will cause memory leak in long run.
                computedOne,
                () => {
                    console.log('child watcher handler')
                }
            )
        }
    )
</script>


<!--
    This means everytime stateOne gets updated our nested watcher is setted again and again right?
    If yes then our callback of nested watcher will also get executed numbers of times nested watcher has been setted.
    If yes, i doubt it might cause some enexpected behaviour in long increamental run. What do you say?
-->
