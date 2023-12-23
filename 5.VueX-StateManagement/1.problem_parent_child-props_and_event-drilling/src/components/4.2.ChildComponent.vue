<template>
    <div class="child_1">
        <p>I am child_1.</p>
        <p>Props: {{name}}</p>
        <ChildData_2 :name="name" @change-parent-data2="$emit('change-parent-data')"/>
    </div>
</template>

<script>
    import ChildData_2 from "./4.3.ChildComponent.vue"
    export default {
        name: "ChildData",
        components: {
            ChildData_2
        },
        props:{
            name: String,
        }
    }
</script>

<style>
    .child_1{
        border: 2px solid red;
        padding: 10px;
    }
</style>
