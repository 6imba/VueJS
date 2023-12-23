<template>
    <div class="parent">
        <p>I am parent data: {{data1}}</p>
        <ChildData :data1="data1" @change-parent-data="changeParentData"/>
    </div>
</template>

<script>
    import ChildData from "./5.2.ChildComponent.vue"
    export default {
        name: "ParentData",
        components: {
            ChildData
        },
        data(){
            return{
                data1: "Amir"
            }
        },
        methods:{
            changeParentData(newName){
                this.data1 = newName
            }
        }
    }
</script>

<style>
    .parent{
        border: 2px solid black;
        padding: 10px;
    }
</style>