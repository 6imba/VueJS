<script setup>
  const deleteStudent = (id) => {
    if(window.confirm("Are you sure?")){
      console.log(`deleted ${id}!`);
    }
  }
</script>

<template>
  <h1>Retrive One:</h1>
  <h3>Id: 1</h3>
  <h3>Name: Amir Shrestha</h3>
  <h3>Email: simbaamir55@gmail.com</h3>
  <router-link :to="{name: 'EditComponent', params: {id: 1}}">edit</router-link> |
  <button @click="deleteStudent(2)">delete</button>
</template>

<style scoped></style>
