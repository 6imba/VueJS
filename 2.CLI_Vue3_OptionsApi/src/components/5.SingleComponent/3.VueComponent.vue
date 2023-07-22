<template>
    <div>
        <h2>Vue component 3.</h2>
        <h5>Data property: {{ dataProperty_1 }}</h5>
        <button @click="changeDataProperty(5)">Change component data property </button>
        <hr>
    </div>
</template>

<script>
export default {
    name: "MyComponent_3",
    data(){
        return {
            dataProperty_1: 0
        }
    },
    methods: {
        changeDataProperty(payload){
            this.dataProperty_1 += payload
        }
    }
}
</script>