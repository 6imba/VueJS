<template>
  <!-- <Home/> -->
  <Home :counter="counter" @increment-event="increment" @decrement-event="decrement"/>
</template>

<script>
import Home from './Home.vue'

export default {
  name: 'App',
  data(){
    return{
      counter: 0
    }
  },
  methods: {
    increment(base){
      this.counter = this.counter + base;
    },  
    decrement(base){
      this.counter = this.counter - base;
    },  
  },
  components: {
    Home
  }
}
</script>

<style>
</style>
