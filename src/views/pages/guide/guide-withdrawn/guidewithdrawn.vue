<template>
<!-- Guide Withdrawn -->
<div class="row">
    <div class="col-lg-3 col-md-12 theiaStickySidebar">
        <div class="stickysidebar">
            <div class="sidebar-inner sidebar-sticky">
                <div id="sidebar-menu" class="sidebar-menu sidebar-body settings-box">
                    <ul>
                        <li>
                            <a href="#withdraw_settings" class="active">Withdraw Settings <i class="feather-chevron-right"></i></a>
                        </li>
                        <li>
                            <a href="#direct_payment">Direct Payment <i class="feather-chevron-right"></i></a>
                        </li>
                        <li>
                            <a href="#mobile_payment">Mobile Payment <i class="feather-chevron-right"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
       </div> 
    </div>
    <div class="col-lg-9 col-md-12">
        <div class="card settings-card mb-0">
            <div class="settings-title mb-0" id="withdraw_settings">
                <h5 class="settings-sub-title">Withdraw Settings</h5>
            </div>
            <div class="card-body p-0">
                <form action="javascript:void(0);">
                    <div class="settings-info">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <vue-select :options="Withdrawn" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="settings-info">
                        <div class="settings-title" id="direct_payment">
                            <h5 class="settings-sub-title">Direct Payment</h5>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <label>Mobile Number <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control floating">
                                    <label class="focus-label">Enter Mobile Number</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <label>IBAN <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control floating">
                                    <label class="focus-label">Enter IBAN</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <label>Swift <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control floating">
                                    <label class="focus-label">Enter Swift</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <label>Bank No <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control floating">
                                    <label class="focus-label">Enter Bank No</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <label>Branch Name <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control floating">
                                    <label class="focus-label">Enter Branch Name</label>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group form-focus">
                                    <label>Address <span class="text-danger">*</span></label>
                                    <textarea class="form-control floating"></textarea>
                                    <label class="focus-label">Enter Address</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="settings-info">
                        <div class="settings-title" id="mobile_payment">
                            <h5 class="settings-sub-title">Mobile Payment</h5>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <label>Name <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control floating">
                                    <label class="focus-label">Enter Name</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <label>Email <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control floating">
                                    <label class="focus-label">Enter Email</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <label>Mobile Number <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control floating">
                                    <label class="focus-label">Enter Mobile Number</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <label>Wallet Type <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control floating">
                                    <label class="focus-label">Wallet Type</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group mb-0 save-changes-btn float-end">
                            <button type="submit" class="btn btn-primary">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- /Guide Withdrawn -->
</template>
<script>
    import Vue from 'vue'
    export default {
       data() {
      return {
        Withdrawn: ["Direct Payment", "Cheque", "Card Payment"]
      }
      },
      components: {
     
      },
      mounted() {
        $('#sidebar-menu ul li a').click(function() {
     var tghsh = $(this).attr('href').substring(1);
     var headerHeight = $('.sidebar-menu').outerHeight();
     var winwid = $(window).width();
     var doffset = $('#'+tghsh).offset().top-110;
     var doffset1 = $('#'+tghsh).offset().top-300;
     if(winwid <= 991) {
         doffset1 -= headerHeight;
     $('html, body').animate({scrollTop:doffset1},700);
     return false;
     }
     $('html, body').animate({scrollTop:doffset},700);
     return false;
});
      }
    }
  </Script>