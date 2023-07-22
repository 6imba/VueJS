<template>
  <div>
    <button @click="showModal = true">Open Modal</button>
    <modal-popup :show="showModal">
      <h2 slot="header">Modal Title</h2>
      <p>Modal Content</p>
      <div slot="footer">
        <button @click="showModal = false">Close</button>
      </div>
    </modal-popup>
  </div>
</template>

<script>
  import ModalPopup from './components/ModalPopup.vue';

  export default {
    components: {
      ModalPopup
    },
    data() {
      return {
        showModal: false
      };
    }
  }
</script>