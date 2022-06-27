<template>
    <div class="main-wrapper">
       <headertwo></headertwo>
       <guidebooking></guidebooking>
       <userprofile></userprofile>
       <!-- Page Content -->
        <div class="content">
            <div class="container">
                <settingsmenu></settingsmenu>
                <guidebookings></guidebookings>
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
    name: 'guide-bookings'
  }
</Script>