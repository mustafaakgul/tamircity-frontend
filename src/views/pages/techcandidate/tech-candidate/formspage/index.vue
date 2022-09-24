<template>
  <div class="main-wrapper">
    <layouts></layouts>
    <!-- Page Content -->
    <div class="content">
      <div class="container">
        <techcandidateformspage></techcandidateformspage>
      </div>
    </div>
    <!-- /Page Content -->

    <footerind></footerind>
  </div>
</template>
<script>
import Vue from 'vue'
import Techcandidateformspage from "./techcandidateformspage";
export default {
  components: {
    Techcandidateformspage,

  },
  mounted() {

  },
  name: 'techcandidate'
}
</Script>