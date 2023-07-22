<template>
    <div id="child">
        <h2>I am Child Component.</h2>
        Data passed via Props from Parent Component to Child Component: 
        <ul>
            <li>Book: {{staticData}}</li>
            <li>Name: {{dynamicData}}</li>
            <li>Age: {{age}}</li>
            <li>Bio: {{bio}}, {{bio.role}}</li>
            <li>Fruits: {{fruits}},{{fruits[1]}}</li>
            <li>Function: {{func}}</li>
            <li>Function with parameter 1: {{paramFunc_1}}</li>
            <li>Function with parameter 5: {{paramFunc_5}}</li>
        </ul>
        <button @click="func">Click1</button>
        <button @click="paramFunc_1">Click2.1</button>
        <button @click="paramFunc_1(1,2)">Click2.2</button>
        <button @click="paramFunc_5">Click7</button>
    </div>
</template>

<script>
export default {
    name: "ChildComponent",
    props: {
        staticData: String,
        dynamicData: String,
        age: Number,
        bio: Object,
        fruits: Array,
        func: Function,
        paramFunc_1: Function,
        paramFunc_4: String,
    }
}
</script>

<style>
    #child{
        border: 2px solid red;
        padding: 10px;
    }
</style>

<!-- 
    Test:    
        <button @click="paramFunc_1(1,2)">Click3</button>
        <button @click="paramFunc_2">Click4</button>
        <button @click="paramFunc_3">Click5</button>
        <button @click="paramFunc_4">Click6</button> 
-->


<!-- 
    Generally, we do not pass function as props from parent to child, instead we emit event from child that handle the function.
 -->