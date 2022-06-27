<template>
    <div class="main-wrapper">
       <layouts></layouts>
       <breadcrumbbooking></breadcrumbbooking>
       <bookingwallet></bookingwallet>
      <footerind></footerind>
    </div>
    <bookingmodal></bookingmodal>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
    mounted() {
      // Wallet Checkbox Show

    $(document).on('click', '.card-list input', function() {
        var booking_filter_col = $(this).val();
        $("div.booking-filter-col").hide();
        $("#" + booking_filter_col).show();
    });
    },
    name: 'booking-wallet'
  }
</Script>