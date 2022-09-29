<template>
<!-- Guide Settings -->
<div class="row">
    <div class="col-lg-3 col-md-12 theiaStickySidebar">
        <div class="stickysidebar">
            <div class="sidebar-inner sidebar-sticky">
                <div id="sidebar-menu" class="sidebar-menu sidebar-body settings-box">
                    <ul>
                        <li>
                            <a href="#basic_settings" class="active">Temel Bilgiler <i class="feather-chevron-right"></i></a>
                        </li>
                        <li>
                            <a href="#guide_details">Teknik Servis Detayı <i class="feather-chevron-right"></i></a>
                        </li>
                        <li>
                            <a href="#document_details">Döküman Yükleme <i class="feather-chevron-right"></i></a>
                        </li>
                        <li>
                            <a href="#address_details">Adres Bilgileri <i class="feather-chevron-right"></i></a>
                        </li>
                        <li>
                            <a href="#additional_details">Ek Detaylar <i class="feather-chevron-right"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-9 col-md-12">
        <div class="card settings-card mb-0">
            <div class="card-body p-0" id="basic_settings">
                <form method="POST" @submit.prevent="updateProfile()">
                    <div class="form-group mb-0 d-flex align-items-center">
                        <div class="settings-upload settings-upload-img mb-0">
                            <img src="../../../../assets/img/upload-img.png" alt="" id="imagepreview">
                        </div>
                        <div class="settings-upload-info">
                            <h5>Jeffrey Akridge</h5>
                            <p>Max file size is 20mb</p>
                            <div class="settings-upload-btn">
                                <input type="file" accept="image/*" name="image" class="hide-input image-upload">
                                <label for="file" class="file-upload">Fotoğraf Yükle</label><span class="text-danger">*</span>
                            </div>
                        </div>
                    </div>
                    <div class="settings-info">
                        <div class="row align-items-center">
                          <div class="col-md-12">
                            <div class="form-group form-focus">
                              <label>İşletme Adı<span class="text-danger">*</span></label>
                              <input type="text" class="form-control floating" v-model="profile.ServiceName">
                              <label class="focus-label">İşletme Adı</label>
                            </div>
                          </div>
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <label>Ad<span class="text-danger">*</span></label>
                                    <input type="text" class="form-control floating" v-model="profile.Name">
                                    <label class="focus-label">Ad</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <label>Soyad <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control floating" v-model="profile.Surname">
                                    <label class="focus-label">Soyad</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <label>E-Posta <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control floating" v-model="profile.Email">
                                    <label class="focus-label">E-Posta</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <label>Telefon Numarası<span class="text-danger">*</span></label>
                                    <input type="text" class="form-control floating" v-model="profile.PhoneNumber">
                                    <label class="focus-label">Telefon Numarası</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="settings-info">
                        <div class="settings-title" id="guide_details">
                            <h5 class="settings-sub-title">Teknik Servis Detayı</h5>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Doğum Tarihi <span class="text-danger">*</span></label>
                                    <vue-select :options="Birth" />
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label>Hakkımızda</label>
                                    <textarea class="form-control" v-model="profile.About"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="settings-info" id="document_details">
                        <div class="settings-title">
                            <h5 class="settings-sub-title">Döküman Yükleme</h5>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group form-focus">
                                    <label>Döküman Çeşitleri <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control floating">
                                    <label class="focus-label">Pasaport</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <div class="relative-form">
                                        <span>Pasaport Numarası </span>
                                        <label class="relative-file-upload">
                                            Yükle <input type="file">
                                        </label>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="settings-info" id="address_details">
                        <div class="settings-title">
                            <h5 class="settings-sub-title">Adres Bilgileri</h5>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label>Adres Alanı</label>
                                    <textarea class="form-control" v-model="profile.Address"></textarea>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <div class="form-group" >
                                        <vue-select :options="İl" />
                                    </div> 
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <div class="form-group">
                                        <vue-select :options="İlçe" />
                                    </div> 
                                </div>
                            </div>
                            <div class="col-md-4">
                              <div class="form-group">
                                <div class="form-group">
                                  <vue-select :options="Mahalle" />
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div class="settings-info" id="additional_details">
                        <div class="settings-title">
                            <h5 class="settings-sub-title">Ek Detaylar</h5>
                        </div>
                        <!--<div class="row">
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <label>Experience <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control floating">
                                    <label class="focus-label">Less Than a month</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label> Languages Speak</label>
                                    <vue-select :options="Language" />
                                </div>
                            </div>
                        </div>
                      <div class="row">
                          <div class="col-md-12">
                              <div class="form-group">
                                  <label class="mb-0">Language Test</label>
                              </div>
                          </div>
                      </div>
                      <div class="row align-items-center">
                          <div class="col-lg-3 col-md-6">
                              <div class="form-group">
                                  <div class="language-box">
                                      <div class="language-details text-center">
                                          <img src="../../../../assets/img/icons/english.png" alt="" class="img-fluid">
                                          <h4>English</h4>
                                          <div class="language-btn-groups">
                                              <a href="javascript:void(0);" class="result-success me-1">View Details</a>
                                              <a href="javascript:void(0);" class="result-success">Pass</a>
                                          </div>
                                          <span><i class="fas fa-check-circle text-success"></i></span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-3 col-md-6">
                              <div class="form-group">
                                  <div class="language-box">
                                      <div class="language-details text-center">
                                          <img src="../../../../assets/img/icons/turky.png" alt="" class="img-fluid">
                                          <h4>Türkçe</h4>
                                          <div class="language-btn-groups">
                                              <a href="javascript:void(0);" class="result-warning me-1">Run Test</a>
                                              <a href="javascript:void(0);" class="result-success">View Details</a>
                                          </div>
                                          <span><i class="fas fa-check-circle text-success"></i></span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-3 col-md-6">
                              <div class="form-group">
                                  <div class="language-box">
                                      <div class="language-details text-center">
                                          <img src="../../../../assets/img/icons/swedish.png" alt="" class="img-fluid">
                                          <h4>বাংলা</h4>
                                          <div class="language-btn-groups">
                                              <a href="javascript:void(0);" class="result-warning me-1">Run Test</a>
                                              <a href="javascript:void(0);" class="result-success">View Details</a>
                                          </div>
                                          <span><i class="fas fa-check-circle text-success"></i></span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-3 col-md-6">
                              <div class="form-group">
                                  <div class="language-main-btn">
                                      <a href="javascript:void(0);" class="btn">
                                          <img src="../../../../assets/img/icons/language-icon.png" alt="" class="me-2"> Language Verified
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>-->
                      <div class="row">
                          <div class="col-md-6">
                              <div class="form-group">
                                  <label>Ödeme Seçenekleri</label>
                                  <vue-select :options="Botswanian" />
                              </div>
                          </div>
                          <div class="col-md-6">
                              <div class="form-group">
                                  <label>Sertifikalar</label>
                                  <input type="text" class="form-control">
                              </div>
                          </div>
                          <div class="col-md-12">
                              <div class="form-group">
                                    <label>Banka Hesap Bilgileri</label>
                              </div>
                          </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Banka</label>
                            <input type="text" class="form-control">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label> İban</label>
                            <input type="text" class="form-control">
                          </div>
                        </div>
                      </div>
                      <div class="form-group mb-0 save-changes-btn float-end">
                            <button type="submit" value="Submit" class="btn btn-primary">Kaydet</button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </div>
</div>
<!-- /Guide Settings -->
</template>

<script>
    import Vue from 'vue'
    import axios from "axios";


    export default {
      //name: 'ProfileSettings',
       data() {
        return {
          profile: {},
          Botswanian: ["Botswanian Dollar", "$", "₹", "£", "€"],
          Language: ["English", "Russian", "Arabic", "Italian"],
          Country: ["Select Country", "Germany", "Romania", "Canada", "America"],
          City: ["Select City", "Frankfurt", "Bucharest", "Toronto", "Newyork"],
          Birth: ["Select Date", "August 13, 2022", "Septemper 08, 2022", "October 30, 2022", "December 12, 2022"]
        }
        },
        methods: {
          getProfile: getProfile,
          updateProfile: updateProfile,
        },
        components: {

        },
        mounted() {
          $('#sidebar-menu ul li a').click(function() {
               var tghsh = $(this).attr('href').substring(1);
               var headerHeight = $('.sidebar-menu').outerHeight();
               var winwid = $(window).width();
               var doffset = $('#'+tghsh).offset().top-110;
               var doffset1 = $('#'+tghsh).offset().top-300;
               if(winwid <= 991) {
                   doffset1 -= headerHeight;
               $('html, body').animate({scrollTop:doffset1},700);
               return false;
               }
               $('html, body').animate({scrollTop:doffset},700);
               return false;
          });
          this.getProfile();
        }
    }

    function getProfile() {
      axios.get(
          "http://localhost:8888/api/v1/technical-services/2",
          {
            headers: {
              "Content-Type": "application/json",
              //"Authorization": "Bearer " + localStorage.getItem("token")
            }
          }
      ).then(
          response => {
            console.log(response.data.data);
            this.profile = response.data.data;
          }
      )
    }

    async function updateProfile() {
      await axios.put("http://localhost:8888/api/v1/technical-services/2",
          {
             service_name: this.profile.ServiceName,
             name: this.profile.Name,
             surname: this.profile.Surname,
             email: this.profile.Email,
             phone_number: this.profile.PhoneNumber,
             about: this.profile.About,
             address: this.profile.Address
          },
          {
            headers: {
              "Content-Type": "application/json",
              //"Authorization": "Bearer " + localStorage.getItem("token")
            }
          }).then((response) => {
              console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    }
</script>