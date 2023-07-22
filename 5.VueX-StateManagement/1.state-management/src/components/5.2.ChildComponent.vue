<template>
    <div class="child">
        <p>I am child.</p>
        props: {{data1}}
        <br>
        <!-- <button @click="changeParentData">Change name</button> -->
        <button @click="$emit('change-parent-data','Homo Spaiens')">Change name</button>
    </div>
</template>

<script>
    export default {
        name: "ChildData",
        props:{
            data1: String,
        },
        // methods:{
        //     changeParentData(){
        //         this.$emit('change-parent-data',"Homo Spaiens")
        //     }
        // }
    }
</script>

<style>
    .child{
        border: 2px solid red;
        padding: 10px;
    }
</style>
