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
  <h2>Create</h2>
  <form @submit.prevent="handlerSubmitForm">
    Name: <input type="text" placeholder="name" v-model=formData.name> <br>
    Email: <input type="email" placeholder="email" v-model=formData.email> <br>
    <button type="submit">Submit</button>
  </form>
  <br>
  <hr>
</template>

<style scoped></style>
