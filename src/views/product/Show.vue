
<script>
export default {
  name: "Show",
  mounted() {
    $(document).trigger('changed')
    this.getProduct()
    this.cart_qty = this.getProductFromCart()
  },
  data() {
    return {
      product: null,
      users_name: '',
      users_number: '',
      users_email: '',
      title: '',
      body: '',
      comments: null,
      cart_qty: 0
    }
  },
  methods: {
    getProduct(id) {
      this.axios.get(`https://karte.studiopresto.dev/api/products/${this.$route.params.id}`)
          .then(res => {
            this.product = res.data.data
            console.log(this.product)
            if(localStorage.getItem('cart') == null) {
              localStorage.setItem('cart', '[]');
            }
          })
          .finally(v => {
            $(document).trigger('changed')
          })
    },
    storeComment(){
      this.axios.post('https://karte.studiopresto.dev/api/comments', {
        'users_name': this.users_name,
        'users_email': this.users_email,
        'users_number': this.users_number,
        'title': this.title,
        'body': this.body,
        'product_id': this.product.id
      }).then(res => {
        console.log(res);
      }).finally(v => {
        $(document).trigger('changed');
        window.location.reload();
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
          'color' : product.color,
          'stock' : product.stock
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
      $('.cart-icon span').text(cart.length);
      window.location.reload()
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
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
    <main>
      <!--Start Shop Details Breadcrumb-->
      <div class="shop-details-breadcrumb wow fadeInUp animated overflow-hidden ">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="shop-details-inner">
                <ul class="shop-details-menu">
                  <li><a href="index.html">Home</a></li>
                  <li v-if="product" class="active">{{ product.title }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--End Shop Details Breadcrumb-->
      <!--Start Shop Details Top-->
      <section class="shop-details-top two ">
        <div class="container">
          <div class="row mt--30">
            <div class="col-xl-6 col-lg-6 mt-30 wow fadeInUp animated">
              <div class="single-product-box one">
                <div class="big-product single-product-one slider-for" v-if="product && product.product_images.length == 0">
                  <div>
                    <div class="single-item"> <img :src="product.image_url" :alt="product.title">
                      <div class="ptag" v-for="tag in product.tags"> <span class="one">{{ tag.title }}</span> </div>
                    </div>
                  </div>
                </div>
                <div class="big-product single-product-one slider-for" v-if="product && product.product_images.length > 2">
                  <div v-for="image in product.product_images">
                    <div class="single-item"> <img :src="image.file_path" :alt="product.title">
                      <div class="ptag"> <span class="one">-20% </span> </div> <a href="#0"
                                                                                  class="love"> <i class="flaticon-like"></i> </a>
                    </div>
                  </div>
                </div>
                <div class="navholder" v-if="product && product.product_images.length > 2">
                  <div class="product-slicknav single-product-one-nav slider-nav">
                    <div v-for="image in product.product_images"> <span class="single-item"> <img
                        :src="image.file_path" :alt="product.title"> </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 mt-30 wow fadeInUp animated">
              <div class="shop-details-top-right ">
                <div class="shop-details-top-right-content-box">
                  <div class="shop-details-top-review-box">
                    <div class="shop-details-top-review">
                      <p>(2 Reviews)</p>
                    </div>
                  </div>
                  <div class="shop-details-top-title">
                    <h3 v-if="product">{{ product.title }}</h3>
                  </div>
                  <ul class="shop-details-top-info">
                    <li v-if="product"><span>SKU:</span> {{ product.sku }}</li>
                  </ul>
                  <div class="shop-details-top-price-box">
                    <h3 v-if="product">${{ product['price'] }} <del>${{ parseInt(product['price']) + 10 + '.00' }}</del></h3>
<!--                    <p>(+15% Vat Included)</p>-->
                  </div>
<!--                  <p class="shop-details-top-product-sale"><span>20</span> Products sold in last 12 hours-->
<!--                  </p>-->
<!--                  <div class="shop-details-top-size-box">-->
<!--                    <h4>Size: (XS)</h4>-->
<!--                    <div class="shop-details-top-size-list-box">-->
<!--                      <ul class="shop-details-top-size-list">-->
<!--                        <li><a href="#0">XS</a></li>-->
<!--                        <li><a href="#0">S</a></li>-->
<!--                        <li><a href="#0">M</a></li>-->
<!--                        <li><a href="#0">XL</a></li>-->
<!--                      </ul>-->
<!--                      <p class="shop-details-top-size-guide"><a href="#0">Size Guide</a></p>-->
<!--                    </div>-->
<!--                  </div>-->
                  <div class="shop-details-top-color-sky-box">
                    <h4 v-if="product">
                      Color: {{ product.color }} <br/>
                      Size: {{ product.size }}
                    </h4>
                    <ul class="varients" v-if="product">
                      <li v-for="variant in product.group"> <a :href="`/products/${variant.id}`" class="shop-details-top-color-sky-img"
                              data-src="/src/assets/images/shop/products-img1.jpg"> <img
                          :src="variant.image_url"
                          alt=""> </a> </li>
                    </ul>
                  </div>
                  <div class="product-quantity" v-if="product && product.stock > 0">
                    <h4>Quantity</h4>
                    <div class="product-quantity-box d-flex align-items-center flex-wrap">
                      <div class="qty mr-2">
                        <div class="qtySelector text-center" :data-stock="product.stock" :data-cart-qty="cart_qty"> <span class="decreaseQty" @click.prevent="decreaseQty($event)"><i
                            class="flaticon-minus"></i> </span> <input type="number"
                                                                       class="qtyValue" value="1" /> <span class="increaseQty" @click.prevent="increaseQty($event)"> <i
                            class="flaticon-plus"></i> </span> </div>
                      </div>
                      <div class="product-quantity-check"> <i class="flaticon-select"></i>
<!--                        <p v-if="product['count'] > 0">In Stock</p>-->
<!--                        <p v-else>Out of Stock</p>-->
                      </div>
                    </div>
                  </div>
                  <div class="shop-details-top-order-now"> <i class="flaticon-point"></i>
                    <p v-if="product && product.stock > 0">Order Now, Only {{ product.stock - getProductFromCart(product.id) }} <br/> Left In Your Cart {{ getProductFromCart(product.id) }} !</p>
                    <p v-else>Out of Stock!</p>
                    <p v-if="product && cart_qty > 0"> You have  {{ cart_qty }} qty by this product in cart!</p>
                  </div>
                  <div v-if="product && product.stock != getProductFromCart(product.id)" @click.prevent="addToCart(product)" class="shop-details-top-cart-box-btn"> <button class="btn--primary style2"
                                                                      type="submit">Add to Cart</button> </div>
                  <ul class="shop-details-top-category-tags">
                    <li v-if="product">Category: <span>{{ product.category.title }}</span></li>
                    <li v-if="product">Tags: <span v-for="tag in product.tags">{{ tag.title }}</span></li>
                  </ul>
                  <ul class="shop-details-top-feature">
                    <li>
                      <div class="icon"> <i class="flaticon-portfolio"></i> </div>
                      <div class="text">
                        <p>Money back guarantee</p>
                      </div>
                    </li>
                    <li>
                      <div class="icon"> <i class="flaticon-truck"></i> </div>
                      <div class="text">
                        <p>Free Shipping & Return</p>
                      </div>
                    </li>
                    <li>
                      <div class="icon"> <i class="flaticon-security"></i> </div>
                      <div class="text">
                        <p>Comportable Support</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--End Shop Details Top-->
      <!-- productdrescription-tabStart -->
      <section class="product pt-60 pb-60 wow fadeInUp overflow-hidden ">
        <div class="container">
          <div class="row wow fadeInUp animated">
            <div class="col-12">
              <ul class="nav product-details-nav nav-one nav-pills justify-content-center" id="pills-tab-two"
                  role="tablist">
                <li class="nav-item" role="presentation"> <button class="nav-link active"
                                                                  id="pills-description-tab" data-bs-toggle="pill" data-bs-target="#pills-description"
                                                                  type="button" role="tab" aria-controls="pills-description" aria-selected="true">
                  Description </button> </li>
                <li class="nav-item" role="presentation"> <button class="nav-link" id="pills-sizechart-tab"
                                                                  data-bs-toggle="pill" data-bs-target="#pills-sizechart" type="button" role="tab"
                                                                  aria-controls="pills-sizechart" aria-selected="false"> Size Chart </button> </li>
                <li class="nav-item" role="presentation"> <button class="nav-link" id="pills-review-tab"
                                                                  data-bs-toggle="pill" data-bs-target="#pills-review" type="button" role="tab"
                                                                  aria-controls="pills-review" aria-selected="false"> Review </button> </li>
              </ul>
            </div>
          </div>
          <div class="row wow fadeInUp animated">
            <div class="tab-content" id="pills-tabContent-two">
              <div class="tab-pane fade show active" id="pills-description" role="tabpanel"
                   aria-labelledby="pills-description-tab">
                <div class="product-drescription">
                  <h4> Product Details:</h4>
                  <p v-if="product">{{ product.description }}</p>
                  <div class="row align-items-center">
                    <div class="col-lg-4 mt-30" v-if="product && product.image_url != null">
                      <img :src="product.image_url" alt="">
                    </div>
                    <div class="col-lg-8 mt-30">
                      <h4>Specification:</h4>
                      <p v-if="product && product.content">{{product.content}}</p>
                      <p v-else>Out of content</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-sizechart" role="tabpanel"
                   aria-labelledby="pills-sizechart-tab">
                <div class="product-drescription">
                  <div class="size-chirt">
                    <h4>Size Guide</h4>
                    <p class="pt-0"> Assertively conceptualize parallel process improvements through
                      user friendly colighue to action items. </p>
                    <div class="size-tabble">
                      <table>
                        <thead>
                        <tr>
                          <th>Size</th>
                          <th>XXS - XS</th>
                          <th>XS - S</th>
                          <th>S - M</th>
                          <th>M - L</th>
                          <th>L - XL</th>
                          <th>XL - XXL</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>ARGENTINA</td>
                          <td>7</td>
                          <td>8</td>
                          <td>9</td>
                          <td>10</td>
                          <td>11</td>
                          <td>12</td>
                        </tr>
                        <tr>
                          <td>BOLIVIA</td>
                          <td>8</td>
                          <td>9</td>
                          <td>10</td>
                          <td>11</td>
                          <td>12</td>
                          <td>13</td>
                        </tr>
                        <tr>
                          <td>COLOMBIA</td>
                          <td>26</td>
                          <td>28</td>
                          <td>30</td>
                          <td>32</td>
                          <td>34</td>
                          <td>36</td>
                        </tr>
                        <tr>
                          <td>China</td>
                          <td>34</td>
                          <td>36</td>
                          <td>38</td>
                          <td>40</td>
                          <td>42</td>
                          <td>44</td>
                        </tr>
                        <tr>
                          <td>MEXICO</td>
                          <td>32</td>
                          <td>34</td>
                          <td>36</td>
                          <td>38</td>
                          <td>40</td>
                          <td>42</td>
                        </tr>
                        <tr>
                          <td>JAMAICA</td>
                          <td>40</td>
                          <td>42</td>
                          <td>44</td>
                          <td>46</td>
                          <td>48</td>
                          <td>50</td>
                        </tr>
                        <tr>
                          <td>MEXICO</td>
                          <td>32</td>
                          <td>34</td>
                          <td>36</td>
                          <td>38</td>
                          <td>40</td>
                          <td>42</td>
                        </tr>
                        <tr>
                          <td>Australia</td>
                          <td>6</td>
                          <td>8</td>
                          <td>10</td>
                          <td>12</td>
                          <td>14</td>
                          <td>16</td>
                        </tr>
                        <tr>
                          <td>USA</td>
                          <td>33</td>
                          <td>44</td>
                          <td>55</td>
                          <td>66</td>
                          <td>77</td>
                          <td>88</td>
                        </tr>
                        <tr>
                          <td>UK</td>
                          <td>6</td>
                          <td>8</td>
                          <td>10</td>
                          <td>12</td>
                          <td>14</td>
                          <td>16</td>
                        </tr>
                        <tr>
                          <td><strong>Pant</strong></td>
                          <td>22-23 </td>
                          <td>24-25</td>
                          <td>26-27</td>
                          <td>28-29</td>
                          <td>30-31</td>
                          <td>32-33</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab">
                <div class="product-drescription" v-if="product">
                  <div v-for="comment in product.comments" class="review-single">
                    <div class="left">
                      <h6>{{ comment.title }} <span>{{ comment.users_name }} on {{ comment.created_at }}</span> </h6>
                      <p> {{ comment.body }} </p>
                    </div>
                  </div>
                  <div class="review-from-box mt-30">
                    <h6>Write a Review</h6>
                    <form action="#" class="review-from">
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="form-group"> <label for="name">NAME</label> <input
                              type="text" id="name" v-model="users_name" class="form-control"
                              placeholder="NAME"> </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group"> <label for="number">Number</label> <input
                              type="text" id="number" v-model="users_number" class="form-control"
                              placeholder="Phone Number"> </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group"> <label for="email"> Email </label> <input
                              type="text" id="email" v-model="users_email" class="form-control"
                              placeholder="support@gmail.com"> </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group"> <label for="namee"> REVIEW TITLE</label> <input
                              type="text" id="name" class="form-control" v-model="title"
                              placeholder="Give your review title"> </div>
                        </div>
                        <div class="col-12">
                          <div class="form-group m-0"> <label for="email">BODY OF REVIEW (1500)
                          </label> <textarea v-model="body"
                              placeholder="Write Your Comments Here"></textarea> </div>
                        </div>
                      </div> <button @click.prevent="storeComment()" type="submit" class="btn--primary style2 ">Submit Review
                    </button>
                    </form>
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


