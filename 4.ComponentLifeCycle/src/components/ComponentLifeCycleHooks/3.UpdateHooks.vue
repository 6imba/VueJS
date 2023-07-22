<template>
    <p>Name: {{localState}}</p>
    <button @click="changeLocalState">Change localState</button> <br><br>
    <button @click="counter -= 1">-</button> <span ref="count"> {{counter}} </span> <button @click="counter += 1">+</button>
</template>

<script>
    export default {
        name: 'UpdateHooks',
        data(){
            console.warn("2. Script Loaded!")
            for(let i=0; i<1000000000; i++){
                let x= 0;
                x
            }
            return{
                localState: "Amir",
                counter: 0,
            }
        },
        methods: {
            changeLocalState(){
                this.localState = "Amir Shrestha"
            },
        },
        beforeCreate(){
            alert("1. Component template structure is getting ready!")
            this.name = "John"
        },
        created(){
            alert("2. Component logic is loaded!")
            this.name = "Harry"
        },
        beforeMount(){
            alert("3. Template is getting mounted/attached into the component")
            console.log("Template is getting mounted/attached into the component", this.$el)
        },
        mounted(){
            alert("4. Template is mounted/attached into the component")
            console.log("Template is mounted/attached into the component", this.$el)
        },
        beforeUpdate(){
            alert("5. Component Template is about to get updated.")
            console.log("Component Template is about to get updated.", this.counter)
            console.log("Component Template is about to get updated.", this.$refs['count'].textContent)
        },
        updated(){
            alert("6. Component Template is updated.")
            console.log("Component Template is updated.", this.counter)
            console.log("Component Template is updated.", this.$refs['count'].textContent)
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

        3. Update: update-data-property
            - beforeUpdate
            - updated

        - beforeUpdate and updated method is called on the updation of UI not on the updation of property.
 -->
