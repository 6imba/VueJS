<template>
  <div class="modal-mask" v-if="show">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">Default Header</slot>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
  export default {
    props: {
      show: {
        type: Boolean,
        required: true
      }
    },
  }
</script>
  
<style>
  .modal-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9998;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-wrapper {
    width: 80%;
    max-width: 800px;
  }
  
  .modal-container {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    padding: 1rem;
    overflow: auto;
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .modal-header h2 {
    margin: 0;
  }
  
  .modal-close-button {
    background-color: transparent;
    border: none;
    color: #aaa;
    cursor: pointer;
    font-size: 1.5rem;
  }
  
  .modal-close-button:hover {
    color: #000;
  }
  
  .modal-body {
    padding: 1rem 0;
  }
</style>
  