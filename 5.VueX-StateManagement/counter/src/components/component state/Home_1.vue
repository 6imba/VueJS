<template>
  Home
  Counter: {{counter}}
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      counter: 0
    }
  },
  methods: {
    increment(){
      this.counter++;
    },  
    decrement(){
      this.counter--;
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
