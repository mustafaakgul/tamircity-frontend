<template>
<!-- Booking Form -->
<section class="booking-form-section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-12 col-md-12">
                <div class="booking-steps">
                    <ul class="booking-box nav">
                        <li>
                            <router-link to="/booking" class="active">
                                <img src="../../../../assets/img/icons/booking-icon1.png" alt="">
                                <div class="booking-step">
                                    <span>Step 1</span>
                                    <p>Book a Service</p>
                                </div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/booking-wallet">
                                <img src="../../../../assets/img/icons/booking-icon2.png" alt="">
                                <div class="booking-step">
                                    <span>Step 2</span>
                                    <p>Payment Details</p>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="booking-details">
                    <form action="booking-wallet">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label>Booking Date <span class="text-danger">*</span></label>
                                    <vue-select :options="bookingmonth" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Work Start Time <span class="text-danger">*</span></label>
                                    <vue-select :options="bookingtime" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Work End Time <span class="text-danger">*</span></label>
                                    <vue-select :options="bookingtimetwo" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Location <span class="text-danger">*</span></label>
                                    <vue-select :options="bookingcountry" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <label>Pre Booking Charge <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control floating">
                                    <label class="focus-label">Enter Price</label>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group form-focus">
                                    <label>Hotel/Company Name (Optional) <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control floating">
                                    <label class="focus-label">Enter Company Name</label>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group form-focus">
                                    <label>Hotel/Company Name (Optional) <span class="text-danger">*</span></label>
                                    <textarea class="form-control floating"></textarea>
                                    <label class="focus-label">Enter Comments</label>
                                </div>
                            </div>
                            <div class="col-md-12 text-end">
                                <div class="form-group form-focus mb-0">
                                    <button type="submit" class="btn back-btn">Back</button>
                                    <button type="submit" class="btn btn-primary next-btn">Next</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Booking Form -->
</template>
<script>
  import Vue from 'vue'
  export default {
     data() {
    return {
      bookingmonth: ["Select Date", "August 13, 2022", "Septemper 08, 2022", "October 30, 2022", "December 12, 2022"],
      bookingtime: ["Select Time", "09:00 AM", "09:00 AM", "09:00 AM", "09:00 AM"],
      bookingtimetwo: ["Select Time", "06:00 PM", "06:00 PM", "06:00 PM", "06:00 PM"],
      bookingcountry: ["Select Location", "Germany", "Romania", "Canada", "Newyork"]
    }
    },
    components: {
   
    },
    mounted() {
    }
  }
</script>
