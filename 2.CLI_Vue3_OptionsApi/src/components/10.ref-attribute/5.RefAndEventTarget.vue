<template>
    <div>
        <div ref="divWrapper" class="divWrapperClass">
            <div class="content_1" id="content_1">content_1</div>
            <div class="content_2" id="content_2">
                <div>nested comntent</div>
                <span>my span</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RefVue",
    mounted() {
        window.addEventListener('click', this.handler)
    },
    methods: {
        handler(event){
            console.log(this.$refs.divWrapper)
            console.log(event.target)
        }
    }
}
</script>

<!-- 
    Q.What is ref?
        - ref is vue special attibutes.
        - Ref is used to access DOM element.
        - Ref is used to get and set value of DOM element.
        - Ref is used to get and set style of DOM element.
        - We can have more than one ref in a component.
        - we can use same ref in two different DOM element and remember that manipulation in any of the element will impact ref for all element using it. (see in 3.SameRefInMultipleElement.vue)
        - It allows us to obtain a direct reference to a specific DOM element or child component instance after it's mounted.
        - If you have multiple elements with the same ref attribute value in Vue 3, the ref value will be assigned to the last element with that ref attribute. This behavior is by design in Vue.
        - ref attribute within a v-for loop with a dynamic value, create dintnct ref
        - when you use the ref attribute within a v-for loop with a static value, Vue will assign an array to the ref value, containing all the elements that match the ref attribute.

    Q. return of this.$refs.element_1 depends upon the type of the referenced element:
        - If the ref attribute is assigned to a component, returns component instance itself.
        - If the ref attribute is assigned to a DOM element, return the corresponding DOM element itself.
 -->
