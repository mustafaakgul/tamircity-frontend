<template>
<!-- Report -->
<section class="report-section">
    <div class="container">
        <div class="row align-items-center justify-content-center">
            <div class="col-xl-9 col-lg-9 col-md-12">
                <div class="filter-info">
                    <ul class="filter-list">
                        <li>
                            <div class="multiple-select">
                                <div class="select-box">
                                    <p>
                                        <img src="../../../../assets/img/icons/filter-icon1.svg" alt=""> Languages
                                    </p>
                                    <span class="down-icon"><i class="feather-chevron-down"></i></span>
                                </div>
                                <div id="check-boxes">
                                    <form action="javascript:void(0);">
                                        <p class="checkbox-title">By Language</p>
                                        <div class="select-box-cont select-box-cont-one">
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="language" checked>
                                                <span class="checkmark"></span> English
                                            </label>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="language">
                                                <span class="checkmark"></span> Spanish
                                            </label>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="language">
                                                <span class="checkmark"></span> Portugese
                                            </label>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="language">
                                                <span class="checkmark"></span> German
                                            </label>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="language">
                                                <span class="checkmark"></span> French
                                            </label>
                                        </div>
                                        <button type="submit" class="btn btn-primary w-100">Apply</button>
                                        <button type="reset" class="btn btn-light-grey w-100">Reset</button>
                                    </form>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="multiple-select">
                                <div class="select-box">
                                    <p>
                                        <img src="../../../../assets/img/icons/filter-icon2.svg" alt="" class="trans-icon"> Translator Categories
                                    </p>
                                    <span class="down-icon"><i class="feather-chevron-down"></i></span>
                                </div>
                                <div id="check-boxes">
                                    <form action="javascript:void(0);">
                                        <p class="checkbox-title">By Translator Categories</p>
                                        <div class="select-box-cont select-box-cont-one">
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="category" checked>
                                                <span class="checkmark"></span> Category 1
                                            </label>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="category">
                                                <span class="checkmark"></span> Category 2
                                            </label>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="category">
                                                <span class="checkmark"></span> Category 3
                                            </label>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="category">
                                                <span class="checkmark"></span> Category 4
                                            </label>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="category">
                                                <span class="checkmark"></span> Category 5
                                            </label>
                                        </div>
                                        <button type="submit" class="btn btn-primary w-100">Apply</button>
                                        <button type="reset" class="btn btn-light-grey w-100">Reset</button>
                                    </form>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="multiple-select">
                                <div class="select-box">
                                    <p>
                                        <img src="../../../../assets/img/icons/filter-icon3.svg" alt=""> Sort By
                                    </p>
                                    <span class="down-icon"><i class="feather-chevron-down"></i></span>
                                </div>
                                <div id="check-boxes">
                                    <form action="javascript:void(0);">
                                        <p class="checkbox-title">By Price Categories</p>
                                        <div class="select-box-cont select-box-cont-one">
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="category" checked>
                                                <span class="checkmark"></span> Price Low to High
                                            </label>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="category">
                                                <span class="checkmark"></span> Price High to Low
                                            </label>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="category">
                                                <span class="checkmark"></span> Newest
                                            </label>
                                        </div>
                                        <button type="submit" class="btn btn-primary w-100">Apply</button>
                                        <button type="reset" class="btn btn-light-grey w-100">Reset</button>
                                    </form>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="multiple-select">
                                <div class="select-box">
                                    <p>
                                        <img src="../../../../assets/img/icons/filter-icon4.svg" alt=""> Reviews
                                    </p>
                                    <span class="down-icon"><i class="feather-chevron-down"></i></span>
                                </div>
                                <div id="check-boxes">
                                    <form action="javascript:void(0);">
                                        <p class="checkbox-title">By Reviews</p>
                                        <div class="select-box-cont">
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="reviews" checked>
                                                <span class="checkmark"></span> 
                                                <span class="rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star"></i>
                                                </span>
                                            </label>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="reviews">
                                                <span class="checkmark"></span>
                                                <span class="rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star"></i>
                                                </span>
                                            </label>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="reviews">
                                                <span class="checkmark"></span>
                                                <span class="rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </span>
                                            </label>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="reviews">
                                                <span class="checkmark"></span>
                                                <span class="rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </span>
                                            </label>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="reviews">
                                                <span class="checkmark"></span>
                                                <span class="rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </span>
                                            </label>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="reviews">
                                                <span class="checkmark"></span>
                                                <span class="rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star"></i>
                                                </span>
                                            </label>
                                        </div>
                                        <button type="submit" class="btn btn-primary w-100">Apply</button>
                                        <button type="reset" class="btn btn-light-grey w-100">Reset</button>
                                    </form>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="multiple-select">
                                <div class="select-box">
                                    <p>
                                        <img src="../../../../assets/img/icons/filter-icon5.svg" alt=""> By Location
                                    </p>
                                    <span class="down-icon"><i class="feather-chevron-down"></i></span>
                                </div>
                                <div id="check-boxes">
                                    <form action="javascript:void(0);">
                                        <p class="checkbox-title">By Location</p>
                                        <div class="form-custom">
                                            <i class="feather-search"></i>
                                            <input type="text" class="form-control" placeholder="Enter Location">
                                        </div>
                                        <div class="select-box-cont">
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="location">
                                                <span class="checkmark"></span> Germany
                                            </label>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="location">
                                                <span class="checkmark"></span> Romania
                                            </label>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="location">
                                                <span class="checkmark"></span> Canada
                                            </label>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="location">
                                                <span class="checkmark"></span> Yeman
                                            </label>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="location">
                                                <span class="checkmark"></span> Kenya
                                            </label>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="location">
                                                <span class="checkmark"></span> Australia
                                            </label>
                                            <label class="custom_check w-100">
                                                <input type="checkbox" name="location">
                                                <span class="checkmark"></span> USA
                                            </label>
                                        </div>
                                        <button type="submit" class="btn btn-primary w-100">Apply</button>
                                        <button type="reset" class="btn btn-light-grey w-100">Reset</button>
                                    </form>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-12">
                <div class="report-clear">
                    <a href="javascript:void(0);">
                        <i class="feather-x"></i> Clear your selection
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Report -->    
</template>
<script>
        import Vue from 'vue'
        export default {
            data() {
            return {
                
            }
            },
            components: {
                
            },
            mounted() {
                $('.filter-list .select-box').on("click", function() {
                    $(this).parent().find('#check-boxes').fadeToggle();
                    $(this).parent().parent().siblings().find('#check-boxes').fadeOut();
                });
            },
        }
    </Script>