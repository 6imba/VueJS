<template>
    <div class="add-product">
        <h2>Add product</h2>
        <form action="" @submit.prevent="onSubmit">
            <input type="text" placeholder="title" v-model="title">
            <input type="text" placeholder="price" v-model="price">
            <input type="submit" value="Submit">
        </form>
    </div>
    <br>
    <hr>
</template>
  
<script>
import { mapActions } from 'vuex'
    export default {
        name: 'AddProduct',
        data(){
            return{
                title: '',
                price: '',
            }
        },
        methods: {
            ...mapActions(["addProduct"]),
            onSubmit(){
                const newProduct = { title: this.title, price: this.price }
                this.addProduct(newProduct)
                this.title = ''
                this.price = ''
            }
        },
    }
            
</script>
  
<style></style>
  