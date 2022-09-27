<template>
<!-- Guide Details Section -->
<section class="guide-details-section pb-0" id="messageapp">
    <div class="container">
        <div class="row">
            <div class="col-md-12">

                <div class="guide-tab">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="guide-details" data-bs-toggle="tab" href="#servicestype" role="tab" aria-controls="servicestype" aria-selected="true">Hizmetler</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="guide-reviews" data-bs-toggle="tab" href="#comments" role="tab" aria-controls="comments" aria-selected="false">Yorumlar</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="guide-reviews" data-bs-toggle="tab" href="#meetings" role="tab" aria-controls="meetings" aria-selected="false">Randevu</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="guide-reviews" data-bs-toggle="tab" href="#informations" role="tab" aria-controls="informations" aria-selected="false">Bilgiler</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="tab-content" id="myTabContent">
            <!-- Hizmetler İçerik -->
            <div class="tab-pane fade show active pb-5" id="servicestype" role="tabpanel" aria-labelledby="guide-details">
                <!-- TELEFON -->
                <div class="row">
                    <div class="col-md-12 d-flex">
                        <div class="guide-right w-100 services-vuecordion" id="app">
                           <header>
                                <h2><span>TELEFON</span></h2>
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
                <!-- TELEFON -->
                <!-- TABLET -->
                <!-- <div class="row">
                    <div class="col-md-12 d-flex">
                        <div class="guide-right w-100 services-vuecordion" id="app">
                           <header>
                                <h1><span>TABLET</span></h1>
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
                </div> -->
                <!-- TABLET -->
                <!-- PC -->
                <!-- <div class="row">
                    <div class="col-md-12 d-flex">
                        <div class="guide-right w-100 services-vuecordion" id="app">
                           <header>
                                <h1><span>PC</span></h1>
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
                </div> -->
                <!-- PC -->

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
                          <Datepicker v-model="date"></Datepicker>
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
          vuecordion_phonebrand: "Alcatel ",
          vuecordion_phonemodel: "Alcatel 1 2019",
          vuecordion_phoneproblem: "Kablosuz Ağ/Bluetooth Bağlantı Sorunu",
          open: false
        },
        // {
        //   vuecordion_phonebrand: "Huawei",
        //   vuecordion_phonemodel: "Huawei Mate 40 Pro",
        //   vuecordion_phoneproblem: "sadsfdfd",
        //   open: false
        // },
        // {
        //   vuecordion_phonebrand: "Huawei",
        //   vuecordion_phonemodel: "Huawei Mate 40 Pro",
        //   vuecordion_phoneproblem: "sadsfdfd",
        //   open: false
        // },
        // {
        //   vuecordion_phonebrand: "Huawei",
        //   vuecordion_phonemodel: "Huawei Mate 40 Pro",
        //   vuecordion_phoneproblem: "sadsfdfd",
        //   open: false
        // },
        // {
        //   vuecordion_phonebrand: "Huawei",
        //   vuecordion_phonemodel: "Huawei Mate 40 Pro",
        //   vuecordion_phoneproblem: "sadsfdfd",
        //   open: false
        // },
        // {
        //   vuecordion_phonebrand: "Huawei",
        //   vuecordion_phonemodel: "Huawei Mate 40 Pro",
        //   vuecordion_phoneproblem: "sadsfdfd",
        //   open: false
        // },

      
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
.choose-btn-sm {
    height: 5px;


}
.bg-light-grey {
	background-color: #6464642b;
	padding: 1%;
    border-radius: 10px;
}

.services-vuecordion header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.services-vuecordion header h1 {
  color: #EEE;
  font-size: 28px;
  font-weight: 300;
  text-transform: uppercase;
}

.services-vuecordion header h1 span {
  font-weight: 900;
}

.services-vuecordion .faq {
  display: block;
  width: 100%;
  margin: 5px auto;
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: #FFF;
}

.services-vuecordion .faq .vuecordion_phonebrand {
  position: relative;
  color: #3c3c3c;
  font-size: 20px;
  transition: all 0.4s linear;
}

.services-vuecordion .faq .vuecordion_phonebrand::after {
  content: '';

  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%) rotate(0deg);

  width: 30px;
  height: 30px;
  background-image: url('./arrow-down-mint.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  
  transition: all 0.2s linear;
}
.services-vuecordion .faq.open .vuecordion_phonebrand {
  margin-bottom: 15px;
}
.services-vuecordion .faq.open .vuecordion_phonebrand::after {
  transform: translateY(-50%) rotate(90deg);
}
.services-vuecordion .faq .vuecordion_phonemodel {
  color: #3c3c3c;
  font-size: 18px;
  opacity: 0;
  max-height: 0px;
  overflow-y: hidden;
  transition: all 0.4s ease-out;
  
}
.services-vuecordion .faq .vuecordion_phoneproblem {
  color: #3c3c3c;
  font-size: 18px;
  opacity: 0;
  max-height: 0px;
  overflow-y: hidden;
  transition: all 0.4s ease-out;
}
.services-vuecordion .faq.open .vuecordion_phonemodel {
  opacity: 1;
  max-height: 1000px;
}
.services-vuecordion .faq.open .vuecordion_phoneproblem {
  opacity: 1;
  max-height: 1000px;
}
</style>
