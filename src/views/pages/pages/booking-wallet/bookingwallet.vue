<template>
<!-- Booking Form -->
<section class="booking-form-section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-12 col-md-12">
                <div class="booking-steps">
                    <ul class="booking-box nav">
                        <li>
                            <router-link to="/booking">
                                <img src="../../../../assets/img/icons/booking-icon1.png" alt="">
                                <div class="booking-step">
                                    <span>Step 1</span>
                                    <p>Book a Service</p>
                                </div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/booking-wallet" class="active">
                                <img src="../../../../assets/img/icons/booking-icon2.png" alt="">
                                <div class="booking-step">
                                    <span>Step 2</span>
                                    <p>Payment Details</p>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-12 col-md-12">
                <div class="booking-details">
                    <form action="javascript:void(0);">
                        <div class="row">
                            <div class="col-md-12">
                                <h5 class="booking-title">Payment Type</h5>
                                <div class="form-group">
                                    <ul class="card-list">
                                        <li class="tot-border">
                                            <label class="custom_radio active">
                                                <input type="radio" name="payment" value="wallet" checked>
                                                <span class="checkmark"></span> Wallet
                                            </label>
                                        </li>
                                        <li class="tot-border">
                                            <label class="custom_radio">
                                                <input type="radio" name="payment" value="card">
                                                <span class="checkmark"></span> Card
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="booking-filter">
                                <div id="wallet" class="booking-filter-col">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h5 class="booking-title booking-title-border">Wallet Balance</h5>
                                            <div class="form-group">
                                                <div class="available-balance">
                                                    <div class="available-inner">
                                                        <span class="available-icon">
                                                            <i class="fas fa-dollar-sign"></i>
                                                        </span>
                                                        <div class="available-details">
                                                            <p>Available Balance</p>
                                                            <h4>$250.60</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="add-balance">
                                                    <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add-wallet">+ Add balance</a>
                                                </div>
                                            </div>
                                            <div class="form-group mb-0">
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#book-now" class="btn btn-primary booking-btn">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="card" class="booking-filter-col">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h5 class="booking-title booking-title-border">Card Details</h5>
                                            <div class="form-group form-card">
                                                <label>Card no</label>
                                                <i class="fab fa-cc-visa"></i>
                                                <input type="text" class="form-control" placeholder="4136 - XXXX - XXXX - 1234">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-card">
                                                <label>Valid THRU</label>
                                                <i class="fas fa-calendar-days"></i>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-card">
                                                <label>CCV</label>
                                                <i class="fas fa-lock"></i>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group form-card">
                                                <label>Card Holder Name</label>
                                                <i class="fa-regular fa-user"></i>
                                                <input type="text" class="form-control" placeholder="Name of the holder">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group mb-0">
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#pay-now" class="btn btn-primary booking-btn">Pay Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Booking Form -->
</template>