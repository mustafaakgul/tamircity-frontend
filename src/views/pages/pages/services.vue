<template>
  <!-- Guide Bookings -->
  <div class="row">
    <div class="col-md-12">
      
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="new_bookings"
          role="tabpanel"
          aria-labelledby="new-bookings"
        >
          <div class="card guide-booking-table mb-0">
            <div class="card-body p-0">
              <div class="table-responsive">
                <table class="table table-center mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <div class="table-booking d-flex align-items-center">
                         
                          <div class="table-booking-info">
                            <router-link to="/guide-settings">
                              George Anderson
                            </router-link>
                            <p>
                              <i class="fas fa-clock me-1"></i> 14 Nov 2022,
                              10.00 AM
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div
                          class="
                            table-booking-address
                            d-flex
                            align-items-center
                          "
                        >
                          <span><i class="feather-map-pin"></i></span>
                          Newyork, United States
                        </div>
                      </td>
                      <td>
                        <div
                          class="
                            table-booking-address
                            d-flex
                            align-items-center
                          "
                        >
                          <span><i class="feather-mail"></i></span>
                          georgeanderson@example.com
                        </div>
                      </td>
                      <td>
                        <div
                          class="
                            table-booking-address
                            d-flex
                            align-items-center
                          "
                        >
                          <span><i class="feather-phone-call"></i></span>
                          +1 923 782 4575
                        </div>
                      </td>
                      <td>
                        <div class="table-booking-payment">
                          <span>$ 120/210</span>
                          <p>Partially Paid</p>
                        </div>
                      </td>
                      <td>
                        <div class="table-booking-btn">
                          <a
                            href="javascript:void(0);"
                            class="btn booking-btn-accept"
                          >
                            <i class="far fa-circle-check me-1"></i> Accept
                          </a>
                          <a
                            href="javascript:void(0);"
                            class="btn booking-btn-cancel mb-0"
                          >
                            <i class="far fa-circle-xmark me-1"></i> Cancel
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Guide Bookings -->
</template>