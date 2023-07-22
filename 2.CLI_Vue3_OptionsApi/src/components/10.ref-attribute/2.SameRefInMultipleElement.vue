<template>
    <div>
    <h2>Vue Ref to access DOM element.</h2>
        <label for="email">Email: </label>
        <input type="email" id="email" ref="input"/> <br><br>
        <label for="password"> Password: </label>
        <input type="password" id="password" ref="input"/> <br><br>
        <button @click="getDomData">Submit</button>
        <button @click="setStyle">Style</button>
    </div>
</template>
<script>
export default {
    name: "RefVue",
    methods: {
        getDomData(){
            console.log(this.$refs.input)
            console.log(this.$refs.input.value) //you see you have ref assign to multiple element and the ref value will be assigned to the last element with that ref attribute, here password input so this statment only logs password value
            // here this.$refs.input reference to last element, here incase password input
        },
        setStyle(){
            this.$refs.input.style.border = "2px solid red"
            this.$refs.input.focus()
            this.$refs.input.style.color = "green"
            // here this.$refs.input reference to last element, here incase password input
        }
    }
}
</script>

<style>

</style>

<!-- 
    Q.What is ref?
        - we can use same ref in two different DOM element.
        - But remember that manipulation in any of the element will impact ref for all element using it. (this is only in case of v-for loop)
 -->

