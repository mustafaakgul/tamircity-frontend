<template>
    <div class="main-wrapper">
        <headertwo></headertwo>
        <userbookings></userbookings>
        <usersprofile></usersprofile>
        <!-- Page Content -->
        <div class="content content-bottom">
            <div class="container">
                <userssettings></userssettings>
                <usersbooking></usersbooking>
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
    name: 'user-bookings'
    }
</Script>
