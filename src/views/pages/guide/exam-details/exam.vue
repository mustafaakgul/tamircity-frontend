<template>
<!-- Exam Details -->
<section class="exam-details-section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="exam-info">
                    <h2>English Proficiency Test</h2>
                    <p>The proficiency test below is made up of multiple sections, each comprised of 10-15 questions. Once you have answered all of the questions in a particular section, click the “Next Section” link at the end of the page to proceed. Once you have answered all of the questions on the final section, click the “Get Your Score” button at the end of the test to get your score. You can return to a previous section either by choosing the section in the progress bar above the test or by clicking the “Previous Section” link at the bottom of the test. At any point, you can click the “Restart Test” link to start over. Note: Clicking “Restart Test” will clear all of your previously answered questions and return you to the beginning.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <ul class="questions-nav nav">
                    <li>
                        <a href="javascript:void(0);" class="active">Grammar I 15 Questions</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">Grammar II 15 Questions</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">Vocabulary 10 Questions</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">Reading Comprehension 10 Questions</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="questions-card">
                    <div class="questions-header">
                        <h5 class="mb-0">Instruction :<span> Choose the answer</span></h5>
                        <a href="javascript:void(0);"><i class="fas fa-arrows-rotate me-2"></i> Restart test</a>
                    </div>
                </div>
                <div class="card answer-card">
                    <div class="card-body">
                        <p class="answer-title">Grammar I</p>
                        <div class="answer-details">
                            <h4><span>1 .</span> Juan___________ in the library this morning.</h4>
                            <ul class="answer-list">
                                <li>
                                    <a href="javascript:void(0);">
                                        <span>A</span>
                                        <p>Lorem ipsum</p>  
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="active">
                                        <span>B</span>
                                        <p>Dolor sit</p>  
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <span>C</span>
                                        <p>Consectetur</p>  
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <span>D</span>
                                        <p>Adipiscing</p>  
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="answer-dot">
                    <a href="javascript:void(0);"><i class="fas fa-circle"></i></a>
                    <a href="javascript:void(0);"><i class="fas fa-circle"></i></a>
                    <a href="javascript:void(0);"><i class="fas fa-circle"></i></a>
                </div>
                <div class="card answer-card">
                    <div class="card-body">
                        <p class="answer-title">Grammar II</p>
                        <div class="answer-details">
                            <h4><span>2 .</span> Juan___________ in the library this morning.</h4>
                            <ul class="answer-list">
                                <li>
                                    <a href="javascript:void(0);">
                                        <span>A</span>
                                        <p>Lorem ipsum</p>  
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <span>B</span>
                                        <p>Dolor sit</p>  
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="active">
                                        <span>C</span>
                                        <p>Consectetur</p>  
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <span>D</span>
                                        <p>Adipiscing</p>  
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="d-md-flex answer-buttons">
                    <div class="answer-btn">
                        <a href="javascript:void(0);" class="btn back-btn"><i class="fas fa-chevron-left me-2"></i> Go Back</a>
                    </div>
                    <div class="answer-btns ms-auto">
                        <a href="javascript:void(0);" class="btn btn-primary save-btn me-3">Save test</a>
                        <a href="javascript:void(0);" class="btn btn-secondary next-btn">Next Section</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Exam Details -->
</template>