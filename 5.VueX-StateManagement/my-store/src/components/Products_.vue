<template>
    <h1>Products</h1>

    <!-- <hr>
    <p>{{individualState}}</p>
    <p>{{allProducts_2}}</p>
    <li v-for="product in allProducts_2" :key="product.name">{{product}}</li> <br>
    <li v-for="product in individualState.products_2" :key="product.name">{{product}}</li> -->

    <hr>

    <h1>Products</h1>
    <p> <b>App State:</b> {{$store.state}}</p>
    <p> <b>Module State:</b> {{individualState}}</p>
    <p> <b>Module State Property:</b> {{allProducts_2}}</p>
    <b>Property as List:</b>
    <li v-for="product in allProducts_2" :key="product.name">{{product}}</li>

    <hr>

</template>
  
<script>
    import {mapGetters,mapActions} from 'vuex';
    export default {
        name: 'ProductsComponent_2',
        computed: mapGetters(["individualState","allProducts_2"]),
        methods: {
            ...mapActions(["getAllProducts"])
        },
        created(){
            this.getAllProducts()
        },
    }
            
</script>
  
<style></style>
  