<template>
<!-- Home Banner -->
<section class="banner-section" >
    <div class="banner-img">
        <img src="../../../assets/img/shapes/pngegg.png" class="shape-img1 aos" data-aos="fade-left" alt="">
        <img src="../../../assets/img/shapes/pinpng.com-gears-png-505071.png" class="shape-img2 aos" data-aos="fade-right" alt="">
    </div>
    <div class="banner-wrapper" >
        <!-- ......icon animation:begin......... -->
       
        <!-- ......icon animation:end......... -->
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12 text-center">
                    <h1>BAŞLIK</h1>
                </div>
                 <div class="col-lg-12 col-md-12 text-center ">
                    <h4>Alt Başlık</h4>
                </div>
                <div class="col-lg-12 col-md-12 mt-5">
                    <div class="banner-list banner-tab aos" data-aos="fade-up">
                        <ul class="nav nav-tabs border-0" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link " id="hire-guide" data-bs-toggle="tab" href="#hireguide" role="tab" aria-controls="hireguide" aria-selected="true">
                                    <img src="../../../assets/img/icons/banner-icon1.svg" alt="">
                                    <p>EKSPERTİZ HİZMETİ ALMAK İSTİYORUM</p>
                                </a>
                            </li>
                            <li class="nav-item active" role="presentation">
                                <router-link to="/stepwizard">
                                <a class="nav-link ">
                                    <img src="../../../assets/img/icons/banner-icon6.svg" alt="">
                                    <p>TEKNİK SERVİS HİZMETİ ALMAK İSTİYORUM</p>
                                </a>
                            </router-link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Banner Tabs -->
            <!-- <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="hireguide" role="tabpanel" aria-labelledby="hire-guide">
                    <div class="banner-search aos" data-aos="fade-up">
                        <form action="guide-details">
                            <div class="row align-items-center justify-content-center">
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form">
                                        <label>MARKA</label>
                                        <input type="text" class="form-control" placeholder="Enter Guide Name...">
                                        <i class="feather-user"></i>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form">
                                        <label>Launguage</label>
                                        <vue-select :options="Language" />
                                        <i class="feather-flag"></i>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form">
                                        <label>Location</label>
                                        <input type="text" class="form-control" placeholder="Enter Location">
                                        <i class="feather-map-pin"></i>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form-btn">
                                        <button type="submit" class="btn"><i class="feather-search"></i> Search</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="tab-pane fade" id="movieticket" role="tabpanel" aria-labelledby="movie-ticket">
                    <div class="banner-search">
                        <form action="guide-details">
                            <div class="row align-items-center justify-content-center">
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form">
                                        <label>Guide Name</label>
                                        <input type="text" class="form-control" placeholder="Enter Guide Name...">
                                        <i class="feather-user"></i>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form">
                                        <label>Launguage</label>
                                        <vue-select :options="Language" />
                                        <i class="feather-flag"></i>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form">
                                        <label>Location</label>
                                        <input type="text" class="form-control" placeholder="Enter Location">
                                        <i class="feather-map-pin"></i>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form-btn">
                                        <button type="submit" class="btn"><i class="feather-search"></i> Search</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="tab-pane fade" id="launchticket" role="tabpanel" aria-labelledby="launch-ticket">
                    <div class="banner-search">
                        <form action="guide-details">
                            <div class="row align-items-center justify-content-center">
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form">
                                        <label>Guide Name</label>
                                        <input type="text" class="form-control" placeholder="Enter Guide Name...">
                                        <i class="feather-user"></i>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form">
                                        <label>Launguage</label>
                                        <vue-select :options="Language" />
                                        <i class="feather-flag"></i>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form">
                                        <label>Location</label>
                                        <input type="text" class="form-control" placeholder="Enter Location">
                                        <i class="feather-map-pin"></i>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form-btn">
                                        <button type="submit" class="btn"><i class="feather-search"></i> Search</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="tab-pane fade" id="airticket" role="tabpanel" aria-labelledby="air-ticket">
                    <div class="banner-search">
                        <form action="guide-details">
                            <div class="row align-items-center justify-content-center">
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form">
                                        <label>Guide Name</label>
                                        <input type="text" class="form-control" placeholder="Enter Guide Name...">
                                        <i class="feather-user"></i>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form">
                                        <label>Launguage</label>
                                        <vue-select :options="Language" />
                                        <i class="feather-flag"></i>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form">
                                        <label>Location</label>
                                        <input type="text" class="form-control" placeholder="Enter Location">
                                        <i class="feather-map-pin"></i>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form-btn">
                                        <button type="submit" class="btn"><i class="feather-search"></i> Search</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="tab-pane fade" id="busticket" role="tabpanel" aria-labelledby="bus-ticket">
                    <div class="banner-search">
                        <form action="guide-details">
                            <div class="row align-items-center justify-content-center">
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form">
                                        <label>Guide Name</label>
                                        <input type="text" class="form-control" placeholder="Enter Guide Name...">
                                        <i class="feather-user"></i>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form">
                                        <label>Launguage</label>
                                        <vue-select :options="Language" />
                                        <i class="feather-flag"></i>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form">
                                        <label>Location</label>
                                        <input type="text" class="form-control" placeholder="Enter Location">
                                        <i class="feather-map-pin"></i>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form-btn">
                                        <button type="submit" class="btn"><i class="feather-search"></i> Search</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="tab-pane fade" id="carrent" role="tabpanel" aria-labelledby="car-rent">
                    <div class="banner-search">
                        <form action="guide-details">
                            <div class="row align-items-center justify-content-center">
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form">
                                        <label>Guide Name</label>
                                        <input type="text" class="form-control" placeholder="Enter Guide Name...">
                                        <i class="feather-user"></i>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form">
                                        <label>Launguage</label>
                                        <vue-select :options="Language" />
                                        <i class="feather-flag"></i>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form">
                                        <label>Location</label>
                                        <input type="text" class="form-control" placeholder="Enter Location">
                                        <i class="feather-map-pin"></i>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form-btn">
                                        <button type="submit" class="btn"><i class="feather-search"></i> Search</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="tab-pane fade" id="hotelbooking" role="tabpanel" aria-labelledby="hotel-booking">
                    <div class="banner-search">
                        <form action="guide-details">
                            <div class="row align-items-center justify-content-center">
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form">
                                        <label>Guide Name</label>
                                        <input type="text" class="form-control" placeholder="Enter Guide Name...">
                                        <i class="feather-user"></i>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form">
                                        <label>Launguage</label>
                                        <vue-select :options="Language" />
                                        <i class="feather-flag"></i>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form">
                                        <label>Location</label>
                                        <input type="text" class="form-control" placeholder="Enter Location">
                                        <i class="feather-map-pin"></i>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="form-group banner-form-btn">
                                        <button type="submit" class="btn"><i class="feather-search"></i> Search</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div> -->
            <!-- /Banner Tabs -->

        </div>
    </div>
</section>
<!-- /Home Banner -->
</template>
<script>
    import Vue from 'vue'
    export default {
       data() {
      return {
        Language: ["Select Language", "English", "French", "Spanish", "German"]
             }
      },
      components: {
     
      },
      mounted() {
      }
    }
  </Script>