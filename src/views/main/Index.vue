<script>
export default {
  name: "Index",
  mounted(){
    $(document).trigger('changed');
    this.allComments();
    this.getCats();
  },
  methods: {
    allComments() {
      this.axios.post('http://127.0.0.1:8000/api/allcomments', {
        // "categories" : this.categories,
        // "tags" : this.tags,
        // "prices" : this.prices,
        // "colors" : this.colors,
        // 'page' : page
      })
          .then(res => {
            this.comments = res.data.data
            console.log('Products',this.comments)
          })
          .finally(v => {
            $(document).trigger('changed')
          })
    },
    getCats() {
      this.axios.get(`http://127.0.0.1:8000/api/products/filters`)
          .then(res => {
            this.attrs = res.data.categories
            console.log(this.attrs)
          })
          .finally(v => {
            $(document).trigger('changed')
          })
    }
  },
  data() {
    return {
      comments: [],
      attrs: []
    }
  },
}
</script>

<template>
  <div>
    <main class="overflow-hidden">

      <!-- Start Main Slider -->
      <section class="banner-style-3 overflow-hidden">
        <!-- Banner Carousel -->
        <div class="banner-slide3 slick" data-slick='{"dots": true, "infinite": true, "speed": 600, "slidesToShow": 1,
                "slidesToScroll": 1, "arrows": false, "autoplay": true, "autoplaySpeed": 6000,
                 "fade": false, "pauseOnHover": false}'>

          <!-- Slide -->
          <div class="slide">
            <div class="contant-box position-relative">

              <img class="bg-img hundread-vh" src="src/assets/images/home-three/home-3-bg.jpg" alt="image">

              <div class="content-holder p-0 absolute-content">
                <div class="container  w-100 h-100">
                  <div class="row align-items-center justify-content-start w-100 h-100">
                    <div class="col-xl-6 col-md-9">
                      <div class="content-common home3c slideup position-relative">
                        <h6 class="new wow animated fadeInUp">NEW COLLECTION</h6>
                        <h1 class="wow animated fadeInUp" data-wow-delay="0.4s">
                          Run anywhere <br> comfort everywhere.
                        </h1>
                        <p class="text wow animated fadeInUp">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula
                          faucibus massa est elit maecenas.
                        </p>
                        <a href="shop-grid.html"
                           class="btn--primary button style2 wow animated fadeInUp">Shop
                          Collection</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Slide -->
          <div class="slide">
            <div class="contant-box position-relative">


              <img class="bg-img hundread-vh" src="src/assets/images/home-three/home-3-bg-2.jpg" alt="image">


              <div class="content-holder p-0 absolute-content">
                <div class="container w-100 h-100">
                  <div class="row align-items-center justify-content-end w-100 h-100">
                    <div class="col-xl-6 col-md-9">
                      <div class="content-common slidedown home3c position-relative text-center">
                        <h6 class="new wow animated fadeInUp">NEW COLLECTION</h6>
                        <h1 class="wow animated fadeInUp" data-wow-delay="0.4s">
                          Run anywhere <br> comfort everywhere.
                        </h1>
                        <p class="text wow animated fadeInUp ms-auto me-auto">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula
                          faucibus massa est elit maecenas.
                        </p>
                        <a href="shop-grid.html"
                           class="btn--primary button style2 wow animated fadeInUp">Shop
                          Collection</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End Main Slider -->

      <!--Start Video Two-->
      <section class="video-two mt-60 mb-60 overflow-hidden">
        <div class="auto-container container ">
          <div class="row g-0">
            <!--Start Video Two Img-->
            <div class="col-xl-6 wow fadeInLeft animated ">
              <div class="video-main-box position-relative">
                <div class="video-two__img"
                     style="background-image: url(src/assets/images/home-three/video-v2-img1.jpg);">
                  <div class="icon wow zoomIn animated animated" data-wow-delay="300ms"
                       data-wow-duration="1500ms"
                       style="visibility: visible; animation-duration: 1500ms; animation-delay: 300ms; animation-name: zoomIn;">
                    <a class="video-popup" title="Video Gallery" href=""> <i class="flaticon-play"></i>
                    </a></div>
                </div>
              </div>
            </div>
            <!--End Video Two Img-->
            <!--Start Video Two Content-->
            <div class="col-xl-6 ">
              <div class="video-two__content">
                <div class="video-two__content-inner">
                  <div class="tagline wow fadeInUp animated"> <span>Hurry up, the deal will end
                                        soon</span></div>
                  <h2 class=" wow fadeInUp animated">Best Deal Today</h2>
                  <div class="text wow fadeInUp animated">
                    <p>Credibly fabricate out of-the-boxn twice relationshi after empowered alignments.
                      Completely band productivate client-based sources before enabled best practices.
                      Dramatically network maout-of-the-box best practices whereas effective
                      intellectual capital.</p>
                  </div>
                  <div class="btn-box wow fadeInUp animated"><a href="shop-grid.html"
                                                                class="btn--primary style2">Discover More</a></div>
                </div>
              </div>
            </div>
            <!--End Video Two Content-->
          </div>
        </div>
      </section>
      <!--End Video Two-->


      <!--Start Categories Two-->
      <section class="categories-three overflow-hidden">
        <div class="auto-container container">
          <div class="row">
            <div class="categories-three__inner pt-120 pb-120">
              <div class="row align-items-center justify-content-xl-start justify-content-center">
                <div class="col-xl-4 col-md-7">
                  <div class="categories-three__content text-xl-start text-center wow fadeInUp animated">
                    <div class="sec-title-style2 style3">
                      <h2>Shop by Categories</h2>
                    </div>
                    <p>Continually enhance long-term don high impact niche markets whereas user centric
                      niche markets. actualize backward compatible...</p>
                  </div>
                </div>

                <div class="col-xl-8">
                  <div class="row  justify-content-center" v-if="attrs.length > 0">
                    <div class="col-lg-4 col-sm-6" v-for="cat in attrs">
                      <div class="categories-three__list-item mt-30 wow fadeInUp animated">
                        <div class="categories-three__list-item-inner"><router-link :to="{name: 'categories.show', params: {id: cat.id}}" href="shop-grid-right-sidebar.html" class="img-box"> <img
                            src="src/assets/images/home-three/categories-v2-img1.jpg" alt=""/>
                        </router-link>
                          <div class="title text-center">
                            <h4><router-link :to="{name: 'categories.show', params: {id: cat.id}}">{{ cat.title }}</router-link></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--End Categories Two-->

      <!-- core-features Start -->
      <section class="core-features pt-120 mb-60 overflow-hidden">
        <div class="container auto-container">
          <div class="row mt--30">
            <div class="col-xxl-3 col-md-6 mt-30 wow fadeInUp animated " data-wow-delay="0.2s">
              <div class="core-features__box d-flex ms-0"><span class="one"></span> <span class="two"></span>
                <div class="icon"><img src="src/assets/images/icon/f-icon-1.png" alt=""></div>
                <div class="core-features__box-content"><a href="login.html" class="d-block">
                  <h4> Secure Payment </h4>
                </a>
                  <p>Everybody different which the why give offer styles for every body.</p>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-md-6 mt-30 wow fadeInUp animated " data-wow-delay="0.3s">
              <div class="core-features__box d-flex "><span class="one"></span> <span class="two"></span>
                <div class="icon"><img src="src/assets/images/icon/f-icon-2.png" alt=""></div>
                <div class="core-features__box-content"><a href="login.html" class="d-block">
                  <h4> 27/7 Fast Delivery </h4>
                </a>
                  <p>Everybody different which the why give offer styles for every body.</p>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-md-6 mt-30 wow fadeInUp animated " data-wow-delay="0.4s">
              <div class="core-features__box d-flex "><span class="one"></span> <span class="two"></span>
                <div class="icon"><img src="src/assets/images/icon/f-icon-3.png" alt=""></div>
                <div class="core-features__box-content"><a href="login.html" class="d-block">
                  <h4> Return & Refund </h4>
                </a>
                  <p>Everybody different which the why give offer styles for every body.</p>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-md-6 mt-30 wow fadeInUp animated " data-wow-delay="0.5s">
              <div class="core-features__box d-flex me-0"><span class="one"></span> <span class="two"></span>
                <div class="icon"><img src="src/assets/images/icon/f-icon-4.png" alt=""></div>
                <div class="core-features__box-content"><a href="login.html" class="d-block">
                  <h4> Quality Support </h4>
                </a>
                  <p>Everybody different which the why give offer styles for every body.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- review-one Start -->
      <section class="review-one pt-60 pb-60">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="review-one__section-head text-center wow fadeInUp animated">
                <div class="title">
                  <h2>What Client’s Say</h2>
                </div>
                <p>Over {{ comments.length }} Reviews</p>
              </div>
            </div>
            <div class="col-12 wow fadeInUp animated">
              <div class="reviewOneSlider owl-carousel" v-if="comments.length > 0">
                <div class="review-one__single-review" v-for="comment in comments">
                  <div class="review-one__single-content">
                    <div class="review-one__aurthor">
                      <div class="thumb"><img src="src/assets/images/testimonial/testimonial-v1-1.png"
                                              alt=""></div>
                      <span class="quate"> <i
                          class="flaticon-right-quotes-symbol"></i> </span>
                    </div>
                    <div class="review-one__review-text">
                      <p> “{{ comment.body }}” </p>
                      <h4>{{ comment.users_name }}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>

</template>

<style scoped>

</style>