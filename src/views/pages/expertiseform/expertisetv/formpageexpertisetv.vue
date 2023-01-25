<template>
  <form method="POST" @submit.prevent="requestExpertiseTVInfo()">
  <div class="banner-wrapper">
    <div class="container">
      <section class="guides-section">
        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-12 col-md-12">
            <div class="row ">
              <div class="col-md-12">
                <div class="questions-card">
                  <div class="questions-header">
                    <h2 class="mb-0 ">Televizyon Ekspertiz Formu</h2>
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
                      <div class="form-group form-focus">
                        <label>Model<span class="text-danger">*</span></label>
                        <input type="text" class="form-control floating">
                        <label class="focus-label">Model</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group form-focus">
                        <label>Garanti süresi<span class="text-danger">*</span></label>
                        <input type="text" class="form-control floating" v-model="guaranteeTermModel">
                        <label class="focus-label">1-24</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Garanti Türü<span class="text-danger">*</span></label>
                        <vue-select :options="guarantee" v-model="guaranteeTermTypeModel"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Renk<span class="text-danger">*</span></label>
                        <vue-select :options="color" v-model="colorModel"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="custom-control-gender">Fatura <span class="text-danger">*</span></label>
                            <div class="custom-control-box">
                              <div class="custom-control custom-radios custom-control-inline">
                                <input class="custom-control-input" id="billy" type="radio" v-model="invoiceModel" :value=true>
                                <label class="custom-control-label" for="billy">Var</label>
                              </div>
                              <div class="custom-control custom-radios custom-control-inline">
                                <input class="custom-control-input" id="billn" type="radio" v-model="invoiceModel" :value=false>
                                <label class="custom-control-label" for="billn">Yok</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="custom-control-gender">Kutu <span class="text-danger">*</span></label>
                            <div class="custom-control-box">
                              <div class="custom-control custom-radios custom-control-inline">
                                <input class="custom-control-input" id="boxy" type="radio" v-model="boxModel" :value=true>
                                <label class="custom-control-label" for="boxy">Var</label>
                              </div>
                              <div class="custom-control custom-radios custom-control-inline">
                                <input class="custom-control-input" id="boxn" type="radio" v-model="boxModel" :value=false>
                                <label class="custom-control-label" for="boxn">Yok</label>
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
                        <label>Panel Teknolojisi<span class="text-danger">*</span></label>
                        <vue-select :options="paneltechnology" v-model="panelTechnologyModel"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>İşletim Sistemi<span class="text-danger">*</span></label>
                        <vue-select :options="operatingsystem" v-model="osTypeModel"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Ekran Çözünürlüğü <span class="text-danger">*</span></label>
                        <vue-select :options="screenresolution" v-model="screenResolutionModel"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group form-focus">
                        <label>Ekran Boyutu<span class="text-danger">*</span></label>
                        <input type="text" class="form-control floating" v-model="screenSizeModel">
                        <label class="focus-label">19 inç(48 Ekran)-77 inç (195 Ekran)</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group form-focus">
                        <label>Ekran Yenileme Hızı <span class="text-danger">*</span></label>
                        <input type="text" class="form-control floating" v-model="refreshRateModel">
                        <label class="focus-label">... Hz.</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group form-focus">
                        <label>Çıkış Yılı<span class="text-danger">*</span></label>
                        <input type="text" class="form-control floating" v-model="releaseYearModel">
                        <label class="focus-label">2010-2023</label>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Smart TV<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="smarty" type="radio" v-model="smartTVModel" :value=true>
                            <label class="custom-control-label" for="smarty">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="smartn" type="radio" v-model="smartTVModel" :value=false>
                            <label class="custom-control-label" for="smartn">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Kavisli ekran  <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="screeny" type="radio" v-model="curvedScreenModel" :value=true>
                            <label class="custom-control-label" for="screeny">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="screenn" type="radio" v-model="curvedScreenModel" :value=false>
                            <label class="custom-control-label" for="screenn">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Dahili Uydu Alıcısı<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="satellitey" type="radio" v-model="internalSatalliteRecevierModel" :value=true>
                            <label class="custom-control-label" for="satellitey">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="satelliten" type="radio" v-model="internalSatalliteRecevierModel" :value=false>
                            <label class="custom-control-label" for="satelliten">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Ambilight<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="ambilighty" type="radio" v-model="ambilightModel" :value=true>
                            <label class="custom-control-label" for="ambilighty">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="ambilightn" type="radio" v-model="ambilightModel" :value=false>
                            <label class="custom-control-label" for="ambilightn">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">HDR<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="hdry" type="radio" v-model="hdrModel" :value=true>
                            <label class="custom-control-label" for="hdry">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="hdrn" type="radio" v-model="hdrModel" :value=false>
                            <label class="custom-control-label" for="hdrn">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Full Array<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="arrayy" type="radio" v-model="fullArrayModel" :value=true>
                            <label class="custom-control-label" for="arrayy">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="arrayn" type="radio" v-model="fullArrayModel" :value=false>
                            <label class="custom-control-label" for="arrayn">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">?Hafıza Kartı Desteği <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="memoryy" type="radio" :value=true>
                            <label class="custom-control-label" for="memoryy">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="memoryz" type="radio" :value=false>
                            <label class="custom-control-label" for="memoryz">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4 class="mb-3 mt-1">?Bağlantı/Arayüz</h4><hr>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">?Screen Share <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="ssy" type="radio" :value=true>
                            <label class="custom-control-label" for="ssy">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="ssn" type="radio" :value=false>
                            <label class="custom-control-label" for="ssn">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">WiFi<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="wifiy" type="radio" v-model="wifiModel" :value=true>
                            <label class="custom-control-label" for="wifiy">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="wifin" type="radio" v-model="wifiModel" :value=false>
                            <label class="custom-control-label" for="wifin">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">RF Girişi<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="rfy" type="radio" v-model="rfiInputModel" :value=true>
                            <label class="custom-control-label" for="rfy">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="rfn" type="radio" v-model="rfiInputModel" :value=false>
                            <label class="custom-control-label" for="rfn">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">LAN<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="lany" type="radio" v-model="lanModel" :value=true>
                            <label class="custom-control-label" for="lany">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="lann" type="radio" v-model="lanModel" :value=false>
                            <label class="custom-control-label" for="lann">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Kulaklık Çıkışı<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="eary" type="radio" v-model="headPhoneJackModel" :value=true>
                            <label class="custom-control-label" for="eary">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="earn" type="radio" v-model="headPhoneJackModel" :value=false>
                            <label class="custom-control-label" for="earn">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Bluetooth<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="bluetoothy" type="radio" v-model="bluetoothModel" :value=true>
                            <label class="custom-control-label" for="bluetoothy">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="bluetoothn" type="radio" v-model="bluetoothModel" :value=false>
                            <label class="custom-control-label" for="bluetoothn">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">HDMI Girişi<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="hdmıentery" type="radio" v-model="hdmiModel" :value=true>
                            <label class="custom-control-label" for="hdmıentery">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="hdmıentern" type="radio" v-model="hdmiModel" :value=false>
                            <label class="custom-control-label" for="hdmıentern">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">USB Girişi<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="usbentery" type="radio" v-model="usbModel" :value=true>
                            <label class="custom-control-label" for="usbentery">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="usbentern" type="radio" v-model="usbModel" :value=false>
                            <label class="custom-control-label" for="usbentern">Yok</label>
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
                        <label class="custom-control-gender">Ekranda bölgesel veya tamamen kararma var mı ? <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="01" type="radio" v-model="isScreenHasObscurationProblemModel" :value=true>
                            <label class="custom-control-label" for="01">Evet</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="02" type="radio" v-model="isScreenHasObscurationProblemModel" :value=false>
                            <label class="custom-control-label" for="02">Hayır</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Ekranda ölü piksel arızası var mı ? <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="03" type="radio" v-model="isScreenHasDeadPixelProblemModel" :value=true>
                            <label class="custom-control-label" for="03">Evet</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="04" type="radio" v-model="isScreenHasDeadPixelProblemModel" :value=false>
                            <label class="custom-control-label" for="04">Hayır</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Ekranda kırık/çatlak/leke var mı ?<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="06" type="radio" v-model="isScreenHasBrokenProblemModel" :value=true>
                            <label class="custom-control-label" for="06">Evet</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="07" type="radio" v-model="isScreenHasBrokenProblemModel" :value=false>
                            <label class="custom-control-label" for="07">Hayır</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Ekranda darbeye bağlı çökme var mı ?<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="08" type="radio" v-model="isScreenHasDownFallProblemModel" :value=true>
                            <label class="custom-control-label" for="08">Evet</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="09" type="radio" v-model="isScreenHasDownFallProblemModel" :value=false>
                            <label class="custom-control-label" for="09">Hayır</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Ekranda yatay ve dikey bant arızası var mı ?<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="10" type="radio" v-model="isScreenHasBandProblemModel" :value=true>
                            <label class="custom-control-label" for="10">Evet</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="11" type="radio" v-model="isScreenHasBandProblemModel" :value=false>
                            <label class="custom-control-label" for="11">Hayır</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Görüntüde donma var mı ?<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="05" type="radio" v-model="isScreenHasFreezingProblemModel" :value=true>
                            <label class="custom-control-label" for="05">Evet</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="06" type="radio" v-model="isScreenHasFreezingProblemModel" :value=false>
                            <label class="custom-control-label" for="06">Hayır</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Cihazda aşırı ısınma sorunu var mı ?<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="12" type="radio" v-model="isDeviceHasHighHeatProblemModel" :value=true>
                            <label class="custom-control-label" for="12">Evet</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="13" type="radio" v-model="isDeviceHasHighHeatProblemModel" :value=false>
                            <label class="custom-control-label" for="13">Hayır</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Cihaz çalışma esnasında normalin dışında sesler çıkarıyor mu ?<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="14" type="radio" v-model="isDeviceHasSoundProblemModel" :value=true>
                            <label class="custom-control-label" for="14">Evet</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="15" type="radio" v-model="isDeviceHasSoundProblemModel" :value=false>
                            <label class="custom-control-label" for="15">Hayır</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Dahili uydu alıcısı sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="16" type="radio" v-model="isDeviceHasInternalReceiverProblemModel" :value=true>
                            <label class="custom-control-label" for="16">Evet</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="17" type="radio" v-model="isDeviceHasInternalReceiverProblemModel" :value=false>
                            <label class="custom-control-label" for="17">Hayır</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Hoparlör sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="18" type="radio" v-model="isDeviceHasSpeakerProblemModel" :value=true>
                            <label class="custom-control-label" for="18">Evet</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="19" type="radio" v-model="isDeviceHasSpeakerProblemModel" :value=false>
                            <label class="custom-control-label" for="19">Hayır</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Screen Share sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="20" type="radio" v-model="isScreenShareHasProblemModel" :value=true>
                            <label class="custom-control-label" for="20">Evet</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="21" type="radio" v-model="isScreenShareHasProblemModel" :value=false>
                            <label class="custom-control-label" for="21">Hayır</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">WiFi sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="22" type="radio" v-model="isWifiHasProblemModel" :value=true>
                            <label class="custom-control-label" for="22">Evet</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="23" type="radio" v-model="isWifiHasProblemModel" :value=false>
                            <label class="custom-control-label" for="23">Hayır</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">RF Girişi sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="24" type="radio" v-model="isRfiInputHasProblemModel" :value=true>
                            <label class="custom-control-label" for="24">Evet</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="25" type="radio" v-model="isRfiInputHasProblemModel" :value=false>
                            <label class="custom-control-label" for="25">Hayır</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Ethernet girişi sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="26" type="radio" v-model="isEthernetHasProblemModel" :value=true>
                            <label class="custom-control-label" for="26">Evet</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="27" type="radio" v-model="isEthernetHasProblemModel" :value=false>
                            <label class="custom-control-label" for="27">Hayır</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Kulaklık Çıkışı sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="28" type="radio" v-model="isHeadPhoneJackHasProblemModel" :value=true>
                            <label class="custom-control-label" for="28">Evet</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="29" type="radio" v-model="isHeadPhoneJackHasProblemModel" :value=false>
                            <label class="custom-control-label" for="29">Hayır</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Bluetooth sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="30" type="radio" v-model="isBluetoothHasProblemModel" :value=true>
                            <label class="custom-control-label" for="30">Evet</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="31" type="radio" v-model="isBluetoothHasProblemModel" :value=false>
                            <label class="custom-control-label" for="31">Hayır</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">HDMI Girişleri sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="32" type="radio" v-model="isHdmiHasProblemModel" :value=true>
                            <label class="custom-control-label" for="32">Evet</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="33" type="radio" v-model="isHdmiHasProblemModel" :value=false>
                            <label class="custom-control-label" for="33">Hayır</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">USB Girişleri sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="34" type="radio" v-model="isUsbHasProblemModel" :value=true>
                            <label class="custom-control-label" for="34">Evet</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="35" type="radio" v-model="isUsbHasProblemModel" :value=false>
                            <label class="custom-control-label" for="35">Hayır</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Cihaz uzaktan kumandası sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="36" type="radio" v-model="isRemoteControlHasProblemModel" :value=true>
                            <label class="custom-control-label" for="36">Evet</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="37" type="radio" v-model="isRemoteControlHasProblemModel" :value=false>
                            <label class="custom-control-label" for="37">Hayır</label>
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
                      <h2 class="mb-3 mt-1">5- Cihaz ile İlgili Uzman Notları   </h2>
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
                  <a href="javascript:void(0);" class="btn btn-primary me-3">İptal</a>
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
import axios from 'axios';
const appData = {
  expertiseTVInfo: []
}

export default {
  name: 'App',
  data() {
    return {
      brand: ["Samsung", "LG", "Philips", "Vestel"," Sony"," Arçelik"," Altus"," Awox"," Axen","Beko","Digipol","Finlux","Fivo","Goldmaster","Grundig","Hi-Level","Hitachi","Jameson","JVC","Kamosonic","Luxor","Navitech ","Next","Nordmende","Panasonic","Premier","Profilo","Regal"," Rowell"," SEG"," Sharp"," Skytech","Sunny"," Techwood"," Telefox"," Telefunken "," Toshiba"," Woon"," Botech"," Redline"," Blaupunkt"," Daewoo"," Dijitsu"," DijiTv"," Dikom","Elton","Hello"," Keysmart"," Morio"," Nexon"," Olimpia"," Onvo"," PEAQ"," Practica"," Quax"," Saba","Sheen"," Strong"," TCL"," Telenova","Ventus"," Weston"," Xiaomi"],
      guarantee: ["Resmi Distribütör Garantili","Sony Eurasia Garantili","Arçelik Garantili","Axen Garantili","Beko Garantili","LG TR Garantili","Philips TR Garantili","Samsung TR Garantili","Vestel Garantili","Diğer"],
      color: ["Siyah","Beyaz","Gümüş","Pembe","Mavi","....","...."],
      screensize: ["2.3 inç","8 inç"],
      paneltechnology: ["Led TV","Lcd TV","Oled TV","Qled TV","OLED","NanoCell TV"],
      operatingsystem:["WebOS","Tizen","Android","Roku","Amazon Fire"],
      screenresolution: ["HD","Full HD","4K UHD","8K UHD"],

      preprocessormodel: ["Qualcomm","MediaTek","Samsung","HiSilicon"],
      preprocessorfrequency: ["0.5GHz","......","3.5GHz"],
      ram: ["2GB","4GB","...","18GB"],

      operatingsystemversion: ["Android 7.0 (Nougat)","Android 7.1 (Nougat)","Android 11 (Go Edition)","iOS 11"],
      numberprocessorcores: ["4","..","12"],
      cameraresolution: ["2MP",".....","200 MP"],
      frontcameraresolution: ["0-200 MP","..."],
      videorecordingresolution: ["4320p (Ultra HD) 8K","3384p (Ultra HD) 6K","2160p (Ultra HD) 4K"],
      fps: ["60 fps","30 fps","24 fps"],
      internalstorage: ["0-1024 GB"],
      maximummemorycardcapacity: ["0-1024 GB"],
      batterycapacity: ["batterycapacity2500mAh-7500mAh"],
      wififrequency: ["Wi-Fi 6 (802.11 a/b/g/n/ac/ax)","Wi-Fi 5 (802.11 a/b/g/n/ac)","Wi-Fi 4 (802.11 a/b/g/n)","Wi-Fi 4 (802.11 b/g/n)"],
      releaseyear: ["2023","2022","2021","2019","2018","2017","2016","2017","2016"],
      appData
    }
  },

  mounted: function () {

  },

  methods: {
    requestExpertiseTVInfo: requestExpertiseTVInfo
  }
}

async function requestExpertiseTVInfo() {
  await axios.post(
      "http://157.230.124.187:8888/api/v1/expertise_tv_infos",
      {
        reservation_id : 1,
        invoice : this.invoiceModel,
        box : this.boxModel,
        guarantee_term : this.guaranteeTermModel,
        guarantee_term_type : this.guaranteeTermTypeModel,
        color : this.colorModel,
        smart_tv : this.smartTVModel,
        panel_technology : this.panelTechnologyModel,
        curved_screen : this.curvedScreenModel,
        os_type : this.osTypeModel,
        internal_satallite_recevier : this.internalSatalliteRecevierModel,
        screen_size : this.screenSizeModel,
        ambilight : this.ambilightModel,
        hdr : this.hdrModel,
        full_array : this.fullArrayModel,
        screen_resolution : this.screenResolutionModel,
        refresh_rate : this.refreshRateModel,
        release_year : this.releaseYearModel,
        screen_share : this.screenShareModel,
        wifi : this.wifiModel,
        rfi_input : this.rfiInputModel,
        lan : this.lanModel,
        head_phone_jack : this.headPhoneJackModel,
        bluetooth : this.bluetoothModel,
        hdmi : this.hdmiModel,
        usb : this.usbModel,
        is_screen_has_obscuration_problem : this.isScreenHasObscurationProblemModel,
        is_screen_has_dead_pixel_problem : this.isScreenHasDeadPixelProblemModel,
        is_screen_has_broken_problem : this.isScreenHasBrokenProblemModel,
        is_screen_has_down_fall_problem : this.isScreenHasDownFallProblemModel,
        is_screen_has_band_problem : this.isScreenHasBandProblemModel,
        is_screen_has_freezing_problem : this.isScreenHasFreezingProblemModel,
        is_device_has_high_heat_problem : this.isDeviceHasHighHeatProblemModel,
        is_device_has_sound_problem : this.isDeviceHasSoundProblemModel,
        is_device_has_internal_receiver_problem : this.isDeviceHasInternalReceiverProblemModel,
        is_device_has_speaker_problem : this.isDeviceHasSpeakerProblemModel,
        is_screen_share_has_problem : this.isScreenShareHasProblemModel,
        is_wifi_has_problem : this.isWifiHasProblemModel,
        is_rfi_input_has_problem : this.isRfiInputHasProblemModel,
        is_ethernet_has_problem : this.isEthernetHasProblemModel,
        is_head_phone_jack_has_problem : this.isHeadPhoneJackHasProblemModel,
        is_bluetooth_has_problem : this.isBluetoothHasProblemModel,
        is_hdmi_has_problem : this.isHdmiHasProblemModel,
        is_usb_has_problem : this.isUsbHasProblemModel,
        is_remote_control_has_problem : this.isRemoteControlHasProblemModel,
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

<style scope>
.banner-wrapper {
  padding: 150px 0 0 !important;
}
</style>