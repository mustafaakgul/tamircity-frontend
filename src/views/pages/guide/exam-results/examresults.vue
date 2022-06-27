<template>
<!-- Exam Results -->
<section class="exam-details-section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <div class="circle-bar-main">
                            <div class="row justify-content-center align-items-center">
                                <div class="col">
                                    <div class="questions-box">
                                        <p>Grammar I 15 Questions <span>5 / 10</span></p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="circle-bar circle-bar1">
                                        <div class="circle-graph1" data-percent="50">
                                            <span>50%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="circle-bar-main">
                            <div class="row justify-content-center align-items-center">
                                <div class="col">
                                    <div class="questions-box">
                                        <p>Grammar II 20 Questions <span>7 / 10</span></p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="circle-bar circle-bar1">
                                        <div class="circle-graph1" data-percent="70">
                                            <span>70%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="circle-bar-main">
                            <div class="row justify-content-center align-items-center">
                                <div class="col">
                                    <div class="questions-box">
                                        <p>Vocabulary 10 Questions <span>3 / 10</span></p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="circle-bar circle-bar1">
                                        <div class="circle-graph1" data-percent="30">
                                            <span>30%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="circle-bar-main mb-0">
                            <div class="row justify-content-center align-items-center">
                                <div class="col">
                                    <div class="questions-box">
                                        <p>Reading Comprehension 10 Questions <span>4 / 10</span></p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="circle-bar circle-bar1">
                                        <div class="circle-graph1" data-percent="40">
                                            <span>40%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="card result-card mb-0">
                    <div class="card-body">
                        <div class="result-info">
                            <div class="result-info-left d-flex align-items-center">
                                <div class="result-info-text">
                                    <p>Result</p>
                                </div>
                            </div>
                            <div class="result-info-right">
                                <ul class="nav align-items-center">
                                    <li class="nav-item">
                                        <span class="text-success">
                                            <i class="feather-check-circle me-2"></i>Test Passed 28
                                        </span>
                                    </li>
                                    <li class="nav-item">
                                        <span class="text-danger">
                                            <i class="feather-x-circle me-2"></i> Test Failed 25
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="result-btn text-center">
                    <router-link to="/guide-settings" class="btn btn-primary me-2">Go to profile</router-link>
                    <router-link to="/exam-details" class="btn btn-warning">Take test Again</router-link>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Exam Results -->
</template>
<script>
    import Vue from 'vue'
    export default {
       data() {
      return {
        
      }
      },
      components: {
     
      },
      mounted() {
        function animateElements() {
		$('.circle-bar1').each(function () {
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var percent = $(this).find('.circle-graph1').attr('data-percent');
			var animate = $(this).data('animate');
			if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
				$(this).data('animate', true);
				$(this).find('.circle-graph1').circleProgress({
					value: percent / 100,
					size : 400,
					thickness: 30,
					fill: {
						color: '#FF5F5F'
					}
				});
			}
		});
		$('.circle-bar2').each(function () {
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var percent = $(this).find('.circle-graph2').attr('data-percent');
			var animate = $(this).data('animate');
			if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
				$(this).data('animate', true);
				$(this).find('.circle-graph2').circleProgress({
					value: percent / 100,
					size : 400,
					thickness: 30,
					fill: {
						color: '#68dda9'
					}
				});
			}
		});
		$('.circle-bar3').each(function () {
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var percent = $(this).find('.circle-graph3').attr('data-percent');
			var animate = $(this).data('animate');
			if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
				$(this).data('animate', true);
				$(this).find('.circle-graph3').circleProgress({
					value: percent / 100,
					size : 400,
					thickness: 30,
					fill: {
						color: '#1b5a90'
					}
				});
			}
		});
	}	
	
	if($('.circle-bar').length > 0) {
		animateElements();
	}
	$(window).scroll(animateElements);
      }
    }
  </Script>
