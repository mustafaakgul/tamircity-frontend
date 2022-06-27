<template>
    <div class="main-wrapper">
        <headertwo></headertwo>
        <settingusers></settingusers>
        <usersprofile></usersprofile>
        <!-- Page Content -->
        <div class="content">
            <div class="container">
                <userssettings></userssettings>
                <settings></settings>
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
    name: 'user-settings'
    }
</Script>
