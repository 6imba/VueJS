<template>
    <div>
        <h2>Vue component 2: methods.</h2>
        <h5>Data property: {{ dataProperty_1 }}</h5>
        <button @click="changeDataProperty">Change component data property </button>
        <hr>
    </div>
</template>

<script>
export default {
    name: "MyComponent_2",
    data(){
        return {
            dataProperty_1: 0
        }
    },
    methods: {
        changeDataProperty(){
            this.dataProperty_1 += 1
        }
    }
}
</script>