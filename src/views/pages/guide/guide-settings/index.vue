<template>
    <div class="main-wrapper">
       <headertwo></headertwo>
       <guidesettings></guidesettings>
       <userprofile></userprofile>
       <!-- Page Content -->
        <div class="content">
            <div class="container">
                <settingsmenu></settingsmenu>
                <guidesetting></guidesetting>
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
    name: 'guide-settings'
  }
</Script>