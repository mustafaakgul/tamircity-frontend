<template>
    <div class="main-wrapper">
       <headertwo></headertwo>
       <guidereview></guidereview>
       <userprofile></userprofile>
       <!-- Page Content -->
        <div class="content">
            <div class="container">
                <settingsmenu></settingsmenu>
                <reviewguide></reviewguide>
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
    name: 'guide-reviews'
  }
</Script>