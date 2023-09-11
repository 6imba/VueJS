<!-- 1 -->
<!-- <script setup>
import { onUpdated } from 'vue'
onUpdated(() => {
    console.log('Updated quick view!')
})
const updateQV = () => {
    document.getElementById('quick-view').innerHTML = 'Quick View';
}
</script>
<template>
  <div>
    <div>Search Page</div>
    <div id="quick-view"></div>
    <button @click="updateQV">Update_QV</button>
  </div>
</template> -->
<!--
    Q. Vue beforeUpdate and updated method is called on the updation of UI not on the updation of property. Is it true?
        - That's correct. In Vue.js, the beforeUpdate and updated lifecycle hooks are called during the update cycle of a component, which occurs when the component's data or props change and its UI needs to be re-rendered to reflect those changes. These hooks are not directly related to the update of individual properties; rather, they are related to the process of updating the component's view (UI).

    Q. @click button a text is added to an element but onUpdated hook is not run in vue, why?
        - In Vue.js, the @click event handler on a button that adds text to an element doesn't trigger the onUpdated hook because the onUpdated hook is specifically designed to be called during the component's update cycle, which is related to changes in data or props and the subsequent re-rendering of the component's view.
        - Here's why the onUpdated hook is not run when you add text to an element using an @click event handler:
        - @click Event: When you use the @click event handler on a button, it listens for a click event on that button element. When the button is clicked, the event handler is executed.
        - DOM Manipulation: If your event handler modifies the DOM by adding text to an element, it directly manipulates the DOM without triggering a component update. Vue's reactivity system is not involved in this DOM manipulation, so the component's update hooks like beforeUpdate and updated won't be called.
        - onUpdated Hook: The onUpdated hook is designed to run after the component's virtual DOM has been re-rendered in response to changes in reactive data properties or props. It's meant for actions that need to be performed after the component's view has been updated based on changes in data or props, not for direct DOM manipulation.
        - If you want to perform actions when the DOM is directly manipulated, you can do so within the event handler itself or by using DOM-related methods directly. However, keep in mind that this type of manipulation won't trigger Vue's update hooks because it's outside of Vue's reactivity system.

    > MutationObserver
-->


<!-- 2 -->
<!-- Q. This is my vue3 composition api code , i thought document.getElementById('quick-view') is going to console element but it consoles null, why? -->
<!-- <script setup>
const elementToBeObserver = document.getElementById('quick-view')
console.log(elementToBeObserver)
</script>
<template>
  <div>
    <div id="quick-view"></div>
    <button @click="updateQV">Update_QV</button>
  </div>
</template> -->
<!-- 
The reason you're getting null when attempting to select the element with document.getElementById('quick-view') in your Vue 3 Composition API code is likely because you're trying to access the element before it has been added to the DOM.
When your component is initially created, it doesn't guarantee that the element with the ID "quick-view" has been added to the DOM yet. In Vue, the template is first compiled, and then the component is created. If your template contains an element with an ID, Vue won't add that element to the DOM until the component is mounted.
To access the element after it has been added to the DOM, you should wait until the component has been mounted. You can do this by using the onMounted lifecycle hook, which is part of the Composition API.
-->

<!-- 3 -->
<!-- Q. This is my vue3 composition api code , i thought document.getElementById('quick-view') is going to console element but it consoles null, why? -->
<!-- <script setup>
import { onMounted } from 'vue';
let elementToBeObserver;

onMounted(() => {
    elementToBeObserver = document.getElementById('quick-view')
    console.log(elementToBeObserver)
})
</script>
<template>
  <div>
    <div id="quick-view"></div>
    <button @click="updateQV">Update_QV</button>
  </div>
</template> -->
<!-- 
The reason you're getting null when attempting to select the element with document.getElementById('quick-view') in your Vue 3 Composition API code is likely because you're trying to access the element before it has been added to the DOM.
When your component is initially created, it doesn't guarantee that the element with the ID "quick-view" has been added to the DOM yet. In Vue, the template is first compiled, and then the component is created. If your template contains an element with an ID, Vue won't add that element to the DOM until the component is mounted.
To access the element after it has been added to the DOM, you should wait until the component has been mounted. You can do this by using the onMounted lifecycle hook, which is part of the Composition API.
-->

<!-- 4 -->
<!--
    Vue.js has a watcher system that can be used to observe changes to the state of a component. However, the MutationObserver can be used to observe changes to the DOM that are not directly related to the state of a component.
    Ultimately, the best way to observe changes to the DOM depends on your specific needs. If you need to observe changes to the state of a component, then the watcher system is a good option. If you need to observe changes to the DOM that are not directly related to the state of a component, then the MutationObserver is a good option
-->
<script setup>
import { onUpdated, onMounted } from 'vue'
    let elementToBeObserver;
    const domMutationObserver = new MutationObserver(mutaionHandlerCallback)
    onMounted(() => {
        elementToBeObserver = document.getElementById('quick-view')    
        /*
        * dom mutation observer:
        **/
        domMutationObserver.observe(elementToBeObserver, { childList: true, subtree: true })
    })
    onUpdated(() => {
        console.log('Updated quick view!')
    })
    const updateQV = () => {
        console.log(elementToBeObserver)
        document.getElementById('quick-view').innerHTML = 'Quick View';
    }
    function mutaionHandlerCallback (mutatedElement, domMutationObserver) {
        console.log('mutatedElement ==>', mutatedElement)
        console.log('domMutationObserver ==> ', domMutationObserver)
        console.log('Callback to be execute when observe mutation on elementToBeObserver ...')
    }
</script>
<template>
  <div>
    <div>Search Page</div>
    <div id="quick-view"></div>
    <button @click="updateQV">Update_QV</button>
  </div>
</template>


<!-- 5 -->
<!-- <script setup>
import { ref, onUpdated } from 'vue'
const quickView = ref(null)
onUpdated(() => {
    console.log('Updated quick view!')
})
const updateQV = () => {
    quickView.value.innerHTML = 'Quick View';
}
</script>
<template>
  <div>
    <div>Search Page</div>
    <div id="quick-view" ref="quickView"></div>
    <button @click="updateQV">Update_QV</button>
  </div>
</template> -->
<!-- 
    Q. But i have bind 'quick-view' element with vue ref attribute does that makes it reactive?
    - Binding an element using the ref attribute in Vue does make it accessible within your component, but it does not inherently make the element itself reactive in the sense of Vue's reactivity system.
    - When you use ref on an element, you create a reference to that element, allowing you to directly manipulate or interact with it in your component's logic. However, changes to the element's properties or contents (such as changing its innerHTML) will not automatically trigger Vue's reactivity system or lifecycle hooks like onUpdated.
    - If you want changes to the "quick-view" element to trigger Vue's lifecycle hooks or be reactive, you would typically need to bind the element's properties or contents to reactive data properties.
-->

<!-- 6 solution -->
<!-- <script setup>
import { ref, onUpdated } from 'vue'
const quickViewContent = ref('')
onUpdated(() => {
    console.log('Updated quick view!')
})
const updateQV = () => {
    quickViewContent.value = 'Quick View';
}
</script>
<template>
  <div>
    <div>Search Page</div>
    <div id="quick-view" ref="quickView">{{ quickViewContent }}</div>
    <button @click="updateQV">Update_QV</button>
  </div>
</template> -->
