<template>
    <p>{{$store.state.counter}} <sup>2</sup> = {{$store.getters.squareCounter}} </p>
    <br>
</template>

<script>
    export default {
        name: "SquareComponent",
    }
</script>