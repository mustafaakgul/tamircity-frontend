<template>
<!-- Add Wallet Modal -->
<div class="modal custom-modal fade multi-step" id="add-wallet" data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Edit Wallet</h3>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                
                <!-- Add Wallet Form -->
                <form action="javascript:void(0);">
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
                    <div class="form-group">
                        <label>Enter Amount <span class="text-danger">*</span></label>
                        <input type="text" class="form-control floating" value="250.60">
                    </div>
                </form>
                <!-- /Add Wallet Form -->

                <div class="booking-details booking-filter-col booking-popup">
                    <div class="form-group mb-0">
                        <button class="btn btn-primary booking-btn" data-bs-target="#edit-wallet-success" data-bs-toggle="modal" data-bs-dismiss="modal">Edit Now</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
<!-- /Add Wallet Modal -->

<!-- Edit Wallet Success Modal -->
<div class="modal custom-modal fade multi-step" id="edit-wallet-success" data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">
                <div class="booking-success-details">
                    <i class="far fa-check-circle"></i>
                    <h4>Your balance details has been done</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ac luctus mattis quis nibh rhoncus vitae eget</p>
                    <router-link to="/tech-dashboard" class="btn btn-primary">Back</router-link>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /Edit Wallet Success Modal -->
</template>