<template>
    <div class="child">
        <p>I am child.</p>
        props: {{meroName}}
        <ChildData_2 :name="name" @change-parent-data-1="changeName_1"/>
    </div>
</template>

<script>
    import ChildData_2 from "./7.3.ChildComponent.vue"
    export default {
        name: "ChildData_1",
        components:{
            ChildData_2,
        },
        data(){
            return{
                meroName:this.name
            }
        },
        props:{
            name: String,
        },
        methods: {
            changeName_1(childProps){
                this.meroName = childProps
                this.$emit('change-parent-data',childProps+' Ok')
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
