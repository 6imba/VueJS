<template>
  <!-- <TwoWayBinding/> -->
  <!-- <Form/> -->
  <!-- <ConditionalRendering/> -->
  <!-- <ForLoop/> -->

  <!-- <ParentChild/> -->

  <!-- <Blog/> -->
  <!-- <HtmlBinding/> -->
  <!-- <ClassBinding/> -->
  
  <!-- <RefAttribute /> -->

  <FormComponent />

  <!-- <Create_Method/> -->
  <!-- <Mount_Methods_Hook/> -->
  <!-- <Update_Methods_Hook/> -->
  <!-- <UnMount_Methods_Hook/> -->
  <!-- <GetApi/> -->
  <!-- <PostApi/> -->
  <!-- <MyComponent/> -->

</template>

<script>
import TwoWayBinding from './components/1.TwoWayBinding.vue'
import ConditionalRendering from './components/2.ConditionalRendering.vue'
import ForLoop from './components/3.ForLoop-ListRendering.vue'
import FormComponent from './components/4.Form'
import MyComponent from './components/5.SingleComponent'
import ParentChild from './components/6.ParentChlid'
import Blog from './components/7.ReUseComponent'
import HtmlBinding from './components/8.HtmlBinding.vue'
import ClassBinding from './components/9.ClassBinding.vue'
import RefAttribute from './components/10.ref-attribute'
import GetApi from './components/24.api/1.GetApi.vue'
import PostApi from './components/24.api/2.PostApi.vue'

export default {
  name: 'App',
  components: {
    TwoWayBinding,
    ConditionalRendering,
    ForLoop,
    ParentChild,
    Blog,
    HtmlBinding,
    ClassBinding,
    RefAttribute,
    FormComponent,
    GetApi,
    PostApi,
    MyComponent,
  }
}
</script>
