<template>
    <div class="child_2">
        <p>I am child_2.</p>
        props: {{name}}
        <br>
        <button @click="$emit('change-parent-data2')">Change name</button>
    </div>
</template>

<script>
    export default {
        name: "ChildData",
        props:{
            name: String,
        }
    }
</script>

<style>
    .child_2{
        border: 2px solid green;
        padding: 10px;
    }
</style>
