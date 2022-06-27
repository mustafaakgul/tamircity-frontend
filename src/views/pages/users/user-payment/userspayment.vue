<template>
<!-- User Payment -->
<div class="card transaction-table mb-0">
    <div class="card-header border-0">
        <h5 class="card-title">Payment</h5>
    </div>
    <div class="card-body p-0">
        <div class="table-responsive">
            <table class="table table-center mb-0">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Transaction Id</th>
                        <th>Date</th>
                        <th>Reason</th>
                        <th>Amount</th>
                        <th>Payment Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in paymentuser" :key="item.id">
                        <td>{{item.sno}}</td>
                        <td>{{item.transactionid}}</td>
                        <td>{{item.date}}</td>
                        <td>{{item.reason}}</td>
                        <td>{{item.amont}}</td>
                        <td>{{item.payment}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
<!-- /User Payment -->
</template>
<script>
import paymentuser from '../../../../assets/json/paymentuser.json';
    import Vue from 'vue'
    export default {
        data() {
        return {
            paymentuser: paymentuser
        }
        },
        components: {
        },
        mounted() {
        
        },
    }
</Script>