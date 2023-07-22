<template>
  <div>
        <ComponentLifeCycleHooks/>,
        <!-- <CreateMountUpdateUnmount/> -->
  </div>
</template>

<script>
  import ComponentLifeCycleHooks from "./components/ComponentLifeCycleHooks"
  // import CreateMountUpdateUnmount from "./components/CreateMountUpdateUnmount/LifeCycle.vue"
  export default{
    name: "App",
    components: {
      ComponentLifeCycleHooks,
      // CreateMountUpdateUnmount
    }
  }
</script>
