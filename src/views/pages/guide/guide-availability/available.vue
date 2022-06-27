<template>
<!-- Guide Availability -->
<div class="row">
    <div class="col-md-12">
        <div class="settings-card">
            <div class="settings-title mb-0 border-0">
                <h5 class="settings-sub-title">Type of working</h5>
            </div>
        </div>
        <form action="javascript:void(0);" class="days-form">
            <div class="availability-radio-btns">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="custom_radio">
                                <input type="radio" name="days" value="hours" checked>
                                <span class="checkmark"></span> Hours
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="custom_radio">
                                <input type="radio" name="days" value="days">
                                <span class="checkmark"></span> Days
                            </label>
                        </div>
                    </div>
                </div>
            </div>
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
                                            <vue-select :options="selecttime" />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <vue-select :options="selecttime" />
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
                                            <vue-select :options="selecttime" />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <vue-select :options="selecttime" />
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
                                            <vue-select :options="selecttime" />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <vue-select :options="selecttime" />
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
                                            <vue-select :options="selecttime" />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <vue-select :options="selecttime" />
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
                                        <vue-select :options="selecttime" />
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <vue-select :options="selecttime" />
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
                                            <vue-select :options="selecttime" />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <vue-select :options="selecttime" />
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
                                            <vue-select :options="selecttime" />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <vue-select :options="selecttime" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div id="days" class="availability-filter-col">
                    <div class="card availability-card">
                        <div class="card-header border-0">
                            <h5 class="card-title sub-title">Availability In Days</h5>
                        </div>
                        <div class="availability-card-body">
                            <div class="availability-hours-list mb-0">
                                <div class="row align-items-center">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="mb-0">All Days</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>From Time</label>
                                            <vue-select :options="selecttime" />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>To Time</label>
                                            <vue-select :options="selecttime" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div class="availability-hours-list availability-box mb-0">
                                <div class="row align-items-center">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="custom_check">
                                                <input type="checkbox" name="days">
                                                <span class="checkmark"></span> Monday
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="availability-hours-list availability-box mb-0">
                                <div class="row align-items-center">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="custom_check">
                                                <input type="checkbox" name="days">
                                                <span class="checkmark"></span> Tuesday
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="availability-hours-list availability-box mb-0">
                                <div class="row align-items-center">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="custom_check">
                                                <input type="checkbox" name="days">
                                                <span class="checkmark"></span> Wednesday
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="availability-hours-list availability-box mb-0">
                                <div class="row align-items-center">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="custom_check">
                                                <input type="checkbox" name="days">
                                                <span class="checkmark"></span> Thursday
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="availability-hours-list availability-box mb-0">
                                <div class="row align-items-center">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="custom_check">
                                                <input type="checkbox" name="days">
                                                <span class="checkmark"></span> Friday
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="availability-hours-list availability-box mb-0">
                                <div class="row align-items-center">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="custom_check">
                                                <input type="checkbox" name="days">
                                                <span class="checkmark"></span> Saturday
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="availability-hours-list availability-box mb-0 border-0">
                                <div class="row align-items-center">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="custom_check">
                                                <input type="checkbox" name="days">
                                                <span class="checkmark"></span> Sunday
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group mb-0 save-changes-btn float-end">
                <button type="submit" class="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
</div>
<!-- /Guide Availability -->
</template>
<script>
    import Vue from 'vue'
    export default {
       data() {
      return {
        selecttime: ["select time", "00:00 AM", "01:00 AM", "02:00 AM", "03:00 AM", "04:00 AM", "05:00 AM", "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM"]
      }
      },
      components: {
     
      },
      mounted() {
        $(document).on('click', '.availability-radio-btns input', function() {
	    var availability_filter_col = $(this).val();
	    $("div.availability-filter-col").hide();
	    $("#" + availability_filter_col).show();
	});
      }
    }
  </Script>
