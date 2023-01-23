<template>
  <form method="POST" @submit.prevent="requestExpertiseWatchInfo()">
    <div class="banner-wrapper">
      <div class="container">
        <section class="guides-section">
          <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-12 col-md-12">
              <div class="row ">
                <div class="col-md-12">
                  <div class="questions-card">
                    <div class="questions-header">
                      <h2 class="mb-0 ">Akıllı Saat Ekspertiz Formu</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center card answer-card">
                <div class="col-lg-12 col-md-12">
                  <div class="settings-info">
                    <div class="row">
                      <div class="col-md-12">
                        <h3 class="mb-3 mt-1">Genel Bilgiler</h3>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <div class="col-md-6">
                        <div class="form-group input-group-sm">
                          <label>Marka <span class="text-danger">*</span></label>
                          <vue-select :options="brand" id="inputGroup-sizing-sm"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Ürün Ailesi  <span class="text-danger">*</span></label>
                          <vue-select :options="productfamily" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group form-focus">
                          <label>Garanti Süresi <span class="text-danger">*</span></label>
                          <input type="number" class="form-control floating" v-model="guaranteeTermModel">
                          <label class="focus-label">1-24 aya kadar</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Renk<span class="text-danger">*</span></label>
                          <vue-select :options="colors" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="custom-control-gender">Fatura <span class="text-danger">*</span></label>
                              <div class="custom-control-box">
                                <div class="custom-control custom-radios custom-control-inline">
                                  <input class="custom-control-input" id="invoiceModeltrue" type="radio" v-model="invoiceModel" :value=true>
                                  <label class="custom-control-label" for="invoiceModeltrue">Var</label>
                                </div>
                                <div class="custom-control custom-radios custom-control-inline">
                                  <input class="custom-control-input" id="invoiceModelfalse" type="radio" v-model="invoiceModel" :value=false>
                                  <label class="custom-control-label" for="invoiceModelfalse">Yok</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="custom-control-gender">Kutu <span class="text-danger">*</span></label>
                              <div class="custom-control-box">
                                <div class="custom-control custom-radios custom-control-inline">
                                  <input class="custom-control-input" id="boxModeltrue" type="radio" v-model="boxModel" :value=true>
                                  <label class="custom-control-label" for="boxModeltrue">Var</label>
                                </div>
                                <div class="custom-control custom-radios custom-control-inline">
                                  <input class="custom-control-input" id="boxModelfalse" type="radio" v-model="boxModel" :value=false>
                                  <label class="custom-control-label" for="boxModelfalse">Yok</label>
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
              <div class="row justify-content-center card answer-card">
                <div class="col-lg-12 col-md-12">
                  <div class="settings-info">
                    <div class="row">
                      <div class="col-md-12">
                        <h3 class="mb-3 mt-1">Cihazın Kozmetik Durumu</h3>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <div class="relative-form">
                              <span>Cihazın Kozmetik Durumu</span>
                              <label class="relative-file-upload">
                                Yükle<input type="file">
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center card answer-card">
                <div class="col-lg-12 col-md-12">
                  <div class="settings-info">
                    <div class="row">
                      <div class="col-md-12">
                        <h3 class="mb-3 mt-1">Cihaz Özellikleri</h3>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Ekran Şekli<span class="text-danger">*</span></label>
                          <vue-select :options="displayshape" v-model="screenTypeModel"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>İşletim Sistemi <span class="text-danger">*</span></label>
                          <vue-select :options="operatingsystem" v-model="osTypeModel"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group form-focus">
                          <label>İşlemci Frekansı<span class="text-danger">*</span></label>
                          <input type="text" class="form-control floating">
                          <label class="focus-label">1 inç-2 inç</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group form-focus">
                          <label>Bellek (RAM)<span class="text-danger">*</span></label>
                          <input type="text" class="form-control floating">
                          <label class="focus-label">16MB-2048MB</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group form-focus">
                              <label>Ekran Çözünürlüğü<span class="text-danger">*</span></label>
                              <input type="text" class="form-control floating">
                              <label class="focus-label">190-500/200-600 piksel</label>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group form-focus">
                              <label>Ekran Boyutu<span class="text-danger">*</span></label>
                              <input type="text" class="form-control floating">
                              <label class="focus-label">1 inç-2 inç</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group form-focus">
                          <label>CPU Frekansı<span class="text-danger">*</span></label>
                          <input type="text" class="form-control floating">
                          <label class="focus-label">1GHz-2GHz</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group form-focus">
                          <label>Batarya Kapasitesi <span class="text-danger">*</span></label>
                          <input type="text" class="form-control floating">
                          <label class="focus-label">180mAh-790mAh</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Mikrofon <span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="microphoney" type="radio" v-model="microphoneModel" :value=true>
                              <label class="custom-control-label" for="microphoney">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="microphonez" type="radio" v-model="microphoneModel" :value=false>
                              <label class="custom-control-label" for="microphonez">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Uyumlu İşletim Sistemi (Checkbox) <span class="text-danger">*</span></label>

                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <label class="custom_check w-100">
                                <input type="checkbox" name="location">
                                <span class="checkmark"></span> Android
                              </label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <label class="custom_check w-100">
                                <input type="checkbox" name="location">
                                <span class="checkmark"></span> iOS
                              </label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <label class="custom_check w-100">
                                <input class="custom-control-input" type="checkbox" name="location">
                                <span class="checkmark"></span> HarmonyOS
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Wi-Fi<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="wifiy" type="radio" v-model="wifiModel" :value=true>
                              <label class="custom-control-label" for="wifiy">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="wifiz" type="radio" v-model="wifiModel" :value=false>
                              <label   for="wifiz">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Hoparlör<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="speakery" type="radio" v-model="speakerModel" :value=true>
                              <label class="custom-control-label" for="speakery">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="speakerz" type="radio" v-model="speakerModel" :value=false>
                              <label class="custom-control-label" for="speakerz">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">SIM Desteği<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="simy" type="radio" v-model="simSupportModel" :value=true>
                              <label class="custom-control-label" for="simy">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="simn" type="radio" v-model="simSupportModel" :value=false>
                              <label class="custom-control-label" for="simn">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Toza Dayanıklılık<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="dustprofy" type="radio" v-model="dustProofModel" :value=true>
                              <label class="custom-control-label" for="dustprofy">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="dustprofn" type="radio" v-model="dustProofModel" :value=false>
                              <label class="custom-control-label" for="dustprofn">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">NFC <span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="nfcy" type="radio" v-model="nfcModel" :value=true>
                              <label class="custom-control-label" for="nfcy">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="nfcn" type="radio" v-model="nfcModel" :value=false>
                              <label class="custom-control-label" for="nfcn">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center card answer-card">
                <div class="col-lg-12 col-md-12">
                  <div class="settings-info">
                    <div class="row">
                      <div class="col-md-12">
                        <h3 class="mb-3 mt-1">Çalışma Durumu</h3>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Ekranda kırıklar mevcut mu ? <span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="01" type="radio" v-model="isScreenHasBrokenProblemModel" :value=true>
                              <label class="custom-control-label" for="01">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="02" type="radio" v-model="isScreenHasBrokenProblemModel" :value=false>
                              <label class="custom-control-label" for="02">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Ekran üzerinde leke veya deformasyon mevcut mu ? <span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="03" type="radio" v-model="isScreenHasObscurationProblemModel" :value=true>
                              <label class="custom-control-label" for="03">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="04" type="radio" v-model="isScreenHasObscurationProblemModel" :value=false>
                              <label class="custom-control-label" for="04">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Dokunmatik ekran sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="050" type="radio" v-model="isTouchScreenHasProblemModel" :value=true>
                              <label class="custom-control-label" for="050">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="060" type="radio" v-model="isTouchScreenHasProblemModel" :value=false>
                              <label class="custom-control-label" for="060">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Ekranda ölü piksel hatası var mı ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="06" type="radio" v-model="isScreenHasDeadPixelPixelModel" :value=true>
                              <label class="custom-control-label" for="06">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="07" type="radio" v-model="isScreenHasDeadPixelPixelModel" :value=false>
                              <label class="custom-control-label" for="07">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Cihazda herhangi bir kasa arızası var mı ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="08" type="radio" v-model="isDeviceHasCaseProblemModel" :value=true>
                              <label class="custom-control-label" for="08">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="09" type="radio" v-model="isDeviceHasCaseProblemModel" :value=false>
                              <label class="custom-control-label" for="09">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Hoperlör sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="14" type="radio" v-model="isSpeakerHasProblemModel" :value=true>
                              <label class="custom-control-label" for="14">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="15" type="radio" v-model="isSpeakerHasProblemModel" :value=false>
                              <label class="custom-control-label" for="15">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Açma Kapama tuşu sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="20" type="radio" v-model="isPowerButtonHasProblemModel" :value=true>
                              <label class="custom-control-label" for="20">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="21" type="radio" v-model="isPowerButtonHasProblemModel" :value=false>
                              <label class="custom-control-label" for="21">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Cihaz şarj soketinde deformasyon veya arıza mevcut mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="18" type="radio" v-model="isBatterySocketHasProblemModel" :value=true>
                              <label class="custom-control-label" for="18">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="19" type="radio" v-model="isBatterySocketHasProblemModel" :value=false>
                              <label class="custom-control-label" for="19">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Cihazda donma veya yavaşlama problemi var mı ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="26" type="radio" v-model="isDeviceHasFreezingProblemModel" :value=true>
                              <label class="custom-control-label" for="26">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="27" type="radio" v-model="isDeviceHasFreezingProblemModel" :value=false>
                              <label class="custom-control-label" for="27">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Bluetooth özelliği sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="28" type="radio" v-model="isBluetoothHasProblemModel" :value=true>
                              <label class="custom-control-label" for="28">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="29" type="radio" v-model="isBluetoothHasProblemModel" :value=false>
                              <label class="custom-control-label" for="29">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Wi-Fi bağlantısı sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="30" type="radio" v-model="isWifiHasProblemModel" :value=true>
                              <label class="custom-control-label" for="30">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="31" type="radio" v-model="isWifiHasProblemModel" :value=false>
                              <label class="custom-control-label" for="31">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Mikrofon sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="32" type="radio" v-model="isMicrophoneHasProblemModel" :value=true>
                              <label class="custom-control-label" for="32">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="33" type="radio" v-model="isMicrophoneHasProblemModel" :value=false>
                              <label class="custom-control-label" for="33">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Cihazda şebeke problemi var mı ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="34" type="radio" v-model="isDeviceHasCellularProblemModel" :value=true>
                              <label class="custom-control-label" for="34">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="35" type="radio" v-model="isDeviceHasCellularProblemModel" :value=false>
                              <label class="custom-control-label" for="35">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center card answer-card  ">
                <div class="col-lg-12 col-md-12">
                  <div class="settings-info">
                    <div class="row">
                      <div class="col-md-12">
                        <h2 class="mb-3 mt-1">Cihaz ile İlgili Uzman Notları</h2>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <div class="col-md-12">
                        <div class="form-group form-focus">
                          <textarea class="form-control floating"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="guides-load-more">
                    <button href="javascript:void(0);" class="btn btn-primary me-3">İptal</button>
                    <button type="submit" value="Submit" class="btn btn-secondary me-3">Kaydet</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
const appData = {
  expertiseWatchInfo: []
}

export default {
  name: 'App',
  data() {
    return {
      brand: ["Xiaomi", "Samsung", " Apple", "Huawei"],
      productfamily: ["Apple Watch","Apple Watch Nike","Apple Watch Nike SE","Huawei Watch","Samsung Galaxy","Samsung Gear","Xiaomi Mi Watch","Xiaomi Redmi Watch","Xiaomi Watch"],
      displayshape: ["Dikdötgen","Kare","Daire"],
      operatingsystem: ["Android Wear","WatchOS","Tizen","HarmonyOS ","Huawei LiteOS"],
      colors: ["Kırmızı", "Siyah", "Gri", "Mor", "Mavi"],
      appData
    }
  },

  mounted: function () {

  },

  methods: {
    requestExpertiseWatchInfo: requestExpertiseWatchInfo
  }
}

async function requestExpertiseWatchInfo() {
  await axios.post(
      "http://127.0.0.1:8888/api/v1/expertise_watch_infos",
      {
        reservation_id : 2,
        invoice : this.invoiceModel,
        box : this.boxModel,
        guarantee_term : this.guaranteeTermModel,
        phone_color : this.phoneColorModel,
        microphone : this.microphoneModel,
        screen_size : this.screenSizeModel,
        memory : this.memoryModel,
        screen_type : this.screenTypeModel,
        os_type : this.osTypeModel,
        os_type_compatiple : this.osTypeCompatipleModel,
        screen_resolution : this.screenResolutionModel,
        cpu_frequency : this.cpuFrequencyModel,
        battery_capacity : this.batteryCapacityModel,
        wifi : this.wifiModel,
        speaker : this.speakerModel,
        sim_support : this.simSupportModel,
        dust_proof :this.dustProofModel,
        nfc : this.nfcModel,
        is_screen_has_broken_problem : this.isScreenHasBrokenProblemModel,
        is_screen_has_obscuration_problem: this.isScreenHasObscurationProblemModel,
        is_touch_screen_has_problem: this.isTouchScreenHasProblemModel,
        is_screen_has_dead_pixel_pixel: this.isScreenHasDeadPixelPixelModel,
        is_device_has_case_problem: this.isDeviceHasCaseProblemModel,
        is_speaker_has_problem: this.isSpeakerHasProblemModel,
        is_power_button_has_problem: this.isPowerButtonHasProblemModel,
        is_battery_socket_has_problem: this.isBatterySocketHasProblemModel,
        is_device_has_freezing_problem: this.isDeviceHasFreezingProblemModel,
        is_bluetooth_has_problem: this.isBluetoothHasProblemModel,
        is_wifi_has_problem: this.isWifiHasProblemModel,
        is_microphone_has_problem: this.isMicrophoneHasProblemModel,
        is_device_has_cellular_problem: this.isDeviceHasCellularProblemModel,
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
  ).then((response) => {
    this.thumbnailUrl = response.data.screenshot;
    console.log(response)
  }).catch((error) => {
    console.log(error)
  });
}
</script>

<style scoped>
.banner-wrapper {
  padding: 150px 0 0 !important;
}
</style>