<template>
    <div>
        create: {{ localState }}
    </div>
</template>

<script>
    export default {
        name: 'CreateHooks',
        data(){
            console.warn("2. Script Loaded!")
            for(let i=0; i<4999999999; i++){
                let x = 1;
                x
            }
            return{
                localState: "Amir",
            }
        },
        beforeCreate(){
            alert("1. Component's structure(template/datas) is getting ready. Simply data of a component is not ready yet.")
            console.log('localState before beforeCreate ', this.localState)
            this.localState = "John"
            console.log('localState after beforeCreate ', this.localState)
        },
        created(){
            alert("2. Component structure(template/datas) is created!")
            console.log('localState before created ', this.localState)
            this.localState = "Harry"
            console.log('localState after created ', this.localState)
        },
    }
</script>



<!-- 
    # Phases in LifeCycle of a single vue component:
        1. Create: structure
        2. Mount: data-property
        3. Update: update-data-property
        4. Unmount: hide

    # Vue Component Life Cycle Methods:
        - We implement these phases in a component with the help of vue_life_cycle_methods_hooks.
        - each phase/event have a two method before and after.

        1. Create: structure
            - beforeCreated
            - Created
            - The difference between is the beforeCreated hook is before an instance has been fully initialized whereas the created hook is after an instance is created.

    # There are 13 of Vue’s lifecycle hooks according to the latest Official Vue documentation.
        beforeCreate and created
        beforeMount and mounted
        beforeUpdate and updated
        beforeUnmount and unmounted
 -->
