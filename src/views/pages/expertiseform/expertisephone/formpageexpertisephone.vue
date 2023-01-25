<template>
  <form method="POST" @submit.prevent="requestExpertisePhoneInfo()">
    <div class="banner-wrapper">
      <div class="container  ">
        <section class="guides-section">
          <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-12 col-md-12">
              <div class="row ">
                <div class="col-md-12">
                  <div class="questions-card">
                    <div class="questions-header">
                      <h2 class="mb-0 ">Telefon Ekspertiz Formu</h2>
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
                          <label class="focus-label">1-24 aya kadar</label>
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
                        <h3 class="mb-3 mt-1">Yasal Durumu</h3>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <div class="col-md-6">
                        <div class="form-group form-focus">
                          <label>IMEI Kayıt Durumu <span class="text-danger">*</span></label>
                          <input type="text" class="form-control floating">
                          <label class="focus-label">IMEI Kayıt Durumu</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group form-focus">
                          <label>E-Devlet Sorgu Bilgisi<span class="text-danger">*</span></label>
                          <input type="text" class="form-control floating">
                          <label class="focus-label">E-Devlet Sorgu Bilgisi</label>
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
                      <h4 class="mb-3 mt-1">Ekran özellikleri</h4><hr>
                      <div class="col-md-6">
                        <div class="form-group form-focus">
                          <label>Ekran Boyutu<span class="text-danger">*</span></label>
                          <input type="text" class="form-control floating">
                          <label class="focus-label">2.3-8 inç</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Ekran Teknolojisi <span class="text-danger">*</span></label>
                          <vue-select :options="displaytechnology" v-model="screenTechnologyModel"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Ekran Çözünürlüğü <span class="text-danger">*</span></label>
                          <vue-select :options="screenresolution" v-model="screenResolutionModel"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Çizilmeye Karşı Dayanıklılık <span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="scratchy" type="radio" v-model="scratchResistanceModel" :value=true>
                              <label class="custom-control-label" for="scratchy">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="scratchn" type="radio" v-model="scratchResistanceModel" :value=false>
                              <label class="custom-control-label" for="scratchn">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h4 class="mb-3 mt-1">Teknik Özellikler</h4><hr>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>İşlemci Modeli <span class="text-danger">*</span></label>
                          <vue-select :options="preprocessormodel" v-model="cpuModelModel"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group form-focus">
                          <label>İşlemci Frekansı<span class="text-danger">*</span></label>
                          <input type="text" class="form-control floating">
                          <label class="focus-label">2.3-8 inç</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group form-focus">
                          <label>Ram Kapasitesi<span class="text-danger">*</span></label>
                          <input type="text" class="form-control floating">
                          <label class="focus-label">0-18 GB</label>
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
                          <label>İşletim Sistemi Versiyonu <span class="text-danger">*</span></label>
                          <vue-select :options="operatingsystemversion" v-model="osTypeVersionModel"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group form-focus">
                          <label>İşlemci Çekirdek Sayısı <span class="text-danger">*</span></label>
                          <input type="text" class="form-control floating">
                          <label class="focus-label">4-12</label>
                        </div>
                      </div>
                      <h4 class="mb-3 mt-1">Kamera Özellikleri</h4><hr>
                      <div class="col-md-6">
                        <div class="form-group form-focus">
                          <label>Kamera Çözünürlüğü<span class="text-danger">*</span></label>
                          <input type="text" class="form-control floating">
                          <label class="focus-label">2-200 MP</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group form-focus">
                          <label>Ön Kamera Çözünürlüğü<span class="text-danger">*</span></label>
                          <input type="text" class="form-control floating">
                          <label class="focus-label">2-200 MP</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Video Kayıt Çözünürlüğü <span class="text-danger">*</span></label>
                          <vue-select :options="videorecordingresolution" v-model="videoRecordResolutionModel"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Video FPS Değeri<span class="text-danger">*</span></label>
                          <vue-select :options="fps" v-model="videoFpsModel"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Yüz Tanıma <span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="recognitiony" type="radio" v-model="faceRecognitionModel" :value=true>
                              <label class="custom-control-label" for="recognitiony">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="recognitionn" type="radio" v-model="faceRecognitionModel" :value=false>
                              <label class="custom-control-label" for="recognitionn">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Slow Motion Video Çekimi<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="slowvideoy" type="radio" v-model="slowMotionVideoModel" :value=true>
                              <label class="custom-control-label" for="slowvideoy">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="slowvideon" type="radio" v-model="slowMotionVideoModel" :value=false>
                              <label class="custom-control-label" for="slowvideon">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Kamera Yapay Zeka Desteği <span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="aiy" type="radio" v-model="cameraAiModel" :value=true>
                              <label class="custom-control-label" for="aiy">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="ain" type="radio" v-model="cameraAiModel" :value=false>
                              <label class="custom-control-label" for="ain">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Zamanlayıcı <span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="timey" type="radio" v-model="timerModel" :value=true>
                              <label class="custom-control-label" for="timey">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="timez" type="radio" v-model="timerModel" :value=false>
                              <label class="custom-control-label" for="timez">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Otomatik Odaklama<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="autofocusy" type="radio" v-model="automaticFocusModel" :value=true>
                              <label class="custom-control-label" for="autofocusy">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="autofocusz" type="radio" v-model="automaticFocusModel" :value=false>
                              <label class="custom-control-label" for="autofocusz">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Coğrafi Konum Ekleme  <span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="locationy" type="radio" v-model="geographicLocationModel" :value=true>
                              <label class="custom-control-label" for="locationy">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="location" type="radio" v-model="geographicLocationModel" :value=false>
                              <label class="custom-control-label" for="location">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Sesli Komut <span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="voicecommandsy" type="radio" v-model="voiceControlModel" :value=true>
                              <label class="custom-control-label" for="voicecommandsy">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="voicecommandsz" type="radio" v-model="voiceControlModel" :value=false>
                              <label class="custom-control-label" for="voicecommandsz">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h4 class="mb-3 mt-1">Depolama</h4><hr>
                      <div class="col-md-6">
                        <div class="form-group form-focus">
                          <label>Dahili Depolama<span class="text-danger">*</span></label>
                          <input type="text" class="form-control floating">
                          <label class="focus-label">0-1024 GB</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group form-focus">
                          <label>Maksimum Hafıza Kartı Kapsitesi<span class="text-danger">*</span></label>
                          <input type="text" class="form-control floating">
                          <label class="focus-label">0-1024 GB</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">?Hafıza Kartı Desteği <span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="memoryy" type="radio" v-model="" :value=true>
                              <label class="custom-control-label" for="memoryy">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="memoryz" type="radio" v-model="" :value=false>
                              <label class="custom-control-label" for="memoryz">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h4 class="mb-3 mt-1">Batarya Özellikleri</h4><hr>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Şarj Tipi <span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="typey" type="radio" v-model="batteryTypeModel" :value=true>
                              <label class="custom-control-label" for="typey">USB Type-C</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="typez" type="radio" v-model="batteryTypeModel" :value=false>
                              <label class="custom-control-label" for="typez">Micro-USB</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group form-focus">
                          <label>Batarya Kapsitesi<span class="text-danger">*</span></label>
                          <input type="text" class="form-control floating">
                          <label class="focus-label">2500mAh-7500mAh</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Kablosuz Şarj <span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="chargey" type="radio" v-model="batteryWirelessChargeModel" :value=true>
                              <label class="custom-control-label" for="chargey">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="chargez" type="radio" v-model="batteryWirelessChargeModel" :value=false>
                              <label class="custom-control-label" for="chargez">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Hızlı Şarj <span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="fastchargey" type="radio" v-model="batteryFastChargeModel" :value=true>
                              <label class="custom-control-label" for="fastchargey">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="fastchargez" type="radio" v-model="batteryFastChargeModel" :value=false>
                              <label class="custom-control-label" for="fastchargez">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Kablosuz Hızlı Şarj <span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="wirelessfastchargey" type="radio" v-model="batteryWirelessFastChargeModel" :value=true>
                              <label class="custom-control-label" for="wirelessfastchargey">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="wirelessfastchargez" type="radio" v-model="batteryWirelessFastChargeModel" :value=false>
                              <label class="custom-control-label" for="wirelessfastchargez">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Çıkarılabilir Batarya <span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="bateryy" type="radio" v-model="batteryDetachableModel" :value=true>
                              <label class="custom-control-label" for="bateryy">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="bateryz" type="radio" v-model="batteryDetachableModel" :value=false>
                              <label class="custom-control-label" for="bateryz">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h4 class="mb-3 mt-1">Bağlantılar</h4><hr>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Wi-Fi Frekansı<span class="text-danger">*</span></label>
                          <vue-select :options="wififrequency" v-model="wifiFrequencyModel"/>
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
                              <input class="custom-control-input" id="nfcz" type="radio" v-model="nfcModel" :value=false>
                              <label class="custom-control-label" for="nfcz">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">5G Desteği  <span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="5gy" type="radio" v-model="g5SupportModel" :value=true>
                              <label class="custom-control-label" for="5gy">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="female" type="radio" v-model="g5SupportModel" :value=false>
                              <label class="custom-control-label" for="female">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h4 class="mb-3 mt-1">Ek Özellikler</h4><hr>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Çıkış Yılı <span class="text-danger">*</span></label>
                          <vue-select :options="releaseyear" v-model="releaseYearModel"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Suya Dayanıklılık<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="waterprofy" type="radio" v-model="resistanceOWaterModel" :value=true>
                              <label class="custom-control-label" for="waterprofy">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="waterprofz" type="radio" v-model="resistanceOWaterModel" :value=false>
                              <label class="custom-control-label" for="waterprofz">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Toza Dayanıklılık<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="dustprofy" type="radio" v-model="resistanceOfDustModel" :value=true>
                              <label class="custom-control-label" for="dustprofy">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="dustprofz" type="radio" v-model="resistanceOfDustModel" :value=false>
                              <label class="custom-control-label" for="dustprofz">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Parmak İzi Okuyucu <span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="fingerreadery" type="radio" v-model="fingerPrintModel" :value=true>
                              <label class="custom-control-label" for="fingerreadery">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="fingerreaderz" type="radio" v-model="fingerPrintModel" :value=false>
                              <label class="custom-control-label" for="fingerreaderz">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Çift SIM<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="simy" type="radio" v-model="doubleSimModel" :value=true>
                              <label class="custom-control-label" for="simy">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="simz" type="radio" v-model="doubleSimModel" :value=false>
                              <label class="custom-control-label" for="simz">Yok</label>
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
                              <input class="custom-control-input" id="05" type="radio" v-model="isTouchScreenHasProblemModel" :value=true>
                              <label class="custom-control-label" for="05">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="06" type="radio" v-model="isTouchScreenHasProblemModel" :value=false>
                              <label class="custom-control-label" for="06">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Ekranda ölü piksel hatası var mı ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="06" type="radio" v-model="isScreenHasDeadPixelProblemModel" :value=true>
                              <label class="custom-control-label" for="06">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="07" type="radio" v-model="isScreenHasDeadPixelProblemModel" :value=false>
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
                          <label class="custom-control-gender">Cihazda kapak veya menteşe arızası mevcut mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="10" type="radio" v-model="isDeviceHasCoverProblemModel" :value=true>
                              <label class="custom-control-label" for="10">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="11" type="radio" v-model="isDeviceHasCoverProblemModel" :value=false>
                              <label class="custom-control-label" for="11">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Ön ve arka kamera sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="12" type="radio" v-model="isDeviceHasCamerasProblemModel" :value=true>
                              <label class="custom-control-label" for="12">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="13" type="radio" v-model="isDeviceHasCamerasProblemModel" :value=false>
                              <label class="custom-control-label" for="13">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Hoperlör sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="14" type="radio" v-model="isDeviceHasSpeakerProblemModel" :value=true>
                              <label class="custom-control-label" for="14">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="15" type="radio" v-model="isDeviceHasSpeakerProblemModel" :value=false>
                              <label class="custom-control-label" for="15">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Cihazda aşırı ısınma sorunu var mı ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="16" type="radio" v-model="isDeviceHasHightHeatProblemModel" :value=true>
                              <label class="custom-control-label" for="16">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="17" type="radio" v-model="isDeviceHasHightHeatProblemModel" :value=false>
                              <label class="custom-control-label" for="17">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Cihaz şarj soketinde deformasyon veya arıza mevcut mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="18" type="radio" v-model="isDeviceHasChargeSocketProblemModel" :value=true>
                              <label class="custom-control-label" for="18">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="19" type="radio" v-model="isDeviceHasChargeSocketProblemModel" :value=false>
                              <label class="custom-control-label" for="19">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Açma Kapama tuşu sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="20" type="radio" v-model="isDeviceHasPowerButtonProblemModel" :value=true>
                              <label class="custom-control-label" for="20">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="21" type="radio" v-model="isDeviceHasPowerButtonProblemModel" :value=false>
                              <label class="custom-control-label" for="21">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Cihaz kasası daha önceden açılmış mı ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="22" type="radio" v-model="isDeviceHasOpenedCaseProblemModel" :value=true>
                              <label class="custom-control-label" for="22">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="23" type="radio" v-model="isDeviceHasOpenedCaseProblemModel" :value=false>
                              <label class="custom-control-label" for="23">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Yan tuşlar ses tuşları sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="24" type="radio" v-model="isDeviceHasSideButtonProblemModel" :value=true>
                              <label class="custom-control-label" for="24">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="25" type="radio" v-model="isDeviceHasSideButtonProblemModel" :value=false>
                              <label class="custom-control-label" for="25">Hayır</label>
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
                              <input class="custom-control-input" id="28" type="radio" v-model="isDeviceHasBluetoothProblemModel" :value=true>
                              <label class="custom-control-label" for="28">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="29" type="radio" v-model="isDeviceHasBluetoothProblemModel" :value=false>
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
                              <input class="custom-control-input" id="30" type="radio" v-model="isDeviceHasWifiProblemModel" :value=true>
                              <label class="custom-control-label" for="30">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="31" type="radio" v-model="isDeviceHasWifiProblemModel" :value=false>
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
                              <input class="custom-control-input" id="32" type="radio" v-model="isDeviceHasMicrophoneProblemModel" :value=true>
                              <label class="custom-control-label" for="32">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="33" type="radio" v-model="isDeviceHasMicrophoneProblemModel" :value=false>
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
                              <input class="custom-control-input" id="35" type="radio" v-model="isDeviceHasCellularProblemModel" :value=true>
                              <label class="custom-control-label" for="35">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Arama esnasında gelen ve giden ses konusunda problem var mı ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="36" type="radio" v-model="isDeviceHasSoundTransferProblemModel" :value=true>
                              <label class="custom-control-label" for="36">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="37" type="radio" v-model="isDeviceHasSoundTransferProblemModel" :value=false>
                              <label class="custom-control-label" for="37">Hayır</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group form-focus">
                          <label>AnTuTu Benchmark (V9) Sonucu  <span class="text-danger">*</span></label>
                          <input type="text" class="form-control floating">
                          <label class="focus-label">AnTuTu Benchmark (V9) Sonucu </label>
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
import axios from "axios";
const appData = {
  expertisePhoneInfo: []
}

export default {
  name: 'App',
  data() {
    return {
      brand: ["Marka", "aaaaa", " bbbbb", "ccccccc"],
      model: ["Model","xxxx","yyy"],
      color: ["Siyah","Beyaz","Altın","Gümüş","Mavi","Gri","Yeşil","Bordo","Mor","Mavi(Alaca)","Parlak Siyah","Sarı","Bakır","Kırmızı","Kahverengi","Turuncu","Bej","Pembe","Gün Doğumu","Lacivert"],
      screensize: ["2.3 inç","8 inç"],
      displaytechnology: ["AMOLED","Dynamic AMOLED","Super AMOLED","IPS LCD","OLED","PLS","P-OLED","Super LCD","Super LCD 2","Super LCD 3","Super LCD 5","Super LCD 6","TFT LCD"],
      screenresolution: ["QHD+","QHD","FHD+","FHD","HD+","HD"],
      preprocessormodel: ["Qualcomm","MediaTek","Samsung","HiSilicon","SpreadtruM","Apple","Intel","Broadcom","Xiaomi","Unisoc","Google","JLQ"],
      preprocessorfrequency: ["0.5GHz","......","3.5GHz"],
      ram: ["2GB","4GB","...","18GB"],
      operatingsystem: ["Android","Apple IOS","Blackberry OS","Windows Phone OS"],
      operatingsystemversion: ["Android 7.0 (Nougat)","Android 7.1 (Nougat)","Android 11 (Go Edition)","iOS 11"],
      numberprocessorcores: ["4","..","12"],
      cameraresolution: ["2MP",".....","200 MP"],
      videorecordingresolution: ["4320p (Ultra HD) 8K","3384p (Ultra HD) 6K","2160p (Ultra HD) 4K","1440p (Quad HD) 2K","1080p (Full HD)","720p (HD)"],
      fps: ["60 fps","30 fps","24 fps"],
      batterycapacity: ["batterycapacity2500mAh-7500mAh"],
      wififrequency: ["Wi-Fi 6 (802.11 a/b/g/n/ac/ax)","Wi-Fi 5 (802.11 a/b/g/n/ac)","Wi-Fi 4 (802.11 a/b/g/n)","Wi-Fi 4 (802.11 b/g/n)"],
      releaseyear: ["2023","2022","2021","2019","2018","2017","2016","2017","2016"],
      appData
    }
  },

  mounted: function () {

  },

  methods: {
    requestExpertisePhoneInfo: requestExpertisePhoneInfo
  }
}

async function requestExpertisePhoneInfo() {
  await axios.post(
      "http://157.230.124.187:8888/api/v1/expertise_phone_infos",
      {
        reservation_id : 1,
        invoice : this.invoiceModel,
        box : this.boxModel,
        guarantee_term : this.guaranteeTermModel,
        color : this.colorModel,
        imei_registration : this.imeiRegistrationModel,
        e_devlet_registration : this.eDevletRegistrationModel,
        screen_size : this.screenSizeModel,
        screen_technology : this.screenTechnologyModel,
        screen_resolution : this.screenResolutionModel,
        scratch_resistance : this.scratchResistanceModel,
        cpu_model : this.cpuModelModel,
        cpu_frequency : this.cpuFrequencyModel,
        ram : this.ramModel,
        os_type : this.osTypeModel,
        os_type_version : this.osTypeVersionModel,
        cpu_core_number : this.cpuCoreNumberModel,
        camera_resolution : this.cameraResolutionModel,
        front_camera_resolution : this.frontCameraResolutionModel,
        video_record_resolution : this.videoRecordResolutionModel,
        video_fps : this.videoFpsModel,
        face_recognition : this.faceRecognitionModel,
        slow_motion_video : this.slowMotionVideoModel,
        camera_ai : this.cameraAiModel,
        timer : this.timerModel,
        automatic_focus : this.automaticFocusModel,
        geographic_location : this.geographicLocationModel,
        voice_control : this.voiceControlModel,
        internal_storage : this.internalStorageModel,
        external_storage : this.externalStorageModel,
        max_external_storage : this.maxExternalStorageModel,
        battery_type : this.batteryTypeModel,
        battery_capacity : this.batteryCapacityModel,
        battery_wireless_charge : this.batteryWirelessChargeModel,
        battery_fast_charge : this.batteryFastChargeModel,
        battery_wireless_fast_charge : this.batteryWirelessFastChargeModel,
        battery_detachable : this.batteryDetachableModel,
        wifi_frequency : this.wifiFrequencyModel,
        nfc : this.nfcModel,
        g5_support : this.g5SupportModel,
        release_year : this.releaseYearModel,
        resistance_o_water : this.resistanceOWaterModel,
        resistance_of_dust : this.resistanceOfDustModel,
        finger_print : this.fingerPrintModel,
        double_sim : this.doubleSimModel,
        antutu_score : this.antutuScoreModel,
        is_screen_has_broken_problem : this.isScreenHasBrokenProblemModel,
        is_screen_has_obscuration_problem : this.isScreenHasObscurationProblemModel,
        is_touch_screen_has_problem : this.isTouchScreenHasProblemModel,
        is_screen_has_dead_pixel_problem : this.isScreenHasDeadPixelProblemModel,
        is_device_has_case_problem : this.isDeviceHasCaseProblemModel,
        is_device_has_cover_problem : this.isDeviceHasCoverProblemModel,
        is_device_has_cameras_problem : this.isDeviceHasCamerasProblemModel,
        is_device_has_speaker_problem : this.isDeviceHasSpeakerProblemModel,
        is_device_has_hight_heat_problem : this.isDeviceHasHightHeatProblemModel,
        is_device_has_charge_socket_problem : this.isDeviceHasChargeSocketProblemModel,
        is_device_has_power_button_problem : this.isDeviceHasPowerButtonProblemModel,
        is_device_has_opened_case_problem : this.isDeviceHasOpenedCaseProblemModel,
        is_device_has_side_button_problem : this.isDeviceHasSideButtonProblemModel,
        is_device_has_freezing_problem : this.isDeviceHasFreezingProblemModel,
        is_device_has_bluetooth_problem : this.isDeviceHasBluetoothProblemModel,
        is_device_has_wifi_problem : this.isDeviceHasWifiProblemModel,
        is_device_has_microphone_problem : this.isDeviceHasMicrophoneProblemModel,
        is_device_has_cellular_problem : this.isDeviceHasCellularProblemModel,
        is_device_has_sound_transfer_problem : this.isDeviceHasSoundTransferProblemModel,
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