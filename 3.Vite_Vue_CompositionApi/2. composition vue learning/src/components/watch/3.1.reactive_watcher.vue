<template>
    <div>
        <button @click="state.count1--">-</button>
        {{ state.count1 }}
        <button @click="state.count1++">+</button>

        <br><br>

        <button @click="state.count2--">-</button>
        {{ state.count2 }}
        <button @click="state.count2++">+</button>

        <br><br>

        <p>Hi</p>
        <button @click="state.count3.level2.level3.level4.level5--">-</button>
        {{ state.count3.level2.level3.level4.level5 }}
        <button @click="state.count3.level2.level3.level4.level5++">+</button>
</div>
</template>

<script setup>
    import { reactive, watch } from 'vue'

    const state = reactive({
        count1: 0,
        count2: 0,
        count3: {
            level2: {
                level3: {
                    level4: {
                        level5: 0
                    }
                }
            }
        },
    })

    /*
        here when we watch state.count, we get vue error:
        [Vue warn]: Invalid watch source:  0 A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.
    */
    watch(state.count1, (newCount, oldCount) => {
        console.log(`oldCount: ${oldCount}, newCount: ${newCount}`)
    })
    /*
        solution getter -> wrap reactive property by callback
    */
    watch(() => state.count2, (newCount, oldCount) => {
        console.log(`oldCount: ${oldCount}, newCount: ${newCount}`)
    })

    /*
        since all deeply nested properties are reactive, watch can watch them as well.
    */
    watch(() => state.count3.level2.level3.level4.level5, (newCount, oldCount) => {
        console.log(`oldCount: ${oldCount}, newCount: ${newCount}`)
    } )
</script>
