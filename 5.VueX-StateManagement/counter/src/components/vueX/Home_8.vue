<template>
  <!-- Store: {{$store}} -->
  <!-- Store: {{$store.state}} -->
  <!-- Store: {{$store.state.counter}} -->
  <br>
  Home
  <br><br>
  Counter: {{$store.state.counter}}
  <button @click="plus">+</button>
  <button @click="minus">-</button>
  <br>
  <p>{{$store.state.counter}} <sup>2</sup> = {{$store.getters.squareCounter}} </p>
  <br>
  Enter Local Color: <input type="text" placeholder="text color" v-model="myColor">
  <p id="my-text" :style="{color:myColor}">My Text is {{myColor}}</p>
  Enter Global Color: <input type="text" placeholder="text color" v-model="myColorCode">
  <p id="my-text" :style="{color:$store.state.myColor}">My Text is {{$store.state.myColor}}</p>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data(){
      return{
        myColor: 'default black'
      }
    },
    methods: {
      plus(){
        this.$store.dispatch('getIncreaseBase')
      },
      minus(){
        this.$store.dispatch('getDecreaseBase')
      }
    },
    computed: {
      myColorCode: {
        // this.$store.commit('changeColor',event.target.value)
        get(){
          return this.$store.state.myColor
        },
        set(newValue){
          this.$store.commit('changeColor',newValue)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<!-- Enter Global Color: <input type="text" placeholder="text color" v-model="$store.state.myColor">  #we are no suppose to two-way-bind state property instead we are only suppose to change state property committing mutation methods -->
<!-- Enter Global Color: <input type="text" placeholder="text color" @keyup="commitColorChange"> # in this way we are not  two-way-binding our state property -->


<!-- two-way-bind the element&state_property using computed property. -->
<!-- In computed property we have a object with two methods get and set. -->
<!-- get method will get the state property value -->
<!-- set method will set the state property value invoking commit -->
