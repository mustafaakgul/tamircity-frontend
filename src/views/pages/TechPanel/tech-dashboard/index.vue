<template>
    <div class="main-wrapper">
       <headertwo></headertwo>
       <guidedashboard></guidedashboard>
       <userprofile></userprofile>
       <!-- Page Content -->
        <div class="content content-bottom">
            <div class="container">
                <settingsmenu></settingsmenu>
                <techdashboard></techdashboard>
            </div>
        </div>
        <!-- /Page Content -->
        <footerind></footerind>
    </div>
    <techdashboardmodal></techdashboardmodal>
</template>
<script>
 
  import Vue from 'vue'
  export default {
    components: {
   
    },
    mounted() {
        
    },
    name: 'guide-chat'
  }
</Script>