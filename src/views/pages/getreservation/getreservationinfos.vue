<template>
  <section class="booking-form-section">
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-md-12">
          <div class="card notification-card">
            <div class="card-body">
              <div class="guide-notification-grid">
                <p class="title-notification"> {{ getStateReservationInfo.FullName }}</p>
                <div class="col-lg-6 col-md-12 d-flex">
                  <div class="contact-main w-100">

                    <div class="contact-inner">
                      <h4>BİLGİLER</h4>
                      <div class="contact-details">
                        <div class="contact-info">
                          <span><i class="feather-mail"></i></span>
                          <div class="contact-data">
                            <h4>E-Posta</h4>
                            <p>{{ getStateReservationInfo.Email }}</p>
                          </div>
                        </div>
                        <div class="contact-info">
                          <span><i class="feather-phone-forwarded"></i></span>
                          <div class="contact-data">
                            <h4>Telefon Numarası</h4>
                            <p>{{ getStateReservationInfo.PhoneNumber }}</p>
                          </div>
                        </div>
                        <div class="contact-info">
                          <span><i class="feather-phone-forwarded"></i></span>
                          <div class="contact-data">
                            <h4>İkinci Telefon Numarası</h4>
                            <p>{{ getStateReservationInfo.SecondPhoneNumber }}</p>
                          </div>
                        </div>
                        <div class="contact-info">
                          <span><i class="feather-map-pin"></i></span>
                          <div class="contact-data">
                            <h4>Açıklama</h4>
                            <p>{{ getStateReservationInfo.Description }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import axios from "axios";
import {mapActions, mapGetters} from "vuex";

export default {
methods: {
...mapActions(["getReservationInfos",]),
},
computed: {
...mapGetters({
  getStateReservationInfo:"getStateReservationInfo",

  }),
},
components: {

},
created(){
  console.log("worked created hooks")

  this.$store.dispatch("getReservationInfos")
}
};



</script>