<template>
    <div>
        <h2>Vue component 4: props.</h2>
        <h5>Data property: {{ props_1 }}</h5>
        <h5>Received props data type: <i>{{ typeof(props_1) }}</i> (props is always received as string type.)</h5>
        <h5>Data property: {{ dataProperty_1 }}</h5>
        <button @click="changeDataProperty1(1)">Change component data property </button>
        <h5>Data property: {{ dataProperty_2 }}</h5>
        <button @click="changeDataProperty2(1)">Change component data property </button>
        <hr>
    </div>
</template>

<script>
export default {
    name: "MyComponent_4",
    data(){
        return {
            dataProperty_1: this.props_1,
            dataProperty_2: Number(this.props_1)
        }
    },
    methods: {
        changeDataProperty1(payload){
            this.dataProperty_1 += payload
        },
        changeDataProperty2(payload){
            this.dataProperty_2 += payload
        }
    },
    props: ['props_1']
}
</script>