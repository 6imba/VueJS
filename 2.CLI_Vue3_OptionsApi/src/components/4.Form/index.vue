<template>
    <div>
        <FormOne />
        <!-- <FormTwo /> -->
        <!-- <FormThree /> -->
        <!-- <FormFour /> -->
    </div>
</template>

<script>
import FormOne from './1.Form.vue'
import FormTwo from './2.Form.vue'
import FormThree from './3.Form.vue'
import FormFour from './4.Form.vue'


export default {
    name: 'ParentChild',
    components: {
        FormOne,
        FormTwo,
        FormThree,
        FormFour
    }
}
</script>