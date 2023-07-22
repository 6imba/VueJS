<template>
    <div class="child_1">
      I am child component 1.
      <p>Post: {{post}}</p>
      <button @click="changePost">Update State</button>
    </div>
  </template>
  
  <script>
    export default{
        name: "ComponentOne",
        data(){
            return{
                post: {
                    id: 1,
                    title: "The Himalayas Range",
                    venue: "Nepal"
                }
            }
        },
        methods: {
            changePost(){
                this.post = {...this.post,author:"Amir Shrestha"}
            }
        },
        beforeCreate() {
            alert("beforeCreate!")
        },
        created() {
            alert("created!")
        },
        beforeMount() {
            alert("beforeMount!")
        },
        mounted() {
            alert("mounted!")
        },
        beforeUpdate() {
            alert("beforeUpdate!")
        },
        updated() {
            alert("updated!")
        },
        beforeUnmount() {
            alert("beforeUnmount!")
        },
        unmounted() {
            alert("unMounted!")
        },
    }
  </script>
  
  <style>
    .child_1{
      border: 4px solid blue;
      padding: 20px;
    }
  </style>