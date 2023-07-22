<template>
    <div>
        <!-- <RefCompoentOne/> -->
        <!-- <MultipleRef/> -->
        <!-- <RefAttributeAndVfor/> -->
        <!-- <RefAttributeSpecificElement/> -->
        <RefAndEventTarget/>
    </div>
</template>

<script>
    import RefCompoentOne from './1.Ref.vue'
    import MultipleRef from './2.SameRefInMultipleElement.vue'
    import RefAttributeAndVfor from './3.RefAttributeAndVfor.vue'
    import RefAttributeSpecificElement from './4.RefAttributeSpecificElement.vue'
    import RefAndEventTarget from './5.RefAndEventTarget.vue'
    export default {
    name: "RefAttribute",
    components: {
        RefCompoentOne,
        MultipleRef,
        RefAttributeAndVfor,
        RefAttributeSpecificElement,
        RefAndEventTarget
    }
}
</script>