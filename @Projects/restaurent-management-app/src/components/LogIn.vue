<template>
    <img src="../assets/resta-logo.jpg" alt="" class="logo">
    <h1>Sign In</h1>
    <div class="signin-form">
        <input type="email" id="email" placeholder="Email" v-model="email"><br>
        <input type="password" id="password" placeholder="Password" v-model="password"><br>
        <button @click="login">Log In</button>
    </div>
    <p>
        Don't have an account?
        <router-link to="/signup">SignUp</router-link>
    </p>


</template>

<script>
    import axios from 'axios';
    export default {
        name: 'LogIn',
        data(){
            return{
                email: '',
                password: '',
            }
        },
        methods:{
            async login(){
                let config = {
                    method: 'get',
                    url: `http://localhost:3000/users?email=${this.email}&password=${this.password}`,
                }
                let res = await axios(config)
                console.log(res)
                console.log(res.status)
                console.log(res.data)
                console.log(res.data.length)
                if(res.data.length > 0){
                    localStorage.setItem('userLogIn',true)
                    alert('Logged In!')
                    this.$router.push({name:'ProfilePage'})
                }
                else{
                    alert("Account login fail!")
                }
            }
        },
        mounted(){
            if(localStorage.userInfo){
                this.$router.push({name:'ProfilePage'})
            }
        }
    }
</script>
