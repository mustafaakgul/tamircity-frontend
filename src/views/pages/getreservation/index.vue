<template>
  <div class="main-wrapper">
    <layouts></layouts>
    <!-- Page Content -->
    <div class="content">
      <div class="container">
        <get-reservation-infos></get-reservation-infos>
      </div>
    </div>
    <!-- /Page Content -->

    <footerind></footerind>
  </div>
</template>
<script>
import Vue from 'vue'
import GetReservationInfos from "./getreservationinfos";
export default {
  components: {
    GetReservationInfos,

  },
  mounted() {

  },
  name: 'getreservationinfos'
}
</Script>