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
                          <div class="local-guides-inner">
                            <div class="local-guides-profile">
                              <div class="rating">
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star"></i>
                                <span class="d-inline-block average-rating">(20 Reviews)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="table-booking-address d-flex align-items-center">
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
                         <a href="javascript:void(0);" class="btn booking-btn-cancel mb-0">
                          Cancel
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