<template>
<!-- Ticket Offers -->
<section class="offer-section">
    <div class="banner-img">
        <img src="../../../assets/img/shapes/shape-06.png" class="shape-img6 aos" data-aos="fade-right" alt="">
        <img src="../../../assets/img/shapes/shape-07.png" class="shape-img7 aos" data-aos="fade-left" alt="">
        <img src="../../../assets/img/shapes/shape-08.png" class="shape-img8 aos" data-aos="fade-left" alt="">
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="section-header">
                    <div class="section-title aos" data-aos="fade-up">
                        <h2>Tamircity Size Ne Sağlar ?</h2>
                    </div>
                   
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-12 text-center">
                <div class="package-item aos" data-aos="fade-up">
                     <img src="../../../assets/img/shapes/success.png" class="img-fluid m-5" style="width:10%; heigth:10%;" alt="">
                     <h3>Adreste Onarım Ve Ekspertiz</h3>
                     <h4>Cihazınız arızalandığında ürününüzü servise götürmek veya kargo süreçleri uğraşmak zorunda kalmadan adresinizde onarım veya ekspertiz hizmeti alabilirsiniz. Randevu için gerekli alanları doldurduktan sonra seçmiş olduğunuz teknik servis randevu saatinde cihazınızı bulunduğunuz adreste tamir ve ekspertiz işlemlerini gerçekleştirir. </h4>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 text-center">
                <div class="package-item aos" data-aos="fade-up">
                     <img src="../../../assets/img/shapes/success.png" class="img-fluid m-5" style="width:10%; heigth:10%;" alt="">
                     <h3>Servis Süreleri</h3>
                     <h4>Hizmet almadan önce teknik servislerin ortalama onarım sürelerini önceden görebilir ve karşılaştırabilirsiniz. Ayrıca kurye, kargo, yerinde tamir ve serviste tamir gibi seçenekler sayesinde ihtiyaç duyduğunuz zaman dilimi içerisinde hizmet alabilirsiniz. </h4>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 text-center">
                <div class="package-item aos" data-aos="fade-up">
                     <img src="../../../assets/img/shapes/success.png" class="img-fluid m-5" style="width:10%; heigth:10%;" alt="">
                     <h3>Kargo ve Kurye Hizmeti</h3>
                     <h4>Eğer bulunduğunuz şehirdeki bir teknik servisten hizmet almak istiyorsanız servise gitmek zorunda kalmadan  </h4>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 text-center">
                <div class="package-item aos" data-aos="fade-up">
                     <img src="../../../assets/img/shapes/success.png" class="img-fluid m-5" style="width:10%; heigth:10%;" alt="">
                     <h3>En Uygun Teknik Servis</h3>
                     <h4>This is a block of text to provide more information about this section and why you should click the button. </h4>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 text-center">
                <div class="package-item aos" data-aos="fade-up">
                     <img src="../../../assets/img/shapes/success.png" class="img-fluid m-5" style="width:10%; heigth:10%;" alt="">
                     <h3>Sigorta ve Kasko Paketleri</h3>
                     <h4>This is a block of text to provide more information about this section and why you should click the button. </h4>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 text-center">
                <div class="package-item aos" data-aos="fade-up">
                     <img src="../../../assets/img/shapes/success.png" class="img-fluid m-5" style="width:10%; heigth:10%;" alt="">
                     <h3>Yıllık Bakım Anlaşmaları</h3>
                     <h4>This is a block of text to provide more information about this section and why you should click the button. </h4>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Ticket Offers -->
</template>
<Script>
        import Vue from 'vue'
        export default {
            data() {
            return {
                ticketoffer: ticketoffer
            }
            },
            components: {
            },
            mounted() {
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
            }
        }
    </Script>
     <style scoped>
    .section-header .section-title{
       margin-left: 35%;
    }
   
    </style>