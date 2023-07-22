<template>
    <div class="child_2">
        <p>I am child_2.</p>
        props: {{name}}
        <br>
        <button @click="$emit('change-parent-data-2','Homo Spaiens')">Change name</button>
    </div>
</template>

<script>
    export default {
        name: "ChildData_2",
        props:{
            name: String,
        },
    }
</script>

<style>
    .child_2{
        border: 2px solid green;
        padding: 10px;
    }
</style>
