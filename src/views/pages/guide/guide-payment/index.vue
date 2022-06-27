<template>
    <div class="main-wrapper">
       <headertwo></headertwo>
       <paymentguide></paymentguide>
       <userprofile></userprofile>
       <!-- Page Content -->
        <div class="content">
            <div class="container">
                <settingsmenu></settingsmenu>
                <guidepayment></guidepayment>
            </div>
        </div>
        <!-- /Page Content -->
        <footerind></footerind>
    </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
    mounted() {

    },
    name: 'guide-payment'
  }
</Script>