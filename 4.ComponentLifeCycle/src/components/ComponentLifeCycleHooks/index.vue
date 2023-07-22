<template>
    <div>
        ComponentLifeCycle
        <br>
        <!-- <CreateHooks/> -->
        <MountHooks/>
        <!-- <UpdateHooks/> -->
        <!-- <UnMountHooks/> -->
    </div>
</template>

<script>
// import CreateHooks from './1.CreateHooks.vue'
import MountHooks from './2.MountHooks.vue'
// import UpdateHooks from './3.UpdateHooks.vue'
// import UnMountHooks from './4.1.UnMountHooks.vue'

export default {
    name: "ComponentLifeCycle",
    components: {
        // CreateHooks,
        MountHooks,
        // UpdateHooks,
        // UnMountHooks
    }
};
</script>

<!-- 
    # LifeCycle Phases of a single vue component:
        1. Create: structure
        2. Mount: data-property
        3. Update: update-data-property
        4. Unmount: hide

    # Vue Component Life Cycle Methods: acts on UI.
        - We implement these phases in a component with the help of vue_life_cycle_methods.
        - each phase/event have a two method before and after.

        1. Create: structure
            - beforeCreated
            - Created
        2. Mount: data-property
            - beforeMount
            - mounted
        3. Update: update-data-property
            - beforeUpdate
            - updated
        4. Unmount: hide
            - beforeUnmount
            - unmounted

    # There are 13 of Vue’s lifecycle hooks according to the latest Official Vue documentation.
        beforeCreate and created
        beforeMount and mounted
        beforeUpdate and updated
        beforeUnmount and unmounted
        so on ...
 -->

