<template>
    <div class="main-wrapper">
       <headertwo></headertwo>
       <walletguide></walletguide>
       <userprofile></userprofile>
       <!-- Page Content -->
        <div class="content">
            <div class="container">
                <settingsmenu></settingsmenu>
                <guidewallet></guidewallet>
            </div>
        </div>
        <!-- /Page Content -->
        <footerind></footerind>
    </div>
    <walletmodal></walletmodal>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
    mounted() {

    },
    name: 'guide-wallet'
  }
</Script>