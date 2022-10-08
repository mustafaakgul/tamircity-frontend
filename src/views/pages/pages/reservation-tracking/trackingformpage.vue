<template>
  <section class="booking-form-section">
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-xl-8 col-lg-12 col-md-12">
          <div class="booking-steps">Rezervasyon Takip Formu</div>
          <div class="booking-details">
            
              <div class="row focus"  >
                <div class="col-md-12">
                  <div class="form-group form-focus">
                    <label
                      >Rezervasyon Numarası<span class="text-danger"
                        >*</span
                      ></label
                    >
                    <input
                      type="text"
                      class="form-control floating"
                      v-model="
                        this.$store.state.reservationTracking.reservationNumber
                      "
                    />
                    <label class="focus-label">Rezervasyon Numarası</label>
                  </div>
                  <div class="col-md-12 text-end">
                    <div class="form-group form-focus mb-0">
                      <router-link to="/getreservationinfos"
                        @click="getReservationInfos"
                        class="btn btn-primary next-btn"
                      >
                        Sorgula
                      </router-link>
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
import Vue from "vue";

import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["getReservationInfos"]),
  },
};
</script>
