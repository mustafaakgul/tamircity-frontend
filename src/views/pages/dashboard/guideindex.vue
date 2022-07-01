<template>
    <!-- Guides -->
    <section class="guides-section">
        <div class="banner-img">
            <img src="../../../assets/img/shapes/shape-01.png" class="shape-img-01" alt="">
            <img src="../../../assets/img/shapes/shape-03.png" class="shape-img3 aos" data-aos="fade-right" alt="">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-header">
                        <div class="section-title aos" data-aos="fade-up">
                            <h2>TİTLE</h2>
                        </div>
                        <div class="view-all aos" data-aos="fade-up">
                            <router-link to="/guide-list" class="btn btn-primary">View All <i class="fas fa-arrow-right"></i></router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 aos" data-aos="fade-up">
                    <div class="guides-slider slider item-new slider-two">
                        <div class="item item-new">
                            <div class="guides-widget">
                                <div class="guides-card">
                                    <router-link to="/guide-details">
                                        <div class="guides-image">
                                            <img src="../../../assets/img/provider/provider-11.jpg" class="img-fluid local-guides-img" alt="">
                                        </div>
                                    </router-link>
                                    <div class="guides-premium">
                                        <a href="javascript:void(0);" class="guides-premium-btn"><i class="fas fa-star me-1"></i> Premium</a>
                                    </div>
                                    <div class="guides-lang-bottom">
                                        <p><img src="../../../assets/img/icons/translate-icon.png" class="me-1" alt=""> Language Verified</p>
                                    </div>
                                </div>
                                <div class="local-guides-inner">
                                    <div class="local-guides-profile">
                                        <router-link to="/guide-details">Hanifa <i class="fas fa-circle-check ms-2"></i></router-link>
                                        <div class="rating">
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star"></i>
                                            <span class="d-inline-block average-rating">(08 Reviews)</span>
                                        </div>
                                    </div>
                                    <div class="local-guides-location">
                                        <ul class="nav">
                                            <li>
                                                <i class="feather-map-pin me-1"></i> Germany
                                            </li>
                                            <li>
                                                <i class="feather-award me-1"></i> 7+ Years Exp
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="local-guides-price d-flex align-items-center justify-content-between">
                                    <div class="guides-price">
                                        <p>Price</p>
                                        <h4>$780 <span>/ per hour</span></h4>
                                    </div>
                                    <div class="guides-price">
                                        <router-link to="/services">Travel with me <i class="fas fa-arrow-right"></i></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="guides-widget">
                                <div class="guides-card">
                                    <router-link to="/guide-details">
                                        <div class="guides-image">
                                            <img src="../../../assets/img/provider/provider-12.jpg" class="img-fluid local-guides-img" alt="">
                                        </div>
                                    </router-link>
                                </div>
                                <div class="local-guides-inner">
                                    <div class="local-guides-profile">
                                        <router-link to="/guide-details">Muhammed Rasheed</router-link>
                                        <div class="rating">
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star"></i>
                                            <span class="d-inline-block average-rating">(20 Reviews)</span>
                                        </div>
                                    </div>
                                    <div class="local-guides-location">
                                        <ul class="nav">
                                            <li>
                                                <i class="feather-map-pin me-1"></i> Romania
                                            </li>
                                            <li>
                                                <i class="feather-award me-1"></i> 8+ Years Exp
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="local-guides-price d-flex align-items-center justify-content-between">
                                    <div class="guides-price">
                                        <p>Price</p>
                                        <h4>$210 <span>/ per hour</span></h4>
                                    </div>
                                    <div class="guides-price">
                                        <router-link to="/services">Travel with me <i class="fas fa-arrow-right"></i></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="guides-widget">
                                <div class="guides-card">
                                    <router-link to="/guide-details">
                                        <div class="guides-image">
                                            <img src="../../../assets/img/provider/provider-13.jpg" class="img-fluid local-guides-img" alt="">
                                        </div>
                                    </router-link>
                                    <div class="guides-lang-top">
                                        <p><img src="../../../assets/img/icons/translate-icon.png" class="me-1" alt=""> Language Verified</p>
                                    </div>
                                </div>
                                <div class="local-guides-inner">
                                    <div class="local-guides-profile">
                                        <router-link to="/guide-details">James Harrem <i class="fas fa-circle-check ms-2"></i></router-link>
                                        <div class="rating">
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star"></i>
                                            <span class="d-inline-block average-rating">(15 Reviews)</span>
                                        </div>
                                    </div>
                                    <div class="local-guides-location">
                                        <ul class="nav">
                                            <li>
                                                <i class="feather-map-pin me-1"></i> Canada
                                            </li>
                                            <li>
                                                <i class="feather-award me-1"></i> 10+ Years Exp
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="local-guides-price d-flex align-items-center justify-content-between">
                                    <div class="guides-price">
                                        <p>Price</p>
                                        <h4>$170 <span>/ per hour</span></h4>
                                    </div>
                                    <div class="guides-price">
                                        <router-link to="/services">Travel with me <i class="fas fa-arrow-right"></i></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="guides-widget">
                                <div class="guides-card">
                                    <router-link to="/guide-details">
                                        <div class="guides-image">
                                            <img src="../../../assets/img/provider/provider-26.jpg" class="img-fluid local-guides-img" alt="">
                                        </div>
                                    </router-link>
                                    <div class="guides-premium">
                                        <a href="javascript:void(0);" class="guides-premium-btn"><i class="fas fa-star me-1"></i> Premium</a>
                                    </div>
                                    <div class="guides-lang-bottom">
                                        <p><img src="../../../assets/img/icons/translate-icon.png" class="me-1" alt=""> Language Verified</p>
                                    </div>
                                </div>
                                <div class="local-guides-inner">
                                    <div class="local-guides-profile">
                                        <router-link to="/guide-details">Veronica <i class="fas fa-circle-check ms-2"></i></router-link>
                                        <div class="rating">
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star"></i>
                                            <span class="d-inline-block average-rating">(10 Reviews)</span>
                                        </div>
                                    </div>
                                    <div class="local-guides-location">
                                        <ul class="nav">
                                            <li>
                                                <i class="feather-map-pin me-1"></i> Germany
                                            </li>
                                            <li>
                                                <i class="feather-award me-1"></i> 5+ Years Exp
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="local-guides-price d-flex align-items-center justify-content-between">
                                    <div class="guides-price">
                                        <p>Price</p>
                                        <h4>$580 <span>/ per hour</span></h4>
                                    </div>
                                    <div class="guides-price">
                                        <router-link to="/services">Travel with me <i class="fas fa-arrow-right"></i></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="guides-widget">
                                <div class="guides-card">
                                    <router-link to="/guide-details">
                                        <div class="guides-image">
                                            <img src="../../../assets/img/provider/provider-11.jpg" class="img-fluid local-guides-img" alt="">
                                        </div>
                                    </router-link>
                                    <div class="guides-premium">
                                        <a href="javascript:void(0);" class="guides-premium-btn"><i class="fas fa-star me-1"></i> Premium</a>
                                    </div>
                                    <div class="guides-lang-bottom">
                                        <p><img src="../../../assets/img/icons/translate-icon.png" class="me-1" alt=""> Language Verified</p>
                                    </div>
                                </div>
                                <div class="local-guides-inner">
                                    <div class="local-guides-profile">
                                        <router-link to="/guide-details">Hanifa <i class="fas fa-circle-check ms-2"></i></router-link>
                                        <div class="rating">
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star"></i>
                                            <span class="d-inline-block average-rating">(08 Reviews)</span>
                                        </div>
                                    </div>
                                    <div class="local-guides-location">
                                        <ul class="nav">
                                            <li>
                                                <i class="feather-map-pin me-1"></i> Germany
                                            </li>
                                            <li>
                                                <i class="feather-award me-1"></i> 7+ Years Exp
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="local-guides-price d-flex align-items-center justify-content-between">
                                    <div class="guides-price">
                                        <p>Price</p>
                                        <h4>$780 <span>/ per hour</span></h4>
                                    </div>
                                    <div class="guides-price">
                                        <router-link to="/services">Travel with me <i class="fas fa-arrow-right"></i></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="guides-widget">
                                <div class="guides-card">
                                    <router-link to="/guide-details">
                                        <div class="guides-image">
                                            <img src="../../../assets/img/provider/provider-12.jpg" class="img-fluid local-guides-img" alt="">
                                        </div>
                                    </router-link>
                                </div>
                                <div class="local-guides-inner">
                                    <div class="local-guides-profile">
                                        <router-link to="/guide-details">Muhammed Rasheed</router-link>
                                        <div class="rating">
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star"></i>
                                            <span class="d-inline-block average-rating">(20 Reviews)</span>
                                        </div>
                                    </div>
                                    <div class="local-guides-location">
                                        <ul class="nav">
                                            <li>
                                                <i class="feather-map-pin me-1"></i> Romania
                                            </li>
                                            <li>
                                                <i class="feather-award me-1"></i> 8+ Years Exp
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="local-guides-price d-flex align-items-center justify-content-between">
                                    <div class="guides-price">
                                        <p>Price</p>
                                        <h4>$210 <span>/ per hour</span></h4>
                                    </div>
                                    <div class="guides-price">
                                        <router-link to="/services">Travel with me <i class="fas fa-arrow-right"></i></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="guides-widget">
                                <div class="guides-card">
                                    <router-link to="/guide-details">
                                        <div class="guides-image">
                                            <img src="../../../assets/img/provider/provider-13.jpg" class="img-fluid local-guides-img" alt="">
                                        </div>
                                    </router-link>
                                    <div class="guides-lang-top">
                                        <p><img src="../../../assets/img/icons/translate-icon.png" class="me-1" alt=""> Language Verified</p>
                                    </div>
                                </div>
                                <div class="local-guides-inner">
                                    <div class="local-guides-profile">
                                        <router-link to="/guide-details">James Harrem <i class="fas fa-circle-check ms-2"></i></router-link>
                                        <div class="rating">
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star"></i>
                                            <span class="d-inline-block average-rating">(15 Reviews)</span>
                                        </div>
                                    </div>
                                    <div class="local-guides-location">
                                        <ul class="nav">
                                            <li>
                                                <i class="feather-map-pin me-1"></i> Canada
                                            </li>
                                            <li>
                                                <i class="feather-award me-1"></i> 10+ Years Exp
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="local-guides-price d-flex align-items-center justify-content-between">
                                    <div class="guides-price">
                                        <p>Price</p>
                                        <h4>$170 <span>/ per hour</span></h4>
                                    </div>
                                    <div class="guides-price">
                                        <router-link to="/services">Travel with me <i class="fas fa-arrow-right"></i></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="guides-widget">
                                <div class="guides-card">
                                    <router-link to="/guide-details">
                                        <div class="guides-image">
                                            <img src="../../../assets/img/provider/provider-26.jpg" class="img-fluid local-guides-img" alt="">
                                        </div>
                                    </router-link>
                                    <div class="guides-premium">
                                        <a href="javascript:void(0);" class="guides-premium-btn"><i class="fas fa-star me-1"></i> Premium</a>
                                    </div>
                                    <div class="guides-lang-bottom">
                                        <p><img src="../../../assets/img/icons/translate-icon.png" class="me-1" alt=""> Language Verified</p>
                                    </div>
                                </div>
                                <div class="local-guides-inner">
                                    <div class="local-guides-profile">
                                        <router-link to="/guide-details">Veronica <i class="fas fa-circle-check ms-2"></i></router-link>
                                        <div class="rating">
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star"></i>
                                            <span class="d-inline-block average-rating">(10 Reviews)</span>
                                        </div>
                                    </div>
                                    <div class="local-guides-location">
                                        <ul class="nav">
                                            <li>
                                                <i class="feather-map-pin me-1"></i> Germany
                                            </li>
                                            <li>
                                                <i class="feather-award me-1"></i> 5+ Years Exp
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="local-guides-price d-flex align-items-center justify-content-between">
                                    <div class="guides-price">
                                        <p>Price</p>
                                        <h4>$580 <span>/ per hour</span></h4>
                                    </div>
                                    <div class="guides-price">
                                        <router-link to="/services">Travel with me <i class="fas fa-arrow-right"></i></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="guides-widget">
                                <div class="guides-card">
                                    <router-link to="/guide-details">
                                        <div class="guides-image">
                                            <img src="../../../assets/img/provider/provider-11.jpg" class="img-fluid local-guides-img" alt="">
                                        </div>
                                    </router-link>
                                    <div class="guides-premium">
                                        <a href="javascript:void(0);" class="guides-premium-btn"><i class="fas fa-star me-1"></i> Premium</a>
                                    </div>
                                    <div class="guides-lang-bottom">
                                        <p><img src="../../../assets/img/icons/translate-icon.png" class="me-1" alt=""> Language Verified</p>
                                    </div>
                                </div>
                                <div class="local-guides-inner">
                                    <div class="local-guides-profile">
                                        <router-link to="/guide-details">Hanifa <i class="fas fa-circle-check ms-2"></i></router-link>
                                        <div class="rating">
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star"></i>
                                            <span class="d-inline-block average-rating">(08 Reviews)</span>
                                        </div>
                                    </div>
                                    <div class="local-guides-location">
                                        <ul class="nav">
                                            <li>
                                                <i class="feather-map-pin me-1"></i> Germany
                                            </li>
                                            <li>
                                                <i class="feather-award me-1"></i> 7+ Years Exp
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="local-guides-price d-flex align-items-center justify-content-between">
                                    <div class="guides-price">
                                        <p>Price</p>
                                        <h4>$780 <span>/ per hour</span></h4>
                                    </div>
                                    <div class="guides-price">
                                        <router-link to="/services">Travel with me <i class="fas fa-arrow-right"></i></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="guides-widget">
                                <div class="guides-card">
                                    <router-link to="/guide-details">
                                        <div class="guides-image">
                                            <img src="../../../assets/img/provider/provider-12.jpg" class="img-fluid local-guides-img" alt="">
                                        </div>
                                    </router-link>
                                </div>
                                <div class="local-guides-inner">
                                    <div class="local-guides-profile">
                                        <router-link to="/guide-details">Muhammed Rasheed</router-link>
                                        <div class="rating">
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star"></i>
                                            <span class="d-inline-block average-rating">(20 Reviews)</span>
                                        </div>
                                    </div>
                                    <div class="local-guides-location">
                                        <ul class="nav">
                                            <li>
                                                <i class="feather-map-pin me-1"></i> Romania
                                            </li>
                                            <li>
                                                <i class="feather-award me-1"></i> 8+ Years Exp
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="local-guides-price d-flex align-items-center justify-content-between">
                                    <div class="guides-price">
                                        <p>Price</p>
                                        <h4>$210 <span>/ per hour</span></h4>
                                    </div>
                                    <div class="guides-price">
                                        <router-link to="/services">Travel with me <i class="fas fa-arrow-right"></i></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="guides-widget">
                                <div class="guides-card">
                                    <router-link to="/guide-details">
                                        <div class="guides-image">
                                            <img src="../../../assets/img/provider/provider-13.jpg" class="img-fluid local-guides-img" alt="">
                                        </div>
                                    </router-link>
                                    <div class="guides-lang-top">
                                        <p><img src="../../../assets/img/icons/translate-icon.png" class="me-1" alt=""> Language Verified</p>
                                    </div>
                                </div>
                                <div class="local-guides-inner">
                                    <div class="local-guides-profile">
                                        <router-link to="/guide-details">James Harrem <i class="fas fa-circle-check ms-2"></i></router-link>
                                        <div class="rating">
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star"></i>
                                            <span class="d-inline-block average-rating">(15 Reviews)</span>
                                        </div>
                                    </div>
                                    <div class="local-guides-location">
                                        <ul class="nav">
                                            <li>
                                                <i class="feather-map-pin me-1"></i> Canada
                                            </li>
                                            <li>
                                                <i class="feather-award me-1"></i> 10+ Years Exp
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="local-guides-price d-flex align-items-center justify-content-between">
                                    <div class="guides-price">
                                        <p>Price</p>
                                        <h4>$170 <span>/ per hour</span></h4>
                                    </div>
                                    <div class="guides-price">
                                        <router-link to="/services">Travel with me <i class="fas fa-arrow-right"></i></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="guides-widget">
                                <div class="guides-card">
                                    <router-link to="/guide-details">
                                        <div class="guides-image">
                                            <img src="../../../assets/img/provider/provider-26.jpg" class="img-fluid local-guides-img" alt="">
                                        </div>
                                    </router-link>
                                    <div class="guides-premium">
                                        <a href="javascript:void(0);" class="guides-premium-btn"><i class="fas fa-star me-1"></i> Premium</a>
                                    </div>
                                    <div class="guides-lang-bottom">
                                        <p><img src="../../../assets/img/icons/translate-icon.png" class="me-1" alt=""> Language Verified</p>
                                    </div>
                                </div>
                                <div class="local-guides-inner">
                                    <div class="local-guides-profile">
                                        <router-link to="/guide-details">Veronica <i class="fas fa-circle-check ms-2"></i></router-link>
                                        <div class="rating">
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star"></i>
                                            <span class="d-inline-block average-rating">(10 Reviews)</span>
                                        </div>
                                    </div>
                                    <div class="local-guides-location">
                                        <ul class="nav">
                                            <li>
                                                <i class="feather-map-pin me-1"></i> Germany
                                            </li>
                                            <li>
                                                <i class="feather-award me-1"></i> 5+ Years Exp
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="local-guides-price d-flex align-items-center justify-content-between">
                                    <div class="guides-price">
                                        <p>Price</p>
                                        <h4>$580 <span>/ per hour</span></h4>
                                    </div>
                                    <div class="guides-price">
                                        <router-link to="/services">Travel with me <i class="fas fa-arrow-right"></i></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Guides -->
    </template>
    <script>
    import 'owl.carousel/dist/assets/owl.carousel.css';
    import 'owl.carousel';
    import AOS from 'aos';
    import Vue from 'vue'
    export default {
        mounted() {
            if($('.main-wrapper .aos').length > 0) {
                    AOS.init({
                    duration: 1200,
                    once: true,
                });
            }
            if($('.guides-slider').length > 0) {
        $('.guides-slider').slick({
            dots: true,
            autoplay:false,
            infinite: true,
            prevArrow: false,
            nextArrow: false,
            slidesToShow: 4,
              slidesToScroll: 4,
              variableWidth: true,
              responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 575,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
            ]
        });
    }  
        },
        data() {
            return {
            }
        }
    }
    </script>