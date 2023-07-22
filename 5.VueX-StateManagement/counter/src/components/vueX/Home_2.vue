<template>
  <!-- Store: {{$store}} -->
  <!-- Store: {{$store.state}} -->
  <!-- Store: {{$store.state.counter}} -->
  <br>
  Home
  <br>
  Counter: {{$store.state.counter}}
  <button @click="$store.commit('add',2)">+</button>
  <button @click="$store.commit('sub',1)">-</button>
</template>

<script>
  export default {
    name: 'HelloWorld',
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
