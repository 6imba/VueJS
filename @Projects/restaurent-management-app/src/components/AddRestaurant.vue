<template>
    <h1>Add Restaurant</h1>
    <div class="add-restaurant">
        <input type="text" id="name" placeholder="Enter Name" v-model="name"><br>
        <input type="text" id="address" placeholder="Enter Address" v-model="address"><br>
        <input type="test" id="contact" placeholder="Enter Contact" v-model="contact"><br>
        <button @click="addResta">Add</button>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "AddRestaurant",
        data(){
            return{
                name: '',
                address: '',
                contact: ''
            }
        },
        methods: {
            async addResta(){
                const config = {
                    method: 'post',
                    url: 'http://localhost:3000/restaurants',
                    data: {
                        name: this.name,
                        address: this.address,
                        contact: this.contact
                    }
                }
                const res = await axios(config)
                if(res.status == 201){
                    alert("Restaurant added successfully!")
                    this.$router.push({name:'HomePage'})
                }
            }
        }
    }
</script>