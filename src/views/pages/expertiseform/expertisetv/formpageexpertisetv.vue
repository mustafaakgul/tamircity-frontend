<template>
  <div class="banner-wrapper">
    <div class="container  ">
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
                    <div class="form-group">
                      <label>Garanti süresi<span class="text-danger">*</span></label>
                      <vue-select :options="guarantee" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group form-focus">
                      <label>Garanti süresi<span class="text-danger">*</span></label>
                      <input type="text" class="form-control floating">
                      <label class="focus-label">Garanti süresi</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Garanti Türü<span class="text-danger">*</span></label>
                      <vue-select :options="guarantee" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Renk<span class="text-danger">*</span></label>
                      <vue-select :options="color" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">Fatura <span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="billy" type="radio" name="bill" value="billy" checked="">
                              <label class="custom-control-label" for="billy">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="billn" type="radio" name="bill" value="billn">
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
                              <input class="custom-control-input" id="boxy" type="radio" name="stripe" value="1" checked="">
                              <label class="custom-control-label" for="boxy">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="boxn" type="radio" name="stripe" value="0">
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
                      <vue-select :options="paneltechnology"/>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>İşletim Sistemi<span class="text-danger">*</span></label>
                      <vue-select :options="operatingsystem"/>
                    </div>
                  </div>


                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Ekran Çözünürlüğü <span class="text-danger">*</span></label>
                      <vue-select :options="screenresolution"/>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Çizilmeye Karşı Dayanıklılık <span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="scratchy" type="radio" name="scratch" value="1" checked="">
                          <label class="custom-control-label" for="scratchy">Var</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="scratchn" type="radio" name="scratch" value="0">
                          <label class="custom-control-label" for="scratchn">Yok</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 class="mb-3 mt-1">Teknik Özellikler</h4><hr>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>İşlemci Modeli <span class="text-danger">*</span></label>
                      <vue-select :options="preprocessormodel" />
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
                      <vue-select :options="operatingsystem" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>İşletim Sistemi Versiyonu <span class="text-danger">*</span></label>
                      <vue-select :options="operatingsystemversion" />
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
                      <vue-select :options="videorecordingresolution" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Video FPS Değeri<span class="text-danger">*</span></label>
                      <vue-select :options="fps" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Yüz Tanıma <span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="recognitiony" type="radio" name="recognition" value="recognitiony" checked="">
                          <label class="custom-control-label" for="recognitiony">Var</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="recognitionn" type="radio" name="recognition" value="recognitionn">
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
                          <input class="custom-control-input" id="slowvideoy" type="radio" name="slowvideo" value="1" checked="">
                          <label class="custom-control-label" for="slowvideoy">Var</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="slowvideon" type="radio" name="slowvideo" value="0">
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
                          <input class="custom-control-input" id="aiy" type="radio" name="ai" value="1" checked="">
                          <label class="custom-control-label" for="aiy">Var</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="ain" type="radio" name="ai" value="0">
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
                          <input class="custom-control-input" id="timey" type="radio" name="time" value="1" checked="">
                          <label class="custom-control-label" for="timey">Var</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="timez" type="radio" name="time" value="0">
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
                          <input class="custom-control-input" id="autofocusy" type="radio" name="autofocus" value="1" checked="">
                          <label class="custom-control-label" for="autofocusy">Var</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="autofocusz" type="radio" name="autofocus" value="0">
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
                          <input class="custom-control-input" id="locationy" type="radio" name="location" value="location" checked="">
                          <label class="custom-control-label" for="locationy">Var</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="location" type="radio" name="location" value="location">
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
                          <input class="custom-control-input" id="voicecommandsy" type="radio" name="voicecommands" value="voicecommands" checked="">
                          <label class="custom-control-label" for="voicecommandsy">Var</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="voicecommandsz" type="radio" name="voicecommands" value="voicecommands">
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
                      <label class="custom-control-gender">Hafıza Kartı Desteği <span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="memoryy" type="radio" name="memory" value="memory" checked="">
                          <label class="custom-control-label" for="memoryy">Var</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="memoryz" type="radio" name="memory" value="memory">
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
                          <input class="custom-control-input" id="typey" type="radio" name="type" value="typey" checked="">
                          <label class="custom-control-label" for="typey">USB Type-C</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="typez" type="radio" name="type" value="typez">
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
                          <input class="custom-control-input" id="chargey" type="radio" name="charge" value="chargey" checked="">
                          <label class="custom-control-label" for="chargey">Var</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="chargez" type="radio" name="charge" value="chargez">
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
                          <input class="custom-control-input" id="fastchargey" type="radio" name="fastcharge" value="1" checked="">
                          <label class="custom-control-label" for="fastchargey">Var</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="fastchargez" type="radio" name="fastcharge" value="0">
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
                          <input class="custom-control-input" id="wirelessfastchargey" type="radio" name="wirelessfastcharge" value="1" checked="">
                          <label class="custom-control-label" for="wirelessfastchargey">Var</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="wirelessfastchargez" type="radio" name="wirelessfastcharge" value="0">
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
                          <input class="custom-control-input" id="bateryy" type="radio" name="batery" value="1" checked="">
                          <label class="custom-control-label" for="bateryy">Var</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="bateryz" type="radio" name="batery" value="0">
                          <label class="custom-control-label" for="bateryz">Yok</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 class="mb-3 mt-1">Bağlantılar</h4><hr>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Wi-Fi Frekansı<span class="text-danger">*</span></label>
                      <vue-select :options="wififrequency"/>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">NFC <span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="nfcy" type="radio" name="nfc" value="1" checked="">
                          <label class="custom-control-label" for="nfcy">Var</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="nfcz" type="radio" name="nfc" value="0">
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
                          <input class="custom-control-input" id="5gy" type="radio" name="5g" value="1" checked="">
                          <label class="custom-control-label" for="5gy">Var</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="female" type="radio" name="5g" value="0">
                          <label class="custom-control-label" for="female">Yok</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 class="mb-3 mt-1">Ek Özellikler</h4><hr>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Çıkış Yılı <span class="text-danger">*</span></label>
                      <vue-select :options="releaseyear"/>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Suya Dayanıklılık<span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="waterprofy" type="radio" name="waterprof" value="1" checked="">
                          <label class="custom-control-label" for="waterprofy">Var</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="waterprofz" type="radio" name="waterprof" value="0">
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
                          <input class="custom-control-input" id="dustprofy" type="radio" name="dustprof" value="1" checked="">
                          <label class="custom-control-label" for="dustprofy">Var</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="dustprofz" type="radio" name="dustprof" value="0">
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
                          <input class="custom-control-input" id="fingerreadery" type="radio" name="fingerreader" value="1" checked="">
                          <label class="custom-control-label" for="fingerreadery">Var</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="fingerreaderz" type="radio" name="fingerreader" value="0">
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
                          <input class="custom-control-input" id="simy" type="radio" name="sim" value="1" checked="">
                          <label class="custom-control-label" for="simy">Var</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="simz" type="radio" name="sim" value="0">
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
                          <input class="custom-control-input" id="01" type="radio" name="question1" value="1" checked="">
                          <label class="custom-control-label" for="01">Evet</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="02" type="radio" name="question1" value="0">
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
                          <input class="custom-control-input" id="03" type="radio" name="question2" value="1" checked="">
                          <label class="custom-control-label" for="03">Evet</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="04" type="radio" name="question2" value="0">
                          <label class="custom-control-label" for="04">Hayır</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Ekranda ölü piksel hatası var mı ?<span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="06" type="radio" name="question4" value="1" checked="">
                          <label class="custom-control-label" for="06">Evet</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="07" type="radio" name="question4" value="0">
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
                          <input class="custom-control-input" id="08" type="radio" name="question5" value="1" checked="">
                          <label class="custom-control-label" for="08">Evet</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="09" type="radio" name="question5" value="0">
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
                          <input class="custom-control-input" id="10" type="radio" name="question6" value="1" checked="">
                          <label class="custom-control-label" for="10">Evet</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="11" type="radio" name="question6" value="0">
                          <label class="custom-control-label" for="11">Hayır</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Klavyede çalışmayan tuş var mı ?<span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="05" type="radio" name="question3" value="1" checked="">
                          <label class="custom-control-label" for="05">Evet</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="06" type="radio" name="question3" value="0">
                          <label class="custom-control-label" for="06">Hayır</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Cihaz şarj soketinde deformasyon veya arıza mevcut mu ?<span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="12" type="radio" name="question7" value="1" checked="">
                          <label class="custom-control-label" for="12">Evet</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="13" type="radio" name="question7" value="0">
                          <label class="custom-control-label" for="13">Hayır</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Cihaz touchpad'i sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="14" type="radio" name="question8" value="1" checked="">
                          <label class="custom-control-label" for="14">Evet</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="15" type="radio" name="question8" value="0">
                          <label class="custom-control-label" for="15">Hayır</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Hoperlör sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="16" type="radio" name="question9" value="1" checked="">
                          <label class="custom-control-label" for="16">Evet</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="17" type="radio" name="question9" value="0">
                          <label class="custom-control-label" for="17">Hayır</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Cihazda aşırı ısınma sorunu var mı ?<span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="18" type="radio" name="question10" value="1" checked="">
                          <label class="custom-control-label" for="18">Evet</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="19" type="radio" name="question10" value="0">
                          <label class="custom-control-label" for="19">Hayır</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Cihaz çalışma esnasında normalin dışında sesler çıkarıyor mu ?<span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="20" type="radio" name="question11" value="1" checked="">
                          <label class="custom-control-label" for="20">Evet</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="21" type="radio" name="question11" value="0">
                          <label class="custom-control-label" for="21">Hayır</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">DVD Sürücü (varsa) sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="22" type="radio" name="question12" value="1" checked="">
                          <label class="custom-control-label" for="22">Evet</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="23" type="radio" name="question12" value="0">
                          <label class="custom-control-label" for="23">Hayır</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">USB Girişleri<span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="24" type="radio" name="question13" value="1" checked="">
                          <label class="custom-control-label" for="24">Evet</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="25" type="radio" name="question13" value="0">
                          <label class="custom-control-label" for="25">Hayır</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">USB Girişleri <span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="26" type="radio" name="question14" value="1" checked="">
                          <label class="custom-control-label" for="26">Çalışır Durumda</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="27" type="radio" name="question14" value="0">
                          <label class="custom-control-label" for="27">Çalışır Durumda Değil</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">USB Type-C Girişi<span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="28" type="radio" name="question15" value="1" checked="">
                          <label class="custom-control-label" for="28">Çalışır Durumda</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="29" type="radio" name="question15" value="0">
                          <label class="custom-control-label" for="29">Çalışır Durumda Değil</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Kart Okuyucu <span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="30" type="radio" name="question16" value="1" checked="">
                          <label class="custom-control-label" for="30">Evet</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="31" type="radio" name="question16" value="0">
                          <label class="custom-control-label" for="31">Hayır</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Kart Okuyucu<span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="32" type="radio" name="question17" value="1" checked="">
                          <label class="custom-control-label" for="32">Çalışır Durumda</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="33" type="radio" name="question17" value="0">
                          <label class="custom-control-label" for="33">Çalışır Durumda Değil</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Kamera<span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="34" type="radio" name="question18" value="1" checked="">
                          <label class="custom-control-label" for="34">Çalışır Durumda</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="35" type="radio" name="question18" value="0">
                          <label class="custom-control-label" for="35">Çalışır Durumda Değil</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Parmak İzi Okuyucu<span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="36" type="radio" name="question19" value="1" checked="">
                          <label class="custom-control-label" for="36">Çalışır Durumda</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="37" type="radio" name="question19" value="0">
                          <label class="custom-control-label" for="37">Çalışır Durumda Değil</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Anakart <span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="scratchy" type="radio" name="scratch" value="1" checked="">
                          <label class="custom-control-label" for="scratchy">Çalışır Durumda</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="scratchn" type="radio" name="scratch" value="0">
                          <label class="custom-control-label" for="scratchn">Çalışır Durumda Değil</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Ram (Bellek) <span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="ramy" type="radio" name="ram" value="1" checked="">
                          <label class="custom-control-label" for="ramy">Çalışır Durumda</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="ramn" type="radio" name="ram" value="0">
                          <label class="custom-control-label" for="ramn">Çalışır Durumda Değil</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Ram (Bellek) <span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="ramy" type="radio" name="ram" value="1" checked="">
                          <label class="custom-control-label" for="ramy">Çalışır Durumda</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="ramn" type="radio" name="ram" value="0">
                          <label class="custom-control-label" for="ramn">Çalışır Durumda Değil</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Sabit Disk (HDD)<span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="hddy" type="radio" name="hdd" value="1" checked="">
                          <label class="custom-control-label" for="hddy">Çalışır Durumda</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="hddn" type="radio" name="hdd" value="0">
                          <label class="custom-control-label" for="hddn">Çalışır Durumda Değil</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Harici Disk (SSD)<span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="hddy" type="radio" name="hdd" value="1" checked="">
                          <label class="custom-control-label" for="hddy">Çalışır Durumda</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="hddn" type="radio" name="hdd" value="0">
                          <label class="custom-control-label" for="hddn">Çalışır Durumda Değil</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Harici Ekran Kartı<span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="hddy" type="radio" name="hdd" value="1" checked="">
                          <label class="custom-control-label" for="hddy">Çalışır Durumda</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="hddn" type="radio" name="hdd" value="0">
                          <label class="custom-control-label" for="hddn">Çalışır Durumda Değil</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Harici Ekran Kartı<span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="heey" type="radio" name="hee" value="1" checked="">
                          <label class="custom-control-label" for="heey">Çalışır Durumda</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="heen" type="radio" name="hee" value="0">
                          <label class="custom-control-label" for="heen">Çalışır Durumda Değil</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Dahili Ekran Kartı <span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="dscy" type="radio" name="dsc" value="1" checked="">
                          <label class="custom-control-label" for="dscy">Çalışır Durumda</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="dscn" type="radio" name="dsc" value="0">
                          <label class="custom-control-label" for="dscn">Çalışır Durumda Değil</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Dahili Ekran Kartı <span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="dscy" type="radio" name="dsc" value="1" checked="">
                          <label class="custom-control-label" for="dscy">Çalışır Durumda</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="dscn" type="radio" name="dsc" value="0">
                          <label class="custom-control-label" for="dscn">Çalışır Durumda Değil</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Optik Okuyucu<span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="oory" type="radio" name="oor" value="1" checked="">
                          <label class="custom-control-label" for="oory">Çalışır Durumda</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="oorn" type="radio" name="oor" value="0">
                          <label class="custom-control-label" for="oorn">Çalışır Durumda Değil</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Ethernet Girişi<span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="oory" type="radio" name="oor" value="1" checked="">
                          <label class="custom-control-label" for="oory">Çalışır Durumda</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="oorn" type="radio" name="oor" value="0">
                          <label class="custom-control-label" for="oorn">Çalışır Durumda Değil</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">WiFi <span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="oory" type="radio" name="oor" value="1" checked="">
                          <label class="custom-control-label" for="oory">Çalışır Durumda</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="oorn" type="radio" name="oor" value="0">
                          <label class="custom-control-label" for="oorn">Çalışır Durumda Değil</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">HDMI Girişi <span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="hdmıy" type="radio" name="hdmı" value="1" checked="">
                          <label class="custom-control-label" for="hdmıy">Çalışır Durumda</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="hdmın" type="radio" name="hdmı" value="0">
                          <label class="custom-control-label" for="hdmın">Çalışır Durumda Değil</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">HDMI Girişi <span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="hdmıy" type="radio" name="hdmı" value="1" checked="">
                          <label class="custom-control-label" for="hdmıy">Çalışır Durumda</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="hdmın" type="radio" name="hdmı" value="0">
                          <label class="custom-control-label" for="hdmın">Çalışır Durumda Değil</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Bluetooth<span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="hdmıy" type="radio" name="hdmı" value="1" checked="">
                          <label class="custom-control-label" for="hdmıy">Çalışır Durumda</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="hdmın" type="radio" name="hdmı" value="0">
                          <label class="custom-control-label" for="hdmın">Çalışır Durumda Değil</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Kulaklık Girişi<span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="eary" type="radio" name="ear" value="1" checked="">
                          <label class="custom-control-label" for="eary">Çalışır Durumda</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="earn" type="radio" name="ear" value="0">
                          <label class="custom-control-label" for="earn">Çalışır Durumda Değil</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Dokunmatik Ekran <span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="touchy" type="radio" name="touch" value="1" checked="">
                          <label class="custom-control-label" for="touchy">Çalışır Durumda</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="touchn" type="radio" name="touch" value="0">
                          <label class="custom-control-label" for="touchn">Çalışır Durumda Değil</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="custom-control-gender">Klavye Aydınlatma<span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="touchy" type="radio" name="touch" value="1" checked="">
                          <label class="custom-control-label" for="touchy">Çalışır Durumda</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="touchn" type="radio" name="touch" value="0">
                          <label class="custom-control-label" for="touchn">Çalışır Durumda Değil</label>
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
                    <h2 class="mb-3 mt-1">Cihaz Benchmark Test Sonuçları </h2>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data() {
    return {
      brand: ["Samsung", "LG", "Philips", "Vestel"," Sony"," Arçelik"," Altus"," Awox"," Axen","Beko","Digipol","Finlux","Fivo","Goldmaster","Grundig","Hi-Level","Hitachi","Jameson","JVC","Kamosonic","Luxor","Navitech ","Next","Nordmende","Panasonic","Premier","Profilo","Regal"," Rowell"," SEG"," Sharp"," Skytech","Sunny"," Techwood"," Telefox"," Telefunken "," Toshiba"," Woon"," Botech"," Redline"," Blaupunkt"," Daewoo"," Dijitsu"," DijiTv"," Dikom","Elton","Hello"," Keysmart"," Morio"," Nexon"," Olimpia"," Onvo"," PEAQ"," Practica"," Quax"," Saba","Sheen"," Strong"," TCL"," Telenova","Ventus"," Weston"," Xiaomi"],
      guarantee: ["1","2","3","4","....","....","...","22","23","24"],
      color: ["Siyah","Beyaz","Gümüş","Pembe","Mavi","....","...."],
      screensize: ["2.3 inç","8 inç"],
      paneltechnology: ["Led TV","Lcd TV","Oled TV","Qled TV","OLED","NanoCell TV"],
      operatingsystem:["WebOS","Tizen","Android","Roku","Amazon Fire"],


      screenresolution: ["QHD+","QHD","FHD+"],
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





    }
  },


}
</Script>

<style scope>
.banner-wrapper {
  padding: 150px 0 0 !important;
}


</style>