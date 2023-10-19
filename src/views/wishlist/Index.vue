<script>
export default {
  name: "Index",
  mounted() {
    $(document).trigger('changed')
    this.getProductsWishlist()
  },
  data() {
    return {
      products: []
    }
  },
  computed: {
  },
  methods: {
    getProductsWishlist() {
      this.products = JSON.parse(localStorage.getItem('wishlist'));
      console.log(this.products)
    },
    removeProduct(id) {
      this.products = this.products.filter( product =>{
        return product.id !== id;
      })
      this.updateWishlist();
      $('.wish-icon span').text(this.products.length)
      window.location.reload()
    },
    updateWishlist(){
      localStorage.setItem('wishlist', JSON.stringify(this.products))
    },
    addToCart(product, isSingle) {
      localStorage.setItem('cart', []);
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
      $('.cart-icon span').text(cart.length)
      window.location.reload()
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
  }
}
</script>

<template>
  <div>
    <main class="overflow-hidden">
      <!--Start Breadcrumb Style2-->
      <section class="breadcrumb-area" style="background-image: url(/src/assets/images/inner-pages/breadcum-bg.png);">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="breadcrumb-content text-center wow fadeInUp animated">
                <h2>Wishlist</h2>
                <div class="breadcrumb-menu">
                  <ul>
                    <li><a href="/"><i class="flaticon-home pe-2"></i>Home</a></li>
                    <li> <i class="flaticon-next"></i> </li>
                    <li class="active">Wishlist</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--End Breadcrumb Style2-->
      <!--Start Wishlist-->
      <section class="wishlist pt-120 pb-120">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 wow fadeInUp animated">
              <div class="wishlist-table-box">
                <div class="wishlist-table-outer">
                  <table class="wishlist-table" v-if="products.length != 0">
                    <thead class="wishlist-header">
                    <tr>
                      <th>Image</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Stock Status</th>
                      <th>Add</th>
                      <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="product in products">
                      <td>
                        <div class="wishlist-thumb"> <img
                            :src="product.image_url" :alt="product.title"> </div>
                      </td>
                      <td>
                        <h5>{{ product.title }} </h5>
                      </td>
                      <td>
                        <p class="price">${{ product.price }}</p>
                      </td>
                      <td>
                        <p class="instock" v-if="product.stock > 0">In Stock</p>
                        <p class="instock" v-else>Out Of Stock</p>
                      </td>
                      <td class="add-to-cart-btn">
                        <a v-if="product.stock != getProductFromCart(product.id)" @click.prevent="addToCart(product, true)" class="btn--primary style2 ">Add To Cart</a>
                        <p v-else class="instock">Waiting for it...</p>
                      </td>
                      <td>
                        <div @click.prevent="removeProduct(product.id)" class="remove"> <i class="flaticon-cross"></i> </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <table class="wishlist-table" v-else>
                    Nothing to show
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--End Wishlist-->
    </main>
  </div>
</template>

<style scoped>

</style>