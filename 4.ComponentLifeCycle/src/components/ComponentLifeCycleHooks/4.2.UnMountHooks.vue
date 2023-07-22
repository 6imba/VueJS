<template>
    <h2 ref="user">Name: {{user}}</h2>
</template>

<script>
    export default {
        name: 'UnMountedComponent',
        props:{
            user: String,
        },
        beforeMount(){
            alert('Before Component component mounted.')
            // console.log('Before Component component mounted.', this.refs['user'])
        },
        mounted(){
            alert('Component mounted.')
            console.log('Component mounted.', this.refs['user'])
        },
        beforeUnmount(){
            alert('Before Component unmounted.')
            console.log('Before Name component unmounted.', this.refs['user'])
        },
        unmounted(){
            alert('Component unmounted.')
            console.log('Name component unmounted.', this.refs['user'])
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
        - We implement these phases in a component with the help of vue_life_cycle_methods.
        - each phase/event have a two method before and after.

        4. Unmount: hide
            - beforeUnMount
            - unmounted

            - remove or hide component.
            - use this hook inside those components that will get remove or hide.
            - including these hooks (beforeUnMount,unmounted) inside those components that will get remove or hide, will enhance the performance of webapp.
            - remove all the dependencies of component in order to run application smoothly, decrease memory space, increase speed.
            
 -->