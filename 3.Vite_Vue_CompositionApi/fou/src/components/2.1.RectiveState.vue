<script setup>
    import { reactive } from 'vue';
    import { onMounted } from 'vue';
    const state = reactive({
        count: 0,
        name:'unknown',
        course:{name:'BIT'},
        friends: ['Hari','Shyan']
    })
    setTimeout(
        ()=>{
            state.count+=2;
            console.log(state.count);
        }, 2000);
    console.log(state.count);
    setTimeout(
        ()=>{
            state.name = 'Amir Shrestha';
            console.log(state.name);
        }, 4000);
    console.log(state.name);
    setTimeout(
        ()=>{
            state.course.name = 'BCS';
            console.log(state.name);
        }, 6000);
    console.log(state.name);
    setTimeout(
        ()=>{
            console.log(state.friends);
            state.friends.push('Geeta');
            console.log(state.friends);
        }, 7000);
    console.log(state.name);
</script>

<template>
    <h1> Number: {{state.count}} </h1>
    <h1> Name: {{state.name}} </h1>
    <h1> Course: {{state.course.name}} </h1>
    <h1> Friends: {{state.friends}} </h1>
</template>

