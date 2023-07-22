<script setup>
    import {ref} from 'vue'
    const typo = ref('asxsasxas')
    const isActive = ref(true)
</script>
<template>
    <div>

        <h2 v-if="typo === 'A'">A</h2>
        <h2 v-else-if="typo === 'B'">B</h2>
        <h2 v-else-if="typo === 'C'">C</h2>
        <h2 v-else>Not A/B/C</h2>
        
        <template v-if="isActive"> <!-- parent wrapper template is not rendered in dom -->
            <h2>Nested template</h2>
        </template>
        
        <div v-if="isActive"> <!-- parent wrapper div is also rendered in dom -->
            <h2>Nested div wrapper</h2>        
        </div>

        <template v-if="typo === 'A'">
            <h2>True nested template</h2>
        </template>
        <template v-else-if="typo === 'B'">
            <h2>True nested template</h2>
        </template>
        <template v-else>
            <h2>False nested template</h2>
        </template>

        <h1 v-show="!isActive">Show</h1> <!-- gets render in DOM with display none property -->
        <h1 v-if="!isActive">If</h1> <!-- doesn't gets rendered in DOM-->

    </div>
</template>


<!-- 
    - conditionally render a block only if conditional directive's (v-if,v-else-if,v-show) expression returns a truthy value
    - not to use v-if and v-for directives on the same element due to implicit precedence, if used v-if will be evaluated first

    - syntax:
        <h1 v-if="true">Welcome</h1>
        <h1 v-else-if="true">Welcome</h1>
        <h1 v-else-if="true">Welcome</h1>
        <h1 v-else>Welcome</h1>

        <template v-if="true"> //document fragment, cannot see nested template tag in browser console when continal render with v-if, cannot see element in DOM page but can see in browser as document fragment console when not used conditional render v-if
            <h1>Welcome</h1>
        </template>

        <h1 v-show="">Welcome</h1> //else chaining cannot be use, cannot be used in <template>

        - v-if: real conditional rendering, higher toggle costs
        - v-show: always rendered with css-based toggling(display:block,none...), higher initial render costs, use v-show if you need to toggle very often
        
        # Conclusion: use v-show if you need to toggle very often.
 -->