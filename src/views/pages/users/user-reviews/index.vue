<template>
    <div class="main-wrapper">
        <headertwo></headertwo>
        <reviewusers></reviewusers>
        <usersprofile></usersprofile>
        <!-- Page Content -->
        <div class="content">
            <div class="container">
                <userssettings></userssettings>
                <reviews></reviews>
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
    name: 'user-reviews'
    }
</Script>
