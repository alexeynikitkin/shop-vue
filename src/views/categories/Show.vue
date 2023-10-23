<script>
export default {
  name: "Show",
  mounted() {
    $(document).trigger('changed');
    this.getCats();
    this.getCategory();
  },
  methods: {
    getCategory(id) {
      this.axios.get(`https://karte.studiopresto.dev/api/categories/${this.$route.params.id}`)
          .then(res => {
            this.category = res.data.data
            console.log(this.category)
          })
          .finally(v => {
            $(document).trigger('changed')
          })
    },
    getCats() {
      this.axios.get(`https://karte.studiopresto.dev/api/products/filters`)
          .then(res => {
            this.attrs = res.data.categories
          })
          .finally(v => {
            $(document).trigger('changed')
          })
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
        $('.cart-icon span').text(cart.length)
        window.location.reload()
      }
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
    getProduct(id) {
      this.axios.get(`https://karte.studiopresto.dev/api/products/${id}`)
          .then(res => {
            this.popupProduct = res.data.data
          })
          .finally(v => {
            $(document).trigger('changed')
          })
    },
    getProductFromCart(id){
      if(localStorage.getItem('cart') != null) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        // let thisProdId = this.$route.params.id;

        var item = cart.filter(item => item.id == id);
        if(Object.keys(item).length > 0) {
          return item[0].qty;
        } else {
          return 0;
        }
      }
    },
    increaseQty(event){
      let thisEl = event.target;
      if(localStorage.getItem('cart') == null) {
        localStorage.setItem('cart', '[]');
      }
      if($(thisEl).closest('.qtySelector').attr('data-stock') == $(thisEl).closest('.qtySelector').attr('data-cart-qty')) {
        $(thisEl).closest('.qtySelector').find('.qtyValue').val(0);
      }
      let stock = $(thisEl).closest('.qtySelector').attr('data-stock');
      let cartQty = $(thisEl).closest('.qtySelector').attr('data-cart-qty');
      var $parentElm = $(thisEl).closest(".qtySelector");
      var minVal = 1;
      var maxVal = stock - cartQty;
      var value = $parentElm.find(".qtyValue").val();
      if (value < maxVal) {
        value = parseInt(value) + 1;
      }
      $parentElm.find(".qtyValue").val(value);
    },
    decreaseQty(event){
      let thisEl = event.target;
      if(localStorage.getItem('cart') == null) {
        localStorage.setItem('cart', '[]');
      }
      var $parentElm = $(thisEl).closest(".qtySelector");
      var value = $parentElm.find(".qtyValue").val();
      if (value > 1) {
        value = parseInt(value) - 1;
      }
      $parentElm.find(".qtyValue").val(value);
    },
  },
  data() {
    return {
      category: [],
      attrs: [],
      products: [],
      popupProduct: null,
      filterList: [],
      categories: [],
      colors: [],
      tags: [],
      prices: [],
      value: 1
      // pagination: [],
    }
  },
}
</script>

<style scoped>
  .product-categories-one__inner .router-link-active {
    border: 1px solid orange;
  }
</style>

<template>
  <div>
    <main class="overflow-hidden cat">
      <!--Start Breadcrumb Style2-->
      <section class="breadcrumb-area" style="background-image: url(/src/assets/images/inner-pages/breadcum-bg.png);">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="breadcrumb-content pb-60 text-center wow fadeInUp animated">
                <h2>Shop Grid</h2>
                <div class="breadcrumb-menu">
                  <ul>
                    <li><a href="/"><i class="flaticon-home pe-2"></i>Home</a></li>
                    <li> <i class="flaticon-next"></i> </li>
                    <li class="active" v-if="category">{{ category.title }}</li>
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
          <div class="row">
            <div class="col-xl-12 wow fadeInUp animated">
              <div class="product-categories-one__inner" v-if="attrs">
                <ul>
                  <li v-for="cat in attrs">
                    <a :href="`/categories/${cat.id}`" class="img-box">
                    <div class="inner"><img src="/src/assets/images/inner-pages/breadcum-bg.png"
                                            :alt="cat.title"/></div>
                  </a>
                      <h6>{{ cat.title }}</h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--End Product Categories One-->
      <!--Start product-grid-->
      <section class="product-grid pt-60 pb-120" v-if="category">
        <div class="container">
          <div class="row">
            <div class="col-xl-3 col-lg-4 col-6 wow fadeInUp animated" v-for="product in category.products">
              <div class="products-three-single w-100 wow fadeInUp animated mt-30">
                <div class="products-three-single-img" v-if="product">
                    <img :src="product.image_url" class="first-img" :alt="product.title" />
                    <img :src="product.image_url" style="filter: grayscale(1)" :alt="product.title" class="hover-img" />
                  <div class="products-grid-one__badge-box"> <span class="bg_base badge new ">{{ product.category.title }}</span>
                  </div>
                  <a v-if="product.stock != 0" @click.prevent="addToCart(product, true)" href="#" class="addcart btn--primary style2">
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
                                  :style="`background: ${variation.color}; border: 1px solid #000;`" :href="`#popup${variation.id}`" class="color-name">
                                <span>color:{{ variation.color }}, size: {{ variation.size }}</span>
                              </a>
                            </template>
                          </div>
                          <div class="add-product">
                            <h6 v-if="popupProduct.stock > 0">Qty: {{ popupProduct.stock - getProductFromCart(popupProduct.id) }}<br> In cart {{getProductFromCart(popupProduct.id)}}</h6>
                            <div class="button-group" v-if="popupProduct.stock != getProductFromCart(popupProduct.id)">
                              <div class="qtySelector text-center" :data-stock="popupProduct.stock" :data-cart-qty="getProductFromCart(popupProduct.id)">
                                <span class="decreaseQty" @click.prevent="decreaseQty($event)"><i class="flaticon-minus"></i></span>
                                <input type="number" class="qtyValue" :value="value"/>
                                <span class="increaseQty" @click.prevent="increaseQty($event)"> <i class="flaticon-plus"></i></span>
                              </div>
                              <button v-if="popupProduct.stock != getProductFromCart(popupProduct.id)" class="btn--primary" @click.prevent="addToCart(popupProduct)"> Add to Cart </button>
                            </div>
                            <div class="button-group" v-else>
                              <p class="btn--primary"> Out of Stock </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="products-three-single-content text-center">
                  <span>
                  <router-link v-if="product" :to="{name: 'categories.show', params: {id: product.category.id}}">
                    {{ product.category.title }}
                  </router-link>
                </span>
                  <h5>
                    <router-link :to="{name: 'products.show', params: {id: product.id}}">
                    {{ product.title }}
                  </router-link>
                  </h5>
                  <p><del>${{  product.price }}</del> ${{ parseFloat(product.price) + 10 }}</p>
                </div>
              </div>
            </div>
          </div>
<!--          <div class="row">-->
<!--            <div class="col-12 d-flex justify-content-center wow fadeInUp animated">-->
<!--              <ul class="pagination text-center">-->
<!--                <li class="next"><a href="#0"><i class="flaticon-left-arrows" aria-hidden="true"></i> </a>-->
<!--                </li>-->
<!--                <li><a href="#0">1</a></li>-->
<!--                <li><a href="#0" class="active">2</a></li>-->
<!--                <li><a href="#0">3</a></li>-->
<!--                <li><a href="#0">...</a></li>-->
<!--                <li><a href="#0">10</a></li>-->
<!--                <li class="next"><a href="#0"><i class="flaticon-next-1" aria-hidden="true"></i> </a>-->
<!--                </li>-->
<!--              </ul>-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </section>
      <!--End product-grid-->
    </main>
  </div>
</template>


