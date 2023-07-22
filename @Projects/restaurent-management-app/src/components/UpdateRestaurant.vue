<template>
    <h1>Update Restaurant</h1>
    <div class="add-restaurant">
        <input type="text" id="name" placeholder="Enter Name" v-model="name"><br>
        <input type="text" id="address" placeholder="Enter Address" v-model="address"><br>
        <input type="text" id="contact" placeholder="Enter Contact" v-model="contact"><br>
        <button @click="updateResta">Update</button>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "UpdateUser",
        data(){
            return{
                name: '',
                address: '',
                contact: ''
            }
        },
        methods: {
            async updateResta(){
                const config = {
                    method: 'put',
                    url: `http://localhost:3000/restaurants/${this.$route.params.id}`,
                    data: {
                        name: this.name,
                        address: this.address,
                        contact: this.contact
                    }
                }
                const res = await axios(config)
                console.log(res)
                if(res.status == 200){
                    alert("Restaurant data updated successfully!")
                    this.$router.push({name:'HomePage'})
                }
            }
        },
        async mounted(){
            const config = {
                method: 'get',
                url: `http://localhost:3000/restaurants/${this.$route.params.id}`,
            }
            const res = await axios(config)
            this.name = res.data.name,
            this.address = res.data.address,
            this.contact = res.data.contact
        }
    }
</script>