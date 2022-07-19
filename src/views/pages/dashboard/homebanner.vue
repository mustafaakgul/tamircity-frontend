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
                                <a class="nav-link " id="ekspertise" data-bs-toggle="tab" href="#ekspertise" role="tab" aria-controls="ekspertiz" aria-selected="true">
                                    <img src="../../../assets/img/icons/banner-icon1.svg" alt="">
                                    <p>EKSPERTİZ HİZMETİ ALMAK İSTİYORUM</p>
                                </a>
                            </li>
                            <li class="nav-item " role="presentation">
                                <router-link to="/stepwizard">
                                <a class="nav-link" id="technical-service">
                                    <img src="../../../assets/img/icons/banner-icon6.svg" alt="">
                                    <p>TEKNİK SERVİS HİZMETİ ALMAK İSTİYORUM</p>
                                </a>
                            </router-link></li>
                        </ul>
                    </div>
                </div>
            </div>

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