<template>
    Enter Local Color: <input type="text" placeholder="text color" v-model="myColor">
    <p id="my-text" :style="{color:myColor}">My Text is {{myColor}}</p>
    Enter Global Color: <input type="text" placeholder="text color" v-model="myColorCode">
    <p id="my-text" :style="{color:$store.state.myColor}">My Text is {{$store.state.myColor}}</p>
</template>

<script>
    export default {
        name: 'ColorComponent',
        data(){
            return{
                myColor: 'default black'
            }
        },
        computed: {
            myColorCode: {
                // this.$store.commit('changeColor',event.target.value)
                get(){
                return this.$store.state.myColor
                },
                set(newValue){
                this.$store.dispatch('getColorToBeChanged',newValue)
                }
            }
        }        
    }
</script>