<template>
 <!-- Guide Bookings -->
 <div class="row">
    <div class="col-md-12">
        <div class="guide-bookings-tab">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a v-on:click="hello('pending')" class="nav-link active" id="new-bookings" data-bs-toggle="tab" href="#new_bookings" role="tab" aria-controls="new_bookings" aria-selected="true">Bekleyenler</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a v-on:click="hello('approved')" class="nav-link" id="approved-booking" data-bs-toggle="tab" href="#approved_booking" role="tab" aria-controls="approved_booking" aria-selected="false">Onaylananlar</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a v-on:click="hello('completed')" class="nav-link" id="completed-booking" data-bs-toggle="tab" href="#completed_booking" role="tab" aria-controls="completed_booking" aria-selected="false">Tamamlananlar</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a v-on:click="hello('cancelled')" class="nav-link" id="cancelled-booking" data-bs-toggle="tab" href="#cancelled_booking" role="tab" aria-controls="cancelled_booking" aria-selected="false">İptal Edilenler</a>
                </li>
            </ul>
        </div>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="new_bookings" role="tabpanel" aria-labelledby="new-bookings">
                <div class="card guide-booking-table mb-0">
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-center mb-0">
                                <tbody>
                                    <tr v-for="item in pendingBookings" :key="item.id">
                                        <td>
                                            <div class="table-booking d-flex align-items-center">
                                                <div class="table-booking-img">
                                                    <router-link to="/guide-settings">
                                                        <img class="avatar me-2 avatar-img" src="../../../../assets/img/profiles/avatar-04.jpg" alt="User Image">
                                                    </router-link>
                                                </div>
                                                <div class="table-booking-info">
                                                    <router-link to="/guide-settings">
                                                        {{ item.full_name }}
                                                    </router-link>
                                                    <p><i class="fas fa-clock me-1"></i>{{ item.reservation_date }}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-map-pin"></i></span>
                                                {{ item.model_name}}
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-mail"></i></span>
                                                {{ item.email }}
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-phone-call"></i></span>
                                                {{ item.phone_number }}
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
                                                <a href="javascript:void(0);" class="btn booking-btn-accept">
                                                    <i class="far fa-circle-check me-1"></i> Accept
                                                </a>
                                                <a href="javascript:void(0);" class="btn booking-btn-cancel mb-0">
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
            <div class="tab-pane fade" id="approved_booking" role="tabpanel" aria-labelledby="approved-booking">
              <div class="card guide-booking-table mb-0">
                <div class="card-body p-0">
                  <div class="table-responsive">
                    <table class="table table-center mb-0">
                      <tbody>
                      <tr v-for="item in approvedBookings" :key="item.id">
                        <td>
                          <div class="table-booking d-flex align-items-center">
                            <div class="table-booking-img">
                              <router-link to="/guide-settings">
                                <img class="avatar me-2 avatar-img" src="../../../../assets/img/profiles/avatar-04.jpg" alt="User Image">
                              </router-link>
                            </div>
                            <div class="table-booking-info">
                              <router-link to="/guide-settings">
                                {{ item.full_name }}
                              </router-link>
                              <p><i class="fas fa-clock me-1"></i>{{ item.reservation_date }}</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="table-booking-address d-flex align-items-center">
                            <span><i class="feather-map-pin"></i></span>
                              {{ item.model_name}}
                          </div>
                        </td>
                        <td>
                          <div class="table-booking-address d-flex align-items-center">
                            <span><i class="feather-mail"></i></span>
                              {{ item.email }}
                          </div>
                        </td>
                        <td>
                          <div class="table-booking-address d-flex align-items-center">
                            <span><i class="feather-phone-call"></i></span>
                              {{ item.phone_number }}
                          </div>
                        </td>
                        <td>
                          <div class="table-booking-payment">
                            <span>$ 120</span>
                            <p>Fully Paid</p>
                          </div>
                        </td>
                        <td>
                         <div class="table-booking-btn">
                            <a :href="'/formpageexpertise' + item.device_type_name" class="btn booking-btn-accept">
                              <i class="far fa-circle-info me-1"></i> Forma Git
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
            <div class="tab-pane fade" id="completed_booking" role="tabpanel" aria-labelledby="completed-booking">
                <div class="card guide-booking-table mb-0">
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-center mb-0">
                                <tbody>
                                    <tr v-for="item in completedBookings" :key="item.id">
                                        <td>
                                            <div class="table-booking d-flex align-items-center">
                                                <div class="table-booking-img">
                                                    <router-link to="/guide-settings">
                                                        <img class="avatar me-2 avatar-img" src="../../../../assets/img/profiles/avatar-04.jpg" alt="User Image">
                                                    </router-link>
                                                </div>
                                                <div class="table-booking-info">
                                                    <router-link to="/guide-settings">
                                                        {{ item.full_name }}
                                                    </router-link>
                                                    <p><i class="fas fa-clock me-1"></i>{{ item.reservation_date}}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-map-pin"></i></span>
                                                  {{ item.model_name}}
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-mail"></i></span>
                                                  {{ item.email }}
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-phone-call"></i></span>
                                                  {{ item.phone_number }}
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-payment">
                                                <span>$ 120</span>
                                                <p>Fully Paid</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-completed">
                                                <span>
                                                    <i class="far fa-circle-check me-1"></i> Completed
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="cancelled_booking" role="tabpanel" aria-labelledby="cancelled-booking">
                <div class="card guide-booking-table mb-0">
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-center mb-0">
                                <tbody>
                                    <tr v-for="item in cancelledBookings" :key="item.id">
                                        <td>
                                            <div class="table-booking d-flex align-items-center">
                                                <div class="table-booking-img">
                                                    <router-link to="/guide-settings">
                                                        <img class="avatar me-2 avatar-img" src="../../../../assets/img/profiles/avatar-04.jpg" alt="User Image">
                                                    </router-link>
                                                </div>
                                                <div class="table-booking-info">
                                                    <router-link to="/guide-settings">
                                                        {{ item.full_name }}
                                                    </router-link>
                                                    <p><i class="fas fa-clock me-1"></i>{{ item.reservation_date }}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-map-pin"></i></span>
                                                  {{ item.model_name}}
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-mail"></i></span>
                                                  {{ item.email }}
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-address d-flex align-items-center">
                                                <span><i class="feather-phone-call"></i></span>
                                                  {{ item.phone_number }}
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-payment">
                                                <span>$ 30/10</span>
                                                <p>Un Paid</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table-booking-cancelled">
                                                <span>
                                                    <i class="far fa-circle-check me-1"></i> Cancelled
                                                </span>
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
import axios from "axios";

export default {
    name: "GuideBookings",
    data() {
      return {
        pendingBookings: [],
        approvedBookings: [],
        cancelledBookings: [],
        completedBookings: [],
      }
    },
    mounted () {
      this.getBookingPending()
    },
    methods: {
        getBookingApproved() {
          axios.get('http://157.230.124.187:8888/api/v1/reservations/approved?expertise_service_id=1')
              .then(response => {
                this.approvedBookings = response.data.data
              })
        },
        getBookingCancelled() {
          axios.get('http://157.230.124.187:8888/api/v1/reservations/cancelled?expertise_service_id=1')
              .then(response => {
                this.cancelledBookings = response.data.data
              })
        },
        getBookingPending() {
          axios.get('http://157.230.124.187:8888/api/v1/reservations/pending?expertise_service_id=1')
              .then(response => {
                console.log(response.data.data)
                this.pendingBookings = response.data.data
              })
        },
        getBookingCompleted() {
          axios.get('http://157.230.124.187:8888/api/v1/reservations/completed?expertise_service_id=1')
              .then(response => {
                console.log(response.data.data)
                this.completedBookings = response.data.data
              })
        },
        hello(message) {
            if( message == "pending" ) {
                this.getBookingPending()
            } else if( message == "approved" ) {
                this.getBookingApproved()
            } else if( message == "completed" ) {
                this.getBookingCompleted()
            } else if( message == "cancelled" ) {
                this.getBookingCancelled()
            }
        }
    }
}
</script>