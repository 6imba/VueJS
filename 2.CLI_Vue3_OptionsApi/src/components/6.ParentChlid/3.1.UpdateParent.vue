<template>
    <div class="parent">
        <p>I am parent data: {{data1}}</p>
        <ChildData v-model="data1" :changeParentData_1="changeParentData_1" @change-parentdata="changeParentData_2"/>
    </div>
</template>

<script>
    import ChildData from "./3.2.Child.vue"
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
            changeParentData_1(){
                this.data1 = "Hari"
            },
            changeParentData_2(){
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