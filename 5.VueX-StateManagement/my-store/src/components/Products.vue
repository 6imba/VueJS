<template>
    <div>
        <!-- <h1>1. {{ $store }}</h1> -->
        <!-- <h6>{{ this.$store.state }}</h6> -->
        <!-- <h1> {{ getFruit }}</h1> -->
        <!-- <h1> {{ this.$store.state.products_1_module.products_1[0].title }}</h1> -->
        <!-- <h1> {{ this.$store._state }}</h1>
        <h1> {{ this.$store._actions }}</h1>
        <h1> {{ this.$store._mutations }}</h1> -->
        <h1> {{ this.$store.state.products_1_module.products_1[0] }}</h1>
        <h1> {{ $store.state.products_1_module.products_1[0] }}</h1>
        <h1>Products</h1>
        <li v-for="product in allProducts_2" :key="product.name">
            {{product.title}} | {{price(product.price)}} | 
            <span id="delete" style="color:red" @click="deleteProduct(product.id)">delete</span> |
            <span id="update" style="color:orange" @click="updateProduct(product.id)">update</span>
        </li>
    
        <hr>
    </div>

</template>
  
<script>
import {mapGetters,mapActions} from 'vuex';
    export default {
        name: 'ProductsComponent_2',
        computed: {
            // ...mapGetters(["individualState","allProducts_2","getFruit"]),
            ...mapGetters(["individualState","allProducts_2"]),
            price(){
                return param => `Rs. ${param}`
            },
            getFruit(){
                return this.$store.state.products_1_module.products_1[0].title
            }
        },
        methods: {
            ...mapActions(["getAllProducts","updateProduct","deleteProduct"]),
        },
        created(){
            this.getAllProducts()
            // console.log( JSON.stringify(this.$store))
            console.log(this.$store)
            // console.log(this.$store.state)
            // console.log(this.$store._state)
            // console.log(this.$store.getters)
            // console.log(this.$store._mutations)
            // console.log(this.$store._actions)
            // console.log(this.$store.commit)
            // console.log(this.$store.dispatch)
        },
    }
            
</script>
  
<style>
    #delete:hover,#update:hover{
        cursor: pointer;
        text-shadow: 1px 1px #090404;
    }
</style>
  