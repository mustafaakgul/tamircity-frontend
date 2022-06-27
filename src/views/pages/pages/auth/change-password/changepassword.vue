<template>
<!-- Change Password -->
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
                    <h3 class="loginbox-title">Change Password</h3>
                    <form action="login" class="account-form">
                        <div class="form-group form-focus">
                            <input type="password" class="form-control floating">
                            <label class="focus-label">Create your password</label>
                            <img src="../../../../../assets/img/icons/signin-icon4.svg" alt="">
                        </div>
                        <div class="form-group form-focus">
                            <input type="password" class="form-control floating">
                            <label class="focus-label">Confirm password</label>
                            <img src="../../../../../assets/img/icons/signin-icon4.svg" alt="">
                        </div>
                        <div class="d-grid">
                            <button class="btn btn-primary login-btn" type="submit">Reset Password</button>
                        </div>
                        <div class="dont-have">Remember Password ? <router-link to="/login">Login</router-link></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /Change Password -->
</template>