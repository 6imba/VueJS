<template>
    <h1>Products</h1>

    <hr>

    <!-- <p>{{$store.state}}</p>
    <p>{{$store.state.products_2_module}}</p>
    <li v-for="product in $store.state.products_2_module.products_2" :key="product.name">{{product}}</li> -->
    
    <hr>
    
    <p>{{$store.getters.individualState}}</p>
    <p>{{$store.getters.individualState.products_2}}</p>
    <li v-for="product in $store.getters.individualState.products_2" :key="product.name">{{product}}</li>
    
    <hr>
    <p>{{$store.getters.individualState.products_2}}</p>
    <p>{{$store.getters.allProducts_2}}</p>
    <li v-for="product in $store.getters.allProducts_2" :key="product.name">{{product}}</li>
    
    <hr>

    <!-- <p>{{$store.getters.allProducts_2}}</p>
    <p>{{$store.state}}</p>
    <p>{{$store.state.products_2_module}}</p>
    <li v-for="product in $store.state.products_2_module.products_2" :key="product.name">{{product}}</li> -->

    <!-- <p>{{allProducts_2}}</p> -->
    <!-- <p>{{datas()}}</p> -->
</template>
  
<script>
    // import {mapGetters, mapActions} from 'vuex';
    export default {
        name: 'ProductsComponent_2',
        // methods: {
        //     datas(){
        //         return this.$store.state.products_2
        //     },
        //     ...mapActions(["getAllProducts"])
        // },
        // computed: mapGetters(["allProducts_2"]),
        // created(){
        //     this.getAllProducts()
        // },
        created(){
            this.$store.dispatch("getAllProducts")
        },
    }
            
</script>
  
<style></style>
  