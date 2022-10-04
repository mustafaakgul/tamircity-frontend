<template>
    <div class="main-wrapper">
       <layouts></layouts>
       <homebanner></homebanner>
       <!-- <tabformwizard></tabformwizard> -->
       <guideindex></guideindex>
       <packageindex></packageindex>
       <ticketoffer></ticketoffer>
       <howitworksindex></howitworksindex>
        <footer class="footer">							
            <div class="dir-icon aos" data-aos="zoom-in-up">
                <img src="../../../assets/img/footer-img.png" alt="">
            </div>
            <!-- Footer Top -->
            <div class="footer-top aos" data-aos="fade-up">
                <div class="container">	
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <!-- Footer Widget -->
                            <div class="footer-widget footer-about">
                                <div class="footer-logo">
                                    <img src="../../../assets/img/logo.png" alt="logo">
                                </div>
                                <div class="footer-about-content">
                                    <p>Teknik Servis ve Ekspertiz Platformu</p>
                                </div>
                            </div>
                            <!-- /Footer Widget -->
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <!-- Footer Widget -->
                            <div class="footer-widget footer-menu">
                                <h2 class="footer-title">Hızlı Bağlantılar</h2>
                                <ul>
                                    <li>
                                        <router-link to="/">Anasayfa</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/about-us">Hakkımızda</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/login">Teknik Servis Giriş</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/register">Teknik Servis Başvuru</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/contact-us">Bize Ulaşın</router-link>
                                    </li>
                                </ul>
                            </div>
                            <!-- /Footer Widget -->
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <!-- Footer Widget -->
                            <div class="footer-widget footer-contact">
                                <h2 class="footer-title">Bize Ulaşın</h2>
                                <div class="footer-contact-info">
                                    <div class="footer-address">
                                        <p><i class="feather-map-pin"></i>Çağlayan Mahallesi Vatan Caddesi No:25/2 Kağıthane/İSTANBUL</p>
                                    </div>
                                    <div class="footer-address">
                                        <p><i class="feather-phone-call"></i>0507 064 64 51</p>
                                    </div>
                                    <div class="footer-address mb-0">
                                        <p><i class="feather-mail"></i>muhammed@tamircity.com</p>
                                    </div>
                                </div>
                            </div>
                            <!-- /Footer Widget -->
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <!-- Footer Widget -->
                            <div class="footer-widget">
                                <h2 class="footer-title">Bülten</h2>
                                <div class="subscribe-form">
                                    <form action="javascript:void(0);">
                                        <i class="feather-mail"></i>
                                        <input type="email" class="form-control" placeholder="Email">
                                        <button type="submit" class="btn btn-primary footer-btn">Abone Ol</button>
                                    </form>
                                </div>
                            </div>
                            <!-- /Footer Widget -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Footer Top -->
            
            <!-- Footer Bottom -->
            <div class="footer-bottom">
                <div class="container">
                    <div class="copyright">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 col-md-6">
                                <div class="copyright-text">
                                    <p class="mb-0">&copy; 2022 Tamircity. Tüm hakları saklıdır.</p>
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-6 hide-menu">
                                <div class="copyright-menu">
                                    <ul class="policy-menu">
                                        <li>
                                            <router-link to="/about-us">Hakkımızda</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/how-it-works">Nasıl Çalışır</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/contact-us">Bize Ulaşın</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/term-condition">Kullanım Şartları</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/privacy-policy">Gizlilik Politikası</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6">
                                <div class="social-icon">
                                  <ul>
                                      <li>
                                          <a href="https://facebook.com/tamircity" target="_blank"><i class="fab fa-facebook-f hi-icon"></i></a>
                                      </li>
                                      <li>
                                          <a href="https://twitter.com/tamircity" target="_blank"><i class="fab fa-twitter hi-icon"></i> </a>
                                      </li>
                                      <li>
                                          <a href="https://youtube.com/tamircity" target="_blank"><i class="fab fa-youtube hi-icon"></i></a>
                                      </li>
                                      <li>
                                          <a href="https://linkedin.com/tamircity" target="_blank"><i class="fab fa-linkedin-in hi-icon"></i></a>
                                      </li>
                                  </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Footer Bottom -->   
        </footer>
    </div>  
</template>
<script>
import AOS from 'aos';
export default {
	mounted() {
		if($('.main-wrapper .aos').length > 0) {
	    AOS.init({
		  duration: 1200,
		  once: true,
		});
	}
	},
    data() {
        return {

        }
    }
}
</script>