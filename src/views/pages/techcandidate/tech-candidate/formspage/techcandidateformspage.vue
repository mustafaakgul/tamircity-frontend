<template>
  <section class="booking-form-section">
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-xl-8 col-lg-12 col-md-12">
          <div class="booking-steps">
           Teknik Servis Başvuru Formu
          </div>
          <div class="booking-details">
              <form method="POST" @submit.prevent="sendItem()">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group form-focus">
                      <label>Teknik Servis Adı<span class="text-danger">*</span></label>
                      <input type="text" class="form-control floating" v-model="techServiceName">
                      <label class="focus-label">Teknik Servis Adı</label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group form-focus">
                      <label>İşletme Türü<span class="text-danger">*</span></label>
                      <input type="text" class="form-control floating" v-model="businessType">
                      <label class="focus-label">İşletme Türü</label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group form-focus">
                      <label>Adres <span class="text-danger">*</span></label>
                      <input type="text" class="form-control floating" v-model="address">
                      <label class="focus-label">Adres</label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group form-focus">
                      <label>Şube Sayısı<span class="text-danger">*</span></label>
                      <input type="number" class="form-control floating" v-model="numberOfBranches">
                      <label class="focus-label">Şube Sayısı</label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group form-focus">
                      <label>Teknisyen Sayısı<span class="text-danger">*</span></label>
                      <input type="number" class="form-control floating" v-model="numberOfTechnicians">
                      <label class="focus-label">Teknisyen Sayısı</label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group form-focus">
                      <label>Ad<span class="text-danger">*</span></label>
                      <input type="text" class="form-control floating" v-model="name">
                      <label class="focus-label">Ad</label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group form-focus">
                      <label>Soyad<span class="text-danger">*</span></label>
                      <input type="text" class="form-control floating" v-model="surname">
                      <label class="focus-label">Soyad</label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group form-focus">
                      <label>E-Posta<span class="text-danger">*</span></label>
                      <input type="text" class="form-control floating" v-model="email">
                      <label class="focus-label">E-Posta</label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group form-focus">
                      <label>Telefon<span class="text-danger">*</span></label>
                      <input type="text" class="form-control floating" v-model="phone">
                      <label class="focus-label">Telefon</label>
                    </div>
                  </div>
                  <div class="col-md-12 text-end">
                    <div class="form-group form-focus mb-0">
                      <button type="submit" class="btn back-btn">İptal</button>
                      <button type="submit" value="Submit" class="btn btn-primary next-btn">Başvuru Yap</button>
                    </div>
                  </div>
                  
                </div>
              </form>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import axios from "axios";
const appData = {
  todolist: []
}
export default {
  name: 'App',
  data() {
    return appData;
  },
  mounted: function() {
  },
  methods: {
    sendItem: sendItem,
  }
}


async function sendItem() {
  await axios.post(axios.defaults.baseURL + "/api/v1/expertise-services-candidate/apply",
      {
        service_name: this.techServiceName,
        business_type: this.businessType,
        address: this.address,
        number_of_branches: this.numberOfBranches,
        number_of_technicians: this.numberOfTechnicians,
        name: this.name,
        surname: this.surname,
        email: this.email,
        phone_number: this.phone
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
  ).then((response) => {
    this.thumbnailUrl = response.data.screenshot;
  })
      .catch((error) => {
        window.alert(`The API returned an error: ${error}`);
      });
}

</script>