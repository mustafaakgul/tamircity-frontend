<template>
<!-- Settings Menu -->
<div class="row">
    <div class="col-md-12">
        <div class="widget settings-menu">
            <ul class="tech-dashboard-menu dashboard-menu nav">
                <li>
                    <router-link :class="currentPath == 'tech-dashboard' ? 'active' : 'notactive'" to="/tech-dashboard">
                        <div class="dashboard-box">
                            <i class="fas fa-layer-group"></i> <span>Dashboard</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :class="currentPath == 'guide-notification' ? 'active' : 'notactive'" to="/guide-notification">
                        <div class="dashboard-box">
                            <i class="fas fa-bell"></i> <span>Notification</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :class="currentPath == 'guide-bookings' ? 'active' : 'notactive'" to="/guide-bookings">
                        <div class="dashboard-box">
                            <i class="fas fa-tag"></i> <span>Booking List</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :class="currentPath == 'guide-settings' ? 'active' : 'notactive'" to="/guide-settings">
                        <div class="dashboard-box">
                            <i class="fas fa-user"></i> <span>Profile Settings</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :class="currentPath == 'guide-wallet' ? 'active' : 'notactive'" to="/guide-wallet">
                        <div class="dashboard-box">
                            <i class="fas fa-wallet"></i> <span>Wallet</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :class="currentPath == 'guide-subscription' ? 'active' : 'notactive'" to="/guide-subscription">
                        <div class="dashboard-box">
                            <i class="fas fa-basket-shopping"></i> <span>Subscription</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :class="currentPath == 'guide-withdrawn' ? 'active' : 'notactive'" to="/guide-withdrawn">
                        <div class="dashboard-box">
                            <i class="fas fa-dollar-sign"></i> <span>Withdrawn</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :class="currentPath == 'guide-availability' ? 'active' : 'notactive'" to="/guide-availability">
                        <div class="dashboard-box">
                            <i class="fas fa-location-dot"></i> <span>Availability</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :class="currentPath == 'guide-reviews' ? 'active' : 'notactive'" to="/guide-reviews">
                        <div class="dashboard-box">
                            <i class="fas fa-smile"></i> <span>Reviews</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :class="currentPath == 'guide-payment' ? 'active' : 'notactive'" to="/guide-payment">
                        <div class="dashboard-box">
                            <i class="fas fa-credit-card"></i> <span>Payment</span>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</div>
<!-- /Settings Menu -->
</template>