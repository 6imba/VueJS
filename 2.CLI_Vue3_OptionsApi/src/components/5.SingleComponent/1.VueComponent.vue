<template>
    <div>
        <h2>Vue component 1: data.</h2>
        <h5>Data property: {{ dataProperty_1 }}</h5>
        <button @click="dataProperty_1 += 1">Change component data property </button>
        <hr>
    </div>
</template>

<script>
export default {
    name: "MyComponent_1",
    data(){
        return {
            dataProperty_1: 0
        }
    }
}
</script>