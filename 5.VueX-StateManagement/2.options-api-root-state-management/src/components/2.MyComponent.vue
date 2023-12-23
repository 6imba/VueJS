<template>
    <div>
        <h2>Component 1.</h2>
        <h1>{{ stateProp }}</h1>
        <!-- <button @click="this.$store.commit('changeProperty1')">Mutate state </button> -->
        <button @click="changeProperty1">Mutate state </button>
        <button @click="change2Property1(7)">Mutate state with parameters </button>
        <button @click="change3Property1({a:1,b:2})">Mutate state with payload </button>
        <h2>Computed property(squareStateProp1): {{squareStateProp1}}</h2>
        <h2>Computed property(cubeStateProp1): {{cubeStateProp1}}</h2>
        <button @click="userAPI">Hit Api</button>
        <hr>
    </div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex';

export default {
    name: 'ComponentTwo',
    computed: {
        ...mapGetters(['squareStateProp1','cubeStateProp1']),
        ...mapState({
            stateProp: state => state.stateProperty_1
        })
    },
    methods: {
        ...mapMutations(['changeProperty1','change2Property1','change3Property1']),
        ...mapActions(['userAPI'])
    }
}
</script>

<!-- see mutation in computed vs in methods. -->