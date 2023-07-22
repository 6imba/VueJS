<template>
    <div>
        <ul ref="loopWrapper">
            <li :ref="`element_${i}`" v-for="i in [1, 2, 3, 4, 5]" :key="i" @click="manipulatElement(i)" style="{col}">{{ i }} element</li>
            <!-- when you use the ref attribute within a v-for loop with a static value, Vue will assign an array to the ref value, containing all the elements that match the ref attribute. -->
        </ul>
    </div>
</template>

<script>
export default {
    name: "RefVue",
    methods: {
        manipulatElement(i) {
            let refAttibute = `element_${i}`
            let refElement = this.$refs[refAttibute]
            refElement.style.color = "green"
        }
    }
}
</script>

<!-- 
    Q.What is ref in v-for:
        - when you use the ref attribute within a v-for loop with a static value, Vue will assign an array to the ref value, containing all the elements that match the ref attribute.
 -->
