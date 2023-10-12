<script setup>

</script>

<template>
  <footer class="footer-default footer-3 ">
    <div class="footer-default__shap_1 position-absolute "><img src="/src/assets/images/shape/footer-shape-1.png"
                                                                alt=""></div>
    <!--Start Footer-->
    <div class="footer-default__main-footer position-relative">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-30 wow fadeInUp animated">
            <div class="footer-default__single-box">
              <div class="company-info">
                <div class="footer-title">
                  <h4> Office</h4>
                </div>
                <div class="text1">
                  <p>29 Holles Place, Dublin 2 D02 YY46</p>
                </div>
                <div class="text2">
                  <p>68 Jay Street, Suite 902 New Side <br> Brooklyn, NY 11201</p>
                </div>
                <div class="text3">
                  <p>New York, United States</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-6 col-md-6 col-sm-12 mt-30 wow fadeInUp animated">
            <div class="footer-default__single-box">
              <div class="footer-title">
                <h4> Useful Links </h4>
              </div>
              <ul class="footer-links">
                <li><router-link to="/account">Account</router-link></li>
                <li><router-link to="/login">Sign In</router-link></li>
                <li><router-link to="/cart">View Cart</router-link></li>
                <li><router-link to="/wishlist">My WishList</router-link></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 mt-30 wow fadeInUp animated">
            <div class="footer-default__single-box">
              <div class="footer-title">
                <h4> Newsletter </h4>
              </div>
              <div class="footer-newsletter">
                <p class="text">Enter your email to receive our latest updates about our products &
                  promotions. </p>
                <form action="#0" class="footer-default__subscrib-form">
                  <div class="footer-input-box"><input type="email" placeholder="Email address"
                                                       name="email">
                    <button type="submit" class="subscribe_btn"> Subscribe
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div> <!-- footer-bottom Footer-->
    <div class="footer_bottom position-relative">
      <div class="container">
        <div class="footer_bottom_content">
          <div class="copyright wow fadeInUp animated">
            <p>© {{ new Date().getFullYear() }} <a href="index.html">Karte.</a> All Rights Reserved.</p>
          </div>
          <div class="newsletter-bottom d-flex align-items-center">
            <div class="footer-title-box">
              <p>Follow Us:</p>
            </div>
            <div class="footer__medio-boxx  medio-boxx  d-flex align-items-center">
              <ul>
                <li><a href="https://www.facebook.com/" target="_blank" class="active"><i
                    class="flaticon-facebook-app-symbol"></i></a></li>
                <li><a href="https://www.youtube.com/" target="_blank"><i
                    class="flaticon-youtube"></i></a></li>
                <li><a href="https://twitter.com/"><i class="flaticon-twitter"
                                                      target="_blank"></i></a></li>
                <li><a href="https://www.instagram.com/"><i class="flaticon-instagram"
                                                            target="_blank"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>