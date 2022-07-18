<template>
    <div class="main-wrapper">
        <headertwo></headertwo>
        <usernotification></usernotification>
        <dashboarduserprofile></dashboarduserprofile>
        <!-- Page Content -->
        <div class="content">
            <div class="container">
                <userssettings></userssettings>
                <usersnotification></usersnotification>
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
    name: 'user-notification'
    }
</Script>
