<script setup>
import ChildOne from './ChildOne.vue';
import ChildTwo from './ChildTwo.vue';
import ChildThree from './ChildThree.vue';
</script>

<template>
  <div>
    <child-one/>
    <child-one>
        <p>I am slot value passed by parent</p>
    </child-one>
    <ChildTwo/>
    <ChildTwo>
        <template #foot>
            <p>I am foot named slot value passed by parent</p>
        </template>
    </ChildTwo>
    <ChildThree>
            <template #head>
                <p>I am foot named slot value passed by parent</p>
            </template>
            <template #foot>
                <p>I am foot named slot value passed by parent</p>
            </template>
    </ChildThree>
  </div>
</template>

<style scoped></style>
