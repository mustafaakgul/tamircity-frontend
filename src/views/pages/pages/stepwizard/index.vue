<template>
    <div class="main-wrapper">
       <layouts></layouts> 
        <tabformwizard></tabformwizard>
      <footerind></footerind>
      <work-time-modal></work-time-modal>
    </div>
</template>
<script>
  import Vue from 'vue'
import WorkTimeModal from './workTimeModal.vue'
  export default {
    components: {
        WorkTimeModal
   
    },
    mounted() {

    },
    name: 'stepwizard'
  }
</Script>