<template>
    <div class="parent">
        <p>I am parent.</p>
        <p>Data: {{name}}</p>
        <ChildData_1 :name="name" @change-parent-data="changeParentData"/>
    </div>
</template>

<script>
    import ChildData_1 from "./4.2.ChildComponent.vue"
    export default {
        name: "ParentData",
        components: {
            ChildData_1
        },
        data(){
            return{
                name: "Amir"
            }
        },
        methods:{
            changeParentData(){
                this.name = "Samir"
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