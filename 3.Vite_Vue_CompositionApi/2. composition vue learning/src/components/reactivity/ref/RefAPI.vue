<template>
    <div>
        <h1>Ref count: {{ count }}</h1>
        <h1>Ref name: {{ name }}</h1>
    </div>
</template>


<script setup>
import { ref, watch } from 'vue';

const count = ref(3)
const name = ref('who.r.u.simba')

for (let i = 3; i >= 1; i--) {
    setTimeout(() => count.value--, Number(`${i}000`));
}

setTimeout(() => name.value = "Amir Shrestha", 3000);

watch(count, () => console.log('Component render as its ref state changes!'))
watch(name, () => console.log('name changed'))

console.log('debugging start.................')
console.log(count)
console.log(count.__v_isRef)
console.log(count.__v_isShallow)
console.log(count._rawValue)
console.log(count._value)
console.log(count.value)
console.log(count.dep)
console.log(typeof (count))
console.log(count instanceof Object)
console.log(JSON.stringify(count))
console.log('debugging end.................')

</script>

<style></style>

<!-- 
    - used for reactive object/collection_type/singular_type(string, number, boolean, set)
    - return (ref implementation) object wich wrap the property value
    - dataName.value (it's proxy)
    - In script, default access ref value via .value property(as its wrapped), but no need when used it as top-level properties(not wrapped).

    - syntax:
        <script setup>  
            const name = ref('Amir')
            const age = ref(23)
            const obj = ref({count:0, faculy: 'BIT'})
            
            name.value = 'Simba'
            age.value++
            obj.count.value = 95
            const {faculty} = obj
        <script/>
        <template>
            <p>name</p>
            <p>age</p>
            <p>obj.count</p>
            <p>obj.count</p>
            <p>obj.count.value + 1</p>
            <p>faculty</p>
            <p>faculty + ' course'</p>
        </template>
  -->