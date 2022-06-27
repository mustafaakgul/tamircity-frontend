<template>
<!-- Blogs -->
<section class="blog-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-12">
                <div class="blog-view">

                    <!-- Blog Post -->
                    <div class="blog-single-post blog-grid">
                        <div class="blog-image">
                            <router-link to="/blog-details">
                                <img src="../../../../assets/img/blog/blog-01.jpg" class="img-fluid" alt="">
                            </router-link>
                            <div class="blog-created">
                                <h4><span>13 Jan</span> 2022</h4>
                            </div>
                        </div>
                        <div class="blog-info">
                            <div class="post-left">
                                <ul>
                                    <li>
                                        <div class="post-author">
                                            <a href="javascript:void(0);">
                                                <img src="../../../../assets/img/users/user-01.jpg" alt="Post Author"> Harris
                                            </a>
                                        </div>
                                    </li>
                                    <li><i class="far fa-comments"></i> 12 Comments</li>
                                </ul>
                            </div>
                        </div>
                        <div class="blog-content">
                            <h3>
                                <router-link to="/blog-details">Lorem Ipsum is simply dummy text of the printing and typesetting</router-link>
                            </h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic...</p>
                        </div>
                        <div class="blog-footer">
                            <ul class="post-tags">
                                <li><span>Posted in : </span></li>
                                <li><a href="javascript:void(0);">Indoor</a></li>
                                <li><a href="javascript:void(0);">Travel</a></li>
                            </ul>
                        </div>
                    </div>
                    <!-- /Blog Post -->

                    <!-- Blog Post -->
                    <div class="blog-single-post blog-grid">
                        <div class="blog-image">
                            <router-link to="/blog-details">
                                <img src="../../../../assets/img/blog/blog-02.jpg" class="img-fluid" alt="">
                            </router-link>
                            <div class="blog-created">
                                <h4><span>25 Feb</span> 2022</h4>
                            </div>
                        </div>
                        <div class="blog-info">
                            <div class="post-left">
                                <ul>
                                    <li>
                                        <div class="post-author">
                                            <a href="javascript:void(0);">
                                                <img src="../../../../assets/img/users/user-08.jpg" alt="Post Author"> Veronica
                                            </a>
                                        </div>
                                    </li>
                                    <li><i class="far fa-comments"></i> 08 Comments</li>
                                </ul>
                            </div>
                        </div>
                        <div class="blog-content">
                            <h3>
                                <router-link to="/blog-details">Lorem Ipsum is simply dummy text of the printing and typesetting</router-link>
                            </h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic...</p>
                        </div>
                        <div class="blog-footer">
                            <ul class="post-tags">
                                <li><span>Posted in : </span></li>
                                <li><a href="javascript:void(0);">Travel</a></li>
                                <li><a href="javascript:void(0);">Outdoor</a></li>
                            </ul>
                        </div>
                    </div>
                    <!-- /Blog Post -->

                    <!-- Blog Post -->
                    <div class="blog-single-post blog-grid">
                        <div class="blog-image">
                            <router-link to="/blog-details">
                                <img src="../../../../assets/img/blog/blog-03.jpg" class="img-fluid" alt="">
                            </router-link>
                            <div class="blog-created">
                                <h4><span>18 Mar</span> 2022</h4>
                            </div>
                        </div>
                        <div class="blog-info">
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
                        <div class="blog-content">
                            <h3>
                                <router-link to="/blog-details">Lorem Ipsum is simply dummy text of the printing and typesetting</router-link>
                            </h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic...</p>
                        </div>
                        <div class="blog-footer">
                            <ul class="post-tags">
                                <li><span>Posted in : </span></li>
                                <li><a href="javascript:void(0);">Indoor</a></li>
                                <li><a href="javascript:void(0);">Travel</a></li>
                            </ul>
                        </div>
                    </div>
                    <!-- /Blog Post -->

                    <!-- Blog Pagination -->
                    <div class="row">
                        <div class="col-md-12">
                            <div class="blog-pagination">
                                <nav>
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item disabled">
                                            <a class="page-link" href="javascript:void(0);" tabindex="-1"><i class="fas fa-chevron-left"></i></a>
                                        </li>
                                        <li class="page-item active">
                                            <a class="page-link" href="javascript:void(0);">1</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="javascript:void(0);">2 <span class="visually-hidden">(current)</span></a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="javascript:void(0);">3</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="javascript:void(0);"><i class="fas fa-chevron-right"></i></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <!-- /Blog Pagination -->

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