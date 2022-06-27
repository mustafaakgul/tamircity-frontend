<template>
    <div class="main-wrapper">
        <headertwo></headertwo>
        <userdashboard></userdashboard>
        <dashboarduserprofile></dashboarduserprofile>
        <!-- Page Content -->
        <div class="content">
            <div class="container">
                <userssettings></userssettings>
                <usersdashboard></usersdashboard>
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
    name: 'user-dashboard'
    }
</Script>
