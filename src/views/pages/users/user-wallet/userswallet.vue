<template>
<!-- User Wallet -->
<div class="row">
    <div class="col-lg-4 col-md-12 d-flex">
        <div class="card w-100">
            <div class="available-balance available-balance-box">
                <div class="available-inner justify-content-center">
                    <span class="available-icon">
                        <i class="fas fa-dollar-sign"></i>
                    </span>
                    <div class="available-details">
                        <p>Available Balance</p>
                        <h4>$250.60</h4>
                    </div>
                </div>
            </div>
            <div class="card-body p-0">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="available-content">
                        <p>Total Debit : <span>$500.00</span></p>
                    </div>
                    <div class="available-line">
                        <div class="available-line-border">
                        </div>
                    </div>
                    <div class="available-content">
                        <p>Total Credit : <span>$600.00</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-8 col-md-12 d-flex">
        <div class="card w-100">
            <div class="card-header">
                <h5 class="card-title card-title-dark">Add Wallet</h5>
            </div>
            <div class="card-body">
                <form action="javascript:void(0);" class="amount-form">
                    <div class="row align-items-center">
                        <div class="col-md-8 amount-border">
                            <div class="form-group form-focus">
                                <label>Add Amount <span class="text-danger">*</span></label>
                                <input type="text" class="form-control floating">
                                <label class="focus-label">Enter Amount</label>
                            </div>
                            <div class="form-group mb-0">
                                <ul class="amount-list nav">
                                    <li class="amount-item">
                                        <a href="javascript:void(0);" class="btn btn-secondary">$50</a>
                                    </li>
                                    <li class="amount-item">
                                        <a href="javascript:void(0);" class="btn btn-secondary">$100</a>
                                    </li>
                                    <li class="amount-item">
                                        <a href="javascript:void(0);" class="btn btn-secondary">$150</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group mb-0">
                                <label class="custom_radio">
                                    <input type="radio" name="payment" checked>
                                    <span class="checkmark"></span> Card
                                </label>
                            </div>
                            <div class="form-group mb-0">
                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add-wallet" class="amount-add-btn">Add Amount</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="card transaction-table mb-0">
    <div class="card-header border-0">
        <h5 class="card-title card-title-dark">Wallet Transactions</h5>
    </div>
    <div class="card-body p-0">
        <div class="table-responsive">
            <table class="table table-center mb-0">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Date</th>
                        <th>Wallet</th>
                        <th>Credit</th>
                        <th>Debit</th>
                        <th>Txt amt</th>
                        <th>Available</th>
                        <th>Reason</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in walletuser" :key="item.id">
                        <td>{{item.sno}}</td>
                        <td>{{item.date}}</td>
                        <td>{{item.wallet}}</td>
                        <td>{{item.tax}}</td>
                        <td>{{item.credit}}</td>
                        <td>{{item.debit}}</td>
                        <td>{{item.available}}</td>
                        <td>{{item.reason}}</td>
                        <td><span class="text-success" v-if="item.status === 'Success'">{{item.status}}</span>
                            <span class="text-warning" v-else-if="item.status === 'Cancelled'">{{item.status}}</span>
                            <span class="text-danger" v-else="item.status === 'Failed'">{{item.status}}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
<!-- /User Wallet -->
</template>
<script>
import walletuser from '../../../../assets/json/walletuser.json';
    import Vue from 'vue'
    export default {
        data() {
        return {
            walletuser: walletuser
        }
        },
        components: {
        },
        mounted() {
        
        },
    }
</Script>