<template>
  <!-- Home Banner -->
  <section class="banner-section">
    <div class="banner-wrapper">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 col-md-12">
            <div
              class="banner-list banner-tab aos aos-init aos-animate"
              data-aos="fade-up"
            >
              <ul class="nav nav-tabs border-0" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    id="device"
                    data-bs-toggle="tab"
                    href="#deviceTab"
                    role="tab"
                    aria-controls="deviceTab"
                    aria-selected="true"
                  >
                    <img
                      src="../../../../../assets/img/icons/banner-icon1.svg"
                      alt=""
                    />
                    <p>CİHAZ</p>
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link disabled"
                    id="brand"
                    data-bs-toggle="tab"
                    href="#brandTab"
                    role="tab"
                    aria-controls="brandTab"
                    aria-selected="false"
                    ref="brandd"
                  >
                    <img
                      src="../../../../../assets/img/icons/banner-icon2.svg"
                      alt=""
                    />
                    <p>MARKA</p>
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link disabled"
                    id="model"
                    data-bs-toggle="tab"
                    href="#modelTab"
                    role="tab"
                    aria-controls="modelTab"
                    aria-selected="false"
                  >
                    <img
                      src="../../../../../assets/img/icons/banner-icon3.svg"
                      alt=""
                    />
                    <p>MODEL</p>
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link disabled"
                    id="serviceType"
                    data-bs-toggle="tab"
                    href="#serviceTypeTab"
                    role="tab"
                    aria-controls="serviceTypeTab"
                    aria-selected="false"
                  >
                    <img
                      src="../../../../../assets/img/icons/banner-icon5.svg"
                      alt=""
                    />
                    <p>HİZMET TÜRÜ</p>
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link disabled"
                    id="expertiseService"
                    data-bs-toggle="tab"
                    href="#expertiseServiceTab"
                    role="tab"
                    aria-controls="expertiseServiceTab"
                    aria-selected="false"
                  >
                    <img
                      src="../../../../../assets/img/icons/banner-icon6.svg"
                      alt=""
                    />
                    <p>SERVİS SEÇİMİ</p>
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link disabled"
                    id="reservation"
                    data-bs-toggle="tab"
                    href="#reservationTab"
                    role="tab"
                    aria-controls="reservation"
                    aria-selected="false"
                  >
                    <img
                      src="../../../../../assets/img/icons/banner-icon7.svg"
                      alt=""
                    />
                    <p>REZERVASYON</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Banner Tabs -->
        
        <div class="tab-content pb-5" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="deviceTab"
            role="tabpanel"
            aria-labelledby="deviceTab"
          >
            <div class="banner-search">
              <form  >
                <div class="row align-items-center justify-content-center">
                  <div class="col-lg-12">
                    <div class="form-group banner-form">
                      <label>Cihaz Seç</label>
                      <vue-select
                       
                        :options="getStateDeviceTypes"
                        @select="getBrands($event)"
                        placeholder="Seçiniz..."
                      />
                      
                    </div>
                  </div>
                </div>
                <div>
              
        </div>
              </form>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="brandTab"
            role="tabpanel"
            aria-labelledby="brandTab"
          >
            <div class="banner-search">
              <form  >
                <div class="row align-items-center justify-content-center">
                  <div class="col-lg-12">
                    <div class="form-group banner-form">
                      <label>Marka Seç</label>
                      <vue-select
                        
                        :options="getStateBrands"
                        @select="getModels($event)"
                        placeholder="Seçiniz..."
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="modelTab"
            role="tabpanel"
            aria-labelledby="modelTab"
          >
            <div class="banner-search">
              <form  >
                <div class="row align-items-center justify-content-center">
                  <div class="col-lg-12">
                    <div class="form-group banner-form">
                      <label>Model Seç</label>
                      <vue-select
                        v-model="this.$store.state.selectedItems.model"
                        :options="getStateModels"
                        @select="getServiceTypes($event)"
                        placeholder="Seçiniz..."
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="serviceTypeTab"
            role="tabpanel"
            aria-labelledby="bus-ticket"
          >
            <div class="banner-search">
              <form  >
                <div class="row align-items-center justify-content-center">
                  <div class="col-lg-12">
                    <div class="form-group banner-form">
                      <label>Hizmet Türü</label>
                      <vue-select 
                        :options="getStateServiceTypes"
                        v-model="this.$store.state.selectedItems.serviceType"
                        placeholder="Seçiniz..."
                        @select="getExpertiseServices($event)"
                       />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="expertiseServiceTab"
            role="tabpanel"
            aria-labelledby="car-rent"
          >
            <div class="banner-search">
              <form  >
                <div class="row align-items-center justify-content-center">
                  <div class="col-lg-12">
                    <div class="form-group banner-form">
                      <label>Servis Seçimi</label>
                      <services ></services>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="reservationTab"
            role="tabpanel"
            aria-labelledby="reservation"
          >
            <div class="banner-search">
              <form  >
                <div class="row align-items-center justify-content-center">
                  <div class="col-lg-12">
                    <div class="form-group banner-form">
                      <label>Reservation</label>
                      <reservation></reservation>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- /Banner Tabs -->
      </div>
    </div>
  </section>
  <!-- /Home Banner -->
</template>
<script>
import Vue from "vue";

import { mapGetters, mapMutations, mapActions } from "vuex";
import Services from '../../services.vue';
import Reservation from '../../reservation.vue';

export default {
  methods: {
    ...mapActions(["getDeviceTypes","getBrands", "getModels","getServiceTypes","getExpertiseServices","createReservation"]),
  },
  computed: {
    ...mapGetters({
      getStateDeviceTypes: "getStateDeviceTypes",
      getStateBrands: "getStateBrands",
      getStateModels: "getStateModels",
      getStateServiceTypes:"getStateServiceTypes",
      getStateExpertiseServices : "getStateExpertiseServices",
    }),
  },
  components: {
    services:Services,
    reservation:Reservation
  },
  created(){
    console.log("worked created hooks")
    
    this.$store.dispatch("getDeviceTypes")
  }
};
</Script>