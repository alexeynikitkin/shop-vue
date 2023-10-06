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
      this.updateCart();
      $('.wish-icon span').text(this.products.length)
    },
    updateCart(){
      localStorage.setItem('wishlist', JSON.stringify(this.products))
    },
  }
}
</script>

<template>
  <div>
    <main class="overflow-hidden">
      <!--Start Breadcrumb Style2-->
      <section class="breadcrumb-area" style="background-image: url(http://localhost:5173/src/assets/images/inner-pages/breadcum-bg.png);">
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
                        <p class="instock" v-if="product.count > 0">In Stock</p>
                        <p class="instock" v-else>Out Of Stock</p>
                      </td>
                      <td class="add-to-cart-btn">
                        <a v-if="product.count > 0" href="cart.html" class=" btn--primary style2 ">Add To Cart</a>
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