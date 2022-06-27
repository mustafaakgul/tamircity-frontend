<template>
<div class="login account-page">
<!-- Main Wrapper -->
<div class="main-wrapper">
					
    <!-- Register -->
    <div class="login-section">
        <div class="row">
            <div class="col-lg-6 col-md-6">
                <div class="login-inner">
                    <div class="login-bg">
                        <div class="login-banner">
                            <div class="login-details">
                                <div class="login-logo">
                                    <img src="../../../../../assets/img/logo.png" class="img-fluid" alt="Logo">
                                </div>
                                <p class="account-subtitle">Do you speak more than one language? Would you like to serve as a local or international guide and earn money for it?</p>
                                <router-link to="/" class="btn login-btn-guide">Become a guide</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 login-wrap-bg">		
                <div class="login-wrapper">
                    <div class="loginbox">
                        <div class="login-tabs">
                            <ul>
                                <li>
                                    <router-link to="/login">
                                        <i class="fas fa-lock me-1"></i> Login
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/register" class="active">
                                        <i class="fas fa-user-lock me-1"></i> Signup
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                        <Form class="register account-form" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
                            <div class="form-group form-focus">
                                <input type="text" class="form-control floating">
                                <label class="focus-label">Enter first name</label>
                                <img src="../../../../../assets/img/icons/signin-icon1.svg" alt="">
                            </div>
                            <div class="form-group form-focus">
                                <input type="text" class="form-control floating">
                                <label class="focus-label">Enter last name</label>
                                <img src="../../../../../assets/img/icons/signin-icon1.svg" alt="">
                            </div>
                            <div class="form-group form-focus">
                                <Field name="email" type="text" class="form-control  floating ms-auto" :class="{ 'is-invalid': errors.email }" />
                                <label class="focus-label">Enter your email address</label>
                                <img src="../../../../../assets/img/icons/signin-icon2.svg" alt="">
                                <span class="invalid-feedback">{{errors.email}}</span>
                                <div class="emailshow text-danger" id="email"></div>
                            </div>
                            <div class="form-group form-focus phone-form-group">
                                <input class="form-control form-control-lg group_formcontrol" id="phone" name="phone" type="text">
                                <img src="../../../../../assets/img/icons/signin-icon3.svg" alt="">
                            </div>
                            <div class="form-group form-focus">
                                <Field name="password" type="password" class="form-control floating" :class="{ 'is-invalid': errors.password }" />
                                <label class="focus-label">Create your password</label>
                                <img src="../../../../../assets/img/icons/signin-icon4.svg" alt="">
                                <span class="invalid-feedback">{{errors.password}}</span>
                                <div class="emailshow text-danger" id="password"></div>
                            </div>
                            <div class="form-group form-focus">
                                <Field name="confirmpassword" type="password" class="form-control floating" :class="{ 'is-invalid': errors.confirmpassword }" />
                                <label class="focus-label">Confirm password</label>
                                <img src="../../../../../assets/img/icons/signin-icon4.svg" alt="">
                                <span class="invalid-feedback">{{errors.confirmpassword}}</span>
                                <div class="emailshow text-danger" id="confirmpassword"></div>
                            </div>
                            <div class="d-grid">
                                <button class="btn btn-primary login-btn" type="submit">Register Now</button>
                            </div>
                            <div class="login-or">
                                <span class="or-line"></span>
                                <p class="span-or">Or Register With</p>
                            </div>
                            <div class="social-login">
                                <router-link to="/register" target="_blank">
                                    <img src="../../../../../assets/img/icons/google-icon.png" class="img-fluid me-2" alt="Logo">Google
                                </router-link>
                                <router-link to="/register" target="_blank">
                                    <i class="feather-facebook me-2"></i> Facebook
                                </router-link>
                                <router-link to="/register" target="_blank">
                                    <i class="feather-phone-call me-2"></i> Phone
                                </router-link>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Register -->

</div>		
<!-- /Main Wrapper -->
</div>
</template>
<script>
import Vue from 'vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { Form, Field } from 'vee-validate';
import { router } from '../../../../../router';
import VueRouter from 'vue-router'
import * as Yup from 'yup';    
import intlTelInput from 'intl-tel-input';
    export default {
        mounted() {
            
		var input = document.querySelector("#phone");
        intlTelInput(input, {
            utilsScript: "./assets/plugins/intltelinput/js/utils.js",
		}); 
        $(function(){

        $('button').focus(function(){

            $("img").hide();

            });
            
        });

        },
        
        data() {
            return {
                
            }
        },
        components: {
        Form,
        Field,
	  },
      setup() {
        const schema = Yup.object().shape({
            email: Yup.string()
                .required('Email is required')
                .email('Email is invalid'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            confirmpassword: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Confirm password is required'),
        });
      const onSubmit = (values) => {   
      if(values.password === values.confirmpassword) {
      let Rawdata = localStorage.getItem('storedData');
      let Pdata= [];
      Pdata = JSON.parse(Rawdata);    
       const Eresult = Pdata.find(({ email }) => email == values.email);  
       if(Eresult){ 
        document.getElementById("email").innerHTML = "This email are already exist"
       } else {
          Pdata.push(values);
          const jsonData = JSON.stringify(Pdata);
          router.push('/login')
          localStorage.setItem('storedData', jsonData);
        } 
      }  else {
        document.getElementById("confirmpassword").innerHTML = "Password not matching"
      }
    };
        return {
            schema,
            onSubmit
        };

    }
    }
    </script>