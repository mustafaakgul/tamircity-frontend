<template>
<!-- Guide Top Section -->
<section class="guide-top-section">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-4 col-md-12">
                <div class="guide-pro d-flex align-items-center">												
                    <div class="guide-pro-pic">
                        <router-link to="/guide-details">
                            <img src="../../../../assets/img/provider/provider-thumb-01.jpg" alt="Image">
                        </router-link>
                    </div>
                    <div class="local-guides-profile">
                        <router-link to="/guide-details" class="guides-profile-link">
                            Hanifa <span><i class="fas fa-circle-check ms-2 me-1"></i> Verified</span>
                        </router-link>
                        <div class="rating mt-1">
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <p class="guide-pro-text"><span>Telefon Teknik Servis</span></p>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-4 col-sm-4">
                <div class="guide-pro-book">
                    <!-- <h2>$250.60 <span>/ Per Day</span></h2> -->
                    <router-link to="/booking" class="btn btn-secondary">Randevu Al <i class="feather-arrow-right"></i></router-link>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Guide Top Section -->
</template>