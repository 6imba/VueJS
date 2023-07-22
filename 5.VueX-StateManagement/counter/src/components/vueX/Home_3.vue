<template>
  <!-- Store: {{$store}} -->
  <!-- Store: {{$store.state}} -->
  <!-- Store: {{$store.state.counter}} -->
  <br>
  Home
  <br>
  Counter: {{$store.state.counter}}
  <button @click="plus">+</button>
  <button @click="minus">-</button>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data(){
      return{
        sum: 2,
        diff: 1,
      }
    },
    methods: {
      plus(){
        this.$store.commit('add',this.sum)
      },
      minus(){
        this.$store.commit('add',this.diff)
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
