<template>
    {{user}} Profile Page
</template>

<script>
    import {useRoute} from 'vue-router'
    export default {
        name: 'MyProfile',
        data(){
            return{
                user:''
            }
        },
        mounted(){
            const route = useRoute();
            console.log('route: ', route);
            console.log('route.params: ', route.params);
            console.log('route.params.name: ', route.params.name);
            this.user = route.params.name
        }
    }
</script>
