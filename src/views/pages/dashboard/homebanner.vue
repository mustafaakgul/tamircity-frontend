<template>
<!-- Home Banner -->
<section class="banner-section">
    <div class="banner-img">
        <img src="../../../assets/img/shapes/shape-09.png" class="shape-img1 aos" data-aos="fade-left" alt="">
        <img src="../../../assets/img/shapes/shape-02.png" class="shape-img2 aos" data-aos="fade-right" alt="">
    </div>
    <div class="banner-wrapper">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <div class="banner-content aos" data-aos="fade-up">
                        <h4>Welcome to Truelysell</h4>
                        <h2>Explore the world</h2>
                    </div>
                    <div class="banner-list banner-tab aos" data-aos="fade-up">
                        <ul class="nav nav-tabs border-0" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" id="hire-guide" data-bs-toggle="tab" href="#hireguide" role="tab" aria-controls="hireguide" aria-selected="true">
                                    <img src="../../../assets/img/icons/banner-icon1.svg" alt="">
                                    <p>Hire Guide</p>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="movie-ticket" data-bs-toggle="tab" href="#movieticket" role="tab" aria-controls="movieticket" aria-selected="false">
                                    <img src="../../../assets/img/icons/banner-icon2.svg" alt="">
                                    <p>Movie Ticket</p>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="launch-ticket" data-bs-toggle="tab" href="#launchticket" role="tab" aria-controls="launchticket" aria-selected="false">
                                    <img src="../../../assets/img/icons/banner-icon3.svg" alt="">
                                    <p>Launch Ticket</p>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="air-ticket" data-bs-toggle="tab" href="#airticket" role="tab" aria-controls="airticket" aria-selected="false">
                                    <img src="../../../assets/img/icons/banner-icon4.svg" alt="">
                                    <p>Air Ticket</p>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="bus-ticket" data-bs-toggle="tab" href="#busticket" role="tab" aria-controls="busticket" aria-selected="false">
                                    <img src="../../../assets/img/icons/banner-icon5.svg" alt="">
                                    <p>Bus Ticket</p>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="car-rent" data-bs-toggle="tab" href="#carrent" role="tab" aria-controls="carrent" aria-selected="false">
                                    <img src="../../../assets/img/icons/banner-icon6.svg" alt="">
                                    <p>Car Rent</p>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="hotel-booking" data-bs-toggle="tab" href="#hotelbooking" role="tab" aria-controls="hotelbooking" aria-selected="false">
                                    <img src="../../../assets/img/icons/banner-icon7.svg" alt="">
                                    <p>Hotel Booking</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Banner Tabs -->
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="hireguide" role="tabpanel" aria-labelledby="hire-guide">
                    <div class="banner-search aos" data-aos="fade-up">
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
            </div>
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