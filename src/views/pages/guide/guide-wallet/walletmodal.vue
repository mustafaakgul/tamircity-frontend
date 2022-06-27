<template>
<!-- Add Wallet Modal -->
<div class="modal custom-modal fade multi-step" id="add-wallet" data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Add Amount</h3>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                
                <!-- Add Wallet Form -->
                <form action="booking">
                    <div class="available-balance available-edit-balance">
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
                    <div class="form-group form-focus">
                        <label>Enter Amount <span class="text-danger">*</span></label>
                        <input type="text" class="form-control floating">
                        <label class="focus-label">500</label>
                    </div>
                    <div class="form-group">
                        <label>Select Payment Type <span class="text-danger">*</span></label>
                        <ul class="card-list-nav nav">
                            <li>
                                <label class="custom_radio">
                                    <input type="radio" name="payment" value="card" checked>
                                    <span class="checkmark"></span> Card
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div class="booking-details booking-filter-col booking-popup">
                        <div class="row">
                            <div class="col-md-12">
                                <h5 class="booking-title booking-title-border booking-title-small">Card Details</h5>
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
                        </div>
                    </div>
                </form>
                <!-- /Add Wallet Form -->

                <div class="booking-details booking-filter-col booking-popup">
                    <div class="form-group mb-0">
                        <button class="btn btn-primary booking-btn" data-bs-target="#booking-success" data-bs-toggle="modal" data-bs-dismiss="modal">Add Amount</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
<!-- /Add Wallet Modal -->

<!-- Booking Success Modal -->
<div class="modal custom-modal fade multi-step" id="booking-success" data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">
                <div class="booking-success-details">
                    <i class="far fa-check-circle"></i>
                    <h4>Your balance added successfully</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ac luctus mattis quis nibh rhoncus vitae eget</p>
                    <router-link to="/guide-wallet" class="btn btn-primary">Back</router-link>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /Booking Success Modal -->
</template>