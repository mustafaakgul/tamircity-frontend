<template>
    <div class="main-wrapper">
       <headertwo></headertwo>
       <guidechat></guidechat>
       <!-- Page Content -->
        <div class="chat-content">
            <div class="container">
                <!-- Guide Chat -->
                <div class="row justify-content-center">
                    <div class="col-lg-12">

                        <div class="row chat-window">
                            <chatuserlist></chatuserlist>
                            <chatcontent></chatcontent>
                        </div>
                    </div>
                </div>
				<!-- /Guide Chat -->
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
    name: 'guide-chat'
  }
</Script>