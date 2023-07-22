<template>
    <h1>{{username}} Profile Page</h1>
</template>

<script>
    export default {
        name: "ProfileComp",
        data(){
            return{
                username: '',
            }
        },
        mounted(){
            if(!localStorage.userInfo){
                this.$router.push({name:'SignUpPage'})
            }
            else{
                this.username = JSON.parse(localStorage.userInfo).username
            }
        },
    }
    console.log(!localStorage.userInfo)
</script>