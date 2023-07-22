<template>
    <h1>Products</h1>
<!-- 
    <hr>
    <p>{{appState()}}</p> <br>
    <p>{{module2_State()}}</p>
    <li v-for="product in module2_products()" :key="product.name">{{product}}</li>
     -->
    <hr>
    <p>{{individualState}}</p>
    <p>{{allProducts_2}}</p>
    <li v-for="product in allProducts_2" :key="product.name">{{product}}</li> <br>
    <li v-for="product in individualState.products_2" :key="product.name">{{product}}</li>

    <hr>

</template>
  
<script>
    import {mapGetters} from 'vuex';
    export default {
        name: 'ProductsComponent_2',
        computed: mapGetters(["individualState","allProducts_2"]),
        created(){
            this.$store.dispatch("getAllProducts")
        },
    }
            
</script>
  
<style></style>
  