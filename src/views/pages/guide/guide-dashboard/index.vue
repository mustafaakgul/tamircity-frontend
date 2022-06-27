<template>
    <div class="main-wrapper">
       <headertwo></headertwo>
       <guidedashboard></guidedashboard>
       <userprofile></userprofile>
       <!-- Page Content -->
        <div class="content content-bottom">
            <div class="container">
                <settingsmenu></settingsmenu>
                <dashboardguide></dashboardguide>
            </div>
        </div>
        <!-- /Page Content -->
        <footerind></footerind>
    </div>
    <dashboardmodal></dashboardmodal>
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