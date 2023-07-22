<template>
    <div>
        <ParentComponent/>
        <br><br><br>
        <PassDataViaProps/>
        <br><br><br>
        <UpdateDataInParentFromChild/>
    </div>
</template>

<script>
    import ParentComponent from './1.1.ParentComponent.vue'
    import PassDataViaProps from './2.1.PassDataFromParentToChildViaProps.vue'
    import UpdateDataInParentFromChild from './3.1.UpdateParent.vue'

    export default {
        name: 'ParentChild',
        components: {
            ParentComponent,
            PassDataViaProps,
            UpdateDataInParentFromChild
        }
    }
</script>