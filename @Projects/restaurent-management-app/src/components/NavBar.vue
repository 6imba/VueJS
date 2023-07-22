<template>
    <div class="navbar">
        <router-link to="/">Home</router-link>
        <router-link to="/add-restaurant">Add Restaurant</router-link>
        <li v-if="userLogIn == 'true'" @click="logout">LogOut</li>
        <router-link to="/signup" v-if="userLogIn != 'true'">Register</router-link>
        <router-link to="/login" v-if="userLogIn != 'true'">SignIn</router-link>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        data(){
            return{
                userLogIn: '',
            }
        },
        methods:{
            logout(){
                localStorage.clear()
                this.$router.push({name:'HomePage'})
            }
        },
        beforeMount(){
            this.userLogIn = localStorage.userLogIn
        }
    }
    console.log('Ok: ', localStorage.userLogIn)
</script>

<style>
    .navbar{
        display: flex;
        list-style: none;
        /* background-color: lightblue; */
        justify-content: center;
        padding: 10px;
    }
    .navbar *{
        margin-right: 20px;
        padding: 5px;
        text-shadow: 2px 1px 4px grey;
        text-decoration: none;
        color: black;
    }
    .navbar *:hover{
        box-shadow: 0px 1px 4px 2px black;
        border-radius: 10px;
        text-shadow: none;
        background-color: black;
        color: white;
    }
</style>