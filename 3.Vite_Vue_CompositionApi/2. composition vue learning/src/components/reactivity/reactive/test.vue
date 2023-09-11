
        <br><br>

        <button @click="state.count3.level2.level3--">-</button>
        {{ state.count3.level2.level3 }}
        <button @click="state.count3.level2.level3++">+</button>



            const state = reactive({
        count1: 0,
        count2: 0,
        count3: {
            level2: {
                level3: 0
            }
        },
    })

    



In Vue 3, when you create a reactive object using the reactive function, all nested properties within that object, regardless of how deeply nested they are, become reactive. This means that changes to properties at any level of nesting will trigger reactivity.

It's important to note that when you add new properties to a reactive object after it has been created, those new properties won't be automatically reactive. To make them reactive, you would need to use the ref or reactive functions on those properties individually.
const myObject = reactive({
  prop1: 10,
});
// Adding a new property
myObject.prop2 = ref('Hello');
