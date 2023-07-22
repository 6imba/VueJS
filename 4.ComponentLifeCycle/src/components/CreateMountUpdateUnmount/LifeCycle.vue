<template>
  <div class="root">
    I am root component.
    <ComponentOne v-if="display=='c_1'"/>
    <ComponentTwo v-if="display=='c_2'"/>
    <br>
    <button @click="changeComponent">Unmount Component</button>
  </div>
</template>

<script>
  import ComponentOne from "./ComponentOne.vue"
  import ComponentTwo from "./ComponentTwo.vue"
  export default{
    name: "App",
    data(){
      return{
        display: "c_1"
      }
    },
    methods: {
      changeComponent(){
        this.display = this.display=="c_1"? "c_2" : "c_1"
      }  
    },
    components: {
      ComponentOne,
      ComponentTwo,
    }
  }
</script>

<style>
  .root{
    border: 4px solid red;
    padding: 20px;
  }
</style>