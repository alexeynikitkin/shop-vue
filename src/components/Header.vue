<script>


export default {
  name: "App",
  mounted(){
    $(document).trigger('changed');
    if(localStorage.getItem('cart') != null) {
      this.productsCart = Object.keys(JSON.parse(localStorage.getItem('cart'))).length
    } else {
      this.productsCart = 0;
    }
    if(localStorage.getItem('wishlist') != null) {
      this.productsWish = Object.keys(JSON.parse(localStorage.getItem('wishlist'))).length
    } else {
      this.productsWish = 0;
    }
    this.getProductsCart()
    if(localStorage.getItem("user_logged") != null) {
      this.getUserFromBack()
      this.user = this.getUser()
    }
  },
  computed: {
    totalPrice() {
      let total = 0;
      if(localStorage.getItem('cart') != null) {
        this.products.forEach(product => {
          total += product.price * product.qty;
        })
      }
      return total
    }
  },
  methods: {
    getProductsCart() {
      if(localStorage.getItem('cart') != null) {
        this.products = JSON.parse(localStorage.getItem('cart'));
      }

    },
    removeProduct(id) {
      this.products = this.products.filter( product =>{
        return product.id !== id;
      })
      this.updateCart();
      window.location.reload()
    },
    updateCart(){
      localStorage.setItem('cart', JSON.stringify(this.products))
      $('.cart-icon span').text(this.products.length)
    },
    logoutUser() {
      this.axios.post('https://karte.studiopresto.dev/api/logout-user', {
      }).then(res => {
        console.log(res);
        localStorage.removeItem('user_logged');
        localStorage.removeItem('wishlist');
        localStorage.removeItem('cart');
        // this.$router.push('/login')
        window.location.href = '/login'
      }).finally(v => {
        $(document).trigger('changed');
      })
    },
    getUser() {
      let user = localStorage.getItem('user_logged');
      if(localStorage.getItem('user_logged') != null) {
        user = JSON.parse(user);
        return user;
      }
      else {
        return false;
      }
    },
    getUserFromBack() {
      this.axios.post('https://karte.studiopresto.dev/api/get-user', {
        'id': JSON.parse(localStorage.getItem('user_logged')).id,
      }).then(res => {
        console.log("User form back", res);
        localStorage.setItem('user_logged', JSON.stringify(res.data));
      }).finally(v => {
        $(document).trigger('changed');
      })
    }
  },
  data() {
    return {
      productsCart: [],
      productsWish: [],
      products: [],
      user: []
    }
  },
}
</script>

<template>
  <header class="header-style-3">
    <!-- Start Desktop Menu -->
    <div class="menubox">
      <div class="container-fluid">
        <div class="row d-lg-none d-block">
          <div class="mobile-menu ">
            <div class="mobile-menu__menu-top border-bottom-0">
              <div class="container">
                <div class="row">
                  <div class="menu-info d-flex justify-content-between align-items-center">
                    <div class="menubar"><span></span> <span></span> <span></span></div>
                    <router-link to="/" class="logo"> <img src="/src/assets/images/logo/logo.png"
                                                           alt=""> </router-link>
                    <div class="cart-holder">
                      <a href="#0" class="cart cart-icon position-relative">
                        <i class="flaticon-shopping-cart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="menu-closer"></div>
            <div class="mobile-menu__sidebar-menu">
              <div class="menu-closer two"><span> Close Menu</span> <span class="cross"><i
                  class="flaticon-cross"></i></span></div>
              <div class="search-box-holder">
                <form action="#0">
                  <div class="form-group search-box menu"><input type="text" class="form-control"
                                                                 placeholder="Search for products"> <span
                      class="search-icon"> <i
                      class="flaticon-magnifying-glass"></i> </span></div>
                </form>
              </div>
              <ul class="page-dropdown-menu">
                <li class="dropdown-list"><router-link to="/"> <span>Home </span></router-link>
                </li>
                <li class="dropdown-list"><router-link to="/products"> <span>Product </span></router-link></li>
                <li class="dropdown-list"><router-link to="/categories"> <span>Product </span></router-link></li>


              </ul>
            </div>
          </div>
        </div>
        <div class="d-lg-block d-none">
          <div class="row g-0 position-relative">
            <div class="col-lg-3 d-flex align-items-center justify-content-center border-rit ">
              <div class="logo"><a href="/"> <img src="/src/assets/images/logo/logo.png" alt=""> </a>
              </div>
            </div>
            <div class="col-lg-9 g-0 p-0">
              <div class="row g-0 holder">
                <div class="col-12">
                  <div class="some-info">
                    <p class="d-flex align-items-center"> <span class="icon"> <i
                        class="flaticon-power"></i> </span> Welcome to Karte Online Shop</p>
                    <div class="right d-flex align-items-center " v-if="user != ''">
                      <a @click.prevent="logoutUser()"> Logout </a>
                    </div>
                    <div class="right d-flex align-items-center " v-else>
                      <router-link to="/login"> Sign In </router-link>&ensp;/&ensp;
                      <router-link to="/register"> Register </router-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-one"></div>
              <div class="row g-0 holder">
                <div class="col-12">
                  <div class="mega-menu-default mega-menu d-lg-block d-none">
                    <div class=" d-flex align-items-center justify-content-between ">
                      <nav>
                        <ul class="page-dropdown-menu d-flex align-items-center justify-content-center">
                          <li class="dropdown-list">
                            <router-link to="/"> <span>Home</span>
                            </router-link>
                          </li>
                          <li class="dropdown-list">
                            <router-link to="/products"> <span>Products</span>
                            </router-link>
                          </li>
                          <li class="dropdown-list">
                            <router-link to="/categories"> <span>Categories</span>
                            </router-link>
                          </li>
                        </ul>
                      </nav>
                      <div class="right d-flex align-items-center justify-content-end">
                        <ul class="main-menu__widge-box d-flex align-items-center " v-if="user != ''">
                          <li class="d-lg-block d-none"><router-link :to="{name: 'account.index'}"><i
                              class="flaticon-user"></i> </router-link></li>
                          <li class="d-lg-block d-none">
                            <router-link :to="{name: 'wishlist.index'}" class="number wish-icon">
                              <i class="flaticon-heart"></i>
                              <span class="count">{{ (productsWish == []) ? 0 : productsWish }}</span>
                            </router-link>
                          </li>
                          <li class="cartm"><a href="#0" class="number cart-icon"> <i
                              class="flaticon-shopping-cart"></i><span
                              class="count">{{ (productsCart == []) ? 0 : productsCart }}</span> </a></li>
                        </ul>
                        <ul class="main-menu__widge-box d-flex align-items-center " v-else>
                          <li class="d-lg-block d-none">
                            <router-link :to="{name: 'wishlist.index'}" class="number">
                              <i class="flaticon-heart"></i>
                              <span class="count">{{ (productsWish == []) ? 0 : productsWish  }}</span>
                            </router-link>
                          </li>
                          <li class="cartm"><a href="#0" class="number cart-icon"> <i
                              class="flaticon-shopping-cart"></i><span
                              class="count">{{ (productsCart == []) ? 0 : productsCart }}</span> </a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--              <a href="shop-grid.html" class="offer-link"> Offer </a>-->
          </div>
        </div>
      </div>
    </div>


    <div class="sticy-header">
      <div class="mobile-menu d-lg-none d-block">
        <div class="mobile-menu__menu-top border-bottom-0">
          <div class="container">
            <div class="row">
              <div class="menu-info d-flex justify-content-between align-items-center">
                <div class="menubar"><span></span> <span></span> <span></span></div>
                <a
                    href="/" class="logo"> <img src="/src/assets/images/logo/logo.png" alt=""> </a>
                <div class="cart-holder">
                  <a href="#0" class="cart cart-icon position-relative">
                    <i class="flaticon-shopping-cart"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container position-relative d-lg-block d-none">
        <div class="d-flex align-items-center justify-content-between"><a href="/" class="logo me-2">
          <img src="/src/assets/images/logo/logo.png" alt=""> </a>
          <div class="mega-menu-default mega-menu d-lg-block d-none">
            <div class="container ">
              <div class="row">
                <nav>
                  <ul
                      class="page-dropdown-menu d-flex align-items-center justify-content-center">
                    <li class="dropdown-list">
                      <router-link to="/">
                        <span>Home</span>
                      </router-link>
                    </li>
                    <li class="dropdown-list">
                      <router-link to="/products">
                        <span>Products</span>
                      </router-link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="side-cart-closer"></div>
    <div class="side-cart d-flex flex-column justify-content-between">
      <div class="top">
        <div class="content d-flex justify-content-between align-items-center">
          <h6 class="text-uppercase">Your Cart (0{{ productsCart }})</h6> <span class="cart-close text-uppercase">X</span>
        </div>
        <div class="cart_items" v-if="products">
          <div class="items d-flex justify-content-between align-items-center" v-for="product in products">
            <div class="left d-flex align-items-center">
              <router-link :to="{name: 'products.show', params: {id: product.id}}"> <img style="margin-right: 10px" width="30" height="30"
                                                                                         :src="product.image_url" :alt="product.title">
              </router-link>
              <div class="text">
                <router-link :to="{name: 'products.show', params: {id: product.id}}"> <h6>{{ product.title }}</h6>
                </router-link>
                <p>{{ product.qty }} X <span>{{ product.price }}</span> </p>
              </div>
            </div>
            <div class="right">
              <div class="item-remove" @click.prevent="removeProduct(product.id)"> <i class="flaticon-cross"></i> </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="total-ammount d-flex justify-content-between align-items-center">
          <h6 class="text-uppercase">Total:</h6>
          <h6 class="ammount text-uppercase">${{ totalPrice }}</h6>
        </div>
        <div class="button-box d-flex justify-content-between"> <router-link to="/cart" class="btn_black"> View Cart
        </router-link></div>
      </div>
    </div>
    <div class="sidebar-content-closer"></div>
    <div class="sidebar-content">
      <div class="sidebar-widget-container">
        <div class="widget-heading d-flex justify-content-end align-content-center"> <span
            class="close-side-widget">X</span></div>
        <div class="sidebar-textwidget">
          <div class="sidebar-info-contents">
            <div class="content-inner">
              <div class="logo"><a href="/"><img src="/src/assets/images/logo/logo-2.png" alt=""></a>
              </div>
              <div class="content-box">
                <h4>About Us</h4>
                <div class="inner-text">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                </div>
              </div>
              <div class="form_inner">
                <h4>Support</h4>
                <form action="index.html" method="post">
                  <div class="form-group mt-4"><input type="text" name="name" placeholder="Name"
                                                      required=""></div>
                  <div class="form-group mt-4"><input type="email" name="email" placeholder="Email"
                                                      required=""></div>
                  <div class="form-group mt-4"> <textarea name="message"
                                                          placeholder="Message..."></textarea></div>
                  <div class="form-group message-btn mt-4">
                    <button type="submit"
                            class="btn--secondary"><span class="txt">Submit Now</span></button>
                  </div>
                </form>
              </div>
              <div class="sidebar-contact-info">
                <h4>Contact Info</h4>
                <ul>
                  <li><span class="flaticon-pin-1"></span> New York, United States</li>
                  <li><span class="flaticon-telephone"></span> <a href="tel:+44203700001">+44 123 456
                    789</a></li>
                  <li><span class="flaticon-mail"></span> <a
                      href="mailto:info@example.com">info@example.com</a></li>
                </ul>
              </div>
              <div class="thm-medio-boxx1">
                <ul class="social-box">
                  <li class="facebook"><a href="https://www.facebook.com/" target="_blank"><i
                      class="flaticon-facebook-app-symbol"></i></a></li>
                  <li class="twitter"><a href="https://twitter.com/" target="_blank"><i
                      class="flaticon-twitter"></i></a></li>
                  <li class="instagram"><a href="https://www.instagram.com/" target="_blank"><i
                      class="flaticon-instagram"></i></a></li>
                  <li class="youtube"><a href="https://www.youtube.com/" target="_blank"><i
                      class="flaticon-youtube"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </header>
</template>

<style scoped>

</style>