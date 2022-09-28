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
                              <label>Hizmet : {{getFixTypeName}}</label>
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
                      <form action="javascript:void(0);" >
                        <div class="row align-items-center">
                            <div class="form-group form-focus">
                              
                               
                                <input
                                  type="text"
                                  class="form-control col-12"
                                  v-model="techServiceName"
                                  placeholder="İsim & Soyisim"
                                />

                                <input
                                  type="text"
                                  class="form-control mt-2"
                                  v-model="techServiceName"
                                  placeholder="Email"
                                />

                                <input
                                  type="text"
                                  class="form-control mt-2"
                                  v-model="techServiceName"
                                  placeholder="Telefon"
                                />

                                <textarea class="form-control floating mt-2" placeholder="Yaşadığınız sorunu anlatın"></textarea>
                     
                               
                            <a href="" class="btn btn-outline-success mt-2">Rezervasyon Oluştur</a>
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

export default {
  data() {
    return {
       
    };
  },
  computed: {
    getProductName() {
        let selectedProduct = this.$store.getters.getSelectedModel;
        if(selectedProduct != null)
            return selectedProduct.text;
        return "";
    },
    getFixTypeName() {
        let selectedFixType = this.$store.getters.getSelectedFixType;
        if(selectedFixType != null)
            return selectedFixType.text;
        return "asd";
    }
  },
  mounted() {},
};
</script>
