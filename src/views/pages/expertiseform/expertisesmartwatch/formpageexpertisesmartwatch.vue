<template>
  <div class="banner-wrapper">
    <div class="container  ">
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
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Ekran Şekli<span class="text-danger">*</span></label>
                      <vue-select :options="displayshape"/>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>İşletim Sistemi <span class="text-danger">*</span></label>
                      <vue-select :options="operatingsystem"/>
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
                          <input class="custom-control-input" id="microphoney" type="radio" name="microphone" value="1" checked="">
                          <label class="custom-control-label" for="microphoney">Var</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="microphonez" type="radio" name="microphone" value="0">
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
                          <input class="custom-control-input" id="wifiy" type="radio" name="wifi" value="1" checked="">
                          <label class="custom-control-label" for="wifiy">Var</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="wifiz" type="radio" name="wifi" value="0">
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
                          <input class="custom-control-input" id="speakery" type="radio" name="speaker" value="1" checked="">
                          <label class="custom-control-label" for="speakery">Var</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="speakerz" type="radio" name="speaker" value="0">
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
                          <input class="custom-control-input" id="simy" type="radio" name="sim" value="1" checked="">
                          <label class="custom-control-label" for="simy">Var</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="simn" type="radio" name="sim" value="0">
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
                          <input class="custom-control-input" id="dustprofy" type="radio" name="dustprof" value="1" checked="">
                          <label class="custom-control-label" for="dustprofy">Var</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="dustprofn" type="radio" name="dustprof" value="0">
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
                          <input class="custom-control-input" id="nfcy" type="radio" name="nfc" value="1" checked="">
                          <label class="custom-control-label" for="nfcy">Var</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="nfcn" type="radio" name="nfc" value="0">
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
                      <label class="custom-control-gender">Dokunmatik ekran sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
                      <div class="custom-control-box">
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="050" type="radio" name="question3" value="1" checked="">
                          <label class="custom-control-label" for="050">Evet</label>
                        </div>
                        <div class="custom-control custom-radios custom-control-inline">
                          <input class="custom-control-input" id="060" type="radio" name="question3" value="0">
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
                      <label class="custom-control-gender">Hoperlör sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
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
                      <label class="custom-control-gender">Açma Kapama tuşu sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
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
                      <label class="custom-control-gender">Cihaz şarj soketinde deformasyon veya arıza mevcut mu ?<span class="text-danger">*</span></label>
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
                      <label class="custom-control-gender">Cihazda donma veya yavaşlama problemi var mı ?<span class="text-danger">*</span></label>
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
                      <label class="custom-control-gender">Bluetooth özelliği sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
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
                      <label class="custom-control-gender">Wi-Fi bağlantısı sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
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
                      <label class="custom-control-gender">Mikrofon sorunsuz çalışıyor mu ?<span class="text-danger">*</span></label>
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
                      <label class="custom-control-gender">Cihazda şebeke problemi var mı ?<span class="text-danger">*</span></label>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brand: ["Xiaomi", "Samsung", " Apple", "Huawei"],
      productfamily: ["Apple Watch","Apple Watch Nike","Apple Watch Nike SE","Huawei Watch","Samsung Galaxy","Samsung Gear","Xiaomi Mi Watch","Xiaomi Redmi Watch","Xiaomi Watch"],
      displayshape: ["Dikdötgen","Kare","Daire"],
      operatingsystem: ["Android Wear","WatchOS","Tizen","HarmonyOS ","Huawei LiteOS"],
    }
  },


}
</Script>

<style scoped>
.banner-wrapper {
  padding: 150px 0 0 !important;
}


</style>