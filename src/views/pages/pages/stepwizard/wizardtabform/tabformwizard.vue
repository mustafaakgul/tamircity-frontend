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
                    id="fixType"
                    data-bs-toggle="tab"
                    href="#fixTypeTab"
                    role="tab"
                    aria-controls="fixTypeTab"
                    aria-selected="false"
                  >
                    <img
                      src="../../../../../assets/img/icons/banner-icon4.svg"
                      alt=""
                    />
                    <p>TAMİR TÜRÜ</p>
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
                    id="techService"
                    data-bs-toggle="tab"
                    href="#techServiceTab"
                    role="tab"
                    aria-controls="techServiceTab"
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
                    id="extraProduct"
                    data-bs-toggle="tab"
                    href="#extraProductTab"
                    role="tab"
                    aria-controls="extraProductTab"
                    aria-selected="false"
                  >
                    <img
                      src="../../../../../assets/img/icons/banner-icon7.svg"
                      alt=""
                    />
                    <p>EKSTRA</p>
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
                       
                        :options="getStateTechDeviceTypes"
                        @select="getTechBrands($event)"
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
                        
                        :options="getStateTechBrands"
                        @select="getTechModels($event)"
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
                        :options="getStateTechModels"
                        @select="getTechFixTypes($event)"
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
            id="fixTypeTab"
            role="tabpanel"
            aria-labelledby="air-ticket"
          >
            <div class="banner-search">
              <form  >
                <div class="row align-items-center justify-content-center">
                  <div class="col-lg-12">
                    <div class="form-group banner-form">
                      <label>Tamir Türü</label>
                      <vue-select
                        v-model="this.$store.state.selectedItems.fixType"
                        placeholder="Seçiniz..."
                        :options="getStateTechFixTypes"
                        @select="getTechServiceTypes($event)"
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
                        :options="getStateTechServiceTypes"
                        v-model="this.$store.state.selectedItems.serviceType"
                        placeholder="Seçiniz..."
                        @select="getTechTechServices($event)"
                       />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="techServiceTab"
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
            id="extraProductTab"
            role="tabpanel"
            aria-labelledby="car-rent"
          >
            <div class="banner-search">
              <form >
                <div class="row align-items-center justify-content-center">
                  <div class="col-lg-12">
                    <div class="form-group banner-form">
                      <label>Ekstra</label>
                      <vue-select @select="createTechReservation($event)" :options="getStateTechExtras" />
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
    ...mapActions(["getTechDeviceTypes","getTechBrands", "getTechModels", "getTechFixTypes","getTechServiceTypes","getTechTechServices","getTechExtras","createTechReservation"]),
  },
  computed: {
    ...mapGetters({
      getStateDeviceTypes: "getStateTechDeviceTypes",
      getStateBrands: "getStateTechBrands",
      getStateModels: "getStateTechModels",
      getStateFixTypes: "getStateTechFixTypes",
      getStateServiceTypes:"getStateTechServiceTypes",
      getStateTechServices : "getStateTechTechServices",
      getStateExtras : "getStateTechExtras"
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