<template>
    <div>
        <h1>Reactivity in vue via Reactivity API. Aka ref() and reactive().</h1>
        <hr>
        <ReactiveAPI/>
        <!-- <RefAPI/> -->
    </div>
</template>

<script setup>
    import ReactiveAPI from './reactive/ReactiveAPI.vue'
    import RefAPI from './ref/RefAPI.vue'
</script>

<style></style>

<!-- 
    - detect changes on reactive state and update DOM template accordingly

    - usage:
        - const name = ref('Amir')
        - const obj2 = {count:ref(0)}
        - const state = {name:'Simba', age:23}
        - const students = reactive([ref('Amir')])
        - const mapData = reactive(new Map([['count',ref(0)]]))
        - const obj3 = ref({count:ref(0)})
 -->