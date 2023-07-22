<template>
    <div>
        <h2>Component 1.</h2>
        <h4>Data Property: {{ this.$store.state.stateProperty_1 }}</h4>
        <button @click="this.$store.state.stateProperty_1 += 5">Change state directly </button>
        <button @click="this.$store.commit('changeProperty1')">Mutate state </button>
        <!-- <p>{{ this.$store._mutations.changeProperty1 }}</p> -->
        <!-- <button @click="this.$store._mutations.changeProperty1()">Mutate state </button> -->
        <h2>{{squareStateProp1}}</h2>
        <hr>
        <p>Data property: {{ dataProperty1 }}</p>
        <button @click="dataProperty1 += 2">Change dataProperty </button>
    </div>
</template>

<script>
export default {
    name: 'ComponentOne',
    data(){
        return{
            dataProperty1: this.$store.getters.squareStateProp1
        }
    },
    computed: {
        squareStateProp1(){
            return this.$store.getters.squareStateProp1 
        }
    }
}
</script>