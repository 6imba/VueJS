<template>
  <HeaderComponent/>
  <Counter/>
  <Square/>
  <Color/>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import Counter from './Counter.vue'
import Square from './Square.vue'
import Color from './Color.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    Counter,
    Square,
    Color
  }
}
</script>

<style>
</style>
