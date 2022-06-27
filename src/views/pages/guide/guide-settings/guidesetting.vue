<template>
<!-- Guide Settings -->
<div class="row">
    <div class="col-lg-3 col-md-12 theiaStickySidebar">
        <div class="stickysidebar">
            <div class="sidebar-inner sidebar-sticky">
                <div id="sidebar-menu" class="sidebar-menu sidebar-body settings-box">
                    <ul>
                        <li>
                            <a href="#basic_settings" class="active">Basic Settings <i class="feather-chevron-right"></i></a>
                        </li>
                        <li>
                            <a href="#guide_details">Guide Details <i class="feather-chevron-right"></i></a>
                        </li>
                        <li>
                            <a href="#document_details">Document Details <i class="feather-chevron-right"></i></a>
                        </li>
                        <li>
                            <a href="#address_details">Address Details <i class="feather-chevron-right"></i></a>
                        </li>
                        <li>
                            <a href="#additional_details">Additional Details <i class="feather-chevron-right"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-9 col-md-12">
        <div class="card settings-card mb-0">
            <div class="card-body p-0" id="basic_settings">
                <form action="javascript:void(0);">
                    <div class="form-group mb-0 d-flex align-items-center">
                        <div class="settings-upload settings-upload-img mb-0">
                            <img src="../../../../assets/img/upload-img.png" alt="" id="imagepreview">
                        </div>
                        <div class="settings-upload-info">
                            <h5>Jeffrey Akridge</h5>
                            <p>Max file size is 20mb</p>
                            <div class="settings-upload-btn">
                                <input type="file" accept="image/*" name="image" class="hide-input image-upload">
                                <label for="file" class="file-upload">Upload Image</label>
                            </div>
                        </div>
                    </div>
                    <div class="settings-info">
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <label>First Name <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control floating">
                                    <label class="focus-label">Enter First Name</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <label>Last Name <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control floating">
                                    <label class="focus-label">Enter Last Name</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <label>Email <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control floating">
                                    <label class="focus-label">Enter Email Address</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <label>Mobile Number <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control floating">
                                    <label class="focus-label">Enter Mobile Number</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="settings-info">
                        <div class="settings-title" id="guide_details">
                            <h5 class="settings-sub-title">Guide Details</h5>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Date of birth <span class="text-danger">*</span></label>
                                    <vue-select :options="Birth" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="custom-control-gender">Gender <span class="text-danger">*</span></label>
                                    <div class="custom-control-box">
                                        <div class="custom-control custom-radios custom-control-inline">
                                            <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                                            <label class="custom-control-label" for="male">Male</label>
                                        </div>
                                        <div class="custom-control custom-radios custom-control-inline">
                                            <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                                            <label class="custom-control-label" for="female">Female</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label>About me</label>
                                    <textarea class="form-control"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="settings-info" id="document_details">
                        <div class="settings-title">
                            <h5 class="settings-sub-title">Document Details</h5>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group form-focus">
                                    <label>Select Document Type <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control floating">
                                    <label class="focus-label">Passport</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <div class="relative-form">
                                        <span>ID/Passport Upload</span>
                                        <label class="relative-file-upload">
                                            Upload Now <input type="file">
                                        </label>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="settings-info" id="address_details">
                        <div class="settings-title">
                            <h5 class="settings-sub-title">Address Details</h5>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label>Street Address</label>
                                    <textarea class="form-control"></textarea>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <div class="form-group">
                                        <vue-select :options="City" />
                                    </div> 
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <div class="form-group">
                                        <vue-select :options="Country" />
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="settings-info" id="additional_details">
                        <div class="settings-title">
                            <h5 class="settings-sub-title">Additional Details</h5>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <label>Experience <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control floating">
                                    <label class="focus-label">Less Than a month</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label> Languages Speak</label>
                                    <vue-select :options="Language" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="mb-0">Language Test</label>
                                </div>
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-lg-3 col-md-6">
                                <div class="form-group">
                                    <div class="language-box">
                                        <div class="language-details text-center">
                                            <img src="../../../../assets/img/icons/english.png" alt="" class="img-fluid">
                                            <h4>English</h4>
                                            <div class="language-btn-groups">
                                                <a href="javascript:void(0);" class="result-success me-1">View Details</a>
                                                <a href="javascript:void(0);" class="result-success">Pass</a>
                                            </div>
                                            <span><i class="fas fa-check-circle text-success"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="form-group">
                                    <div class="language-box">
                                        <div class="language-details text-center">
                                            <img src="../../../../assets/img/icons/turky.png" alt="" class="img-fluid">
                                            <h4>Türkçe</h4>
                                            <div class="language-btn-groups">
                                                <a href="javascript:void(0);" class="result-warning me-1">Run Test</a>
                                                <a href="javascript:void(0);" class="result-success">View Details</a>
                                            </div>
                                            <span><i class="fas fa-check-circle text-success"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="form-group">
                                    <div class="language-box">
                                        <div class="language-details text-center">
                                            <img src="../../../../assets/img/icons/swedish.png" alt="" class="img-fluid">
                                            <h4>বাংলা</h4>
                                            <div class="language-btn-groups">
                                                <a href="javascript:void(0);" class="result-warning me-1">Run Test</a>
                                                <a href="javascript:void(0);" class="result-success">View Details</a>
                                            </div>
                                            <span><i class="fas fa-check-circle text-success"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="form-group">
                                    <div class="language-main-btn">
                                        <a href="javascript:void(0);" class="btn">
                                            <img src="../../../../assets/img/icons/language-icon.png" alt="" class="me-2"> Language Verified
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Currency Code</label>
                                    <vue-select :options="Botswanian" />
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Fees</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Location</label>
                                    <input type="text" class="form-control">
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
<!-- /Guide Settings -->
</template>
<script>
    import Vue from 'vue'
    export default {
       data() {
      return {
        Botswanian: ["Botswanian Dollar", "$", "₹", "£", "€"],
        Language: ["English", "Russian", "Arabic", "Italian"],
        Country: ["Select Country", "Germany", "Romania", "Canada", "America"],
        City: ["Select City", "Frankfurt", "Bucharest", "Toronto", "Newyork"],
        Birth: ["Select Date", "August 13, 2022", "Septemper 08, 2022", "October 30, 2022", "December 12, 2022"]
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