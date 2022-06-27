<template>
<!-- User Dashboard -->
<div class="row justify-content-center">
    <div class="col-lg-4 col-md-6">
        <div class="dash-widget">
            <div class="dash-widget-inner">
                <span class="dash-widget-img">
                    <img src="../../../../assets/img/icons/dashboard-icon1.svg" alt="">
                </span>
                <div class="dash-widget-info">
                    <p>Bookings</p>
                    <h4>45</h4>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-6">
        <div class="dash-widget">
            <div class="dash-widget-inner">
                <span class="dash-widget-img">
                    <img src="../../../../assets/img/icons/dashboard-icon2.svg" alt="">
                </span>
                <div class="dash-widget-info">
                    <p>Services</p>
                    <h4>54</h4>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-6">
        <div class="dash-widget">
            <div class="dash-widget-inner">
                <span class="dash-widget-img">
                    <img src="../../../../assets/img/icons/dashboard-icon3.svg" alt="">
                </span>
                <div class="dash-widget-info">
                    <p>Notifications</p>
                    <h4>78</h4>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-12">
        <div class="download-report">
            <a href="javascript:void(0);" class="btn btn-secondary">
                <i class="feather-download-cloud me-2"></i> Download Report
            </a>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-12">
        <div class="card mb-0">
            <div class="card-header d-flex align-items-center justify-content-between">
                <h5 class="card-title">Booking Statistics</h5>
                <div class="chart-box">
                    <ul class="nav">
                        <li>
                            <a href="javascript:void(0);" class="btn">Daily</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="btn">Weekly</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="btn btn active">Monthly</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="btn">Yearly</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card-body pb-0">
                <div id="chart"></div>
            </div>
        </div>
    </div>
</div>
<!-- /User Dashboard -->
</template>
<script>
	import ApexCharts from 'apexcharts'
	import Vue from 'vue'
	
	export default {
		components: {
		},
		data() {
			return {
                noofstudentsOptions : {
                    series: [{
				name: "Bookings",
				data: [0, 20, 40, 43, 40, 25, 35, 25, 40, 30]
			    }],
                colors: ['#FF5F5F'],
          chart: {
          height: 300,
          type: 'area',
		  toolbar: {
				show: false
			},
          zoom: {
            enabled: false
          }
        },
		markers: {
			size: 3,
		},
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight',
		  width: 3,
        },
		legend: {
			position: 'top',
			horizontalAlign: 'right',
		 },
        grid: {
          show: false,
        },
		yaxis: {
			axisBorder: {
				show: true,
			},
		},
        xaxis: {
          categories: ['', '02/01/2022', '13/02/2022', '12/03/2022', '05/04/2022', '31/05/2022', '17/06/2022', '08/07/2022', '13/08/2022', '25/09/2022'],
			}
		
		
				},
                }
			
		},
		
		mounted() {
			let areaChart = new ApexCharts(
			document.querySelector("#chart"),
			this.noofstudentsOptions
		);
			areaChart.render();
		}
	}
	</script>