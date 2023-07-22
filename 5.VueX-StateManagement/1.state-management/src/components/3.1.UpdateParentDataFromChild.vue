<template>
    <div class="parent">
        <p>I am parent data: {{data1}}</p>
        <ChildData :data1="data1" :changeParentData="changeParentData" @change-parentdata="changeParentData2"/>
    </div>
</template>

<script>
    import ChildData from "./3.2.ChildComponent.vue"
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
            changeParentData(){
                this.data1 = "Hari"
            },
            changeParentData2(){
                this.data1 = "Shyam"
            }
        }
    }
</script>

<style>
    .parent{
        border: 2px solid black;
    }
</style>