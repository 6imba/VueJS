<template>
    <div class="child">
        <p>I am child.</p>
        props: {{name}}
        <!-- <ChildData_2 :name="name" @change-parent-data-2="$emit('change-parent-data',x)"/> -->
        <ChildData_2 :name="name" @change-parent-data-2="changeName_1"/>
    </div>
</template>

<script>
    import ChildData_2 from "./6.3.ChildComponent.vue"
    export default {
        name: "ChildData_1",
        components:{
            ChildData_2,
        },
        props:{
            name: String,
        },
        methods: {
            changeName_1(childProps){
                this.$emit('change-parent-data',childProps)
            }
        }

    }
</script>

<style>
    .child{
        border: 2px solid red;
        padding: 10px;
    }
</style>
