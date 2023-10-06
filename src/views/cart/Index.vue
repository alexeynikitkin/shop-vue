<script>
export default {
  name: "Index",
  mounted() {
    $(document).trigger('changed')
    this.getProductsCart()
    this.getLoggedInUser()
    this.discounts = this.user.discounts
    console.log(this.user)
    console.log(this.discounts)
  },
  data() {
    return {
      products: [],
      name: '',
      address: '',
      email: '',
      user: '',
      discounts: '',
      totalDisc: null
    }
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.products.forEach(product => {
        total += product.price * product.qty;
      })
      return total
    }
  },
  methods: {
    getProductsCart() {
      this.products = JSON.parse(localStorage.getItem('cart'));
    },
    minusQty(product){
      if(product.qty == 0) return
      product.qty--;
      this.updateCart();
    },
    plusQty(product){
      product.qty++;
      this.updateCart();
    },
    removeProduct(id) {
      this.products = this.products.filter( product =>{
        return product.id !== id;
      })
      this.updateCart();
    },
    updateCart(){
      localStorage.setItem('cart', JSON.stringify(this.products))
      $('.cart-icon span').text(this.products.length)
    },
    storeOrder(){
      this.axios.post('http://127.0.0.1:8000/api/orders', {
        'products': this.products,
        'name': this.name,
        'email': this.email,
        'address': this.address,
        'total_price': this.totalPrice,
        'total_disc' : this.totalDisc
      }).then(res => {
        console.log(res);
        this.products = []
        localStorage.setItem('cart', '[]');
        window.location.reload()

      }).finally(v => {
        $(document).trigger('changed');
      })
    },
    storeOrderLoggedIn(){
      this.axios.post('http://127.0.0.1:8000/api/orders', {
        'products': this.products,
        'name': this.user.name,
        'email': this.user.email,
        'address': this.user.address,
        'total_price': this.totalPrice,
        'total_disc' : this.totalDisc
      }).then(res => {
        console.log(res);
        this.products = []
        localStorage.setItem('cart', '[]');
        window.location.reload()

      }).finally(v => {
        $(document).trigger('changed');
      })
    },
    getLoggedInUser(){
      this.user = JSON.parse(localStorage.getItem('user_logged'));
    },
    applyCoupon() {
      $('.cart-total-box .price').text(this.totalPrice - this.discounts[0].value);
      this.totalDisc = this.totalPrice - this.discounts[0].value;
      this.axios.post('http://127.0.0.1:8000/api/discount', {
        'discount_id': this.discounts[0].id,
      }).then(res => {
        console.log(res);
      }).finally(v => {
        $(document).trigger('changed');
      })
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
    <main class="overflow-hidden " >
      <!--Start Breadcrumb Style2-->
      <section class="breadcrumb-area" style="background-image: url(src/assets/images/inner-pages/breadcum-bg.png);">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="breadcrumb-content text-center wow fadeInUp animated">
                <h2>Cart</h2>
                <div class="breadcrumb-menu">
                  <ul>
                    <li><a href="index.html"><i class="flaticon-home pe-2"></i>Home</a></li>
                    <li> <i class="flaticon-next"></i> </li>
                    <li class="active">Cart</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--End Breadcrumb Style2-->
      <!--Start cart area-->
      <section class="cart-area pt-120 pb-120">
        <div class="container">
          <div class="row wow fadeInUp animated">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div class="cart-table-box">
                <div class="table-outer">
                  <table class="cart-table">
                    <thead class="cart-header">
                    <tr>
                      <th class="">Product Name</th>
                      <th class="price">Price</th>
                      <th>Attributes</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th class="hide-me"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="product in products">
                      <td>
                        <div class="thumb-box">
                          <router-link :to="{name: 'products.show', params: {id: product.id}}" class="thumb">
                          <img :src="product.image_url" :alt="product.title">
                        </router-link>
                          <router-link :to="{name: 'products.show', params: {id: product.id}}" class="title">
                          <h5> {{ product.title }} </h5>
                        </router-link>
                        </div>
                      </td>
                      <td>${{ product.price }}</td>
                      <td>Size - {{ product.size }}<br/>Color - {{ product.color }}<br/></td>
                      <td class="qty">
                        <div class="qtySelector text-center" :data-stock="product.stock" :data-cart-qty="getProductFromCart(product.id)">
                          <span @click.prevent="minusQty(product)" class="decreaseQty">
                            <i class="flaticon-minus">
                            </i>
                          </span>
                          <input type="number" class="qtyValue" :value="product.qty" />
                          <span @click.prevent="plusQty(product)" class="increaseQty">
                            <i class="flaticon-plus">
                            </i>
                          </span>
                        </div>
                      </td>
                      <td class="sub-total">${{ product.price * product.qty }}</td>
                      <td>
                        <div @click.prevent="removeProduct(product.id)" class="remove"> <i class="flaticon-cross"></i> </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-12" v-if="products.length > 0">
              <div class="cart-button-box">
                <div class="apply-coupon wow fadeInUp animated">
                  <div class="apply-coupon-input-box mt-30 ">
                    <input type="text" name="coupon-code" placeholder="Coupon Code">
                  </div>
                  <div class="apply-coupon-button mt-30">
                    <button @click.prevent="applyCoupon()" class="btn--primary style2" type="submit">Apply Coupon</button>
                  </div>
                </div>
                <div class="cart-button-box-right wow fadeInUp animated"> <router-link :to="{name: 'products.index'}" class="btn--primary mt-30"
                                                                                  type="submit">Continue Shopping</router-link> </div>
              </div>
            </div>
            <div class="col-xl-12" v-else>
              Empty Cart
              <router-link :to="{name: 'products.index'}" class="btn--primary mt-30"
                           type="submit">Continue Shopping</router-link>
            </div>
          </div>
          <div class="row w-25" v-if="products.length > 0">
            <div class="cart-button-box" v-if="user == ''">
              <input type="text" name="name" v-model="name" placeholder="Name">
              <input type="text" name="email" v-model="email" placeholder="Email">
              <input type="text" name="address" v-model="address" placeholder="Address">
              <input @click.prevent="storeOrder()" type="submit" class="btn btn--primary style2" value="Submit">
            </div>
            <div class="cart-button-box" v-else>
              <input @click.prevent="storeOrderLoggedIn()" type="submit" class="btn btn--primary style2" value="Submit">
            </div>
          </div>
          <div class="row pt-120" v-if="products.length > 0">
            <div class="col-xl-6 col-lg-7 wow fadeInUp animated">
              <div class="cart-total-box">
                <div class="inner-title">
                  <h3>Cart Totals</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt--30" v-if="products.length > 0">
            <div class="col-xl-6 col-lg-7 wow fadeInUp animated">
              <div class="cart-total-box mt-30">
                <div class="table-outer">
                  <table class="cart-table2">
                    <thead class="cart-header clearfix">
                    <tr>
                      <th colspan="1" class="shipping-title">Price with Coupon</th>
                      <th>$<span class="price">{{ totalPrice }}</span></th>
                    </tr>
                    </thead>
<!--                    <tbody>-->
<!--                    <tr>-->
<!--                      <td class="shipping"> Shipping </td>-->
<!--                      <td class="selact-box1">-->
<!--                        <ul class="shop-select-option-box-1">-->
<!--                          <li> <input type="checkbox" name="free_shipping" id="option_1"-->
<!--                                      checked=""> <label for="option_1"><span></span>Free-->
<!--                            Shipping</label> </li>-->
<!--                          <li> <input type="checkbox" name="flat_rate" id="option_2"> <label-->
<!--                              for="option_2"><span></span>Flat Rate</label> </li>-->
<!--                          <li> <input type="checkbox" name="local_pickup" id="option_3">-->
<!--                            <label for="option_3"><span></span>Local Pickup</label> </li>-->
<!--                        </ul>-->
<!--                        <div class="inner-text">-->
<!--                          <p>Shipping options will be updated during checkout</p>-->
<!--                        </div>-->
<!--                        <h4>Calculate Shipping</h4>-->
<!--                      </td>-->
<!--                    </tr>-->
<!--                    <tr>-->
<!--                      <td>-->
<!--                        <h4 class="total">Total</h4>-->
<!--                      </td>-->
<!--                      <td class="subtotal">$2500.00</td>-->
<!--                    </tr>-->
<!--                    </tbody>-->
                  </table>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-5 wow fadeInUp animated">
              <div class="cart-check-out mt-30">
                <h3>Check Out</h3>
                <ul class="cart-check-out-list">
                  <li>
                    <div class="left">
                      <p>Subtotal</p>
                    </div>
                    <div class="right">
                      <p>${{ totalPrice }}</p>
                    </div>
                  </li>
                  <li>
                    <div class="left">
                      <p>Shipping</p>
                    </div>
                    <div class="right">
                      <p><span>Flat rate:</span> $50.00</p>
                    </div>
                  </li>
                  <li>
                    <div class="left">
                      <p>Total Price:</p>
                    </div>
                    <div class="right">
                      <p>${{ totalPrice + 50 }}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--End cart area-->
    </main>
  </div>
</template>

<style scoped>

</style>