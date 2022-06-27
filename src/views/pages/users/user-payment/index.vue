<template>
    <div class="main-wrapper">
        <headertwo></headertwo>
        <userpayment></userpayment>
        <usersprofile></usersprofile>
        <!-- Page Content -->
        <div class="content">
            <div class="container">
                <userssettings></userssettings>
                <userspayment></userspayment>
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
    name: 'user-payment'
    }
</Script>
