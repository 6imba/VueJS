<template>
    <div class="child">
        <p>I am child.</p>
        props: {{data1}}
        <br>
        <!-- <button @click="data1='Samir'">Change name1</button> -->
        <button @click="changeParentData">Change name2</button>
        <button @click="$emit('change-parentdata')">Change name3</button>
    </div>
</template>

<script>
    export default {
        name: "ChildData",
        props:{
            data1: String,
            changeParentData: Function,
        }    
    }
</script>

<style>
    .child{
        border: 2px solid red;
    }
</style>

<!-- 
    Generally, we do not pass function as props from parent to child as in <ChildData :data1="data1" :changeParentData="changeParentData" />,
    instead we emit custom-event(defined in parent) from child that execute the handler_function. <ChildData :data1="data1" @change-parentdata="changeParentData2"/>
 -->