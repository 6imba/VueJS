<template>
  <div>
    <!-- <ComponentOne/> -->
    <ComponentTwo/>
  </div>
</template>

<script>
// import ComponentOne from './components/1.MyComponent.vue'
import ComponentTwo from './components/2.MyComponent.vue'

export default {
  name: 'App',
  components: {
    // ComponentOne,
    ComponentTwo,
  }
}
</script>