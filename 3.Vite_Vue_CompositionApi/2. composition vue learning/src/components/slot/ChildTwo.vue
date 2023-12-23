<script setup></script>
<style scoped></style>

<template>
  <div>
    <h3>Child component two</h3>
    <slot name="head">I am head named slot child default value</slot>
    <br>
    <slot name="foot">I am foot named slot child default value</slot>
    <hr>
  </div>
</template>
