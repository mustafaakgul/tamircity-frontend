<template> 
<!-- Header -->
<header class="header">
    <nav class="navbar navbar-expand-lg header-nav">
        <div class="navbar-header">
            <headertoggle />
           <headerlogo />
        </div>
        <div class="main-menu-wrapper">
            <div class="menu-header">
                <router-link to="/" class="menu-logo">
                    <img src="../../assets/img/logo.png" class="img-fluid" alt="Logo">
                </router-link>
                <a id="menu_close" class="menu-close" href="javascript:void(0);">
                    <i class="fas fa-times"></i>
                </a>
            </div>
            <ul class="main-nav">
                <li v-bind:class="{'active': currentPath == 'index' || currentPath == 'index'}">
                    <router-link to="/">ANASAYFA</router-link>
                </li>
                <li class="has-submenu" :class=" userMenu ? 'active' : 'notactive'">
                    <a href="javascript:void(0);">KURUMSAL</a>
                    <!-- <ul class="submenu">
                        <li :class="currentPath == 'user-dashboard' ? 'active' : 'notactive'"><router-link to="/user-dashboard">Dashboard</router-link></li>
                        <li :class="currentPath == 'user-notification' ? 'active' : 'notactive'"><router-link to="/user-notification">Notification</router-link></li>
                        <li :class="currentPath == 'user-chat' ? 'active' : 'notactive'"><router-link to="/user-chat">Chat</router-link></li>
                        <li :class="currentPath == 'user-bookings' ? 'active' : 'notactive'"><router-link to="/user-bookings">Bookings</router-link></li>
                        <li :class="currentPath == 'user-settings' ? 'active' : 'notactive'"><router-link to="/user-settings">Settings</router-link></li>
                        <li :class="currentPath == 'user-wallet' ? 'active' : 'notactive'"><router-link to="/user-wallet">Wallet</router-link></li>
                        <li :class="currentPath == 'user-reviews' ? 'active' : 'notactive'"><router-link to="/user-reviews">Reviews</router-link></li>
                        <li :class="currentPath == 'user-payment' ? 'active' : 'notactive'"><router-link to="/user-payment">Payment</router-link></li>
                    </ul> -->
                </li>
                <li class="has-submenu" :class=" guidMenu ? 'active' : 'notactive'">
                    <a href="javascript:void(0);">KAMPANYALAR </a>
                    <!-- <ul class="submenu">
                        <li :class="currentPath == 'tech-dashboard' ? 'active' : 'notactive'"><router-link to="/tech-dashboard">Dashboard</router-link></li>
                        <li :class="currentPath == 'guide-notification' ? 'active' : 'notactive'"><router-link to="/guide-notification">Notification</router-link></li>
                        <li :class="currentPath == 'guide-chat' ? 'active' : 'notactive'"><router-link to="/guide-chat">Chat</router-link></li>
                        <li :class="currentPath == 'guide-bookings' ? 'active' : 'notactive'"><router-link to="/guide-bookings">Bookings</router-link></li>
                        <li :class="currentPath == 'guide-settings' ? 'active' : 'notactive'"><router-link to="/guide-settings">Settings</router-link></li>
                        <li :class="currentPath == 'exam-details' ? 'active' : 'notactive'"><router-link to="/exam-details">Exam Details</router-link></li>
                        <li :class="currentPath == 'exam-results' ? 'active' : 'notactive'"><router-link to="/exam-results">Exam Results</router-link></li>
                        <li :class="currentPath == 'guide-wallet' ? 'active' : 'notactive'"><router-link to="/guide-wallet">Wallet</router-link></li>
                        <li :class="currentPath == 'guide-subscription' ? 'active' : 'notactive'"><router-link to="/guide-subscription">Subscription</router-link></li>
                        <li :class="currentPath == 'guide-withdrawn' ? 'active' : 'notactive'"><router-link to="/guide-withdrawn">Withdrawn</router-link></li>
                        <li :class="currentPath == 'guide-availability' ? 'active' : 'notactive'"><router-link to="/guide-availability">Availability</router-link></li>
                        <li :class="currentPath == 'guide-reviews' ? 'active' : 'notactive'"><router-link to="/guide-reviews">Reviews</router-link></li>
                        <li :class="currentPath == 'guide-payment' ? 'active' : 'notactive'"><router-link to="/guide-payment">Payment</router-link></li>
                    </ul> -->
                </li>
                <li class="has-submenu" :class=" pageMenu ? 'active' : 'notactive'">
                    <a href="javascript:void(0);">İLETİŞİM</a>
                    <!-- <ul class="submenu">
                        <li :class="currentPath == 'about-us' ? 'active' : 'notactive'"><router-link to="/about-us">About Us</router-link></li>
                        <li :class="currentPath == 'booking' || currentPath == 'booking-wallet' ? 'active' : 'notactive'"><router-link to="/booking">Book a Guide</router-link></li>
                        <li :class="currentPath == 'guide-list' ? 'active' : 'notactive'"><router-link to="/guide-list">Guide List</router-link></li>
                        <li :class="currentPath == 'guide-details' ? 'active' : 'notactive'"><router-link to="/guide-details">Guide Details</router-link></li>
                        <li :class="currentPath == 'services' ? 'active' : 'notactive'"><router-link to="/services">Services</router-link></li>
                        <li :class="currentPath == 'how-it-works' ? 'active' : 'notactive'"><router-link to="/how-it-works">How it Works</router-link></li>
                        <li :class="currentPath == 'term-condition' ? 'active' : 'notactive'"><router-link to="/term-condition">Terms & Conditions</router-link></li>
                        <li :class="currentPath == 'privacy-policy' ? 'active' : 'notactive'"><router-link to="/privacy-policy">Privacy Policy</router-link></li>
                        <li class="has-submenu">
                            <a href="javascript:void(0);">Authentication</a>
                            <ul class="submenu" :class=" authMenu ? 'active' : 'notactive'">
                                <li :class="currentPath == 'login' ? 'active' : 'notactive'"><router-link to="/login">Login</router-link></li>
                                <li :class="currentPath == 'register' ? 'active' : 'notactive'"><router-link to="/register">Register</router-link></li>
                                <li :class="currentPath == 'forgot-password' ? 'active' : 'notactive'"><router-link to="/forgot-password">Forgot Password</router-link></li>
                                <li :class="currentPath == 'change-password' ? 'active' : 'notactive'"><router-link to="/change-password">Change Password</router-link></li>	
                            </ul>
                        </li>								
                        <li :class="currentPath == 'contact-us' ? 'active' : 'notactive'"><router-link to="/contact-us">Contact Us</router-link></li>
                    </ul> -->
                </li>
                <!-- <li class="has-submenu" :class=" blogMenu ? 'active' : 'notactive'">
                    <a href="javascript:void(0);">Blog <i class="fas fa-chevron-down"></i></a>
                    <ul class="submenu">
                        <li :class="currentPath == 'blog-list' ? 'active' : 'notactive'"><router-link to="/blog-list">Blog List</router-link></li>
                        <li :class="currentPath == 'blog-grid' ? 'active' : 'notactive'"><router-link to="/blog-grid">Blog Grid</router-link></li>
                        <li :class="currentPath == 'blog-details' ? 'active' : 'notactive'"><router-link to="/blog-details">Blog Details</router-link></li>
                    </ul>
                </li> -->
                <li class="login-link">	<router-link to="/login">Sign in / Register</router-link></li>
            </ul>
        </div>		 
        <ul class="nav header-navbar-rht header-btns">
            <flag />
            <li class="nav-item"><router-link to="/login" class="btn log-btn">SERVİS BAŞVURU </router-link></li>
            <li class="nav-item"><router-link to="/login" class="btn log-btn"><i class="fas fa-circle-user me-1"></i>SERVİS GİRİŞİ </router-link></li>
            <li class="nav-item"><router-link to="/register" class="btn reg-btn">Cihaz ve Rezervasyon Takibi</router-link></li>
        </ul>
    </nav>
</header>
</template>
<script>
export default {
    mounted() {
        var header_height = $('.header').outerHeight();

// Sidebar

if($(window).width() <= 991){
var Sidemenu = function() {
    this.$menuItem = $('.main-nav a');
};

function init() {
    var $this = Sidemenu;
    $('.main-nav a').on('click', function(e) {
        if($(this).parent().hasClass('has-submenu')) {
            e.preventDefault();
        }
        if(!$(this).hasClass('submenu')) {
            $('ul', $(this).parents('ul:first')).slideUp(350);
            $('a', $(this).parents('ul:first')).removeClass('submenu');
            $(this).next('ul').slideDown(350);
            $(this).addClass('submenu');
        } else if($(this).hasClass('submenu')) {
            $(this).removeClass('submenu');
            $(this).next('ul').slideUp(350);
        }
    });
}

// Sidebar Initiate

init();
}

//Header Fixed

if($('.header').length > 0) {
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 95) {
            $(".header").css("background" , "#FFFFFF");
        }
        else{
            $(".header").css("background" , "#FFFFFF");  	
        }
    })
}
// Mobile menu sidebar overlay

$('body').append('<div class="sidebar-overlay"></div>');
$(document).on('click', '#mobile_btn', function() {
    $('main-wrapper').toggleClass('slide-nav');
    $('.sidebar-overlay').toggleClass('opened');
    $('html').addClass('menu-opened');
    return false;
});

$(document).on('click', '.sidebar-overlay', function() {
    $('html').removeClass('menu-opened');
    $(this).removeClass('opened');
    $('main-wrapper').removeClass('slide-nav');
});

$(document).on('click', '#menu_close', function() {
    $('html').removeClass('menu-opened');
    $('.sidebar-overlay').removeClass('opened');
    $('main-wrapper').removeClass('slide-nav');
});
    },
    computed: {
        currentPath() {
            return this.$route.name
        },
        userMenu() {
            return this.$route.name == 'user-dashboard' || this.$route.name == 'user-notification' || this.$route.name == 'user-chat' || this.$route.name == 'user-bookings' ||  this.$route.name == 'user-settings' ||  this.$route.name == 'user-wallet' ||  this.$route.name == 'user-reviews' ||  this.$route.name == 'user-payment';
        },
        guidMenu() {
            return this.$route.name == 'tech-dashboard' || this.$route.name == 'guide-notification' || this.$route.name == 'guide-chat' || this.$route.name == 'guide-bookings' ||  this.$route.name == 'guide-settings' ||  this.$route.name == 'exam-details' ||  this.$route.name == 'exam-results' ||  this.$route.name == 'guide-wallet' ||  this.$route.name == 'guide-subscription' ||  this.$route.name == 'guide-withdrawn' ||  this.$route.name == 'guide-availability' ||  this.$route.name == 'guide-reviews' ||  this.$route.name == 'guide-payment';
        },
        pageMenu() {
            return this.$route.name == 'about-us' || this.$route.name == 'contact-us' || this.$route.name == 'booking' || this.$route.name == 'booking-wallet' || this.$route.name == 'guide-list' || this.$route.name == 'guide-details' ||  this.$route.name == 'services' ||  this.$route.name == 'how-it-works' ||  this.$route.name == 'term-condition' ||  this.$route.name == 'privacy-policy';
        },
        authMenu() {
            return this.$route.name == 'login' || this.$route.name == 'register'  || this.$route.name == 'forgot-password' || this.$route.name == 'change-password';
        },
            blogMenu() {
        return this.$route.name == 'blog-list' || this.$route.name == 'blog-grid'  || this.$route.name == 'blog-details';
        },
    },

}
</script>