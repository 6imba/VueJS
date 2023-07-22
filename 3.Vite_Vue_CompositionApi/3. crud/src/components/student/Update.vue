<script setup>
  import { reactive } from 'vue';
  const formData = reactive({
    name: "",
    email: "",
  });
  const handlerSubmitForm = async () => {
    console.log(formData)
    alert('Form submitted!')
  }
</script>

<template>
  <h1>Update Data:</h1>
  <form @submit.prevent="handlerSubmitForm">
    Id: <input type="text" value="1" readonly disabled> <br>
    Name: <input type="text" placeholder="name" v-model=formData.name> <br>
    Email: <input type="email" placeholder="email" v-model=formData.email> <br>
    <button type="submit">Submit</button>
  </form>
</template>

<style scoped></style>
