<template>
    Bio Page: 
    {{ name }}
    {{ age }}
</template>

<script>
    import {useRoute} from 'vue-router'
    export default {
        name: 'MyProfile',
        data(){
            return{
                name:null,
                age:null,
            }
        },
        mounted(){
            const route = useRoute();
            console.log('route: ', route);
            console.log('route.params: ', route.params);
            console.log('route.params.name: ', route.params.name);
            console.log('route.params.age: ', route.params.age);
            this.name = route.params.name;
            this.age = route.params.age;
        }
    }
</script>
