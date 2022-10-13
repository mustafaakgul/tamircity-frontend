<template>

    <div class="banner-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="questions-card">
              <div class="questions-header">
                <h5 class="mb-0 ">Telefon Ekspertiz Formu</h5>
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
        <div class="row justify-content-center card answer-card">
          <div class="col-lg-12 col-md-12">
            <div class="settings-info">
              <div class="row">
                <div class="col-md-12">
                  <h3 class="mb-3 mt-1">Cihazın Kozmetik Durumu</h3>
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
        <div class="row justify-content-center card answer-card">
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

</template>

<script>

</script>

<style scope>
.banner-wrapper {
  padding: 180px 0 0 !important;
}



</style>