<template>
    <div>
        create: {{ localState }}
        <p>{{name}}</p>
    </div>
</template>

<script>
    export default {
        name: 'MountHooks',
        data(){
            console.warn("2. Script Loaded!")
            for(let i=0; i<1000000000; i++){
                let x= 0;
                x
            }
            return{
                localState: "Amir",
            }
        },
        beforeCreate(){
            alert("1. beforeCreate")
            this.localState = "John"
        },
        created(){
            alert("2. create")
            this.localState = "Harry"
        },
        beforeMount(){
            alert("Template is getting mounted/attached into the component")
            console.log("Template is getting mounted/attached into the component", this.$el)
        },
        mounted(){
            alert("Template is mounted/attached into the component")
            console.log("Template is mounted/attached into the component", this.$el)
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
        - We implement these phases in a component with the help of vue_life_cycle_methods
        - each phase/event have a two method before and after.

        2. Mount: data-property
            - beforeMount
            - Mounted
            
            - we cannot access html element with ref attribute inside beforeMount.
 -->
