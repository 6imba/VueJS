<template>
    <img src="../assets/resta-logo.jpg" alt="" class="logo">
    <h1>Sign Up</h1>
    <div class="signup-form">
        <input type="text" id="username" placeholder="Username" v-model="username"> <br>
        <input type="email" id="email" placeholder="Email" v-model="email"><br>
        <input type="password" id="password" placeholder="Password" v-model="password"><br>
        <button @click="register">Register</button>
    </div>
    <p>
        Already have an account?
        <router-link to="/login">LogIn</router-link>
    </p>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'SignUp',
        data(){
            return{
                username: '',
                email: '',
                password: ''
            }
        },
        methods:{
            async register(){
                let config = {
                    method: 'post',
                    url: 'http://localhost:3000/users',
                    data: {
                        username: this.username,
                        email: this.email,
                        password: this.password 
                    }
                }
                let res = await axios(config)
                if(res.status == 201){
                    delete res.data.password
                    localStorage.setItem('userInfo',JSON.stringify(res.data))
                    alert("User Successfully Registered!")
                    this.$router.push({name:'ProfilePage'})
                }
                else{
                    alert("User Registration Fail!")
                }
            }
        },
        // beforeMount(){
        //     if(localStorage.getItem('userLogIn') === 'true'){
        //         this.$router.push({name: 'ProfilePage'})
        //         // this.$router.push("profile")
        //     }
        // },
        mounted(){
            if(localStorage.getItem('userInfo')){
                this.$router.push({name: 'ProfilePage'})
                // this.$router.push("profile")
            }
        }
    }
</script>
