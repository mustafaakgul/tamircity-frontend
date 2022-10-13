<template>

    <div class="banner-wrapper">
      <div class="container  ">
        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-12 col-md-12">
            <div class="row ">
              <div class="col-md-12">
                <div class="questions-card">
                  <div class="questions-header">
                    <h5 class="mb-0 ">Telefon Ekspertiz Formu</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center card answer-card  ">
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
                      <div class="form-group">
                        <label>Garanti süresi<span class="text-danger">*</span></label>
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
                                <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                                <label class="custom-control-label" for="male">Var</label>
                              </div>
                              <div class="custom-control custom-radios custom-control-inline">
                                <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                                <label class="custom-control-label" for="female">Yok</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="custom-control-gender">Kutu <span class="text-danger">*</span></label>
                            <div class="custom-control-box">
                              <div class="custom-control custom-radios custom-control-inline">
                                <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                                <label class="custom-control-label" for="male">Var</label>
                              </div>
                              <div class="custom-control custom-radios custom-control-inline">
                                <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                                <label class="custom-control-label" for="female">Yok</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">

                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="row justify-content-center card answer-card ">
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
            <div class="row justify-content-center card answer-card  ">
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
                            <span>ID/Passport Upload</span>
                            <label class="relative-file-upload">
                              Upload Now <input type="file">
                            </label>
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
                      <h3 class="mb-3 mt-1">Cihaz Özellikleri</h3>
                    </div>
                  </div>
                  <div class="row align-items-center">
                    <h4 class="mb-3 mt-1">Ekran özellikleri</h4>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Ekran Boyutu <span class="text-danger">*</span></label>
                        <vue-select :options="screensize" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Ekran Teknolojisi <span class="text-danger">*</span></label>
                        <vue-select :options="displaytechnology"/>
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
                            <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                            <label class="custom-control-label" for="male">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                            <label class="custom-control-label" for="female">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4 class="mb-3 mt-1">Teknik Özellikler</h4>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>İşlemci Modeli <span class="text-danger">*</span></label>
                        <vue-select :options="preprocessormodel" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>İşlemci Frekansı<span class="text-danger">*</span></label>
                        <vue-select :options="preprocessorfrequency" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Ram Kapasitesi <span class="text-danger">*</span></label>
                        <vue-select :options="ram" />
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
                      <div class="form-group">
                        <label>İşlemci Çekirdek Sayısı <span class="text-danger">*</span></label>
                        <vue-select :options="numberprocessorcores" />
                      </div>
                    </div>
                    <h4 class="mb-3 mt-1">Kamera Özellikleri</h4>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Kamera Çözünürlüğü <span class="text-danger">*</span></label>
                        <vue-select :options="cameraresolution" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Ön Kamera Çözünürlüğü <span class="text-danger">*</span></label>
                        <vue-select :options="frontcameraresolution" />
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
                            <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                            <label class="custom-control-label" for="male">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                            <label class="custom-control-label" for="female">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Slow Motion Video Çekimi<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                            <label class="custom-control-label" for="male">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                            <label class="custom-control-label" for="female">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Kamera Yapay Zeka Desteği <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                            <label class="custom-control-label" for="male">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                            <label class="custom-control-label" for="female">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Zamanlayıcı <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                            <label class="custom-control-label" for="male">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                            <label class="custom-control-label" for="female">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Otomatik Odaklama  <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                            <label class="custom-control-label" for="male">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                            <label class="custom-control-label" for="female">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Otomatik Odaklama  <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                            <label class="custom-control-label" for="male">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                            <label class="custom-control-label" for="female">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Coğrafi Konum Ekleme  <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                            <label class="custom-control-label" for="male">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                            <label class="custom-control-label" for="female">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Sesli Komut <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                            <label class="custom-control-label" for="male">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                            <label class="custom-control-label" for="female">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4 class="mb-3 mt-1">Depolama</h4>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Dahili Depolama<span class="text-danger">*</span></label>
                        <vue-select :options="internalstorage" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Maksimum Hafıza Kartı Kapsitesi<span class="text-danger">*</span></label>
                        <vue-select :options="maximummemorycardcapacity" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Hafıza Kartı Desteği <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                            <label class="custom-control-label" for="male">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                            <label class="custom-control-label" for="female">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4 class="mb-3 mt-1">Batarya Özellikleri</h4>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Şarj Tipi <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                            <label class="custom-control-label" for="male">USB Type-C</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                            <label class="custom-control-label" for="female">Micro-USB</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Batarya Kapsitesi <span class="text-danger">*</span></label>
                        <vue-select :options="batterycapacity" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Kablosuz Şarj <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                            <label class="custom-control-label" for="male">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                            <label class="custom-control-label" for="female">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Hızlı Şarj <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                            <label class="custom-control-label" for="male">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                            <label class="custom-control-label" for="female">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Kablosuz Hızlı Şarj <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                            <label class="custom-control-label" for="male">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                            <label class="custom-control-label" for="female">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Çıkarılabilir Batarya <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                            <label class="custom-control-label" for="male">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                            <label class="custom-control-label" for="female">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4 class="mb-3 mt-1">Bağlantılar</h4>
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
                            <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                            <label class="custom-control-label" for="male">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                            <label class="custom-control-label" for="female">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">5G Desteği  <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                            <label class="custom-control-label" for="male">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                            <label class="custom-control-label" for="female">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4 class="mb-3 mt-1">Ek Özellikler</h4>
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
                            <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                            <label class="custom-control-label" for="male">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                            <label class="custom-control-label" for="female">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Toza Dayanıklılık<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                            <label class="custom-control-label" for="male">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                            <label class="custom-control-label" for="female">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Parmak İzi Okuyucu <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                            <label class="custom-control-label" for="male">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                            <label class="custom-control-label" for="female">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Çift SIM<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                            <label class="custom-control-label" for="male">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                            <label class="custom-control-label" for="female">Yok</label>
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
                      <h3 class="mb-3 mt-1">Çalışma Durumu</h3>
                    </div>
                  </div>
                  <div class="row align-items-center">
                    <div class="col-md-6">
                      <div class="form-group form-focus">
                        <label>First Name <span class="text-danger">*</span></label>
                        <input type="text" class="form-control floating">
                        <label class="focus-label">Enter First Name</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group form-focus">
                        <label>Last Name <span class="text-danger">*</span></label>
                        <input type="text" class="form-control floating">
                        <label class="focus-label">Enter Last Name</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group form-focus">
                        <label>Email <span class="text-danger">*</span></label>
                        <input type="text" class="form-control floating">
                        <label class="focus-label">Enter Email Address</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group form-focus">
                        <label>Mobile Number <span class="text-danger">*</span></label>
                        <input type="text" class="form-control floating">
                        <label class="focus-label">Enter Mobile Number</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Date of birth <span class="text-danger">*</span></label>
                        <vue-select :options="DATE" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Gender <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                            <label class="custom-control-label" for="male">Male</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                            <label class="custom-control-label" for="female">Female</label>
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
                      <h3 class="mb-3 mt-1">Cihaz ile İlgili Uzman Notları</h3>
                    </div>
                  </div>
                  <div class="row align-items-center">
                    <div class="col-md-6">
                      <div class="form-group form-focus">
                        <label>First Name <span class="text-danger">*</span></label>
                        <input type="text" class="form-control floating">
                        <label class="focus-label">Enter First Name</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group form-focus">
                        <label>Last Name <span class="text-danger">*</span></label>
                        <input type="text" class="form-control floating">
                        <label class="focus-label">Enter Last Name</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group form-focus">
                        <label>Email <span class="text-danger">*</span></label>
                        <input type="text" class="form-control floating">
                        <label class="focus-label">Enter Email Address</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group form-focus">
                        <label>Mobile Number <span class="text-danger">*</span></label>
                        <input type="text" class="form-control floating">
                        <label class="focus-label">Enter Mobile Number</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Date of birth <span class="text-danger">*</span></label>
                        <vue-select :options="DATE" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Gender <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="male" type="radio" name="stripe" value="phpmail" checked="">
                            <label class="custom-control-label" for="male">Male</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="female" type="radio" name="stripe" value="smtp">
                            <label class="custom-control-label" for="female">Female</label>
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

      </div>
    </div>

</template>

<script>
import Vue from 'vue'
export default {
  data() {
    return {
      brand: ["Marka", "aaaaa", " bbbbb", "ccccccc"],
      model: ["Model","xxxx","yyy"],
      guarantee: ["1","2","3","4","....","....","...","22","23","24"],
      color: ["Siyah","Beyaz","Gümüş","Pembe","Mavi","....","...."],
      screensize: ["2.3 inç","8 inç"],
      displaytechnology: ["AMOLED","Dynamic AMOLED","Super AMOLED","IPS LCD","OLED","PLS","..."],
      screenresolution: ["QHD+","QHD","FHD+"],
      preprocessormodel: ["Qualcomm","MediaTek","Samsung","HiSilicon"],
      preprocessorfrequency: ["0.5GHz","......","3.5GHz"],
      ram: ["2GB","4GB","...","18GB"],
      operatingsystem: ["Android","Apple IOS","Blackberry OS"],
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