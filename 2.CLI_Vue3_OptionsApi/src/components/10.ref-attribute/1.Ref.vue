<template>
    <div>
        <h2 ref="mainTitle" class="my-title" style="color: blue;" id="titleId" data-qa-id="titleQaId">Vue Ref to access DOM element.</h2>
        <label ref="emailLabel" for="email">Email: </label>
        <input ref="emailInput" type="email" id="email"/>
        <button ref="emailSubmitButon" @click="getDomData">Submit</button>

        <ul ref="promotionsWrapper" class="promotions">
            <li class="promo" id="promo_1">Sales promo</li>
            <li class="promo" id="promo_2">Market promo</li>
            <li class="promo" id="promo_3">Dev promo</li>
            <li class="promo" id="promo_4">SRE promo</li>
        </ul>
        <div ref="divWrapper" class="divWrapperClass">
            <div class="content_1" id="content_1">content_1</div>
            <div class="content_2" id="content_2">
                <div>nested comntent</div>
                <span>my span</span>
            </div>
        </div>

        <p ref="para" id="para1">paragraph 1</p>
        <p ref="para" id="para2">paragraph 2</p> <!-- If you have multiple elements with the same ref attribute value in Vue 3, the ref value will be assigned to the last element with that ref attribute. This behavior is by design in Vue. -->

        <ul ref="loopWrapper">
            <li ref="element" v-for="i in [1,2,3,4,5]" :key="i">{{i}} element</li> <!-- when you use the ref attribute within a v-for loop with a static value, Vue will assign an array to the ref value, containing all the elements that match the ref attribute. --> 
        </ul>
        <ul ref="loopWrapper">
            <li :ref="`element_${i}`" v-for="i in [1, 2, 3, 4, 5]" :key="i">{{ i }} element</li> <!-- ref attribute within a v-for loop with a dynamic value, create dintnct ref --> 
        </ul>
    </div>
</template>

<script>
export default {
    name: "RefVue",
    mounted() {
        console.log(this.$refs)
        console.log(typeof(this.$refs))
        console.log(this.$refs.mainTitle)
        console.log(this.$refs.emailLabel)
        console.log(this.$refs.emailInput)
        console.log(this.$refs.emailSubmitButon)
        console.log(this.$refs.promotionsWrapper)
        console.log(this.$refs.divWrapper)
        console.log(this.$refs.para)
        console.log(this.$refs.element)
        console.log(this.$refs.element_1)
        console.log(this.$refs.element[0])
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
