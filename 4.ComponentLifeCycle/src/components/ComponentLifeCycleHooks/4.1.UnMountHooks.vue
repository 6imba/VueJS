<template>
    <div>
        Parent compnent: <br>
        <button @click="showName = !showName">{{showName? 'Unmount Component' : 'Mount Component'}}</button>
         <hr/>
        <UnMountedComponent  v-if="showName" :user="user" :showName="showName"/>
    </div>
</template>

<script>
    import UnMountedComponent from './4.2.UnMountHooks.vue'
    export default {
        name: 'UnMountHooks',
        data(){
            return{
                user: "Amir",
                showName: false
            }
        },
        components: {
            UnMountedComponent,
        }
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

 -->
