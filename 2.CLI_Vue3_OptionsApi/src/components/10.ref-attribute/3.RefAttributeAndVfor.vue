<template>
    <div>
        <ul ref="loopWrapper">
            <li ref="element" v-for="i in [1, 2, 3, 4, 5]" :key="i">{{ i }} element</li>
            <!-- when you use the ref attribute within a v-for loop with a static value, Vue will assign an array to the ref value, containing all the elements that match the ref attribute. -->
        </ul>
        <button @click="manipulation">manipulation list</button>
    </div>
</template>

<script>
export default {
    name: "RefVue",
    mounted() {
        console.log(this.$refs.element)
        console.log(this.$refs.element[0])
    },
    methods: {
        manipulation() {
            // this.$refs.element.style.color = "green"
            this.$refs.element[0].style.color = "green"
            this.$refs.element[2].style.color = "blue"
            this.$refs.element[4].style.color = "red"
        }
    }
}
</script>

<!-- 
    Q.What is ref in v-for:
        - when you use the ref attribute within a v-for loop with a static value, Vue will assign an array to the ref value, containing all the elements that match the ref attribute.
 -->
