<script setup>
import ScopedStyleTwoLevelChild from './ScopedStyleTwoLevelChild.vue';
</script>

<!-- - In scoped styleing, style is accessible within that particular component and root element of its one level child component. -->

<template>
    <h2 class="textColor">I am ScopedStyleOneLevelChild.</h2>
</template>

<!-- <template>
    <div>
        <h2 class="textColor">I am ScopedStyleOneLevelChild.</h2>
    </div>
</template> -->

<!-- <template>
    <div class="textColor">
        <h2>I am ScopedStyleOneLevelChild.</h2>
        <ScopedStyleTwoLevelChild />
    </div>
</template> -->

<!-- <template>
    <div>
        <h2>I am ScopedStyleOneLevelChild.</h2>
        <ScopedStyleTwoLevelChild />
    </div>
</template> -->

<style scoped></style>
