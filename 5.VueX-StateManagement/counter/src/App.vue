<template>
  <!-- <App_1/> -->
  <!-- <App_1 :counter="counter" @increment-event="increment" @decrement-event="decrement"/> -->
  <App_2/>
  <!-- <App_3/> -->
</template>

<script>
// import App_1 from './components/component state/App_1.vue'
import App_2 from './components/vueX/App_2.vue'
// import App_3 from './components/vueX/my-app/App_3.vue'

export default {
  name: 'App',
  components: {
    // App_1,
    App_2,
    // App_3
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
