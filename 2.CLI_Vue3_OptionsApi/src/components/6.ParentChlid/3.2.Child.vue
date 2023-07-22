<template>
    <div class="child">
        <p>I am child.</p>
        props: {{data1}}
        <br>
        <button @click="data1='Samir'">Change name</button>
        <button @click="changeParentData_1">changeParentData_1</button>
        <button @click="$emit('change-parentdata')">Change name2</button>
    </div>
</template>

<script>
    export default {
        name: "ChildData",
        props:{
            data1: String,
            changeParentData_1: Function,
        }    
    }
</script>

<style>
    .child{
        border: 2px solid red;
    }
</style>


// - change data of poarent from child: pass function(that change data of parent) of parent to the child.