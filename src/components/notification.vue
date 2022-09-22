<template>
<!-- Notifications -->
<li class="nav-item dropdown logged-item">
    <a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
        <i class="feather-bell"></i> <span class="badge badge-pill">2</span>
    </a>
    <div class="dropdown-menu notify-blk notifications">
        <div class="topnav-dropdown-header">
            <span class="notification-title">Notifications</span>
            <a href="javascript:void(0)" class="clear-noti">Clear All  </a>
        </div>
        <div class="noti-content">
            <ul class="notification-list">
                <li class="notification-message">
                    <router-link to="/tech-notification">
                        <div class="media d-flex">
                            <span class="avatar avatar-sm flex-shrink-0">
                                <img class="avatar-img rounded-circle" alt="User Image" src="../assets/img/users/user-07.jpg">
                            </span>
                            <div class="media-body flex-grow-1">
                                <p class="noti-details"> <span class="noti-title">Jeffrey Akridge has booked your service</span></p>
                                <p class="noti-time"><span class="notification-time">Today 10:04 PM</span></p>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li class="notification-message">
                    <router-link to="/tech-notification">
                        <div class="media d-flex">
                            <span class="avatar avatar-sm flex-shrink-0">
                                <img class="avatar-img rounded-circle" alt="User Image" src="../assets/img/users/user-05.jpg">
                            </span>
                            <div class="media-body flex-grow-1">
                                <p class="noti-details"> <span class="noti-title">Nancy Olson has booked your service</span></p>
                                <p class="noti-time"><span class="notification-time">Today 9:45 PM</span></p>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li class="notification-message">
                    <router-link to="/tech-notification">
                        <div class="media d-flex">
                            <span class="avatar avatar-sm flex-shrink-0">
                                <img class="avatar-img rounded-circle" alt="User Image" src="../assets/img/users/user-08.jpg">
                            </span>
                            <div class="media-body flex-grow-1">
                                <p class="noti-details"> <span class="noti-title">Ramona Kingsley has booked your service</span></p>
                                <p class="noti-time"><span class="notification-time">Yesterday 8:17 AM</span></p>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li class="notification-message">
                    <router-link to="/tech-notification">
                        <div class="media d-flex">
                            <span class="avatar avatar-sm flex-shrink-0">
                                <img class="avatar-img rounded-circle" alt="User Image" src="../assets/img/users/user-01.jpg">
                            </span>
                            <div class="media-body flex-grow-1">
                                <p class="noti-details"> <span class="noti-title">Ricardo Lung has booked your service</span></p>
                                <p class="noti-time"><span class="notification-time">Yesterday 6:20 AM</span></p>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li class="notification-message">
                    <router-link to="/tech-notification">
                        <div class="media d-flex">
                            <span class="avatar avatar-sm flex-shrink-0">
                                <img class="avatar-img rounded-circle" alt="User Image" src="../assets/img/users/user-10.jpg">
                            </span>
                            <div class="media-body flex-grow-1">
                                <p class="noti-details"> <span class="noti-title">Annette Silva has booked your service</span></p>
                                <p class="noti-time"><span class="notification-time">17 Sep 2020 10:04 PM</span></p>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="topnav-dropdown-footer">
            <router-link to="/tech-notification">View More <i class="feather-arrow-right-circle"></i></router-link>
        </div>
    </div>
</li>
<!-- /Notifications -->
</template>