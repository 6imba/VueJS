<template>
    <h1>Restaurant Near By:</h1>
    <li v-for="resta in restaurants" :key="resta.id">
        {{resta}}
        <router-link :to="'/update-restaurant/'+resta.id">Update</router-link>
        <input type="button" @click="deleteResta(resta.id)" value="Delete"/>
    </li>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "HomeComponent",
        data(){
            return{
                restaurants: null,
            }
        },
        methods: {
            async deleteResta(id){
                const config = {
                    method: 'delete',
                    url: `http://localhost:3000/restaurants/${id}`,
                }
                const res = await axios(config)
                console.log(res)
                if(res.status == 200){
                    alert("Restaurant data deleted successfully!")
                    this.$router.push({name:'HomePage'})
                }
            }
        },
        async mounted(){
            const config = {
                methods: 'get',
                url: 'http://localhost:3000/restaurants'
            }
            const res = await axios(config)
            console.log(res.data)
            this.restaurants = res.data
        }
    }
    // console.log('User LogIn: ',localStorage.getItem('userLogIn'))
    // console.log('User LogIn: ',typeof localStorage.getItem('userLogIn'))
    // console.log('Hi..............')
</script>