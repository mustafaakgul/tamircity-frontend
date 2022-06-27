<template>
<div class="login account-page">
 <!-- Main Wrapper -->
 <div class="main-wrapper">
					
    <!-- Login -->
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
                                    <router-link to="/login" class="active">
                                        <i class="fas fa-lock me-1"></i> Login
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/register">
                                        <i class="fas fa-user-lock me-1"></i> Signup
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                        <Form class="login account-form" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
                            <div class="form-group form-focus">
                                <Field name="email" type="text" value="admin@example.com" class="form-control floating" :class="{ 'is-invalid': errors.email }" />
                                <label class="focus-label">Enter your email</label>
                                <img src="../../../../../assets/img/icons/signin-icon2.svg" alt="">
                                <div class="invalid-feedback">{{errors.email}}</div>
							    <div class="emailshow text-danger" id="email"></div>
                            </div>
                            <div class="form-group form-focus">
                                <Field name="password" type="password" value="123456" class="form-control floating pass-input" :class="{ 'is-invalid': errors.password }" />
                                <label class="focus-label">Enter your password</label>
                                <img src="../../../../../assets/img/icons/signin-icon4.svg" alt="">
                                <div class="invalid-feedback">{{errors.password}}</div>
							    <div class="emailshow text-danger" id="password"></div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-6">
                                        <label class="custom_check mb-0 d-inline-flex"> Remember me  
                                            <input type="checkbox" name="radio">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="col-6 text-end">
                                        <router-link to="/forgot-password" class="forgot-link" >Forgot Password ?</router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="d-grid">
                                <button class="btn btn-primary login-btn" type="submit">Login Now</button>
                            </div>
                            <div class="login-or">
                                <span class="or-line"></span>
                                <p class="span-or">Or Login With</p>
                            </div>
                            <div class="social-login">
                                <router-link to="/login" target="_blank">
                                    <img src="../../../../../assets/img/icons/google-icon.png" class="img-fluid me-2" alt="Logo">Google
                                </router-link>
                                <router-link to="/login" target="_blank">
                                    <i class="feather-facebook me-2"></i> Facebook
                                </router-link>
                                <router-link to="/login" target="_blank">
                                    <i class="feather-phone-call me-2"></i> Phone
                                </router-link>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Login -->

</div>		
<!-- /Main Wrapper -->   
</div>
</template>    
<script>
    import { ref } from 'vue'
	import { router } from '../../../../../router';
	import VueRouter from 'vue-router'
	import { useStore } from 'vuex'
	import { Form, Field } from 'vee-validate';
	import * as Yup from 'yup';
	import Vue from 'vue'
	export default {
	  data() {
	  return {
	  }
	  },
	  components: {
        Form,
		Field,
	  },
	  mounted() {
        $(function(){

        $('button').focus(function(){

            $("img").hide();

            });
        });
	  },
      setup() {
	  let users = localStorage.getItem('storedData');
		if (users === null) {
		  let password = [
			{
			  email: 'admin@example.com',
			  password: '123456',
			},
		  ];
		  const jsonData = JSON.stringify(password);
		  localStorage.setItem('storedData', jsonData);
		}
		 const schema = Yup.object().shape({
				email: Yup.string()
					.required('Email is required')
					.email('Email is invalid'),
				password: Yup.string()
					.min(6, 'Password must be at least 6 characters')
					.required('Password is required'),
			});
		const onSubmit = (values) => {
		document.getElementById("email").innerHTML = ""
		document.getElementById("password").innerHTML = ""
		let data = localStorage.getItem('storedData');
		  var Pdata= JSON.parse(data)
		  const Eresult= Pdata.find(({ email }) => email === values.email);
		 if (Eresult) {
		  if (Eresult.password === values.password) {
		  router.push('/')  
		  } else {
			  document.getElementById("password").innerHTML = "Incorrect password"
		  }
		} else {
			  document.getElementById("email").innerHTML = "Email is not valid"
		}
			  };
			return {
				schema,
				onSubmit,
			};
	
		}

	}
  </Script>