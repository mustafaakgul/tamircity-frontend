<template>
<!-- Home Banner -->
<section class="banner-section">
    <div class="banner-wrapper">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <div class="banner-list banner-tab aos aos-init aos-animate" data-aos="fade-up">
                        <ul class="nav nav-tabs border-0" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" id="hire-guide" data-bs-toggle="tab" href="#hireguide" role="tab" aria-controls="hireguide" aria-selected="true">
                                    <img src="../../../../../assets/img/icons/banner-icon1.svg" alt="">
                                    <p>CİHAZ</p>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="movie-ticket" data-bs-toggle="tab" href="#movieticket" role="tab" aria-controls="movieticket" aria-selected="false">
                                    <img src="../../../../../assets/img/icons/banner-icon2.svg" alt="">
                                    <p>MARKA</p>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="launch-ticket" data-bs-toggle="tab" href="#launchticket" role="tab" aria-controls="launchticket" aria-selected="false">
                                    <img src="../../../../../assets/img/icons/banner-icon3.svg" alt="">
                                    <p>MODEL</p>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="air-ticket" data-bs-toggle="tab" href="#airticket" role="tab" aria-controls="airticket" aria-selected="false">
                                    <img src="../../../../../assets/img/icons/banner-icon4.svg" alt="">
                                    <p>TAMİR TÜRÜ</p>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="bus-ticket" data-bs-toggle="tab" href="#busticket" role="tab" aria-controls="busticket" aria-selected="false">
                                    <img src="../../../../../assets/img/icons/banner-icon5.svg" alt="">
                                    <p>HİZMET TÜRÜ</p>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="car-rent" data-bs-toggle="tab" href="#carrent" role="tab" aria-controls="carrent" aria-selected="false">
                                    <img src="../../../../../assets/img/icons/banner-icon6.svg" alt="">
                                    <p>SERVİS SEÇİMİ</p>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="hotel-booking" data-bs-toggle="tab" href="#hotelbooking" role="tab" aria-controls="hotelbooking" aria-selected="false">
                                    <img src="../../../../../assets/img/icons/banner-icon7.svg" alt="">
                                    <p>EKSTRA</p>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="reservation" data-bs-toggle="tab" href="#reservation" role="tab" aria-controls="reservation" aria-selected="false">
                                    <img src="../../../../../assets/img/icons/banner-icon7.svg" alt="">
                                    <p>REZERVASYON</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Banner Tabs -->
            <div class="tab-content pb-5" id="myTabContent">
                <div class="tab-pane fade show active" id="hireguide" role="tabpanel" aria-labelledby="hire-guide">
                    <div class="banner-search">
                        <form action="guide-details">
                            <div class="row align-items-center justify-content-center">
                                <div class="col-lg-12">
                                    <div class="form-group banner-form">
                                        <label>Cihaz Seç</label>
                                        <vue-select :options="deviceTypes" />
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
                                <div class="col-lg-12">
                                    <div class="form-group banner-form">
                                        <label>Marka Seç</label>
                                        <vue-select :options="brands" />
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
                                <div class="col-lg-12">
                                    <div class="form-group banner-form">
                                        <label>Model Seç</label>
                                        <vue-select :options="models"/>
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
                                <div class="col-lg-12">
                                    <div class="form-group banner-form">
                                        <label>Tamir Türü</label>
                                        <vue-select :options="models"/>
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
                                <div class="col-lg-12">
                                    <div class="form-group banner-form">
                                        <label>Hizmet Türü</label>
                                        <vue-select :options="models"/>
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
                                <div class="col-lg-12">
                                    <div class="form-group banner-form">
                                        <label>Servis Seçimi</label>
                                        <vue-select :options="models"/>
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
                                <div class="col-lg-12">
                                    <div class="form-group banner-form">
                                        <label>Ekstra</label>
                                        <vue-select :options="models"/>
                                    </div>
                                </div>
                               
                            </div>
                        </form>
                    </div>
                </div>
                <div class="tab-pane fade" id="reservation" role="tabpanel" aria-labelledby="reservation">
                    <div class="banner-search">
                        <form action="guide-details">
                            <div class="row align-items-center justify-content-center">
                                <div class="col-lg-12">
                                    <div class="form-group banner-form">
                                        <label>Ekstra</label>
                                        <vue-select :options="models"/>
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
        deviceTypes: ["TELEFON", "TABLET", "OYUN KONSOLU&TV", "PC", "DİJİTAL FOTOĞRAF MAKİNASI&KAMERA","ELEKTRİKLİ EV/ENDÜSTRİYEL ALETLER"],
         brands: ["ddd","ggg"

        ], 
        models:["ee","rrr"

        ],
            }
          
      },
      components: {
     
      },
      mounted() {
      }
    }
  </Script>