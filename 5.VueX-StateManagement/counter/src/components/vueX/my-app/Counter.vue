<template>
    Counter: {{$store.state.counter}}
    <button @click="plus">+</button>
    <button @click="minus">-</button>
    <br>
</template>

<script>
  export default {
    name: 'CounterComponent',
    methods: {
      plus(){
        this.$store.dispatch('getIncreaseBase')
      },
      minus(){
        this.$store.dispatch('getDecreaseBase')
      }
    }
  }
</script>