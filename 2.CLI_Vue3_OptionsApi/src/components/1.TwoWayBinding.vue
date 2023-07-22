<template>
    One way attribute Binding: <input type="text" v-bind:value="description"> <br>
    Two way model binding: <input type="text" v-model="description"> <br>
    State:{{description}} <br>
    <hr>
    <hr>
</template>

<script>
export default {
    name: "Home",
    data(){
        return{
            description: "Its CPU.",
        }
    }
}
</script>


<!-- 
    # use case of two way binding:
        - form filed and app state data (model and view)
        - listen for events and update values simultaneously between parent and child components.
 -->

<!-- 
 - bind form:input_field<template> with model:data_property<script> using v-model directives.
 - 
-->