<template>
    <div class="main-wrapper">
       <layouts></layouts>
       <guidedetail></guidedetail>
       <topsection></topsection>
       <detailsection></detailsection>
       <guidesection></guidesection>
        <footerind></footerind>
        <faq></faq>
    </div>
    <dashboardmodal></dashboardmodal>
</template>
<script>
 
  import Vue from 'vue'
import FAQ from './FAQ.vue'
  export default {
    components: {
   

        FAQ    },
    mounted() {
        
    },
    name: 'guide-details'
  }
</Script>