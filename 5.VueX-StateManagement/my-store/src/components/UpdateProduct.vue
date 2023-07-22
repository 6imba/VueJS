<template>
    <div class="update-product">
        <h2>Update product</h2>
        <form action="" @submit.prevent="onSubmit">
            <input type="text" placeholder="title" v-model="title">
            <input type="text" placeholder="price" v-model="price">
            <input type="submit" value="Update">
        </form>
    </div>
    <br>
    <hr>
</template>
  
<script>
import { mapActions } from 'vuex'
    export default {
        name: 'UpdateProduct',
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
        mounted(){
            this.title = ''
            this.price = ''
        }
    }
            
</script>
  
<style></style>
  