<template>
<!-- Customer Count -->
<section class="customer-count-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-sm-6">
                <div class="count-widget">
                    <h4>24x7</h4>
                    <h4>Support</h4>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="count-widget">
                    <vue3-autocounter class="counter" ref='counter' :startAmount='0' :delay='3' :endAmount='150' :duration='5' suffix='+' separator=',' :autoinit='true' />
                    <h4>Guides</h4>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="count-widget">
                    <vue3-autocounter class="counter" ref='counter' :startAmount='0' :delay='3' :endAmount='600' :duration='5' suffix='+' separator=',' :autoinit='true' />
                    <h4>Members</h4>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="count-widget border-0">
                    <h4>Fast &</h4>
                    <h4>Protect Services</h4>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Customer Count -->
</template>
<!-- Countdown JS -->
<Script setup lang="ts">

import { defineComponent } from 'vue';
import Vue3autocounter from 'vue3-autocounter';

export default defineComponent({
  name: 'Demo',
  components: {
    'vue3-autocounter': Vue3autocounter
  }
});
</Script>