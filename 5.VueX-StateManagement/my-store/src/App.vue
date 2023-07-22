<template>
  <!-- <Products_1/> -->
  <!-- <Products_2/> -->
  <Products/>
  <AddProduct/>
  <!-- {{$store}} -->
  <!-- {{$store.state.update}} -->
  <!-- <UpdateProduct v-if="$store.state.update"/> -->
  <UpdateProduct v-if="updateState"/>
</template>

<script>
// import Products_1 from './components/Products_1.vue' 
// import Products_2 from './components/Products_2.vue' 
import Products from './components/Products.vue' 
import AddProduct from './components/AddProduct.vue' 
import UpdateProduct from './components/UpdateProduct.vue' 
import { mapGetters } from 'vuex'
  export default {
    name: 'App',
    components: {
      // Products_1,
      // Products_2,
      Products,
      AddProduct,
      UpdateProduct,
    },
    computed: mapGetters(["updateState"])
  }
</script>

<style></style>
