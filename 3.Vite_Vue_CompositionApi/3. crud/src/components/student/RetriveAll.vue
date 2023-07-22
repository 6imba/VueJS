<script setup>
  // import { RouterLink } from 'vue-router';
  import { onMounted } from 'vue';
  import useStudent from '../../composables/studentApi';
  
  const students = useStudent()
  const deleteStudent = (id) => {
    if(window.confirm("Are you sure?")){
      console.log(`deleted ${id}!`);
    }
  };
  onMounted(useStudent);
</script>

<template>
  <h1>Retireve all - Student list</h1>
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Amir Shrestha</td>
        <td>simbaamir55@gmail.com</td>
        <td>
          <router-link to="/detial/1">view</router-link> |
          <router-link :to="{name: 'EditComponent', params: {id: 1}}">edit</router-link> |
          <button @click="deleteStudent(1)">delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
  td, th {
    border: 2px solid #000000;
    text-align: left;
    padding: 8px;
  }
  table {
    border-collapse: collapse;
  }
</style>
