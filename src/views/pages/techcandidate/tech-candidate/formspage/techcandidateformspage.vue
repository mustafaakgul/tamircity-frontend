<template>
  <section class="booking-form-section">
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-xl-8 col-lg-12 col-md-12">
          <div class="booking-steps">
           Teknik Servis Başvuru Formu
          </div>
          <div class="booking-details">
              <form action="booking-wallet">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group form-focus">
                      <label>Teknik Servis Adı<span class="text-danger">*</span></label>
                      <input type="text" class="form-control floating" v-model="$store.state.application.techServiceName">
                      <label class="focus-label">Teknik Servis Adı</label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group form-focus">
                      <label>İşletme Türü<span class="text-danger">*</span></label>
                      <input type="text" class="form-control floating" v-model="$store.state.application.businessType">
                      <label class="focus-label">İşletme Türü</label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group form-focus">
                      <label>Adres <span class="text-danger">*</span></label>
                      <input type="text" class="form-control floating" v-model="$store.state.application.address">
                      <label class="focus-label">Adres</label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group form-focus">
                      <label>Şube Sayısı<span class="text-danger">*</span></label>
                      <input type="text" class="form-control floating" v-model="$store.state.application.numberOfBranches">
                      <label class="focus-label">Şube Sayısı</label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group form-focus">
                      <label>Teknisyen Sayısı<span class="text-danger">*</span></label>
                      <input type="text" class="form-control floating" v-model="$store.state.application.numberOfTechnicians">
                      <label class="focus-label">Teknisyen Sayısı</label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group form-focus">
                      <label>Ad<span class="text-danger">*</span></label>
                      <input type="text" class="form-control floating" v-model="$store.state.application.name">
                      <label class="focus-label">Ad</label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group form-focus">
                      <label>Soyad<span class="text-danger">*</span></label>
                      <input type="text" class="form-control floating" v-model="$store.state.application.surname">
                      <label class="focus-label">Soyad</label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group form-focus">
                      <label>E-Posta<span class="text-danger">*</span></label>
                      <input type="text" class="form-control floating" v-model="$store.state.application.email">
                      <label class="focus-label">E-Posta</label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group form-focus">
                      <label>Telefon<span class="text-danger">*</span></label>
                      <input type="text" class="form-control floating" v-model="$store.state.application.phone">
                      <label class="focus-label">Telefon</label>
                    </div>
                  </div>
                  <div class="col-md-12 text-end">
                    <div class="form-group form-focus mb-0">
                      <button type="submit" class="btn back-btn">İptal</button>
                      <button type="submit" class="btn btn-primary next-btn" @click="saveApplication()">Başvuru Yap</button>
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

<Script>
import Vue from "vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["saveApplication"]),
  },
};
</Script>