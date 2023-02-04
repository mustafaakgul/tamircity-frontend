<template>
<!-- Guide Availability -->
<div class="row">
    <div class="col-md-12">
        <div class="settings-card">
            <div class="settings-title mb-0 border-0">
                <h5 class="settings-sub-title">Type of working</h5>
            </div>
        </div>
        <form method="POST" @submit.prevent="updateAvailability()" class="days-form">
<!--            <div class="availability-radio-btns">-->
<!--                <div class="row">-->
<!--                    <div class="col-md-6">-->
<!--                        <div class="form-group">-->
<!--                            <label class="custom_radio">-->
<!--                                <input type="radio" name="days" value="hours" checked>-->
<!--                                <span class="checkmark"></span> Hours-->
<!--                            </label>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
            <div class="availability-filter">
                <div id="hours" class="availability-filter-col">
                    <div class="card availability-card">
                        <div class="card-header">
                            <h5 class="card-title sub-title">Availability In Hours</h5>
                        </div>
                        <div class="card-body">
                            <div class="availability-hours-list">
                                <div class="row align-items-center">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="custom_check">
                                                <input type="checkbox" name="days">
                                                <span class="checkmark"></span> Monday
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <vue-select v-model="availability.start_of_shift_1" :options="selecttime" />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <vue-select v-model="availability.end_of_shift_1" :options="selecttime" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="availability-hours-list">
                                <div class="row align-items-center">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="custom_check">
                                                <input type="checkbox" name="days">
                                                <span class="checkmark"></span> Tuesday
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <vue-select v-model="availability.start_of_shift_2" :options="selecttime" />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <vue-select v-model="availability.end_of_shift_2" :options="selecttime" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="availability-hours-list">
                                <div class="row align-items-center">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="custom_check">
                                                <input type="checkbox" name="days">
                                                <span class="checkmark"></span> Wednesday
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <vue-select v-model="availability.start_of_shift_3" :options="selecttime" />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <vue-select v-model="availability.end_of_shift_3" :options="selecttime" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="availability-hours-list">
                                <div class="row align-items-center">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="custom_check">
                                                <input type="checkbox" name="days">
                                                <span class="checkmark"></span> Thursday
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <vue-select v-model="availability.start_of_shift_4" :options="selecttime" />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <vue-select v-model="availability.end_of_shift_4" :options="selecttime" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="availability-hours-list">
                                <div class="row align-items-center">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="custom_check">
                                                <input type="checkbox" name="days">
                                                <span class="checkmark"></span> Friday
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <vue-select v-model="availability.start_of_shift_5" :options="selecttime" />
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <vue-select v-model="availability.end_of_shift_5" :options="selecttime" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="availability-hours-list">
                                <div class="row align-items-center">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="custom_check">
                                                <input type="checkbox" name="days">
                                                <span class="checkmark"></span> Saturday
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <vue-select v-model="availability.start_of_shift_6" :options="selecttime" />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <vue-select v-model="availability.end_of_shift_6" :options="selecttime" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="availability-hours-list mb-0">
                                <div class="row align-items-center">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="custom_check">
                                                <input type="checkbox" name="days">
                                                <span class="checkmark"></span> Sunday
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <vue-select v-model="availability.start_of_shift_7" :options="selecttime" />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <vue-select v-model="availability.end_of_shift_7" :options="selecttime" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group mb-0 save-changes-btn float-end">
                <button type="submit" value="Submit" class="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
</div>
<!-- /Guide Availability -->
</template>

<script>
import Vue from 'vue'
import axios from "axios";

export default {
   //name: 'Availability',
   data() {
      return {
        availability: {
        },
        selecttime: [
          "select time",
          "0:00",
          '1:00',
          '2:00',
          '3:00',
          "4:00",
          "5:00",
          "6:00",
          "7:00",
          "8:00",
          "9:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
          "19:00",
          "20:00",
          "21:00",
          "22:00",
          "23:00"
        ]
      }
   },
   methods: {
      getAvailability: getAvailability,
      updateAvailability: updateAvailability
   },
   components: {

   },
  mounted() {
      $(document).on('click', '.availability-radio-btns input', function() {
      var availability_filter_col = $(this).val();
      $("div.availability-filter-col").hide();
      $("#" + availability_filter_col).show();
  });
  this.getAvailability();
  }
}

  function getAvailability() {
     axios.get(axios.defaults.baseURL + '/api/v1/expertise-service-shifts/query?expertise_service_id=1',
         {
            headers: {
              "Content-Type": "application/json",
              //'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
         }
     ).then(response => {
       console.log(response.data.data);
        this.availability = response.data.data
     })
  }

  async function updateAvailability() {
     axios.post(axios.defaults.baseURL + '/api/v1/technical-service-shifts?technical_service_id=1',
         [
           {
             day: 1,
             start_of_shift: this.availability.start_of_shift_1,
             end_of_shift: this.availability.end_of_shift_1
           },
           {
             day: 2,
             start_of_shift: this.availability.start_of_shift_2,
              end_of_shift: this.availability.end_of_shift_2
           },
           {
             day: 3,
             start_of_shift: this.availability.start_of_shift_3,
              end_of_shift: this.availability.end_of_shift_3
           },
           {
             day: 4,
             start_of_shift: this.availability.start_of_shift_4,
              end_of_shift: this.availability.end_of_shift_4
           },
           {
             day: 5,
             start_of_shift: this.availability.start_of_shift_5,
              end_of_shift: this.availability.end_of_shift_5
           },
           {
             day: 6,
             start_of_shift: this.availability.start_of_shift_6,
              end_of_shift: this.availability.end_of_shift_6
           },
           {
             day: 7,
             start_of_shift: this.availability.start_of_shift_7,
              end_of_shift: this.availability.end_of_shift_7
           }
         ],
          {
            headers: {
              'Content-Type': 'application/json',
              //'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
          }
     ).then(response => {
       console.log(response)
       console.log(response.data)
     })
  }

//TODO:
/*
availability: {
monday: {
  start: '',
  end: ''
},
tuesday: {
  start: '',
  end: ''
},
wednesday: {
  start: '',
  end: ''
},
thursday: {
  start: '',
  end: ''
},
friday: {
  start: '',
  end: ''
},
saturday: {
  start: '',
  end: ''
},
sunday: {
  start: '',
  end: ''
}
}
*/
</script>