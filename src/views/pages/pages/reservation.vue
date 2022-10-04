<template>
  <div class="card transaction-table mb-0">
    <div class="card-header border-0">
      <h5 class="card-title card-title-dark">Rezervasyon</h5>
    </div>
    <div class="card-body p-0">
      <div class="table-responsive">
        <table class="table table-center mb-0">
          <thead>
            <tr>
              <th>Sipariş Detayınız</th>
              <th>İletişim Bilgileriniz</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="col-lg-12 col-md-12 d-flex">
                  <div class="card w-100">
                    <div class="card-body">
                      <form action="javascript:void(0);" class="amount-form">
                        <div class="row align-items-center">
                          <div class="col-md-6 amount-border">
                            <div class="form-group form-focus">
                              <label>Ürün : {{getProductName}}</label>
                              <br />
                           <br />
                              <label>Tarih : </label>
                              <span class="text-danger"> tarih</span>
                              <!-- <input type="text" class="form-control floating">
                                <label class="focus-label">Enter Amount</label> -->
                            </div>
                          </div>
                          <div class="col-md-6 amount-border">
                            <div class="form-group form-focus">
                              <label>Hizmet Türü: </label>
                              <span class="text-danger"> hizmet türü</span>
                              <br />
                              <label>Tutar : </label>
                              <span class="text-danger amount-item"> 50 </span>
                              <!-- <input type="text" class="form-control floating">
                                <label class="focus-label">Enter Amount</label> -->
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </td>

              <td>
                <div class="col-lg-12 col-md-12 d-flex">
                  <div class="card w-100">
                    <div class="card-body">
                      <form method="POST" @submit.prevent="createReservation()" >
                        <div class="row align-items-center">
                            <div class="form-group form-focus">
                              
                               
                                <input
                                  type="text"
                                  class="form-control col-12"
                                  v-model="fullName"
                                  placeholder="İsim & Soyisim"
                                />

                                <input
                                  type="text"
                                  class="form-control mt-2"
                                  v-model="email"
                                  placeholder="Email"
                                />

                                <input
                                  type="text"
                                  class="form-control mt-2"
                                  v-model="phoneNumber"
                                  placeholder="Telefon"
                                />

                                <input
                                  type="text"
                                  class="form-control mt-2"
                                  v-model="phoneNumberSecondary"
                                  placeholder="İkinci Telefon Numarası"
                                />

                                <textarea v-model="descriptionDetail" class="form-control floating mt-2" placeholder="Yaşadığınız sorunu anlatın"></textarea>
                     
                               
                            <button type="submit" value="Submit" class="btn btn-outline-success mt-2">Rezervasyon Oluştur</button>
                            </div>
                    
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

export default {
  data() {
    return {
    };
  },
  methods: {
    createReservation: createReservation
  },
  computed: {
    getProductName() {
        let selectedProduct = this.$store.getters.getSelectedModel;
        if(selectedProduct != null)
            return selectedProduct.text;
        return "Error";
    },
    getFixTypeName() {
        let selectedFixType = this.$store.getters.getSelectedFixType;
        if( selectedFixType != null )
            return selectedFixType.text;
        return "Error";
    },
    getDeviceTypeId() {
        let selectedDeviceType = this.$store.getters.getSelectedDeviceType;
        if( selectedDeviceType != null )
          return selectedDeviceType.id;
        return "Error";
    },
    getBrandId() {
        let selectedBrand = this.$store.getters.getSelectedBrand;
        if( selectedBrand != null )
            return selectedBrand.id;
          return "Error";
    },
    getModelId() {
        let selectedModel = this.$store.getters.getSelectedModelId;
        if( selectedModel != null )
            return selectedModel.id;
          return "Error";
    },
    // getFixTypeId() {
    //     let selectedFixType = this.$store.getters.getSelectedFixTypeId
    //     if( selectedFixType != null )
    //         return selectedFixType.id;
    //       return "Error";
    // },
    getServiceTypeId() {
        let selectedServiceType = this.$store.getters.getSelectedServiceType;
        if( selectedServiceType != null )
            return selectedServiceType.id;
          return "Error";
    },
    // getExtraServiceId() {
    //     let selectedExtraService = this.$store.getters.getSelectedExtraService;
    //     if( selectedExtraService != null )
    //         return selectedExtraService.id;
    //       return "Error";
    // },
    getExpertiseServiceId() {
        let selectedExpertiseService = this.$store.getters.getSelectedExpertiseService;
        if( selectedExpertiseService != null )
            return selectedExpertiseService.id;
          return "Error";
    },
  },
  mounted() {},
};

async function createReservation(){
  console.log(this.getDeviceTypeId);
  console.log(this.getBrandId);
  console.log(this.getModelId);
  console.log(this.getServiceTypeId);
  console.log(this.getExpertiseServiceId);

  axios.post('http://localhost:8888/api/v1/reservations',
      {
        device_type_id: parseInt(this.getDeviceTypeId),
        brand_id: parseInt(this.getBrandId),
        model_id: parseInt(this.getModelId),
        service_type_id: parseInt(this.getServiceTypeId),
        expertise_service_id: parseInt(this.getExpertiseServiceId),
        reservation_date: "2023-09-21T02:30:45Z",
        start_pf_hour: 2,
        end_of_hour: 3,
        price: 31,
        full_name: this.fullName,
        email: this.email,
        phone_number: this.phoneNumber,
        second_phone_number: this.phoneNumberSecondary,
        description: this.descriptionDetail
      },
      {
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': 'Bearer ' + this.$store.getters.getToken
        }
      }
  ).then( response => {
    console.log(response);
  }).catch( error => {
    console.log(error);
  });
}
</script>
