<template>
  <!-- Store: {{$store}} -->
  <!-- Store: {{$store.state}} -->
  <!-- Store: {{$store.state.counter}} -->
  <br>
  Home
  <br><br>
  Counter: {{$store.state.counter}}
  <button @click="plus">+</button>
  <button @click="minus">-</button>
  <br>
  <p>{{$store.state.counter}} <sup>2</sup> = {{$store.getters.squareCounter}} </p>
</template>

<script>
  export default {
    name: 'HelloWorld',
    methods: {
      plus(){
        this.$store.dispatch('getIncreaseBase')
      },
      minus(){
        this.$store.dispatch('getDecreaseBase')
      },
    },
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
