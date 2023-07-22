<template>
    404 Page not found!
</template>

<script>
    import {useRoute} from 'vue-router'
    export default {
        name: 'MyPageNotFound',
        mounted(){
            const route = useRoute();
            console.log('Route params: ', route.params.name)
            this.user = route.params.name
        }
    }
</script>
