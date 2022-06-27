<template>
<!-- User Menu -->
<li class="nav-item dropdown has-arrow main-drop account-item">
    <a to="/#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
        <span class="user-img">
            <img src="../assets/img/provider/provider-thumb-01.jpg" class="rounded-circle me-1" alt="">
        </span>
    </a>
    <div class="dropdown-menu dropdown-menu-end emp">
        <router-link class="dropdown-item" to="/user-dashboard">
            <i class="fas fa-layer-group"></i> Dashboard
        </router-link>
        <router-link class="dropdown-item" to="/user-notification">
            <i class="fas fa-bell"></i> Notification
        </router-link>
        <router-link class="dropdown-item" to="/user-bookings"> 
            <i class="fas fa-tag"></i> Bookings
        </router-link>
        <router-link class="dropdown-item" to="/user-settings">
            <i class="fas fa-cog"></i> Settings
        </router-link>
        <router-link class="dropdown-item" to="/user-wallet">
            <i class="fas fa-wallet"></i> Wallet
        </router-link>
        <router-link class="dropdown-item" to="/user-reviews">
            <i class="fas fa-smile"></i> Reviews
        </router-link>
        <router-link class="dropdown-item" to="/user-payment">
            <i class="fas fa-credit-card"></i> Payment
        </router-link>
        <router-link class="dropdown-item" to="/">
            <i class="fas fa-power-off"></i> Logout
        </router-link>
    </div>
</li>
<!-- /User Menu -->
</template>