<template>
  Home
  <br>
  Counter: {{counter}}
  <button @click="add">+</button>
  <button @click="sub">-</button>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      base: 6
    }
  },
  props: {
    counter: Number
  },
  methods: {
    add(){
      this.$emit('increment-event', this.base)
    },
    sub(){
      this.$emit('decrement-event', this.base)
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
