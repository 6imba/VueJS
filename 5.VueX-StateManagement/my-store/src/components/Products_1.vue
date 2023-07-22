<template>
    <h1>Products</h1>
    <p>{{allProducts_1}}</p>
    <li v-for="product in allProducts_1" :key="product.name">{{product}}</li>
</template>
  
<script>
    import {mapGetters} from 'vuex';
        export default {
        name: 'ProductsComponent',
        computed: mapGetters(["allProducts_1",])
        }
</script>
  
<style></style>
  