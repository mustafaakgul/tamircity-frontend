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
                          <label>Platform <span class="text-danger">*</span></label>
                          <vue-select :options="platform" />
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
                          <vue-select :options="operatingsystem"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>İşlemci Modeli <span class="text-danger">*</span></label>
                          <vue-select :options="preprocessormodel" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Fps Değeri<span class="text-danger">*</span></label>
                          <vue-select :options="fps" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Bellek (Ram) <span class="text-danger">*</span></label>
                          <vue-select :options="preprocessorfrequency" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Bellek Tipi<span class="text-danger">*</span></label>
                          <vue-select :options="ramtype" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Oyun Çözünürlüğü <span class="text-danger">*</span></label>
                          <vue-select :options="gamesolution" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Video Çözünürlüğü <span class="text-danger">*</span></label>
                          <vue-select :options="videosolution" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Ağ Bağlantı Türü <span class="text-danger">*</span></label>
                          <vue-select :options="networkconnectiontype" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Video Kayıt Çözünürlüğü <span class="text-danger">*</span></label>
                          <vue-select :options="videorecordingresolution" />
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
                          <vue-select :options="hdmı" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>USB Versiyonu <span class="text-danger">*</span></label>
                          <vue-select :options="usbversion" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Bluetooth Versiyonu<span class="text-danger">*</span></label>
                          <vue-select :options="bluetoothversion" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Oyun Kumandası Adedi<span class="text-danger">*</span></label>
                          <vue-select :options="controllerquantity" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Oyun Adedi<span class="text-danger">*</span></label>
                          <vue-select :options="gamequantity"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>USB Giriş Adedi <span class="text-danger">*</span></label>
                          <vue-select :options="usbquantity" />
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="custom-control-gender">HDR Desteği <span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="hdry" type="radio" name="hdr" value="hdr" checked="">
                              <label class="custom-control-label" for="hdry">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="hdrz" type="radio" name="hdr" value="hdr">
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
                              <input class="custom-control-input" id="ethernety" type="radio" name="ethernet" value="ethernet" checked="">
                              <label class="custom-control-label" for="recognitiony">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="ethernetn" type="radio" name="ethernet" value="ethernet">
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
                              <input class="custom-control-input" id="usby" type="radio" name="usb" value="1" checked="">
                              <label class="custom-control-label" for="usby">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="usbz" type="radio" name="usb" value="0">
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
                              <input class="custom-control-input" id="bluetoothy" type="radio" name="bluetoothy" value="1" checked="">
                              <label class="custom-control-label" for="bluetoothy">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="bluetoothz" type="radio" name="bluetooth" value="0">
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
                              <input class="custom-control-input" id="voicecontroly" type="radio" name="voicecontrol" value="1" checked="">
                              <label class="custom-control-label" for="voicecontroly">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="voicecontrolz" type="radio" name="voicecontrol" value="0">
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
                              <input class="custom-control-input" id="gamecontrollery" type="radio" name="gamecontroller" value="1" checked="">
                              <label class="custom-control-label" for="gamecontrollery">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="gamecontrollerz" type="radio" name="gamecontroller" value="0">
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
                              <input class="custom-control-input" id="gamey" type="radio" name="game" value="1" checked="">
                              <label class="custom-control-label" for="gamey">Var</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="gamez" type="radio" name="game" value="0">
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
                          <label class="custom-control-gender">Cihaz kutusunda ışık arızası mevcut mu ?<span class="text-danger">*</span></label>
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
                          <label class="custom-control-gender">Cihaz kumanda kolunda ışık arızası mevcut mu ?<span class="text-danger">*</span></label>
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
                          <label class="custom-control-gender">Cihaz kumanda kolunda titreşim sorunu mevcut mu ?<span class="text-danger">*</span></label>
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
                          <label class="custom-control-gender">Cihaz kumanda kolunda analog lastik arızası mevcut mu ?<span class="text-danger">*</span></label>
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
                          <label class="custom-control-gender">Cihaz kumanda kolunda tuş takımı sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="055" type="radio" name="question3" value="1" checked="">
                              <label class="custom-control-label" for="055">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="066" type="radio" name="question3" value="0">
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
                          <label class="custom-control-gender">Cihaz kutusu USB Soketi sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
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
                          <label class="custom-control-gender">Cihaz kumanda kolu USB Soketi sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
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
                          <label class="custom-control-gender">Cihaz çalışma esnasında aşırı ısınıyor mu ?<span class="text-danger">*</span></label>
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
                          <label class="custom-control-gender">Cihaz çalışma esnasında normalin üzerinde ses çıkarıyor mu ?<span class="text-danger">*</span></label>
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
                          <label class="custom-control-gender">Cihazda ağa bağlanma sorunu var mı ?<span class="text-danger">*</span></label>
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
                          <label class="custom-control-gender">Cihaz optik sürücüsü sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
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
                          <label class="custom-control-gender">Cihaz çalışma esnasında disk okuma hatası veriyor mu ?<span class="text-danger">*</span></label>
                          <div class="custom-control-box">
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="26" type="radio" name="question14" value="1" checked="">
                              <label class="custom-control-label" for="26">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="27" type="radio" name="question14" value="0">
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
                              <input class="custom-control-input" id="28" type="radio" name="question15" value="1" checked="">
                              <label class="custom-control-label" for="28">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="29" type="radio" name="question15" value="0">
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
                              <input class="custom-control-input" id="32" type="radio" name="question17" value="1" checked="">
                              <label class="custom-control-label" for="32">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="33" type="radio" name="question17" value="0">
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
                              <input class="custom-control-input" id="34" type="radio" name="question18" value="1" checked="">
                              <label class="custom-control-label" for="34">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="35" type="radio" name="question18" value="0">
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
                              <input class="custom-control-input" id="36" type="radio" name="question19" value="1" checked="">
                              <label class="custom-control-label" for="36">Evet</label>
                            </div>
                            <div class="custom-control custom-radios custom-control-inline">
                              <input class="custom-control-input" id="37" type="radio" name="question19" value="0">
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
      hdmı:["HDMI 1.2","HDMI 1.4","HDMI 2.0","HDMI 2.0b","HDMI 2.1"],
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
        invoice : true,
        box : true,
        guarantee_term : 2,
        color : "asd",
        platform : "asd",
        storage_capacity : 2,
        os_type : "asd",
        cpu_model : "asd",
        fps_value : 2,
        hdr_support : true,
        ram : 2,
        ram_type : "asd",
        game_resolution : "asd",
        video_resolution : "vide",
        network_type : "net",
        ethernet : true,
        ethernet_speed :2,
        hdmi_standart : "asd",
        usb_input : 2,
        usb_input_number : 2,
        usb_version : "asd",
        bluetooth: true,
        bluetooth_version : "asd",
        voice_support : true,
        controller : true,
        controller_number : 2,
        game : true,
        game_number :2,
        is_box_has_has_problem : true,
        is_box_has_light_problem: false,
        is_controller_has_light_problem: true,
        is_controller_has_vibration_problem: false,
        is_controller_has_analog_problem: true,
        is_controller_has_button_problem: false,
        is_device_has_button_problem: true,
        is_device_has_usb_problem: false,
        is_controller_has_usb_problem: true,
        is_device_has_heat_problem: false,
        is_device_has_hight_sound_problem: true,
        is_device_has_network_connection_problem: false,
        is_device_has_oprical_driver_problem: true,
        is_device_has_disk_reading_problem: false,
        is_device_has_ethernet_problem: true,
        is_device_has_hdmi_problem: false,
        is_device_has_usb_inputs_problem: true,
        is_device_has_bluetooth_problem : false
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