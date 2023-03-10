<template>
<!-- Guide Reviews -->
<div class="row">
    <div class="col-md-12">
        <div class="guide-review review-listing">
            <ul class="comments-list">

                <li v-for="item in comments" :key="item.id">
                    <div class="comment">
                        <div class="review-profile">
                            <router-link to="/guide-details">
                                <img src="../../../../assets/img/provider/provider-10.jpg" class="avatar" alt="Provider Image">
                            </router-link>
                        </div>
                        <div class="comment-body">
                            <div class="meta-data">
                                <router-link to="/guide-details">Gina Moore</router-link>
                            </div>
                            <p class="comment-content">
                                Et Harum Quidem Rerum Facilis Est Et Expedita Distinctio. Nam Libero Tempore, Cum Soluta Nobis Est Eligendi Optio Cumque Nihil Impedit Quo Minus Id Quod Maxime Placeat Facere Possimus
                            </p>
                            <div class="comment-date">
                                <p class="text-primary mb-0"><i class="fas fa-clock me-1"></i> August 13, 2022 13:03 pm</p>
                                <div class="review-count rating">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="d-inline-block average-rating">(04)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</div>
<!-- /Guide Reviews -->
</template>

<script>
import axios from "axios";

export default {
    name: "ReviewGuide",
    data() {
        return {
            comments: [],
        };
    },
    mounted() {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                this.comments = response.data;
            });
    },
};
</script>