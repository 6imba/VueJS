<template>
    <div>
        <MyComponent_1/>
        <MyComponent_2/>
        <MyComponent_3/>
        <MyComponent_4 props_1='99'/>
    </div>
</template>

<script>
import MyComponent_1 from './1.VueComponent.vue'
import MyComponent_2 from './2.VueComponent.vue'
import MyComponent_3 from './3.VueComponent.vue'
import MyComponent_4 from './4.VueComponent.vue'
export default {
    name: "MyComponent",
    components: {
        MyComponent_1,
        MyComponent_2,
        MyComponent_3,
        MyComponent_4,
    }
}
</script>