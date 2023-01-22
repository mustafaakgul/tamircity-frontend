<template>
  <form method="POST" @submit.prevent="requestExpertisePCInfo()">
  <div class="banner-wrapper">
    <div class="container">
      <section class="guides-section">
        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-12 col-md-12">
            <div class="row ">
              <div class="col-md-12">
                <div class="questions-card">
                  <div class="questions-header">
                    <h2 class="mb-0 ">Bilgisayar Ekspertiz Formu</h2>
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
                    <h4 class="mb-3 mt-1">Genel Özellikler</h4><hr>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Ekran Boyutu <span class="text-danger">*</span></label>
                        <vue-select :options="screensize"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group form-focus">
                        <label>Max. Ekran Çözünürlüğü<span class="text-danger">*</span></label>
                        <input type="text" class="form-control floating">
                        <label class="focus-label">1024 x 600 - 4096 x 2160</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Ekran Çözünürlük Biçimi<span class="text-danger">*</span></label>
                        <vue-select :options="screenresolutionstyle"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Ekran Panel Tipi<span class="text-danger">*</span></label>
                        <vue-select :options="paneltype"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>İşletim Sistemi<span class="text-danger">*</span></label>
                        <vue-select :options="operatingsystem"/>
                      </div>
                    </div>
                    <h4 class="mb-3 mt-1">Fiziksel Özellikler</h4><hr>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Kart Okuyucu <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="cardreadery" type="radio" name="cardreader" value="1" checked="">
                            <label class="custom-control-label" for="cardreadery">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="cardreadern" type="radio" name="cardreader" value="0">
                            <label class="custom-control-label" for="cardreadern">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Kamera <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="cameray" type="radio" name="camera" value="1" checked="">
                            <label class="custom-control-label" for="cameray">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="cameran" type="radio" name="camera" value="0">
                            <label class="custom-control-label" for="cameran">Yok</label>
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
                            <input class="custom-control-input" id="fingerreadern" type="radio" name="fingerreader" value="0">
                            <label class="custom-control-label" for="fingerreadern">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Klavye Arka Aydınlatma <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="ledy" type="radio" name="led" value="1" checked="">
                            <label class="custom-control-label" for="ledy">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="ledn" type="radio" name="led" value="0">
                            <label class="custom-control-label" for="ledn">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Dokunmatik Ekran  <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="tsy" type="radio" name="ts" value="1" checked="">
                            <label class="custom-control-label" for="tsy">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="tsn" type="radio" name="ts" value="0">
                            <label class="custom-control-label" for="tsn">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4 class="mb-3 mt-1">İşlemci&Ram</h4><hr>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>İşlemci Markası <span class="text-danger">*</span></label>
                        <vue-select :options="operatingbrand" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>İşlemci Serisi<span class="text-danger">*</span></label>
                        <vue-select :options="operatingseries" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>İşlemci Çekirdek Sayısı <span class="text-danger">*</span></label>
                        <vue-select :options="operatingsfrequency" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>İşlemci Temel Frekans<span class="text-danger">*</span></label>
                        <vue-select :options="frequency" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>İşlemci Ön Belleği<span class="text-danger">*</span></label>
                        <vue-select :options="cash" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Ram (Bellek) Boyutu <span class="text-danger">*</span></label>
                        <vue-select :options="ram" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group form-focus">
                        <label>Ram (Bellek) Frekansı <span class="text-danger">*</span></label>
                        <input type="text" class="form-control floating">
                        <label class="focus-label">1066MHz-5200Mhz</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Ram (Bellek) Türü <span class="text-danger">*</span></label>
                        <vue-select :options="ramtype" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Intel Turbo Boost <span class="text-danger">*</span></label>
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
                    <h4 class="mb-3 mt-1">Depolama </h4><hr>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Sabit Disk (HDD) Boyutu<span class="text-danger">*</span></label>
                        <vue-select :options="hddsize" />
                      </div>
                    </div> <div class="col-md-6">
                    <div class="form-group">
                      <label>SSD Boyutu<span class="text-danger">*</span></label>
                      <vue-select :options="ssdsize" />
                    </div>
                  </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">SSD<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="ssdy" type="radio" name="ssd" value="1" checked="">
                            <label class="custom-control-label" for="ssdy">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="ssdn" type="radio" name="ssd" value="0">
                            <label class="custom-control-label" for="ssdn">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4 class="mb-3 mt-1">Harici Ekran Kartı </h4><hr>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Harici Ekran Kartı  <span class="text-danger">*</span></label>
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
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Harici Ekran Kartı<span class="text-danger">*</span></label>
                        <vue-select :options="egcard"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Harici Ekran Kartı Serisi<span class="text-danger">*</span></label>
                        <vue-select :options="egcardseries"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Harici Ekran Kartı Belleği <span class="text-danger">*</span></label>
                        <vue-select :options="egcardmemory"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Harici Ekran Kartı Bit  <span class="text-danger">*</span></label>
                        <vue-select :options="egcardbit"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group form-focus">
                        <label>Ekran Kartı Çekirdek Hızı <span class="text-danger">*</span></label>
                        <input type="text" class="form-control floating">
                        <label class="focus-label">Ekran Kartı Çekirdek Hızı </label>
                      </div>
                    </div>
                    <h4 class="mb-3 mt-1">Dahili Ekran Kartı</h4><hr>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>İşlemci Grafik  <span class="text-danger">*</span></label>
                        <vue-select :options="pgraphics"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group form-focus">
                        <label>Grafik Taban Frekansı<span class="text-danger">*</span></label>
                        <input type="text" class="form-control floating">
                        <label class="focus-label">1MHz-1000GHz</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group form-focus">
                        <label>Grafik Maks. Dinamik Frekansı<span class="text-danger">*</span></label>
                        <input type="text" class="form-control floating">
                        <label class="focus-label">1MHz-1000GHz</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">4K Desteği<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="4ky" type="radio" name="4k" value="1" checked="">
                            <label class="custom-control-label" for="4ky">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="4kz" type="radio" name="4k" value="0">
                            <label class="custom-control-label" for="4kz">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">DirectX <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="directy" type="radio" name="directy" value="1" checked="">
                            <label class="custom-control-label" for="directy">DirectX 12</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="directn" type="radio" name="directy" value="0">
                            <label class="custom-control-label" for="directn">DirectX 12.1</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group form-focus">
                        <label>DirectX Diğer<span class="text-danger">*</span></label>
                        <input type="text" class="form-control floating">
                        <label class="focus-label"></label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>OpenGL<span class="text-danger">*</span></label>
                        <vue-select :options="opengl"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Desteklenen Ekran Sayısı <span class="text-danger">*</span></label>
                        <vue-select :options="screenquantity"/>
                      </div>
                    </div>
                    <h4 class="mb-3 mt-1">Bağlantı</h4><hr>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Ethernet<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="ethernety" type="radio" name="ethernet" value="1" checked="">
                            <label class="custom-control-label" for="ethernety">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="ethernetn" type="radio" name="ethernet" value="0">
                            <label class="custom-control-label" for="ethernetn">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group form-focus">
                        <label>Ethernet Versiyonu<span class="text-danger">*</span></label>
                        <input type="text" class="form-control floating">
                        <label class="focus-label"></label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Wİ-Fİ Versiyonu <span class="text-danger">*</span></label>
                        <vue-select :options="wifiversion"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">HDMI<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="hdmıy" type="radio" name="hdmı" value="1" checked="">
                            <label class="custom-control-label" for="hdmıy">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="hdmın" type="radio" name="hdmı" value="0">
                            <label class="custom-control-label" for="hdmın">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Bluetooth<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="bluetoothy" type="radio" name="bluetooth" value="1" checked="">
                            <label class="custom-control-label" for="bluetoothy">Var</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="bluetoothn" type="radio" name="bluetooth" value="0">
                            <label class="custom-control-label" for="bluetoothn">Yok</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>USB 2.0 Giriş Adedi<span class="text-danger">*</span></label>
                        <vue-select :options="usb2enterquantity"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>USB 3.x Giriş Adedi<span class="text-danger">*</span></label>
                        <vue-select :options="usb3enterquantity"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>USB Type-C Giriş Adedi<span class="text-danger">*</span></label>
                        <vue-select :options="typec"/>
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
                            <input class="custom-control-input" id="005" type="radio" name="question30" value="1" checked="">
                            <label class="custom-control-label" for="005">Evet</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="006" type="radio" name="question30" value="0">
                            <label class="custom-control-label" for="006">Hayır</label>
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
                        <label class="custom-control-gender">Sabit Disk (HDD)<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="ay" type="radio" name="a" value="1" checked="">
                            <label class="custom-control-label" for="ay">Çalışır Durumda</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="an" type="radio" name="a" value="0">
                            <label class="custom-control-label" for="an">Çalışır Durumda Değil</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Harici Disk (SSD)<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="hdisky" type="radio" name="hdisk" value="1" checked="">
                            <label class="custom-control-label" for="hdisky">Çalışır Durumda</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="hdiskn" type="radio" name="hdisk" value="0">
                            <label class="custom-control-label" for="hdiskn">Çalışır Durumda Değil</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Harici Ekran Kartı<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="hscy" type="radio" name="hsc" value="1" checked="">
                            <label class="custom-control-label" for="hscy">Çalışır Durumda</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="hscn" type="radio" name="hsc" value="0">
                            <label class="custom-control-label" for="hscn">Çalışır Durumda Değil</label>
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
                            <input class="custom-control-input" id="oy" type="radio" name="o" value="1" checked="">
                            <label class="custom-control-label" for="oy">Çalışır Durumda</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="on" type="radio" name="o" value="0">
                            <label class="custom-control-label" for="on">Çalışır Durumda Değil</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Ethernet Girişi<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="ey" type="radio" name="ee" value="1" checked="">
                            <label class="custom-control-label" for="ey">Çalışır Durumda</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="en" type="radio" name="ee" value="0">
                            <label class="custom-control-label" for="en">Çalışır Durumda Değil</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">WiFi <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="wy" type="radio" name="w" value="1" checked="">
                            <label class="custom-control-label" for="wy">Çalışır Durumda</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="wn" type="radio" name="w" value="0">
                            <label class="custom-control-label" for="wn">Çalışır Durumda Değil</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">HDMI Girişi <span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="hy" type="radio" name="h" value="1" checked="">
                            <label class="custom-control-label" for="hy">Çalışır Durumda</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="hn" type="radio" name="h" value="0">
                            <label class="custom-control-label" for="hn">Çalışır Durumda Değil</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Bluetooth<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="bluetooty" type="radio" name="bluetooth" value="1" checked="">
                            <label class="custom-control-label" for="bluetoothy">Çalışır Durumda</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="bluetootn" type="radio" name="bluetooth" value="0">
                            <label class="custom-control-label" for="bluetootn">Çalışır Durumda Değil</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Dokunmatik Ekran<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="ty" type="radio" name="t" value="1" checked="">
                            <label class="custom-control-label" for="ty">Çalışır Durumda</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="tn" type="radio" name="t" value="0">
                            <label class="custom-control-label" for="tn">Çalışır Durumda Değil</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="custom-control-gender">Klavye Aydınlatma<span class="text-danger">*</span></label>
                        <div class="custom-control-box">
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="keyboardlighty" type="radio" name="keyboardlight" value="1" checked="">
                            <label class="custom-control-label" for="keyboardlighty">Çalışır Durumda</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="keyboardlightn" type="radio" name="keyboardlight" value="0">
                            <label class="custom-control-label" for="keyboardlightn">Çalışır Durumda Değil</label>
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
                            <input class="custom-control-input" id="keyboardy" type="radio" name="keyboard" value="1" checked="">
                            <label class="custom-control-label" for="keyboardy">Çalışır Durumda</label>
                          </div>
                          <div class="custom-control custom-radios custom-control-inline">
                            <input class="custom-control-input" id="keyboardn" type="radio" name="keyboard" value="0">
                            <label class="custom-control-label" for="keyboardn">Çalışır Durumda Değil</label>
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
            <div class="row justify-content-center card answer-card">
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
  expertisePCInfo: []
}

export default {
  name: 'App',
  data() {
    return {
      brand: ["Acer", "Apple", " Asus ", "Asus Rog","Casper","Dell","HP","Huawei","Lenovo","Microsoft","Monster","MSI","Samsung", "Toshiba"],
      model: ["Model","xxxx","yyy"],
      guarantee: ["1","2","3","4","....","....","...","22","23","24"],
      color: ["Siyah","Beyaz","Gümüş","Pembe","Mavi","....","...."],
      screensize: ["10 inç","10,1 inç","11 inç","11,6 inç","12,3 inç","12,5 inç","12,6 inç","13 inç","13,3 inç","13,4 inç","13,5 inç","13,9 inç","14 inç","14,1 inç","15 inç","15,6 inç","16 inç","16,1 inç","16,2 inç","16,6 inç","17 inç","17,3 inç"],
      displaytechnology: ["AMOLED","Dynamic AMOLED","Super AMOLED","IPS LCD","OLED","PLS","..."],
      screenresolutionstyle: ["FHD ","FHD+ ","HD","HD+ ","QHD ","QHD+ ","UHD ","UHD+ ","VGA+"],
      paneltype: ["LED (IPS) ","LED (TN) ","LED (SVA) ","LED (WVA) ","OLED ","LED (UWVA)","LTPS LCD ","AMOLED "],
      operatingsystem: ["Windows","MacOS","Linux","UNIX","Android","Pardus","IOS"],
      operatingbrand: ["Intel","AMD","Apple"],
      operatingseries: ["AMD 3000 ","AMD A serisi","AMD Athlon ","AMD C","AMD E Serisi","AMD FX","AMD Ryzen 3 ","AMD Ryzen 5 ","AMD Ryzen 5 Pro ","AMD Ryzen 7 ","AMD Ryzen 7 Pro ","AMD Ryzen 9 ","Apple M1 ","Apple M1 Max","Apple M1 Pro","Apple M2 ","ARM Cortex","Core 2 Duo","Intel Atom ","Intel Celeron ","Intel Core i3","Intel Core i5 ", "Intel Core i7", "Intel Core i9 ", "Intel Core M", "Intel Core M3", "Intel Pentium","Intel Pentium Gold", "Intel Pentium Silver ", "Intel Xeon E", "Intel Xeon E3","Intel Xeon W ", "Snapdragon 7c", "V Serisi"],
      operatingsfrequency: ["2","4","6","8","10","12","16","32","64"],
      cash: [" 18 MB "," 25 MB "," 25 MB "," 32 MB "," 35 MB "," 64 MB "," 4 MB "," 6 MB "," 8 MB "," 12 MB "," 16 MB "," 19 MB "," 20 MB "," 30 MB "," 36 MB "," 256 MB "],
      ram: ["1 GB","2 GB","4 GB","6 GB","8 GB","12 GB","16 GB","20 GB","24 GB","32 GB","36 GB","40 GB","48 GB","64 GB","128 GB","256 GB","512 GB","1 TB"],
      ramtype: ["DDR3 ","DDR3L ","DDR4 ","DDR5 ","LPDDR3 ","LPDDR4 ","LPDDR4x ","LPDDR5 "],
      hddsize:["2 TB","1 TB","512 GB","500 GB","256 GB","250 GB","128 GB","120 GB","64 GB","32 GB","16 GB"],
      ssdsize: ["8 GB","16 GB","32 GB","64 GB","120 GB","126 GB","128 GB","240 GB","250 GB","256 GB","384 GB","480 GB","500 GB","512 GB","1 TB","2 TB","3 TB","4 TB","5 TB","6 TB","11 TB"],
      egcard:["AMD","NVIDIA","Intel"],
      egcardseries: ["AMD Radeon Pro","AMD Radeon Pro 500","AMD Radeon Pro 500","AMD Radeon Pro 5300M","AMD Radeon Pro Vega","AMD Radeon RX","AMD Radeon RX 5000","AMD Radeon RX 5000","AMD Radeon RX 600","AMD RX","NVIDIA GeForce","NVIDIA GeForce 900","NVIDIA GeForce GT","NVIDIA GeForce GTX","NVIDIA GeForce GTX 1000","NVIDIA GeForce GTX 1650","NVIDIA GeForce GTX 1650 Ti","NVIDIA GeForce GTX 1660 Ti","NVIDIA GeForce GTX 900","NVIDIA GeForce GTX MX100","NVIDIA GeForce GTX MX400","NVIDIA GeForce GTX MX450","NVIDIA GeForce M100","NVIDIA GeForce MX","NVIDIA GeForce MX100","NVIDIA GeForce MX100","NVIDIA GeForce MX110","NVIDIA GeForce MX130","NVIDIA GeForce MX200","NVIDIA GeForce MX230","NVIDIA GeForce MX300","NVIDIA GeForce MX330","NVIDIA GeForce MX350","NVIDIA GeForce MX400","NVIDIA GeForce MX450","NVIDIA GeForce RTX","NVIDIA GeForce RTX","NVIDIA GeForce RTX 2000","NVIDIA GeForce RTX 2060","NVIDIA GeForce RTX 2080","NVIDIA GeForce RTX 3000","NVIDIA GeForce RTX 3050","NVIDIA GeForce RTX 3080","NVIDIA Quadro","NVIDIA Quadro K","NVIDIA Quadro P","NVIDIA Quadro P600","NVIDIA Quadro RTX","NVIDIA Quadro RTX","NVIDIA Quadro RTX A","NVIDIA Quadro T","NVIDIA Quadro T2000","NVIDIA T","Radeon RX" ],
      egcardmemory: ["1 GB","2 GB","4 GB","6 GB","8 GB","10 GB","12 GB","16 GB",],
      egcardbit: ["64 Bit","96 Bit","128 Bit","160 Bit","192 Bit","256 Bit","320 Bit"],
      pgraphics: ["AMD Radeon ","AMD Radeon 4","AMD Radeon 660M","AMD Radeon HD 8210","AMD Radeon R3","AMD Radeon RX640","AMD Radeon Vega 10","AMD Radeon Vega 8","Apple M1","Intel HD 400","Intel HD 4000","Intel HD 4200","Intel HD 4400","Intel HD 4600","Intel HD 500","Intel HD 505","Intel HD 510","Intel HD 520","Intel HD 530","Intel HD 5300","Intel HD 5500","Intel HD 5500","Intel HD 600","Intel HD 6000","Intel HD 605","Intel HD 610","Intel HD 615","Intel HD 620","Intel HD 630","Intel Iris 550","Intel Iris 550","Intel Iris 6100","Intel Iris 6100","Intel Iris Graphics 550","Intel Iris Graphics 615","Intel Iris Plus","Intel Iris Plus 550","Intel Iris Plus 640","Intel Iris Plus 645","Intel Iris Plus 650","Intel Iris Plus 655","Intel Iris X","Intel Iris Xe","Intel UHD 10. Nesil","Intel UHD 11. Nesil","Intel UHD 360 Graphics","Intel UHD 500","Intel UHD 600","Intel UHD 615","Intel UHD 617","Intel UHD 620","Intel UHD 630","Intel UHD 8. Nesil","Intel UHD Grafik","Intel UHD P630","Radeon","Radeon RX Vega 10","Radeon Vega 10","Radeon Vega 3","Radeon Vega 3","Radeon Vega 8","Subtopic 62"],
      opengl: ["OpenGL 4.4","OpenGL 4.5","OpenGL 4.6"],
      screenquantity: ["1","2","3","4"],
      wifiversion: ["Wi-Fi (802.11b/g) ","Wi-Fi 4 (802.11n) ","Wi-Fi 5 (802.11ac) ","Wi-Fi 6 (802.11ax) ","WiGig (802.11ad)","Killer 802.11 ac ","Killer 802.11 ax ","Killer Wi-Fi 6E (802.11ax 6)"],
      usb2enterquantity: ["1","2","3","4"],
      usb3enterquantity: ["1","2","3","4"],
      typec: ["1","2","3","4","5"],
      frequency: [" 2.5 GHz "," 2.6 GHz "," 2.7 GHz "," 2.8 GHz "," 2.9 GHz "," 3.0 GHz ", " 3.1 GHz "," 3.2 GHz "," 3.3 GHz "," 3.4 GHz "," 3.5 GHz "," 3.6 GHz "," 3.7 GHz "," 3.8 GHz "," 3.9 GHz "," 4.0 GHz", " 4.1 GHz "," 4.3 GHz "," 4.50 GHz "," 4.7 GHz " ],
      appData
    }
  },

  mounted: function () {

  },

  methods: {
    requestExpertisePCInfo: requestExpertisePCInfo
  }
}

async function requestExpertisePCInfo() {
  await axios.post(
      "http://157.230.124.187:8888/api/v1/expertise_pc_infos",
      {
        reservation_id : 1,
        invoice : true,
        box : false,
        guarantee_term : 5,
        phone_color : "red",
        screen_size :20,
        screen_resolution : "asd",
        screen_resolution_type : "res",
        screen_panel_type : "pal",
        operating_system : "op",
        card_reader : true,
        camera : true,
        finger_print_reader: true,
        touch_screen : true,
        keyboard_backlight : false,
        cpu : "asd",
        cpu_serie : "asd",
        cpu_base_frequency :25,
        cpu_core_number : 4,
        cpu_ram : 12,
        intel_turba_boost : true,
        ram : 16,
        ram_frequency : "asd",
        ram_type : "asd",
        hdd_capacity : 512,
        ssd : true,
        ssd_capacity : 200,
        external_graphics_card : true,
        external_graphics_card_brand : "asd",
        external_graphics_card_series : "asd",
        external_graphics_card_memory : "memo",
        external_graphics_card_bit: 5,
        external_graphics_card_core_speed : 3,
        internal_graphics_card_cpu : "asd",
        graphic_base_frequency : 5,
        graphic_max_dynamic_frequency :5,
        four_k : true,
        directx : true,
        open_gl : 20,
        supperted_screen_number :2,
        ethernet : true,
        ethernet_version : true,
        wifi_version : "asd",
        hdmi : true,
        bluetooth : false,
        usb_2_number : 2,
        usb_3_number : 2,
        usb_type_c_number :1,
        is_screen_has_broken_problem               :false,
        is_screen_has_loss_problem                 :true,
        is_screen_has_dead_pixel_problem           :false,
        is_device_has_case_problem                 :true,
        is_device_has_cover_problem                :false,
        is_device_has_broken_key_problem           :true,
        is_device_has_function_less_key_problem    :false,
        is_device_has_charge_socket_problem        :true,
        is_device_has_touch_pad_problem            :false,
        is_device_has_speaker_problem              :true,
        is_device_has_high_heat_problem            :false,
        is_device_has_high_sound_problem           :true,
        is_device_has_dvd_driver_problem           :false,
        is_device_has_usb_input_problem            :true,
        is_device_has_usb_type_c_problem           :false,
        is_device_has_card_reader_problem          :true,
        is_device_has_camera_problem               :false,
        is_device_has_finger_print_problem         :true,
        is_device_has_mother_board_problem         :false,
        is_device_has_ram_problem                  :true,
        is_device_has_hdd_problem                  :false,
        is_device_has_ssd_problem                  :true,
        is_device_has_external_graphic_card_problem:false,
        is_device_has_internal_graphic_card_problem:true,
        is_device_has_optical_reader_problem       :false,
        is_device_has_ethernet_connection_problem  :true,
        is_device_has_wifi_problem                 :false,
        is_device_has_hdmi_problem                 :true,
        is_device_has_bluetooth_problem            :false,
        is_device_has_head_phone_socket_problem    :true,
        is_device_has_touch_screen_problem         :false,
        is_device_has_keyboard_backlight_problem   :true
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