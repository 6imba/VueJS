<template>
    <div class="parent">
        <h1>I am Parent Component.</h1>
        <ChildComponent/>
    </div>
</template>

<script>
    import ChildComponent from './1.2.ChildComponent.vue'
    export default {
        name: "ParentComponent",
        components:{
            ChildComponent,
        }
    }
</script>

<style>
    .parent{
        border: 2px solid black;
        padding: 10px;
    }
</style>