<template>
    <!-- Guides -->
    <section class="guides-section">
        <div class="banner-img">
            <img src="../../../assets/img/shapes/image1.png" class="shape-img-01" alt="">
            <img src="../../../assets/img/shapes/shape-03.png" class="shape-img3 aos" data-aos="fade-right" alt="">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12  ">
                    <div class="section-header" >
                        <div class="section-title aos"  data-aos="fade-up">
                            <h2>Nasıl Çalışır?</h2>
                        </div>
                      
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 aos" data-aos="fade-up">
                    <img src="../../../assets/img/group1.png" class="img-fluid" style="width:20%; heigth:20%;" alt="">
                    <img src="../../../assets/img/group2.png" class="img-fluid" style="width:20%; heigth:20%;" alt="">
                    <img src="../../../assets/img/group3.png" class="img-fluid" style="width:20%; heigth:20%;" alt="">
                    <img src="../../../assets/img/group4.png" class="img-fluid" style="width:20%; heigth:20%;" alt="">
                    <img src="../../../assets/img/group5.png" class="img-fluid" style="width:20%; heigth:20%;" alt="">

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
    <style scoped>
    .section-header .section-title{
       margin-left: 43%;
    }
   
    </style>