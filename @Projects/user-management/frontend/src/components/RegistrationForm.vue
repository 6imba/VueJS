<script setup>
import { ref } from 'vue';
import { registerUser } from '../composable/userRegister'

const fullname = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMsg = ref('')
const registrationSuccessMsg = 'User succeffully registered.'
const registrationFailMsg = 'Registration failed. Please try again.'

const processUserData = async () => {
  if (validatePassword()) {
    try { 
      const response = await registerUser(fullname.value, email.value, password.value)
      console.log('Response ==> ', response)
      clearFields()
      alert(registrationSuccessMsg)
    } catch (error) {
      alert(registrationFailMsg);
    }
  } else {
    alert(errorMsg.value)
  }
}

const validatePassword = () => {
  if (password.value.length < 6) {
    errorMsg.value = 'Password should be more than 6 character.'
    password.value = ''
    return false
  }
  if (!/[A-Z]/.test(password.value)) {
    errorMsg.value = 'Password must contain one capital character.'
    password.value = ''
    return false
  }
  if (password.value !== confirmPassword.value) {
    errorMsg.value = 'Password does not match.'
    password.value = ''
    confirmPassword.value = ''
    return false
  }
  return true
}

const clearFields = () => {
  fullname.value = ''
  email.value = ''
  password.value = ''
  confirmPassword.value = ''
  errorMsg.value = ''
}
</script>

<template>
  <form @submit.prevent="processUserData">
    <h1 class="green">Registration Form:</h1>
    <label for="fullname">Full Name:</label>
    <input
      type="text"
      placeholder="Enter your full name"
      v-model="fullname"
      required
    />
    <br />
    <label for="email">Email Address:</label>
    <input
      type="email"
      placeholder="Enter your email address"
      v-model="email"
      required
    />
    <br />
    <label for="password">Password:</label>
    <input
      type="password"
      placeholder="Enter your password"
      v-model="password"
      required
    />
    <br />
    <label for="confirm_password">Confirm Password:</label>
    <input
      type="password"
      placeholder="Confirm your password"
      v-model="confirmPassword"
      required
    />
    <br />
    <button type="submit">Submit</button>
  </form>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
