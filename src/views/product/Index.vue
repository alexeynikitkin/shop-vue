<script>
export default {
  name: "Index",
  mounted() {
    $(document).trigger('changed')
    this.getProducts()
    this.getFilterList()
    this.getCats()
  },
  data() {
    return {
      products: [],
      popupProduct: null,
      filterList: [],
      categories: [],
      colors: [],
      tags: [],
      prices: [],
      pagination: [],
      attrs: []
    }
  },
  methods: {
    getProducts(page = 1) {
      this.axios.post('http://127.0.0.1:8000/api/products', {
        "categories" : this.categories,
        "tags" : this.tags,
        "prices" : this.prices,
        "colors" : this.colors,
        'page' : page
      })
      .then(res => {
        this.products = res.data.data
        this.pagination = res.data.meta
        console.log('Products',this.products)
      })
      .finally(v => {
        $(document).trigger('changed')
      })
    },
    changePrice(oldPrice = null, plusPrice = null) {
      if(oldPrice !== null && plusPrice !== null) {
        let sum = parseFloat(plusPrice);
        $('.popup-right-content h2 .price').text(sum.toFixed(2))
      }
      return parseFloat($('.popup-right-content h2 .price').text()).toFixed(2);
    },

    getProduct(id) {
      this.axios.get(`http://127.0.0.1:8000/api/products/${id}`)
          .then(res => {
            this.popupProduct = res.data.data
          })
          .finally(v => {
            $(document).trigger('changed')
          })
    },
    getFilterList() {
      this.axios.get(`http://127.0.0.1:8000/api/products/filters`)
          .then(res => {
            this.filterList = res.data

             // Price Filter
            if ($("#price-range").length) {
              $("#price-range").slider({
                range: true,
                min: this.filterList.price.min,
                max: this.filterList.price.max,
                values: [this.filterList.price.min, this.filterList.price.max],
                slide: function (event, ui) {
                  $("#priceRange").val("$" + ui.values[0] + " - $" + ui.values[1]);
                }
              });
              $("#priceRange").val("$" + $("#price-range").slider("values", 0) + " - $" + $("#price-range").slider("values", 1));
            }

          })
          .finally(v => {
            $(document).trigger('changed')
          })
    },
    getCats() {
      this.axios.get(`http://127.0.0.1:8000/api/products/filters`)
          .then(res => {
            this.attrs = res.data.categories
          })
          .finally(v => {
            $(document).trigger('changed')
          })
    },
    filterProducts() {
      let prices = $('#priceRange').val();
      prices = prices.replace(/[\s+]|[$]/g, '').split('-');
      this.prices = prices
      this.getProducts()
      $(document).trigger('changed')
    },

    addColor(colors){
      if(!this.colors.includes(colors)) {
        this.colors.push(colors)
      } else {
        this.colors = this.colors.filter(e=> {
          return e !== colors
        })
      }
    },

    addTag(id){
      if(!this.tags.includes(id)) {
        this.tags.push(id)
      } else {
        this.tags = this.tags.filter(e=> {
          return e !== id
        })
      }
    },
    addToCart(product, isSingle) {
      if(isSingle) {
        $('.qtyValue').val(1);
      }
      let cart = localStorage.getItem('cart');
      let qty = $('.qtyValue').val() ? $('.qtyValue').val() : 1;
      $('.qtyValue').val(1);
      let newProduct = [
        {
          'id' : product.id,
          'image_url' : product.image_url,
          'title' : product.title,
          'price' : product.price,
          'qty': qty,
          'size': product.size,
          'color' : product.color
        }
      ];
      if(!cart) {
        localStorage.setItem('cart', JSON.stringify(newProduct));
        $('.cart-icon span').text(newProduct.length)
      } else {
        cart = JSON.parse(cart);

        cart.forEach(productInCart => {
          if(productInCart.id === product.id) {
            productInCart.qty = Number(productInCart.qty) + Number(qty);
            newProduct = null;
          }
        })
        Array.prototype.push.apply(cart, newProduct);


        localStorage.setItem('cart', JSON.stringify(cart));


      }
      $('.cart-icon span').text(cart.length)
      window.location.reload()
    },
    addToWishlist(product) {
      let wishlist = localStorage.getItem('wishlist');
      let newWishProduct = [
        {
          'id' : product.id,
          'image_url' : product.image_url,
          'title' : product.title,
          'price' : product.price,
          'stock' : product.stock,
          'qty': product.qty
        }
      ];
      if(!wishlist) {
        localStorage.setItem('wishlist', JSON.stringify(newWishProduct));
      } else {
        wishlist = JSON.parse(wishlist);
        if(!this.ifInclude(product)) {
          Array.prototype.push.apply(wishlist, newWishProduct);
        }

        localStorage.setItem('wishlist', JSON.stringify(wishlist));
      }
      $('.wish-icon span').text(wishlist.length)
      window.location.reload()
    },
    ifInclude(product) {
      let wishlist = localStorage.getItem('wishlist');
      wishlist = JSON.parse(wishlist);
      let ifInclude = false;
      if(wishlist) {
        wishlist.forEach(e => {
          if(e.id === product.id) {
            ifInclude = true
          }
        });
      }
      return ifInclude;
    },
    getProductFromCart(id){
      let cart = JSON.parse(localStorage.getItem('cart'));
      // let thisProdId = this.$route.params.id;
      var item = cart.filter(item => item.id == id);
      if(Object.keys(item).length > 0) {
        return item[0].qty;
      } else {
        return 0;
      }
    }

  }
}
</script>

<template>
  <div>
    <main class="overflow-hidden ">
      <!--Start Breadcrumb Style2-->
      <section class="breadcrumb-area" style="background-image: url(src/assets/images/inner-pages/breadcum-bg.png);">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="breadcrumb-content pb-60 text-center wow fadeInUp animated">
                <h2>Shop Grid</h2>
                <div class="breadcrumb-menu">
                  <ul>
                    <li><a href="index.html"><i class="flaticon-home pe-2"></i>Home</a></li>
                    <li><i class="flaticon-next"></i></li>
                    <li class="active">Shop Grid</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--End Breadcrumb Style2-->
      <!--Start Product Categories One-->
      <section class="product-categories-one pb-60">
        <div class="container">
          <div class="row wow fadeInUp animated">
            <div class="col-xl-12">
              <div class="product-categories-one__inner" v-if="attrs">
                <ul>
                  <li v-for="cat in attrs">
                    <router-link :to="{name: 'categories.show', params: {id: cat.id}}" class="img-box">
                      <div class="inner"><img src="src/assets/images/shop/product-categories-v1-img1.png" :alt="cat.title"/></div>
                    </router-link>
                    <div class="title">
                      <router-link :to="{name: 'categories.show', params: {id: cat.id}}">
                      <h6>{{ cat.title }}</h6>
                    </router-link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--End Product Categories One-->
      <!--Start product-grid-->
      <div class="product-grid pt-60 pb-120">
        <div class="container">
          <div class="row gx-4">
            <div class="col-xl-3 col-lg-4">
              <div class="shop-grid-sidebar">
                <button class="remove-sidebar d-lg-none d-block"><i
                    class="flaticon-cross"> </i></button>
                <div class="sidebar-holder">
<!--                  <form action="#0" class="footer-default__subscrib-form m-0 p-0 wow fadeInUp animated">-->
<!--                    <div class="footer-input-box p-0 "><input type="email" placeholder="Email address"-->
<!--                                                              name="email">-->
<!--                      <button type="submit" class="subscribe_btn"><i-->
<!--                          class="flaticon-magnifying-glass"></i></button>-->
<!--                    </div>-->
<!--                  </form>-->
                  <div class="single-sidebar-box mt-30 wow fadeInUp animated ">
                    <h4>Select Categories</h4>
                    <div class="checkbox-item">
                      <form>
                        <div v-for="category in filterList.categories" class="form-group"><input :value="category.id" v-model="categories" type="checkbox" :id="category.id"> <label
                            :for="category.id">{{ category.title }}</label></div>
                      </form>
                    </div>
                  </div>
                  <div class="single-sidebar-box mt-30 wow fadeInUp animated">
                    <h4>Color Option </h4>
                    <ul class="color-option">
                      <li v-for="color in [...new Set(this.filterList.colors)]">
                        <a @click.prevent="addColor(color)" :href="`#${color}`" class="color-option-single" :style="`background: ${color}`"> <span> {{color}}</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="single-sidebar-box mt-30 wow fadeInUp animated pb-0 border-bottom-0 ">
                    <h4>Tags </h4>
                    <ul class="popular-tag">
                      <li v-for="tag in filterList.tags">
                        <a @click.prevent="addTag(tag.id)" :href="`#${tag.id}`">{{ tag.title }}</a>
                      </li>
                    </ul>
                  </div>
                  <div class="single-sidebar-box mt-30 wow fadeInUp animated">
                  <h4>Filter By Price</h4>
                  <div class="slider-box">
                    <div id="price-range" class="slider"></div>
                    <div class="output-price"><label for="priceRange">Price:</label> <input
                        type="text" id="priceRange" readonly></div>
                    <button @click.prevent="filterProducts()" class="filterbtn"
                            type="submit"> Filter
                    </button>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div class="col-xl-9 col-lg-8">
              <div class="row">
                <div class="col-xl-12">
                  <div
                      class="shop-grid-page-top-info p-0 justify-content-md-between justify-content-center">
                    <div class="left-box wow fadeInUp animated">
                      <p>Showing {{ products.length }} of {{ pagination.total }} Results</p>
                    </div>
                    <div
                        class="right-box justify-content-md-between justify-content-center wow fadeInUp animated">
<!--                      <div class="short-by">-->
<!--                        <div class="select-box">-->
<!--                          <select class="wide">-->
<!--                            <option data-display="Short by latest">Featured</option>-->
<!--                            <option value="1">Best selling</option>-->
<!--                            <option value="2">Alphabetically, A-Z</option>-->
<!--                            <option value="3">Alphabetically, Z-A</option>-->
<!--                            <option value="3">Price, low to high</option>-->
<!--                            <option value="3">Price, high to low</option>-->
<!--                            <option value="3">Date, old to new</option>-->
<!--                          </select>-->
<!--                        </div>-->
<!--                      </div>-->
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-grid" role="tabpanel"
                         aria-labelledby="pills-grid-tab">
                      <div class="row">
                        <div v-for="product in products" class="col-xl-4 col-lg-6 col-6 ">
                          <div class="products-three-single w-100  mt-30">
                            <div class="products-three-single-img" v-if="product">
                                <img :src="product.image_url" class="first-img" :alt="product.title" />
                                <img :src="product.image_url" style="filter: grayscale(1)" :alt="product.title" class="hover-img" />
                              <div class="products-grid-one__badge-box" v-if="product.tags"> <span
                                  class="bg_base badge new" v-for="tag in product.tags">{{tag.title}}</span>
                              </div>
                              <a v-if="product.stock != getProductFromCart(product.id)" @click.prevent="addToCart(product, true)" href="#" class="addcart btn--primary style2">
                                Add To Cart </a>
                              <p v-else class="addcart btn--primary style2">
                                Out Of Stock </p>
                              <div class="products-grid__usefull-links">
                                <ul>
                                  <li>
                                    <a @click.prevent="addToWishlist(product)" v-if="ifInclude(product)" style="background: var(--thm-base)" href=""> <i class="flaticon-heart">
                                  </i> <span>
                                                                            wishlist</span> </a>
                                    <a @click.prevent="addToWishlist(product)" v-else href=""> <i class="flaticon-heart">
                                    </i> <span>
                                                                            wishlist</span> </a>
                                  </li>
                                  <li><a @click="getProduct(product.id)" :href="`#popup${product.id}`"
                                         class="popup_link"> <i
                                      class="flaticon-visibility"></i>
                                    <span> quick view</span>
                                  </a></li>
                                </ul>
                              </div>
                            </div>
                            <div :id="`popup${product.id}`" class="product-gird__quick-view-popup mfp-hide">
                              <div v-if="popupProduct" class="container">
                                <div class="row justify-content-between align-items-center">
                                  <div class="col-lg-6">
                                    <div class="quick-view__left-content" v-if="popupProduct.product_images.length == 0">
                                      <div
                                          class="popup-product-single-image">
                                        <img :src="popupProduct.image_url"
                                             alt=""/>
                                      </div>
                                    </div>
                                    <div class="quick-view__left-content" v-if="popupProduct.product_images.length > 2">
                                      <div class="tabs">
                                        <div class="popup-product-thumb-box">
                                          <ul>
                                            <li v-for="productImage in popupProduct.product_images"
                                                class="tab-nav popup-product-thumb">
                                              <a :href="`#tabb${productImage.id}`">
                                                <img :src="productImage.file_path"
                                                     alt=""/>
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                        <div class="popup-product-main-image-box">
                                          <div v-for="productImage in popupProduct.product_images"
                                               :id="`tabb${productImage.id}`"
                                               class="tab-item popup-product-image">
                                            <div
                                                class="popup-product-single-image">
                                              <img :src="productImage.file_path"
                                                   alt=""/></div>
                                          </div>
                                          <button class="prev"><i
                                              class="flaticon-back"></i>
                                          </button>
                                          <button class="next"><i
                                              class="flaticon-next"></i>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-lg-6">
                                    <div class="popup-right-content">
                                      <h3>{{ popupProduct.title }}</h3>
                                      <p class="text"> {{ popupProduct.description }}
                                      </p>
                                      <div class="price">
                                        <h2> $<span class="price">{{ popupProduct.price }}</span> USD
                                          <del> {{ parseInt(popupProduct.price) + 10 }} USD</del>
                                        </h2>
                                        <h6 v-if="popupProduct.stock > 0"> In stock</h6>
                                        <h6 v-else> Out of stock</h6>
                                      </div>
                                      <div class="color-varient">
                                        <template v-for="variation in popupProduct.group">
                                          <a
                                              @click.prevent="getProduct(variation.id)"
                                             :style="`background: ${variation.color};`" :href="`#popup${variation.id}`" class="color-name">
                                            <span>{{ variation.color }}</span>
                                          </a>
                                        </template>
                                      </div>
                                      <div class="color-varient">
                                        <template v-for="variation in popupProduct.group">
                                          <a
                                              @click.prevent="changePrice(popupProduct.price, variation.price)"
                                              :style="`background: ${variation.size};`" :data-price="variation.size" class="color-name">
                                            <span>{{ variation.size }}</span>
                                          </a>
                                        </template>
                                      </div>
                                      <div class="add-product">
                                        <h6 v-if="popupProduct.stock > 0">Qty: {{ popupProduct.stock }}<br> In cart {{getProductFromCart(popupProduct.id)}}</h6>
                                        <div class="button-group" v-if="popupProduct.stock != getProductFromCart(popupProduct.id)">
                                          <div class="qtySelector text-center" :data-stock="popupProduct.stock" :data-cart-qty="getProductFromCart(popupProduct.id)">
                                                                                    <span class="decreaseQty"><i
                                                                                        class="flaticon-minus"></i>
                                                                                    </span> <input type="number"
                                                                                                   class="qtyValue"
                                                                                                   value="1"/>
                                            <span class="increaseQty"> <i
                                                class="flaticon-plus"></i>
                                                                                    </span></div>
                                          <button v-if="popupProduct.stock != getProductFromCart(popupProduct.id)" class="btn--primary" @click.prevent="addToCart(popupProduct)"> Add to Cart </button>
                                        </div>
                                        <div class="button-group" v-else>
                                          <p class="btn--primary"> Out of Stock </p>
                                        </div>
                                      </div>
<!--                                      <div class="payment-method"><a href="#0"> <img-->
<!--                                          src="src/assets/images/payment_method/method_1.png"-->
<!--                                          alt=""> </a>-->
<!--                                        <a href="#0"> <img-->
<!--                                            src="src/assets/images/payment_method/method_2.png"-->
<!--                                            alt=""> </a> <a href="#0"> <img-->
<!--                                            src="src/assets/images/payment_method/method_3.png"-->
<!--                                            alt=""> </a>-->
<!--                                        <a href="#0"> <img-->
<!--                                            src="src/assets/images/payment_method/method_4.png"-->
<!--                                            alt=""> </a></div>-->
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="products-three-single-content text-center"> <span>
                              <router-link :to="{name: 'categories.show', params: {id: product.category.id}}">
                                {{ product.category.title }}
                              </router-link>
                              </span>
                              <h5>
                              <router-link :to="{name: 'products.show', params: {id: product.id}}">
                                {{ product.title }}
                              </router-link>
                              </h5>
                              <p>
                                <del>${{ parseInt(product.price) + 10 }}</del>
                                $<span class="price">{{ product.price }}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row" v-if="pagination.last_page > 1">
                <div class="col-12 d-flex justify-content-center wow fadeInUp animated">
                  <ul class="pagination text-center">
                    <li v-if="pagination.current_page !== 1" class="next">
                      <a @click.prevent="getProducts(pagination.current_page - 1)" href=""><i class="flaticon-left-arrows" aria-hidden="true"></i> </a>
                    </li>
                    <li v-for="link in pagination.links">
                      <template v-if="Number(link.label) &&
                      (pagination.current_page - link.label < 2 && pagination.current_page - link.label > -2) ||
                       Number(link.label) === 1 || Number(link.label) === pagination.last_page">
                        <a @click.prevent="getProducts(link.label)" :class="link.active ? 'active' : ''" href="">{{ link.label }}</a>
                      </template>
                      <template v-if="Number(link.label) &&
                      pagination.current_page !== 3 &&
                       (pagination.current_page - link.label === 2) ||
                       Number(link.label) &&
                       (pagination.current_page !== pagination.last_page - 2) &&
                       (pagination.current_page - link.label === -2)
                        ">
                        <a>...</a>
                      </template>
                    </li>
                    <li v-if="pagination.current_page !== pagination.last_page" class="next">
                      <a @click.prevent="getProducts(pagination.current_page + 1)" href=""><i class="flaticon-next-1" aria-hidden="true"></i>
                      </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--End product-grid-->
    </main>
  </div>
</template>

<style scoped>
  .color-option li a.active {
    position: relative;
    z-index: 1;
  }
  .color-option li a.active:before {
    content: '\2611';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 2;
  }
  .popular-tag li a.active{
  background: #f69c63;
  }
</style>