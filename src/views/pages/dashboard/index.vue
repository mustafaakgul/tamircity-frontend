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
                                    <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque the mattis, leo quam aliquet congue placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scel erisque the mattis,</p>
                                </div>
                            </div>
                            <!-- /Footer Widget -->
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <!-- Footer Widget -->
                            <div class="footer-widget footer-menu">
                                <h2 class="footer-title">Quick Links</h2>
                                <ul>
                                    <li>
                                        <router-link to="/">Home</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/about-us">About Us</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/login">Login</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/register">Register</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/contact-us">Contact us</router-link>
                                    </li>
                                </ul>
                            </div>
                            <!-- /Footer Widget -->
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <!-- Footer Widget -->
                            <div class="footer-widget footer-contact">
                                <h2 class="footer-title">Contact Us</h2>
                                <div class="footer-contact-info">
                                    <div class="footer-address">
                                        <p><i class="feather-map-pin"></i> 367 Hillcrest Lane, Irvine, California, United States</p>
                                    </div>
                                    <div class="footer-address">
                                        <p><i class="feather-phone-call"></i> 321 546 8764</p>
                                    </div>
                                    <div class="footer-address mb-0">
                                        <p><i class="feather-mail"></i> truelysell@example.com</p>
                                    </div>
                                </div>
                            </div>
                            <!-- /Footer Widget -->
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <!-- Footer Widget -->
                            <div class="footer-widget">
                                <h2 class="footer-title">Subscribe</h2>								
                                <div class="subscribe-form">
                                    <form action="javascript:void(0);">
                                        <i class="feather-mail"></i>
                                        <input type="email" class="form-control" placeholder="Email Address">
                                        <button type="submit" class="btn btn-primary footer-btn">Subscribe</button>
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
                                    <p class="mb-0">&copy; 2022 Truelysell. All rights reserved.</p>
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-6 hide-menu">
                                <div class="copyright-menu">
                                    <ul class="policy-menu">
                                        <li>
                                            <router-link to="/about-us">About us</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/how-it-works">How it works</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/contact-us">Contact us</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/term-condition">Terms & Conditions</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/privacy-policy">Privacy Policy</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6">
                                <div class="social-icon">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0);" target="_blank"><i class="fab fa-facebook-f hi-icon"></i></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" target="_blank"><i class="fab fa-twitter hi-icon"></i> </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" target="_blank"><i class="fab fa-youtube hi-icon"></i></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" target="_blank"><i class="fab fa-linkedin-in hi-icon"></i></a>
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