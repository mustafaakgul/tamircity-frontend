<template>
  <!-- Guide Bookings -->

  <div v-for="service in getStateTechServices" :key="service" class="row">
    <div class="col-md-12">
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="new_bookings" role="tabpanel" aria-labelledby="new-bookings">
          <div class="card guide-booking-table mb-0">
            <div class="card-body p-0">
              <div class="table-responsive">
                <table class="table table-center mb-0">
                  <tbody>
                  <tr>
                    <td>
                      <div class="table-booking d-flex align-items-center">
                        <div class="table-booking-img">
                          <router-link to="/guide-settings">
                            <img class="avatar me-2 avatar-img" src="../../../assets/img/profiles/avatar-04.jpg" alt="User Image">
                          </router-link>
                        </div>
                        <div class="table-booking-info">
                          <router-link to="">
                            {{ service.text }}
                          </router-link>
                          <p>14 Nov 2022, 10.00 AM</p>
                          <div class="comment-date">
                            <p class="text-primary mb-0"><i class="fas fa-clock me-1"></i> August 13, 2022 13:03 pm</p>
                            <div class="review-count rating">
                              <i class="fas fa-star filled"></i>
                              <i class="fas fa-star filled"></i>
                              <i class="fas fa-star filled"></i>
                              <i class="fas fa-star filled"></i>
                              <i class="fas fa-star"></i>
                              <span class="d-inline-block average-rating">(04)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="table-booking-address d-flex align-items-center">
                        Newyork, United States
                        <div
                            class="
                            table-booking-address
                            d-flex
                            align-items-center
                          "
                        >
                          {{ service.address }}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="table-booking-address d-flex align-items-center">
                        georgeanderson@example.com
                      </div>
                    </td>
                    <td>
                      <div class="table-booking-address d-flex align-items-center">
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
                        <a href="javascript:void(0);" @click="getExtras(service)" class="btn booking-btn-accept">
                          Seç
                        </a>
                        <!-- <a href="javascript:void(0);" class="btn booking-btn-cancel mb-0">
                          Cancel
                        </a> -->
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

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      getStateTechServices: "getStateTechServices",
    }),
  },
  methods:{
    ...mapActions(["getExtras"])
  }
};
</script>
