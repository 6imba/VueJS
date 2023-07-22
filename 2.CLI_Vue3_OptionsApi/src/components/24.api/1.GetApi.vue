<template>
    <div>
        <h1>API call</h1>
        <h2>Data List:</h2>
        <ul>
            <li v-for="item in list" :key="item"> {{item}} </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'API',
        data(){
            return{
                list: [],
            }
        },
        async mounted(){ //created?
            let response = await axios.get("https://reqres.in/api/users?page=1")
            console.log(response)
            console.log(response.data)
            console.log(response.data.data)
            this.list = response.data.data
        }
    }
</script>


<!-- 
    > npm i axios
    > 
 -->