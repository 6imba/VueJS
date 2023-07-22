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
            <li>funNoParams: {{funNoParams}}</li>
            <li>funParams: {{funParams}}</li>
        </ul>
        <button @click="funNoParams">greet</button>
        <button @click="funParams">add</button>
        <button @click="funParams(1,2)">add prime</button>
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
        funNoParams: Function,
        funParams: Function,
        // funParams: String,
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