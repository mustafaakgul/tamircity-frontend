<template>
    <div class="main-wrapper">
        <headertwo></headertwo>
        <userwallet></userwallet>
        <usersprofile></usersprofile>
        <!-- Page Content -->
        <div class="content">
            <div class="container">
                <userssettings></userssettings>
                <userswallet></userswallet>
            </div>
        </div>
        <!-- /Page Content -->
        <footerind></footerind>
    </div>
    <walletmodal></walletmodal>
</template>
<script>
    import Vue from 'vue'
    export default {
    components: {
    
    },
    mounted() {

    },
    name: 'user-wallet'
    }
</Script>
