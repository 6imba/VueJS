<template>
    <div class="parent">
        <p>I am parent.</p>
        <p>Data: {{name}}</p>
        <ChildData :name="name" @change-parent-data="changeParentData"/>
    </div>
</template>

<script>
    import ChildData from "./6.2.ChildComponent.vue"
    export default {
        name: "ParentData",
        components: {
            ChildData
        },
        data(){
            return{
                name: "Amir"
            }
        },
        methods:{
            changeParentData(newName){
                this.name = newName
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