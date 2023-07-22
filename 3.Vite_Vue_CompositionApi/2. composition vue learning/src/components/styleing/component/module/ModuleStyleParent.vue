<script setup>
import ModuleStyleOneLevelChild from './ModuleStyleOneLevelChild.vue';
</script>

<template>
    <div>
        <h2 :class="$style.textColor">I am ModuleStyleParentComponent.</h2>
        <ModuleStyleOneLevelChild/>
        <hr>
    </div>
</template>

<style module>
.textColor {
    color: blue;
}
</style>
