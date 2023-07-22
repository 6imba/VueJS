<template>
    <div>
        <h2>Name:</h2>
        <b>FirstName: </b>{{ firstName }} <br>
        <b>LastName: </b>{{ lastName }} <br>
        <b>FullName: </b>{{ fullName }}
        <hr>
        <h2>Event:</h2>
        {{ numb }}
        <hr>
        <h2>ApiCall:</h2>
        <p v-if="error">{{ error }}</p>
        <p v-else-if="data">{{ data }}</p>
        <p v-else>Loading...</p>
    </div>
</template>

<script setup>
    import{ref} from 'vue'

    import useName from '../../composables/useName';
    import useMouseEvent from '../../composables/useMouseEvent';
    import useFetch from '../../composables/useFetch';

    const url = ref('https://fakestoreapi.com/products/1')

    const { firstName, lastName, fullName } = useName();
    const { numb } = useMouseEvent();
    const { data, error } = useFetch(url);

</script>