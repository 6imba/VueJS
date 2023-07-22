<template>
    <div>
      <!-- declarative-static-routing-link -->
      <h3> declarative-static-routing-link </h3>
      <router-link to="/">Home </router-link> |
      <router-link to="/about">About </router-link> |
      <router-link to="/contact">Contact </router-link> |

        <!-- dynamic-routing-link -->
      <h3> declarative-dynamic-routing-link </h3>
      <router-link to="/profile/Amir">Profile </router-link> |
      <router-link to="/profile/Amir/23">Bio </router-link> |
      <router-link to="/apple">NoPage </router-link> |

      <!-- programatic-dynamic-routing-link -->
      <h3> programmatic: dynamic-routing-link </h3>
      <button @click= "this.$router.push('/about')">About </button> |
      <button @click= "this.$router.push({ path: '/contact' })">Contact </button> |
      <button @click= "this.$router.push({name:'HomePage'})">Home </button> |
      <button @click= "this.$router.push({ name: 'BioPage', params: { name: 'Robben', age:23 } })">Bio </button> |
      <button @click= "this.$router.push({ path: 'contact', query: { role: 'HR', gender: 'female' } })"> Search1 </button> |
      <button @click= "this.$router.push({ path: '/contact', query: { role: 'HR', gender: 'female' } })"> Search2 </button>
      <button @click= "this.$router.push({path: '/contact',  redirect: { name: 'MyContact' }})">Contact </button> |
      <button @click= "this.$router.push({path: '/contact',  redirect: to => {}})">Contact </button> |
      <button @click= "this.$router.push({path: '/contact',  component: MyContact, alias: '/home'})">Contact </button> |
      <hr>
      <!-- name-routing  -->
      <h3> name-routing </h3>
      <router-link :to="{ name: 'BioPage', params: { name: 'Robben', age: 23 } }">User</router-link>
      <hr>
      
      <!-- dynamic-routing-view -->
      <h3>view:</h3>
      <router-view></router-view>

    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
