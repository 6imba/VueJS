<template>
    <h1>Products</h1>
    <!-- 
    <hr>
    <p>{{$store.getters.individualState}}</p>
    <p>{{$store.getters.individualState.products_2}}</p>
    <li v-for="product in $store.getters.individualState.products_2" :key="product.name">{{product}}</li>
    <p>{{$store.getters.allProducts_2}}</p>
    <li v-for="product in $store.getters.allProducts_2" :key="product.name">{{product}}</li>
     -->

    <hr>

    <p>{{appState()}}</p> <br>
    <p>{{module2_State()}}</p>
    <li v-for="product in module2_products()" :key="product.name">{{product}}</li>

    <hr>

</template>
  
<script>
    export default {
        name: 'ProductsComponent_2',
        methods: {
            appState(){
                return this.$store.state
            },
            module2_State(){
                return this.$store.state.products_2_module
            },
            module2_products(){
                return this.$store.state.products_2_module.products_2
            },
        },
        created(){
            this.$store.dispatch("getAllProducts")
        },
    }
            
</script>
  
<style></style>
  