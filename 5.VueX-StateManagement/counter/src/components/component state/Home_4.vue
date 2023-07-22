<template>
  Home
  <br>
  Counter: {{counter}}
  <button @click="add(2)">+</button>
  <button @click="sub(2)">-</button>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    counter: Number
  },
  methods: {
    add(base){
      this.$emit('increment-event', base)
    },
    sub(base){
      this.$emit('decrement-event', base)
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
