<template>
    <div class="main-wrapper">
       <headertwo></headertwo>
       <withdrawn></withdrawn>
       <userprofile></userprofile>
       <!-- Page Content -->
        <div class="content">
            <div class="container">
                <settingsmenu></settingsmenu>
                <guidewithdrawn></guidewithdrawn>
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
    name: 'guide-withdrawn'
  }
</Script>