<template>
<!-- Settings Menu -->
<div class="row">
    <div class="col-md-12">
        <div class="widget settings-menu">
            <ul class="dashboard-menu nav">
                <li>
                    <router-link :class="currentPath == 'user-dashboard' ? 'active' : 'notactive'" to="/user-dashboard">
                        <div class="dashboard-box">
                            <i class="fas fa-layer-group"></i> <span>Dashboard</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :class="currentPath == 'user-notification' ? 'active' : 'notactive'" to="/user-notification">
                        <div class="dashboard-box">
                            <i class="fas fa-bell"></i> <span>Notification</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :class="currentPath == 'user-bookings' ? 'active' : 'notactive'" to="/user-bookings">
                        <div class="dashboard-box">
                            <i class="fas fa-tag"></i> <span>My Bookings</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :class="currentPath == 'user-settings' ? 'active' : 'notactive'" to="/user-settings">
                        <div class="dashboard-box">
                            <i class="fas fa-user"></i> <span>Profile Settings</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :class="currentPath == 'user-wallet' ? 'active' : 'notactive'" to="/user-wallet">
                        <div class="dashboard-box">
                            <i class="fas fa-wallet"></i> <span>Wallet</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :class="currentPath == 'user-reviews' ? 'active' : 'notactive'" to="/user-reviews">
                        <div class="dashboard-box">
                            <i class="fas fa-smile"></i> <span>Reviews</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :class="currentPath == 'user-payment' ? 'active' : 'notactive'" to="/user-payment">
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