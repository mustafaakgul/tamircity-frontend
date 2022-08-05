<template>
<!-- Guide Details Section -->
<section class="guide-details-section pb-0" id="messageapp">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="guide-tab">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="guide-details" data-bs-toggle="tab" href="#hizmetler" role="tab" aria-controls="guidedetails" aria-selected="true">Hizmetler</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="guide-reviews" data-bs-toggle="tab" href="#comments" role="tab" aria-controls="guidereviews" aria-selected="false">Yorumlar</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="guide-reviews" data-bs-toggle="tab" href="#meetings" role="tab" aria-controls="guidereviews" aria-selected="false">Randevu</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="guide-reviews" data-bs-toggle="tab" href="#informations" role="tab" aria-controls="guidereviews" aria-selected="false">Bilgiler</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="tab-content" id="myTabContent">
            <!-- Hizmetler İçerik -->
            <div class="tab-pane fade show active pb-5" id="hizmetler" role="tabpanel" aria-labelledby="guide-details">
                <div class="row">
                    <div class="col-lg-8 col-md-12 d-flex">
                        <div class="guide-info w-100">
                            <p>HZİMETLER SEKMESİ</p>
                                <div class="guide-img-list">
                                    <a class="fancystyle" data-fancybox="gallery">
                                        <img src="../../../../assets/img/guide-details-img1.jpg" alt="guide-img" class="img-fluid">
                                    </a>
                                </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 d-flex">
                        <div class="guide-right w-100 services-vuecordion" id="app">
                           <header>
                                <h1>VUE<span>CORDION</span></h1>
                            </header>
                            <div class="faqs">
                            <FAQ 
                                v-for="(faq, i) in faqs" 
                                :faq="faq" 
                                :index="i" 
                                :key="i"
                                :open="faq.open"
                                @toggleOpen="toggleOpen"
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Hizmetler İçerik -->
            <!-- Yorumlar İçerik -->
            <div class="tab-pane fade pb-5" id="comments" role="tabpanel" aria-labelledby="guide-reviews">
                <div class="row">
                    <div class="col-md-12">
                        <div class="guide-review review-listing">
                            <h2>YORUMLAR SEKMESİ</h2>
                            <ul class="comments-list">
                                <li>
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
                                <li>
                                    <div class="comment">
                                        <div class="review-profile">
                                            <router-link to="/guide-details">
                                                <img src="../../../../assets/img/provider/provider-04.jpg" class="avatar" alt="Provider Image">
                                            </router-link>
                                        </div>
                                        <div class="comment-body">
                                            <div class="meta-data">
                                                <router-link to="/guide-details">Bernadine</router-link>
                                            </div>
                                            <p class="comment-content">
                                                Et Harum Quidem Rerum Facilis Est Et Expedita Distinctio. Nam Libero Tempore, Cum Soluta Nobis Est Eligendi Optio Cumque Nihil Impedit Quo Minus Id Quod Maxime Placeat Facere Possimus
                                            </p>
                                            <div class="comment-date">
                                                <p class="text-primary mb-0"><i class="fas fa-clock me-1"></i> September 25, 2022 24:10 pm</p>
                                                <div class="review-count rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <span class="d-inline-block average-rating">(03)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="comment-reply">
                            <form action="javascript:void(0);">
                                <div class="form-group mb-0">
                                    <img src="../../../../assets/img/provider/provider-04.jpg" class="comment-reply-img" alt="Provider Image">
                                    <input type="text" class="form-control" placeholder="Write Review">
                                    <button type="submit" class="btn-primary comment-btn">
                                        <i class="fas fa-reply me-2"></i> Reply
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Yorumlar İçerik -->
            <!-- Randevu İçerik-->
            <div class="tab-pane fade pb-5" id="meetings" role="tabpanel" aria-labelledby="guide-reviews">
                <div class="row">
                    <div class="col-md-12">
                        <div class="guide-review review-listing">
                            <h2>RANDEVU SEKMESİ</h2>
                            <ul class="comments-list">
                                <li>
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
                                <li>
                                    <div class="comment">
                                        <div class="review-profile">
                                            <router-link to="/guide-details">
                                                <img src="../../../../assets/img/provider/provider-04.jpg" class="avatar" alt="Provider Image">
                                            </router-link>
                                        </div>
                                        <div class="comment-body">
                                            <div class="meta-data">
                                                <router-link to="/guide-details">Bernadine</router-link>
                                            </div>
                                            <p class="comment-content">
                                                Et Harum Quidem Rerum Facilis Est Et Expedita Distinctio. Nam Libero Tempore, Cum Soluta Nobis Est Eligendi Optio Cumque Nihil Impedit Quo Minus Id Quod Maxime Placeat Facere Possimus
                                            </p>
                                            <div class="comment-date">
                                                <p class="text-primary mb-0"><i class="fas fa-clock me-1"></i> September 25, 2022 24:10 pm</p>
                                                <div class="review-count rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <span class="d-inline-block average-rating">(03)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="comment-reply">
                            <form action="javascript:void(0);">
                                <div class="form-group mb-0">
                                    <img src="../../../../assets/img/provider/provider-04.jpg" class="comment-reply-img" alt="Provider Image">
                                    <input type="text" class="form-control" placeholder="Write Review">
                                    <button type="submit" class="btn-primary comment-btn">
                                        <i class="fas fa-reply me-2"></i> Reply
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Randevu İçerik -->
             <!-- Bilgiler İçerik-->
            <div class="tab-pane fade pb-5" id="informations" role="tabpanel" aria-labelledby="guide-reviews">
                <div class="row">
                    <div class="col-md-12">
                        <div class="guide-review review-listing">
                            <h2>BİLGİLER SEKMESİ</h2>
                            <ul class="comments-list">
                                <li>
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
                                <li>
                                    <div class="comment">
                                        <div class="review-profile">
                                            <router-link to="/guide-details">
                                                <img src="../../../../assets/img/provider/provider-04.jpg" class="avatar" alt="Provider Image">
                                            </router-link>
                                        </div>
                                        <div class="comment-body">
                                            <div class="meta-data">
                                                <router-link to="/guide-details">Bernadine</router-link>
                                            </div>
                                            <p class="comment-content">
                                                Et Harum Quidem Rerum Facilis Est Et Expedita Distinctio. Nam Libero Tempore, Cum Soluta Nobis Est Eligendi Optio Cumque Nihil Impedit Quo Minus Id Quod Maxime Placeat Facere Possimus
                                            </p>
                                            <div class="comment-date">
                                                <p class="text-primary mb-0"><i class="fas fa-clock me-1"></i> September 25, 2022 24:10 pm</p>
                                                <div class="review-count rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <span class="d-inline-block average-rating">(03)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="comment-reply">
                            <form action="javascript:void(0);">
                                <div class="form-group mb-0">
                                    <img src="../../../../assets/img/provider/provider-04.jpg" class="comment-reply-img" alt="Provider Image">
                                    <input type="text" class="form-control" placeholder="Write Review">
                                    <button type="submit" class="btn-primary comment-btn">
                                        <i class="fas fa-reply me-2"></i> Reply
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Bilgiler  İçerik-->
        </div>
    </div>
</section>
<!-- /Guide Details Section -->
</template>

<script>
import FAQ from './FAQ';

export default {
  name: 'app',
  components: {
    FAQ
  },
  data () {
    return {
      faqs: [
        {
          question: "Who is the best Superhero?",
          answer: "I'm not sure but we love him 3000",
          open: false
        },
        {
          question: "What is Goku's form called with White Hair?",
          answer: "Mastered Ultra Instinct",
          open: false
        },
        {
          question: "Have you liked & subscried yet?",
          answer: "YES",
          open: false
        }
      ]
    }
  },
  methods: {
    toggleOpen: function (index) {
      this.faqs = this.faqs.map((faq, i) => {
        if (index === i) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      });
    }
  }
}
</script>

<style>
.services-vuecordion header {
  background-color: #3c3c3c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
}

.services-vuecordion header h1 {
  color: #EEE;
  font-size: 28px;
  font-weight: 300;
  text-transform: uppercase;
}

.services-vuecordion header h1 span {
  color: #56E3B8;
  font-weight: 900;
}

.services-vuecordion .faq {
  display: block;
  width: 100%;
  max-width: 768px;
  margin: 15px auto;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: #FFF;
}

.services-vuecordion .faq .question {
  position: relative;
  color: #3c3c3c;
  font-size: 20px;
  transition: all 0.4s linear;
}

.services-vuecordion .faq .question::after {
  content: '';

  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%) rotate(0deg);

  width: 30px;
  height: 30px;
  /* background-image: url('./arrow-down-mint.svg'); */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  
  transition: all 0.2s linear;
}
.services-vuecordion .faq.open .question {
  margin-bottom: 15px;
}
.services-vuecordion .faq.open .question::after {
  transform: translateY(-50%) rotate(90deg);
}
.services-vuecordion .faq .answer {
  color: #3c3c3c;
  font-size: 18px;
  opacity: 0;
  max-height: 0px;
  overflow-y: hidden;
  transition: all 0.4s ease-out;
}
.services-vuecordion .faq.open .answer {
  opacity: 1;
  max-height: 1000px;
}
</style>
