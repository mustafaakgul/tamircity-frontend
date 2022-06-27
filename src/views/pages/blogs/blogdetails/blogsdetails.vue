<template>
<!-- Blogs -->
<section class="blog-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-12">
                <div class="blog-view">

                    <!-- Blog Post -->
                    <div class="blog-single-post blog-grid blog-details-grid">
                        <div class="blog-image">
                            <router-link to="/blog-details">
                                <img src="../../../../assets/img/blog/blog-03.jpg" class="img-fluid" alt="">
                            </router-link>
                        </div>
                        <div class="blog-info p-0">
                            <div class="post-left">
                                <ul>
                                    <li>
                                        <div class="post-author">
                                            <a href="javascript:void(0);">
                                                <img src="../../../../assets/img/users/user-04.jpg" alt="Post Author"> Anthony
                                            </a>
                                        </div>
                                    </li>
                                    <li><i class="far fa-comments"></i> 20 Comments</li>
                                </ul>
                            </div>
                        </div>
                        <div class="blog-content blog-inner-content ps-0 pe-0">
                            <div class="blog-dates">
                                <div class="blog-created blog-inner-created">
                                    <h4><span>18 Mar</span> 2022</h4>
                                </div>
                            </div>
                            <div class="blog-inner-text">
                                <h3>
                                    <router-link to="/blog-details">Lorem Ipsum is simply dummy text of the printing and typesetting</router-link>
                                </h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic...</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic...</p>
                                <div class="blog-details-content">
                                    <p>“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic... “</p>
                                </div>
                                <div class="blog-image">
                                    <router-link to="/blog-details">
                                        <img src="../../../../assets/img/blog/blog-04.jpg" class="img-fluid" alt="">
                                    </router-link>
                                </div>
                                <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic...</p>
                            </div>
                        </div>
                        <div class="blog-share">
                            <div class="blog-footer p-0">
                                <ul class="post-tags">
                                    <li><span>Posted in : </span></li>
                                    <li><a href="javascript:void(0);">Indoor</a></li>
                                    <li><a href="javascript:void(0);">Travel</a></li>
                                </ul>
                            </div>
                            <div class="blog-social-links">
                                <ul class="social-share">
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i class="fab fa-facebook-f hi-icon"></i></a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i class="fab fa-twitter hi-icon"></i></a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i class="fab fa-linkedin-in hi-icon"></i></a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i class="fab fa-youtube hi-icon"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="blog-about-author">
                            <div class="blog-author-img">
                                <a href="javascript:void(0);">
                                    <img src="../../../../assets/img/users/user-01.jpg" alt="">
                                </a>
                            </div>
                            <div class="blog-author-content">
                                <h4>About author</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis accumsan est, in ornare diam. Nulla interdum nulla quis odio convallis suscipit. Etiam faucibus placerat metus, sit amet euismod nisi gravida id. Suspendisse non ligula ultricies, gravida purus ut, ullamcorper tellus.</p>
                            </div>
                        </div>
                        <div class="blog-post-about">
                            <div class="blog-next d-flex align-items-center">
                                <div class="blog-next-img me-3">
                                    <router-link to="/blog-grid">
                                        <img src="../../../../assets/img/blog/blog-13.jpg" class="img-fluid" alt="">
                                    </router-link>
                                </div>
                                <div class="blog-next-content">
                                    <router-link to="/blog-grid">Next</router-link>
                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                </div>
                            </div>
                            <div class="blog-next blog-next-right d-flex align-items-center">
                                <div class="blog-next-content">
                                    <router-link to="/blog-grid">Previous</router-link>
                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                </div>
                                <div class="blog-next-img ms-3">
                                    <router-link to="/blog-grid">
                                        <img src="../../../../assets/img/blog/blog-14.jpg" class="img-fluid" alt="">
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="blog-comments">
                            <h5 class="blog-comments-title">Comments</h5>
                            <div class="blog-comments-author">
                                <div class="blog-comments-img">
                                    <img src="../../../../assets/img/users/user-01.jpg" alt="">
                                </div>
                                <div class="blog-comments-content">
                                    <h4>Harris <span>August 13, 2022</span></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis accumsan est, in ornare diam. Nulla interdum nulla quis odio convallis suscipit. Etiam faucibus placerat metus, sit amet euismod nisi gravida id. Suspendisse non ligula ultricies, gravida purus ut, ullamcorper tellus.</p>
                                    <a class="comment-btn" href="javascript:void(0);">
                                        <i class="fas fa-reply me-1"></i> Reply
                                    </a>
                                </div>
                            </div>
                            <div class="blog-comments-author mb-0 pb-0 border-0">
                                <div class="blog-comments-img">
                                    <img src="../../../../assets/img/users/user-08.jpg" alt="">
                                </div>
                                <div class="blog-comments-content">
                                    <h4>Veronica <span>September 20, 2022</span></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis accumsan est, in ornare diam. Nulla interdum nulla quis odio convallis suscipit. Etiam faucibus placerat metus, sit amet euismod nisi gravida id. Suspendisse non ligula ultricies, gravida purus ut, ullamcorper tellus.</p>
                                    <a class="comment-btn" href="javascript:void(0);">
                                        <i class="fas fa-reply me-1"></i> Reply
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card blog-post-card mb-0">
                            <div class="card-header blog-post-header">
                                <h5 class="card-title">Leave a Reply</h5>
                            </div>
                            <div class="card-body">
                                <form action="blog-details">
                                    <div class="form-group form-focus">
                                        <label>Name <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control floating">
                                        <label class="focus-label">Enter Name</label>
                                    </div>
                                    <div class="form-group form-focus">
                                        <label>Email Address <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control floating">
                                        <label class="focus-label">Enter Email Address</label>
                                    </div>
                                    <div class="form-group form-focus">
                                        <label>Website <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control floating">
                                        <label class="focus-label">Enter Website</label>
                                    </div>
                                    <div class="form-group form-focus">
                                        <label>Comments <span class="text-danger">*</span></label>
                                        <textarea class="form-control floating"></textarea>
                                        <label class="focus-label">Comments</label>
                                    </div>
                                    <div class="form-group mb-0 post-submit">
                                        <button class="btn btn-primary" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- /Blog Post -->

                </div>
            </div>

            <!-- Blog Sidebar -->
            <div class="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
                <div class="stickysidebar">
                    <div class="card blog-card">
                        <div class="card-body">
                            <form action="javascript:void(0);" class="blog-search-form">
                                <div class="input-group form-focus mb-0">
                                    <input type="text" class="form-control floating">
                                    <label class="focus-label">Search...</label>
                                    <button type="submit" class="btn btn-primary"><i class="feather-search"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                 
                <div class="card blog-card">
                    <div class="card-header">
                        <h5 class="card-title">About Author</h5>
                    </div>
                    <div class="card-body">
                        <div class="blog-author-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor tellus, eu consectetur neque elit quis nunc.</p>
                        </div>
                    </div>
                </div>
                <div class="card blog-card">
                    <div class="card-header">
                        <h5 class="card-title">Blog Categories</h5>
                    </div>
                    <div class="card-body">
                        <ul class="blog-categories">
                            <li><a href="javascript:void(0);">Exploring <span>(62)</span></a></li>
                            <li><a href="javascript:void(0);">Holidays <span>(27)</span></a></li>
                            <li><a href="javascript:void(0);">Travel <span>(41)</span></a></li>
                            <li><a href="javascript:void(0);">Videos <span>(16)</span></a></li>
                            <li><a href="javascript:void(0);">Exploring <span>(55)</span></a></li>
                            <li><a href="javascript:void(0);">Holidays <span>(07)</span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="card blog-card">
                    <div class="card-header">
                        <h5 class="card-title">Latest Posts</h5>
                    </div>
                    <div class="card-body">
                        <ul class="latest-posts">
                            <li>
                                <div class="post-thumb">
                                    <router-link to="/blog-details">
                                        <img src="../../../../assets/img/blog/blog-thumb-01.jpg" class="img-fluid" alt="">
                                    </router-link>
                                </div>
                                <div class="post-info">
                                    <h4>
                                        <router-link to="/blog-details">Lorem Ipsum is simply dummy text of the printing</router-link>
                                    </h4>
                                    <p><i class="feather-calendar me-1"></i> 04 Jan 2022</p>
                                </div>
                            </li>
                            <li>
                                <div class="post-thumb">
                                    <router-link to="/blog-details">
                                        <img src="../../../../assets/img/blog/blog-thumb-02.jpg" class="img-fluid" alt="">
                                    </router-link>
                                </div>
                                <div class="post-info">
                                    <h4>
                                        <router-link to="/blog-details">Lorem Ipsum is simply dummy text of the printing</router-link>
                                    </h4>
                                    <p><i class="feather-calendar me-1"></i> 13 Feb 2022</p>
                                </div>
                            </li>
                            <li>
                                <div class="post-thumb">
                                    <router-link to="/blog-details">
                                        <img src="../../../../assets/img/blog/blog-thumb-03.jpg" class="img-fluid" alt="">
                                    </router-link>
                                </div>
                                <div class="post-info">
                                    <h4>
                                        <router-link to="/blog-details">Lorem Ipsum is simply dummy text of the printing</router-link>
                                    </h4>
                                    <p><i class="feather-calendar me-1"></i> 20 Mar 2022</p>
                                </div>
                            </li>
                            <li>
                                <div class="post-thumb">
                                    <router-link to="/blog-details">
                                        <img src="../../../../assets/img/blog/blog-thumb-04.jpg" class="img-fluid" alt="">
                                    </router-link>
                                </div>
                                <div class="post-info">
                                    <h4>
                                        <router-link to="/blog-details">Lorem Ipsum is simply dummy text of the printing</router-link>
                                    </h4>
                                    <p><i class="feather-calendar me-1"></i> 02 Apr 2022</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card blog-card mb-0">
                    <div class="card-header">
                        <h5 class="card-title">Tags</h5>
                    </div>
                    <div class="card-body tag-body">
                        <ul class="tags">
                            <li><a href="javascript:void(0);" class="tag">Adventure</a></li>
                            <li><a href="javascript:void(0);" class="tag">Exotic</a></li>
                            <li><a href="javascript:void(0);" class="tag">Last Minute</a></li>
                            <li><a href="javascript:void(0);" class="tag">Tips Tricks</a></li>
                            <li><a href="javascript:void(0);" class="tag">Adventure</a></li>
                            <li><a href="javascript:void(0);" class="tag">Exotic</a></li>
                            <li><a href="javascript:void(0);" class="tag">Last Minute</a></li>
                            <li><a href="javascript:void(0);" class="tag">Tips Tricks</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            <!-- /Blog Sidebar -->

        </div>
    </div>
</section>
<!-- /Blogs -->
</template>