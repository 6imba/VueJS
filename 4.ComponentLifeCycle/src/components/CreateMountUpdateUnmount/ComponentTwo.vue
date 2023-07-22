<template>
    <div class="child_2">
      I am child component 2.
      <p>Post: {{post}}</p>
      <button @click="changePost">Update State</button>
    </div>
  </template>
  
  <script>
    export default{
        name: "ComponentTwo",
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
    .child_2{
      border: 4px solid green;
      padding: 20px;
    }
  </style>