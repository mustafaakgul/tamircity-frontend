<template>
<!-- User Settings -->
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
                            <a href="#about_me">About Me <i class="feather-chevron-right"></i></a>
                        </li>
                        <li>
                            <a href="#user_address">User Address <i class="feather-chevron-right"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    <div class="col-lg-9 col-md-12">
        <div class="card settings-card mb-0">
            <div class="settings-title mb-0" id="basic_settings">
                <h5 class="settings-sub-title">Basic Settings</h5>
            </div>
            <div class="card-body ps-0 pe-0 pb-0">
                <form action="">
                    <div class="form-group mb-0 d-flex align-items-center">
                        <div class="settings-upload settings-upload-img mb-0">
                            <img src="../../../../assets/img/upload-img.png" alt="" id="imagepreview">
                        </div>
                        <div class="settings-upload-info">
                            <h5>James Harrem</h5>
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
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Date of birth <span class="text-danger">*</span></label>
                                    <vue-select :options="DATE" />
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
                        </div>
                    </div>
                    <div class="settings-info">
                        <div class="settings-title" id="about_me">
                            <h5 class="settings-sub-title">About Me</h5>
                        </div>
                        <div class="form-group form-focus">
                            <label>Comments <span class="text-danger">*</span></label>
                            <textarea class="form-control floating"></textarea>
                            <label class="focus-label">Add Description</label>
                        </div>
                    </div>
                    <div class="settings-info">
                        <div class="settings-title" id="user_address">
                            <h5 class="settings-sub-title">User Address</h5>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <label>Address <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control floating">
                                    <label class="focus-label">Enter Location</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Country <span class="text-danger">*</span></label>
                                    <vue-select :options="Country" />
                                </div>
                            </div>
                        </div>
                        <div class="form-group mb-0 save-changes-btn float-end">
                            <button type="submit" class="btn btn-primary">Save Changes</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- /User Settings -->
</template>
<script>
import Vue from 'vue'
export default {
    data() {
    return {
    DATE: ["Select Date", "August 13, 2022", "Septemper 08, 2022", "October 30, 2022", "December 12, 2022"],
    Country: ["Select Country", "Germany", "Romania", "Canada", "Newyork"]
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
