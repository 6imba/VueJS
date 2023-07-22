<template>
  <NavBar/>
  <router-view></router-view>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  export default {
    name: 'App',
    components: {
      NavBar,
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* color: #2c3e50; */
    /* margin-top: 60px; */
  }
  .logo{
      width: 250px;
  }
  .signup-form input, .signin-form input, .add-restaurant input{
      padding: 8px;
      width: 250px;
      margin-bottom: 15px;
  }
  button{
      width: 270px;
      height: 33px;
      color: white;
      background-color: #0C0C0C;
  }
</style>
