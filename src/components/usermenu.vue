<template>
<!-- User Menu -->
<li class="nav-item dropdown has-arrow main-drop account-item">
    <a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
        <span class="user-img">
            <img src="../assets/img/provider/provider-04.jpg" class="rounded-circle me-1" alt="">
        </span>
    </a>
    <div class="dropdown-menu dropdown-menu-end emp">
        <router-link class="dropdown-item" to="/tech-dashboard">
            <i class="fas fa-layer-group"></i> Dashboard
        </router-link>
        <router-link class="dropdown-item" to="/tech-notification">
            <i class="fas fa-bell"></i> Notification
        </router-link>
        <router-link class="dropdown-item" to="/guide-bookings"> 
            <i class="fas fa-tag"></i> Bookings
        </router-link>
        <router-link class="dropdown-item" to="/guide-settings">
            <i class="fas fa-cog"></i> Settings
        </router-link>
        <router-link class="dropdown-item" to="/guide-wallet">
            <i class="fas fa-wallet"></i> Wallet
        </router-link>
        <router-link class="dropdown-item" to="/guide-subscription">
            <i class="fas fa-basket-shopping"></i> Subscription
        </router-link>
        <router-link class="dropdown-item" to="/guide-withdrawn">
            <i class="fas fa-dollar-sign"></i> Withdrawn
        </router-link>
        <router-link class="dropdown-item" to="/guide-availability">
            <i class="fas fa-location-dot"></i> Availability
        </router-link>
        <router-link class="dropdown-item" to="/guide-reviews">
            <i class="fas fa-smile"></i> Reviews
        </router-link>
        <router-link class="dropdown-item" to="/guide-payment">
            <i class="fas fa-credit-card"></i> Payment
        </router-link>
        <router-link class="dropdown-item" to="/">
            <!--<i class="fas fa-power-off"></i> Logout-->
            <button @click="Logout">Logout</button>
        </router-link>
    </div>
</li>
<!-- /User Menu -->
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      logout: 'account/logout'
    }),
    Logout () {
      this.logout();
    }
  }
}
</script>