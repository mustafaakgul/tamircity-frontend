<template>
 <!-- Guide Bookings -->
 <div class="row">
    <div class="col-md-12">
        <div class="guide-bookings-tab">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="new-bookings" data-bs-toggle="tab" href="#new_bookings" role="tab" aria-controls="new_bookings" aria-selected="true">New Bookings</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="completed-booking" data-bs-toggle="tab" href="#completed_booking" role="tab" aria-controls="completed_booking" aria-selected="false">Completed Booking</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="cancelled-booking" data-bs-toggle="tab" href="#cancelled_booking" role="tab" aria-controls="cancelled_booking" aria-selected="false">Cancelled Booking</a>
                </li>
            </ul>
        </div>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="new_bookings" role="tabpanel" aria-labelledby="new-bookings">
                <div class="card guide-booking-table mb-0">
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-center mb-0">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="table-booking d-flex align-items-center">
                                                <div class="table-booking-img">
                                                    <router-link to="/guide-settings">
                                                        <img class="avatar me-2 avatar-img" src="../../../../assets/img/profiles/avatar-04.jpg" alt="User Image">
                                                    </router-link>
                                                </div>
                                                <div class="table-booking-info">
                                                    <router-link to="/guide-settings">
                                                        George Anderson
                                                    </router-link>
                                                    <p><i class="fas fa-clock me-1"></i> 14 Nov 2022, 10.00 AM</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-map-pin"></i></span>
                                                Newyork, United States
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-mail"></i></span>
                                                georgeanderson@example.com
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-phone-call"></i></span>
                                                +1 923 782 4575
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-payment">
                                                <span>$ 120/210</span>
                                                <p>Partially Paid</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-btn">
                                                <a href="javascript:void(0);" class="btn booking-btn-accept">
                                                    <i class="far fa-circle-check me-1"></i> Accept
                                                </a>
                                                <a href="javascript:void(0);" class="btn booking-btn-cancel mb-0">
                                                    <i class="far fa-circle-xmark me-1"></i> Cancel
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="table-booking d-flex align-items-center">
                                                <div class="table-booking-img">
                                                    <router-link to="/guide-settings">
                                                        <img class="avatar me-2 avatar-img" src="../../../../assets/img/profiles/avatar-02.jpg" alt="User Image">
                                                    </router-link>
                                                </div>
                                                <div class="table-booking-info">
                                                    <router-link to="/guide-settings">
                                                        James Harrem
                                                    </router-link>
                                                    <p><i class="fas fa-clock me-1"></i> 13 Aug 2022, 08.00 AM</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-map-pin"></i></span>
                                                London, United Kingdom
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-mail"></i></span>
                                                jamesharrem@example.com
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-phone-call"></i></span>
                                                +1 823 782 4575
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-payment">
                                                <span>$ 600/450</span>
                                                <p>Partially Paid</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-btn">
                                                <a href="javascript:void(0);" class="btn booking-btn-accept">
                                                    <i class="far fa-circle-check me-1"></i> Accept
                                                </a>
                                                <a href="javascript:void(0);" class="btn booking-btn-cancel mb-0">
                                                    <i class="far fa-circle-xmark me-1"></i> Cancel
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="table-booking d-flex align-items-center">
                                                <div class="table-booking-img">
                                                    <router-link to="/guide-settings">
                                                        <img class="avatar me-2 avatar-img" src="../../../../assets/img/profiles/avatar-05.jpg" alt="User Image">
                                                    </router-link>
                                                </div>
                                                <div class="table-booking-info">
                                                    <router-link to="/guide-settings">
                                                        Veronica
                                                    </router-link>
                                                    <p><i class="fas fa-clock me-1"></i> 01 Jan 2022, 12.00 PM</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-map-pin"></i></span>
                                                Newyork, United States
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-mail"></i></span>
                                                veronica@example.com
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-phone-call"></i></span>
                                                +1 923 782 6852
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-payment">
                                                <span>$ 300/450</span>
                                                <p>Partially Paid</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-btn">
                                                <a href="javascript:void(0);" class="btn booking-btn-accept">
                                                    <i class="far fa-circle-check me-1"></i> Accept
                                                </a>
                                                <a href="javascript:void(0);" class="btn booking-btn-cancel mb-0">
                                                    <i class="far fa-circle-xmark me-1"></i> Cancel
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="completed_booking" role="tabpanel" aria-labelledby="completed-booking">
                <div class="card guide-booking-table mb-0">
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-center mb-0">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="table-booking d-flex align-items-center">
                                                <div class="table-booking-img">
                                                    <router-link to="/guide-settings">
                                                        <img class="avatar me-2 avatar-img" src="../../../../assets/img/profiles/avatar-04.jpg" alt="User Image">
                                                    </router-link>
                                                </div>
                                                <div class="table-booking-info">
                                                    <router-link to="/guide-settings">
                                                        George Anderson
                                                    </router-link>
                                                    <p><i class="fas fa-clock me-1"></i> 14 Nov 2022, 10.00 AM</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-map-pin"></i></span>
                                                Newyork, United States
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-mail"></i></span>
                                                georgeanderson@example.com
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-phone-call"></i></span>
                                                +1 923 782 4575
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-payment">
                                                <span>$ 120</span>
                                                <p>Fully Paid</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-completed">
                                                <span>
                                                    <i class="far fa-circle-check me-1"></i> Completed
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="table-booking d-flex align-items-center">
                                                <div class="table-booking-img">
                                                    <router-link to="/guide-settings">
                                                        <img class="avatar me-2 avatar-img" src="../../../../assets/img/profiles/avatar-02.jpg" alt="User Image">
                                                    </router-link>
                                                </div>
                                                <div class="table-booking-info">
                                                    <router-link to="/guide-settings">
                                                        James Harrem
                                                    </router-link>
                                                    <p><i class="fas fa-clock me-1"></i> 13 Aug 2022, 08.00 AM</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-map-pin"></i></span>
                                                London, United Kingdom
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-mail"></i></span>
                                                jamesharrem@example.com
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-phone-call"></i></span>
                                                +1 823 782 4575
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-payment">
                                                <span>$ 600</span>
                                                <p>Fully Paid</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-completed">
                                                <span>
                                                    <i class="far fa-circle-check me-1"></i> Completed
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="table-booking d-flex align-items-center">
                                                <div class="table-booking-img">
                                                    <router-link to="/guide-settings">
                                                        <img class="avatar me-2 avatar-img" src="../../../../assets/img/profiles/avatar-05.jpg" alt="User Image">
                                                    </router-link>
                                                </div>
                                                <div class="table-booking-info">
                                                    <router-link to="/guide-settings">
                                                        Veronica
                                                    </router-link>
                                                    <p><i class="fas fa-clock me-1"></i> 01 Jan 2022, 12.00 PM</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-map-pin"></i></span>
                                                Newyork, United States
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-mail"></i></span>
                                                veronica@example.com
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-phone-call"></i></span>
                                                +1 923 782 6852
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-payment">
                                                <span>$ 300</span>
                                                <p>Fully Paid</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-completed">
                                                <span>
                                                    <i class="far fa-circle-check me-1"></i> Completed
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="cancelled_booking" role="tabpanel" aria-labelledby="cancelled-booking">
                <div class="card guide-booking-table mb-0">
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-center mb-0">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="table-booking d-flex align-items-center">
                                                <div class="table-booking-img">
                                                    <router-link to="/guide-settings">
                                                        <img class="avatar me-2 avatar-img" src="../../../../assets/img/profiles/avatar-04.jpg" alt="User Image">
                                                    </router-link>
                                                </div>
                                                <div class="table-booking-info">
                                                    <router-link to="/guide-settings">
                                                        George Anderson
                                                    </router-link>
                                                    <p><i class="fas fa-clock me-1"></i> 14 Nov 2022, 10.00 AM</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-map-pin"></i></span>
                                                Newyork, United States
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-mail"></i></span>
                                                georgeanderson@example.com
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-phone-call"></i></span>
                                                +1 923 782 4575
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-payment">
                                                <span>$ 30/10</span>
                                                <p>Un Paid</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-cancelled">
                                                <span>
                                                    <i class="far fa-circle-check me-1"></i> Cancelled
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="table-booking d-flex align-items-center">
                                                <div class="table-booking-img">
                                                    <router-link to="/guide-settings">
                                                        <img class="avatar me-2 avatar-img" src="../../../../assets/img/profiles/avatar-02.jpg" alt="User Image">
                                                    </router-link>
                                                </div>
                                                <div class="table-booking-info">
                                                    <router-link to="/guide-settings">
                                                        James Harrem
                                                    </router-link>
                                                    <p><i class="fas fa-clock me-1"></i> 13 Aug 2022, 08.00 AM</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-map-pin"></i></span>
                                                London, United Kingdom
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-mail"></i></span>
                                                jamesharrem@example.com
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-phone-call"></i></span>
                                                +1 823 782 4575
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-payment">
                                                <span>$ 10/60</span>
                                                <p>Un Paid</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-cancelled">
                                                <span>
                                                    <i class="far fa-circle-check me-1"></i> Cancelled
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="table-booking d-flex align-items-center">
                                                <div class="table-booking-img">
                                                    <router-link to="/guide-settings">
                                                        <img class="avatar me-2 avatar-img" src="../../../../assets/img/profiles/avatar-05.jpg" alt="User Image">
                                                    </router-link>
                                                </div>
                                                <div class="table-booking-info">
                                                    <router-link to="/guide-settings">
                                                        Veronica
                                                    </router-link>
                                                    <p><i class="fas fa-clock me-1"></i> 01 Jan 2022, 12.00 PM</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-map-pin"></i></span>
                                                Newyork, United States
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-mail"></i></span>
                                                veronica@example.com
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-phone-call"></i></span>
                                                +1 923 782 6852
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-payment">
                                                <span>$ 0/210</span>
                                                <p>Un Paid</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-cancelled">
                                                <span>
                                                    <i class="far fa-circle-check me-1"></i> Cancelled
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /Guide Bookings -->   
</template>