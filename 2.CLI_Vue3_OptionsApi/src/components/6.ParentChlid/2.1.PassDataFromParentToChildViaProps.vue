<template>
    <div id="parent">
        <h1>I am Parent Component.</h1>
        <ChildComponent 
            staticData="Jiban kada ki phool"
            :dynamicData="name" 
            :age="age" 
            :bio="{role,technology}"
            :fruits="fruits" 
            :funNoParams="greet" 
            :funParams="add"
        />
    </div>
</template>

<script>
    import ChildComponent from './2.2.ChildComponent.vue'
    export default {
        name: "PassDataViaProps",
        components:{
            ChildComponent,
        },
        data(){
            return{
                name:"Amir",
                role:"FullStack",
                technology: "JavaScript",
                age: 22,
                fruits: ['apple','orange','coconut']
            }
        },
        methods: {
            greet(){
                alert("Namaste!")
                console.log("Namaste!")
            },
            add(a,b){
                alert(a+b)
                console.log(a+b)
            }
        }
    }
</script>

<style>
    #parent{
        border: 2px solid black;
        padding: 20px;
    }
</style>


<!-- C:\Users\DELL\Desktop\VueJs\2. Vue CLI Framework\Note\Props.txt -->

<!-- 
    Test:    
        :paramFunc_2="add(a,b)" 
        :paramFunc_3="()=>add(a,b)" 
        :paramFunc_4="(a,b)=>add(a,b)"
-->
