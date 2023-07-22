<script setup>
import ScopedStyleOneLevelChild from './ScopedStyleOneLevelChild.vue';
</script>

<template>
    <div>
        <h2 class="textColor">I am ScopedStyleParentComponent.</h2>
        <ScopedStyleOneLevelChild/>
        <hr>
    </div>
</template>

<style scoped>
.textColor {
    color: red;
}
</style>
