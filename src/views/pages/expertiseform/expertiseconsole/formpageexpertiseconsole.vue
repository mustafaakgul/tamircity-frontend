<template>
  <form method="POST" @submit.prevent="requestExpertiseConsoleInfo()">
    <div class="banner-wrapper">
      <div class="container">
        <section class="guides-section">
          <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-12 col-md-12">
              <div class="row ">
                <div class="col-md-12">
                  <div class="questions-card">
                    <div class="questions-header">
                      <h2 class="mb-0 ">Oyun Konsolu Ekspertiz Formu</h2>
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
                          <label>Model <span class="text-danger">*</span></label>
                          <vue-select :options="model" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group form-focus">
                          <label>Garanti Süresi <span class="text-danger">*</span></label>
                          <input type="text" class="form-control floating">
                          <label class="focus-label">0 GB-2048 GB</label>
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
                          <label>Platform <span class="text-danger">*</span></label>
                          <vue-select :options="platform" v-model="platformModel"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group form-focus">
                          <label>Depolama Kapasitesi <span class="text-danger">*</span></label>
                          <input type="text" class="form-control floating">
                          <label class="focus-label">0 GB-2048 GB</label>
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
                          <label>İşlemci Modeli <span class="text-danger">*</span></label>
                          <vue-select :options="preprocessormodel" v-model="cpuModelModel"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Fps Değeri<span class="text-danger">*</span></label>
                          <vue-select :options="fps" v-model="fpsValueModel"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Bellek (Ram) <span class="text-danger">*</span></label>
                          <vue-select :options="preprocessorfrequency" v-model="ramModel"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Bellek Tipi<span class="text-danger">*</span></label>
                          <vue-select :options="ramtype" v-model="ramTypeModel"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Oyun Çözünürlüğü <span class="text-danger">*</span></label>
                          <vue-select :options="gamesolution" v-model="gameResolutionModel"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Video Çözünürlüğü <span class="text-danger">*</span></label>
                          <vue-select :options="videosolution" v-model="videoResolutionModel"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Ağ Bağlantı Türü <span class="text-danger">*</span></label>
                          <vue-select :options="networkconnectiontype" v-model="networkTypeModel"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>?Video Kayıt Çözünürlüğü <span class="text-danger">*</span></label>
                          <vue-select :options="videorecordingresolution"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group form-focus">
                          <label>Ethernet Hızı<span class="text-danger">*</span></label>
                          <input type="text" class="form-control floating">
                          <label class="focus-label">100Mbit-1000Mbit</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>HDMI Standardı<span class="text-danger">*</span></label>
                          <vue-select :options="hdmi" v-model="hdmiStandartModel"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>USB Versiyonu <span class="text-danger">*</span></label>
                          <vue-select :options="usbversion" v-model="usbVersionModel"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Bluetooth Versiyonu<span class="text-danger">*</span></label>
                          <vue-select :options="bluetoothversion" v-model="bluetoothModel"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Oyun Kumandası Adedi<span class="text-danger">*</span></label>
                          <vue-select :options="controllerquantity" v-model="controllerNumberModel"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Oyun Adedi<span class="text-danger">*</span></label>
                          <vue-select :options="gamequantity" v-model="gameNumberModel"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>USB Giriş Adedi <span class="text-danger">*</span></label>
                          <vue-select :options="usbquantity" v-model="usbInputNumberModel"/>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">HDR Desteği <span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="hdry" type="radio" v-model="hdrSupportModel" :value=true>
                              <label class="custom-control-label" for="hdry">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="hdrz" type="radio" v-model="hdrSupportModel" :value=false>
                              <label class="custom-control-label" for="hdrz">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Ethernet <span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="ethernety" type="radio" v-model="ethernetModel" :value=true>
                              <label class="custom-control-label" for="recognitiony">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="ethernetn" type="radio" v-model="ethernetModel" :value=false>
                              <label class="custom-control-label" for="ethernetn">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">USB Girişi<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="usby" type="radio" v-model="usbInputModel" :value=true>
                              <label class="custom-control-label" for="usby">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="usbz" type="radio" v-model="usbInputModel" :value=false>
                              <label class="custom-control-label" for="usbz">Yok</label>
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
                              <input class="custom-control-input" id="bluetoothz" type="radio" v-model="bluetoothModel" :value=false>
                              <label class="custom-control-label" for="bluetoothz">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Sesli Kontrol<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="voicecontroly" type="radio" v-model="voiceSupportModel" :value=true>
                              <label class="custom-control-label" for="voicecontroly">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="voicecontrolz" type="radio" v-model="voiceSupportModel" :value=false>
                              <label class="custom-control-label" for="voicecontrolz">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Oyun Kumandası<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="gamecontrollery" type="radio" v-model="controllerModel" :value=true>
                              <label class="custom-control-label" for="gamecontrollery">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="gamecontrollerz" type="radio" v-model="controllerModel" :value=false>
                              <label class="custom-control-label" for="gamecontrollerz">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Oyun<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="gamey" type="radio" v-model="gameModel" :value=true>
                              <label class="custom-control-label" for="gamey">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="gamez" type="radio" v-model="gameModel" :value=false>
                              <label class="custom-control-label" for="gamez">Yok</label>
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
                          <label class="custom-control-gender">Cihazda kutusunda veya kumandasında kırık/çizik/deformasyonlar mevcut mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="01" type="radio" v-model="isBoxHasHasProblemModel" :value=true>
                              <label class="custom-control-label" for="01">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="02" type="radio" v-model="isBoxHasHasProblemModel" :value=false>
                              <label class="custom-control-label" for="02">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Cihaz kutusunda ışık arızası mevcut mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="03" type="radio" v-model="isBoxHasLightProblemModel" :value=true>
                              <label class="custom-control-label" for="03">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="04" type="radio" v-model="isBoxHasLightProblemModel" :value=false>
                              <label class="custom-control-label" for="04">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Cihaz kumanda kolunda ışık arızası mevcut mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="06" type="radio" v-model="isControllerHasLightProblemModel" :value=true>
                              <label class="custom-control-label" for="06">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="07" type="radio" v-model="isControllerHasLightProblemModel" :value=false>
                              <label class="custom-control-label" for="07">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Cihaz kumanda kolunda titreşim sorunu mevcut mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="08" type="radio" v-model="isControllerHasVibrationProblemModel" :value=true>
                              <label class="custom-control-label" for="08">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="09" type="radio" v-model="isControllerHasVibrationProblemModel" :value=false>
                              <label class="custom-control-label" for="09">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Cihaz kumanda kolunda analog lastik arızası mevcut mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="10" type="radio" v-model="isControllerHasAnalogProblemModel" :value=true>
                              <label class="custom-control-label" for="10">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="11" type="radio" v-model="isControllerHasAnalogProblemModel" :value=false>
                              <label class="custom-control-label" for="11">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Cihaz kumanda kolunda tuş takımı sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="055" type="radio" v-model="isControllerHasButtonProblemModel" :value=true>
                              <label class="custom-control-label" for="055">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="066" type="radio" v-model="isControllerHasButtonProblemModel" :value=false>
                              <label class="custom-control-label" for="066">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Cihaz tuş takımında veya analogda aşınma mevcut mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="12" type="radio" v-model="isDeviceHasButtonProblemModel" :value=true>
                              <label class="custom-control-label" for="12">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="13" type="radio" v-model="isDeviceHasButtonProblemModel" :value=false>
                              <label class="custom-control-label" for="13">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Cihaz kutusu USB Soketi sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="14" type="radio" v-model="isDeviceHasUsbProblemModel" :value=true>
                              <label class="custom-control-label" for="14">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="15" type="radio" v-model="isDeviceHasUsbProblemModel" :value=false>
                              <label class="custom-control-label" for="15">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Cihaz kumanda kolu USB Soketi sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="16" type="radio" v-model="isControllerHasUsbProblemModel" :value=true>
                              <label class="custom-control-label" for="16">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="17" type="radio" v-model="isControllerHasUsbProblemModel" :value=false>
                              <label class="custom-control-label" for="17">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Cihaz çalışma esnasında aşırı ısınıyor mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="18" type="radio" v-model="isDeviceHasHeatProblemModel" :value=true>
                              <label class="custom-control-label" for="18">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="19" type="radio" v-model="isDeviceHasHeatProblemModel" :value=false>
                              <label class="custom-control-label" for="19">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Cihaz çalışma esnasında normalin üzerinde ses çıkarıyor mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="20" type="radio" v-model="isDeviceHasHightSoundProblemModel" :value=true>
                              <label class="custom-control-label" for="20">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="21" type="radio" v-model="isDeviceHasHightSoundProblemModel" :value=false>
                              <label class="custom-control-label" for="21">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Cihazda ağa bağlanma sorunu var mı ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="22" type="radio" v-model="isDeviceHasNetworkConnectionProblemModel" :value=true>
                              <label class="custom-control-label" for="22">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="23" type="radio" v-model="isDeviceHasNetworkConnectionProblemModel" :value=false>
                              <label class="custom-control-label" for="23">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Cihaz optik sürücüsü sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="24" type="radio" v-model="isDeviceHasOpcicalDriverProblemModel" :value=true>
                              <label class="custom-control-label" for="24">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="25" type="radio" v-model="isDeviceHasOpcicalDriverProblemModel" :value=false>
                              <label class="custom-control-label" for="25">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Cihaz çalışma esnasında disk okuma hatası veriyor mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="26" type="radio" v-model="isDeviceHasDiskReadingProblemModel" :value=true>
                              <label class="custom-control-label" for="26">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="27" type="radio" v-model="isDeviceHasDiskReadingProblemModel" :value=false>
                              <label class="custom-control-label" for="27">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Ethernet Girişi sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="28" type="radio" v-model="isDeviceHasEthernetProblemModel" :value=true>
                              <label class="custom-control-label" for="28">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="29" type="radio" v-model="isDeviceHasEthernetProblemModel" :value=false>
                              <label class="custom-control-label" for="29">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">HDMI Girişi sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="32" type="radio" v-model="isDeviceHasHdmiProblemModel" :value=true>
                              <label class="custom-control-label" for="32">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="33" type="radio" v-model="isDeviceHasHdmiProblemModel" :value=false>
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
                              <input class="custom-control-input" id="34" type="radio" v-model="isDeviceHasUsbInputsProblemModel" :value=true>
                              <label class="custom-control-label" for="34">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="35" type="radio" v-model="isDeviceHasUsbInputsProblemModel" :value=false>
                              <label class="custom-control-label" for="35">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Bluetooth sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="36" type="radio" v-model="isDeviceHasBluetoothProblemModel" :value=true>
                              <label class="custom-control-label" for="36">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="37" type="radio" v-model="isDeviceHasBluetoothProblemModel" :value=false>
                              <label class="custom-control-label" for="37">Hayır</label>
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
                        <h2 class="mb-3 mt-1">Cihaz ile İlgili Teknik Servis Notları  </h2>
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
  expertiseConsoleInfo: []
}

export default {
  name: 'App',
  data() {
    return {
      brand: ["Marka", "aaaaa", " bbbbb", "ccccccc"],
      model: ["Model","xxxx","yyy"],
      guarantee: ["1","2","3","4","....","....","...","22","23","24"],
      color: ["Siyah","Beyaz","Gümüş","Pembe","Mavi","....","...."],
      platform: ["Playstation","Nintendo","Microsoft Xbox"],
      operatingsystem: ["Orbis OS","Cell OS","Xbox OS","Switch OS"],
      preprocessormodel: ["Cell Broadband Engine","AMD Jaguar","Xenon","IBM Espresso ","ARM Cortex A57","VFPv2 Co-Processor ","ARM11 MPCore","AMD Bristol Ridge ","ARM Cortex-A35 ","ARM Cortex A7 ","AMD Zen 2"],
      fps: ["30 fps","60 fps","120 fps"],
      ram: ["512 MB","4 GB","8 GB","10 GB","12 GB","16 GB"],
      ramtype: ["GDDR3","LPDDR4","GDDR5","GDDR6","DDR3","DDR4"],
      gamesolution: ["720p","1080p","2160p"],
      videosolution: ["720p","1080p","2160p","8K"],
      networkconnectiontype: ["Kablolu","Kablolu-Kablosuz"],
      hdmi:["HDMI 1.2","HDMI 1.4","HDMI 2.0","HDMI 2.0b","HDMI 2.1"],
      usbversion: ["USB 2.0","USB 3.2 (1.Nesil)"],
      bluetoothversion:["Bluetooth 2.0","Bluetooth 2.1","Bluetooth 4.0","Bluetooth 4.1","Bluetooth 5.0"],
      controllerquantity: ["1","2","3","4"],
      gamequantity:["1","2","3","4","5+"],
      usbquantity:["1","2","3","4","5"],
      preprocessorfrequency: ["512 MB","4 GB","8 GB","10 GB","12 GB","16 GB"],
      appData
    }
  },

  mounted: function () {

  },

  methods: {
    requestExpertiseConsoleInfo: requestExpertiseConsoleInfo
  }
}

async  function requestExpertiseConsoleInfo() {
  await axios.post(
      "http://157.230.124.187:8888/api/v1/expertise_console_infos",
      {
        reservation_id : 2,
        invoice : this.invoiceModel,
        box : this.boxModel,
        guarantee_term : this.guaranteeTermModel,
        color : this.colorModel,
        platform : this.platformModel,
        storage_capacity : this.storageCapacityModel,
        os_type : this.osTypeModel,
        cpu_model : this.cpuModelModel,
        fps_value : this.fpsValueModel,
        hdr_support : this.hdrSupportModel,
        ram : this.ramModel,
        ram_type : this.ramTypeModel,
        game_resolution : this.gameResolutionModel,
        video_resolution : this.videoResolutionModel,
        network_type : this.networkTypeModel,
        ethernet : this.ethernetModel,
        ethernet_speed : this.ethernetSpeedModel,
        hdmi_standart : this.hdmiStandartModel,
        usb_input : this.usbInputModel,
        usb_input_number : this.usbInputNumberModel,
        usb_version : this.usbVersionModel,
        bluetooth: this.bluetoothModel,
        bluetooth_version : this.bluetoothVersionModel,
        voice_support : this.voiceSupportModel,
        controller : this.controllerModel,
        controller_number : this.controllerNumberModel,
        game : this.gameModel,
        game_number : this.gameNumberModel,
        is_box_has_has_problem : this.isBoxHasHasProblemModel,
        is_box_has_light_problem: this.isBoxHasLightProblemModel,
        is_controller_has_light_problem: this.isControllerHasLightProblemModel,
        is_controller_has_vibration_problem: this.isControllerHasVibrationProblemModel,
        is_controller_has_analog_problem: this.isControllerHasAnalogProblemModel,
        is_controller_has_button_problem: this.isControllerHasButtonProblemModel,
        is_device_has_button_problem: this.isDeviceHasButtonProblemModel,
        is_device_has_usb_problem: this.isDeviceHasUsbProblemModel,
        is_controller_has_usb_problem: this.isControllerHasUsbProblemModel,
        is_device_has_heat_problem: this.isDeviceHasHeatProblemModel,
        is_device_has_hight_sound_problem: this.isDeviceHasHightSoundProblemModel,
        is_device_has_network_connection_problem: this.isDeviceHasNetworkConnectionProblemModel,
        is_device_has_oprical_driver_problem: this.isDeviceHasOpcicalDriverProblemModel,
        is_device_has_disk_reading_problem: this.isDeviceHasDiskReadingProblemModel,
        is_device_has_ethernet_problem: this.isDeviceHasEthernetProblemModel,
        is_device_has_hdmi_problem: this.isDeviceHasHdmiProblemModel,
        is_device_has_usb_inputs_problem: this.isDeviceHasUsbInputsProblemModel,
        is_device_has_bluetooth_problem : this.isDeviceHasBluetoothProblemModel,
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