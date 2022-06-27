<template>
<!-- Guide Subscription -->
<div class="row justify-content-center align-items-center">
    <div class="col-lg-3 col-md-6 d-flex">
        <div class="card plan-card w-100">
            <div class="card-header">
                <h2 class="card-title plan-title">Basic</h2>
                <span class="price-content">Monthly Price</span>
            </div>
            <div class="card-body">
                <div class="plan-price">
                    <h2>$1200</h2>
                    <span>Duration: One Year</span>
                </div>
                <div class="plan-info">
                    <ul>
                        <li>
                            <span>
                                <i class="fas fa-check-circle text-primary me-2"></i>One listing submission
                            </span>
                        </li>
                        <li>
                            <span>
                                <i class="fas fa-check-circle text-primary me-2"></i>One listing submission
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="plan-btn">
                    <a href="javascript:void(0);" class="btn btn-primary">Select Plan</a>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 d-flex">
        <div class="card plan-card w-100">
            <div class="card-header">
                <h2 class="card-title plan-title">Standard</h2>
                <span class="price-content">Monthly Price</span>
            </div>
            <div class="card-body">
                <div class="plan-price">
                    <h2>$1500</h2>
                    <span>Duration: Two Years</span>
                </div>
                <div class="plan-info">
                    <ul>
                        <li>
                            <span>
                                <i class="fas fa-check-circle text-primary me-2"></i>One listing submission
                            </span>
                        </li>
                        <li>
                            <span>
                                <i class="fas fa-check-circle text-primary me-2"></i>One listing submission
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="plan-btn">
                    <a href="javascript:void(0);" class="btn btn-primary">Select Plan</a>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 d-flex">
        <div class="card plan-card w-100">
            <div class="card-header">
                <h2 class="card-title plan-title">Enterprice</h2>
                <span class="price-content">Monthly Price</span>
            </div>
            <div class="card-body">
                <div class="plan-price">
                    <h2>$1800</h2>
                    <span>Duration: Three Years</span>
                </div>
                <div class="plan-info">
                    <ul>
                        <li>
                            <span>
                                <i class="fas fa-check-circle text-primary me-2"></i>One listing submission
                            </span>
                        </li>
                        <li>
                            <span>
                                <i class="fas fa-check-circle text-primary me-2"></i>One listing submission
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="plan-btn">
                    <a href="javascript:void(0);" class="btn btn-primary">Select Plan</a>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 d-flex">
        <div class="card plan-card w-100">
            <div class="card-header">
                <h2 class="card-title plan-title">Trial</h2>
                <span class="price-content">Monthly Price</span>
            </div>
            <div class="card-body">
                <div class="plan-price">
                    <h2>$2100</h2>
                    <span>Duration: Four Years</span>
                </div>
                <div class="plan-info">
                    <ul>
                        <li>
                            <span>
                                <i class="fas fa-check-circle text-primary me-2"></i>One listing submission
                            </span>
                        </li>
                        <li>
                            <span>
                                <i class="fas fa-check-circle text-primary me-2"></i>One listing submission
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="plan-btn">
                    <a href="javascript:void(0);" class="btn btn-primary">Select Plan</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row justify-content-center">
    <div class="col-lg-6 col-md-12">
        <div class="card subscription-card">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="card-title sub-title">Plan Details</h5>
                <i class="fas fa-check-circle subscription-icon"></i>
            </div>
            <div class="card-body">
                <div class="guide-subscription d-flex align-items-center">
                    <div class="guide-subscription-title">
                        <h3>Enterprice</h3>
                        <p>Monthly Price</p>
                    </div>
                    <div class="guide-subscription-amount ms-auto">
                        <h3>$1800</h3>
                        <p>Duration: Three Years</p>
                    </div>
                </div>
                <div class="guide-plans d-flex align-items-center">
                    <div class="subscription-btn ms-auto">
                        <a href="javascript:void(0);" class="btn btn-primary">Change Plan</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-12">
        <div class="card mb-0">
            <div class="card-header">
                <h5 class="card-title sub-title">Subscribed Details</h5>
            </div>
            <div class="card-body ps-0 pe-0 pb-0">
                <div class="table-responsive">
                    <table class="table table-hover table-center mb-0">
                        <thead>
                            <tr>
                                <th>Plan</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in GuideSubscription" :key="item.id">
                                <td>{{item.Plan}}</td>
                                <td>{{item.Sartdate}}</td>
                                <td>{{item.Enddate}}</td>
                                <td class="text-primary"><b>{{item.Amount}}</b></td>
                                <td><span class="badge bg-success-light" v-if="item.Status === 'Paid'">{{item.Status}}</span>
                                    <span class="badge bg-warning-light" v-else-if="item.Status === 'Cancelled'">{{item.Status}}</span>
                                    <span class="badge bg-danger-light" v-else="item.Status === 'Failed'">{{item.Status}}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /Guide Subscription -->
</template>
<script>
    import GuideSubscription from '../../../../assets/json/guidesubscriptions.json';
      import Vue from 'vue'
      export default {
        data() {
        return {
            GuideSubscription: GuideSubscription
        }
      },
        components: {
        },
        mounted() {
        
        },
      }
    </Script>