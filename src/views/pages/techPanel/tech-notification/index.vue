<template>
    <div class="main-wrapper">
       <headertwo></headertwo>
       <guidenotification></guidenotification>
       <userprofile></userprofile>
       <!-- Page Content -->
        <div class="content">
            <div class="container">
                <settingsmenu></settingsmenu>
                <notificationtech></notificationtech>
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
    name: 'tech-notification'
  }
</Script>