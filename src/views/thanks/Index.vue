<script>
export default {
  name: "Index",
  mounted() {
    $(document).trigger('changed')
  },
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>
<style scoped>

</style>
<template>
  <div>
    <main class="overflow-hidden ">
      <!--Start Breadcrumb Style2-->
      <section class="breadcrumb-area" style="background-image: url(/src/assets/images/inner-pages/breadcum-bg.png);">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="breadcrumb-content pb-60 text-center wow fadeInUp animated">
                <h2>Shop Grid</h2>
                <div class="breadcrumb-menu">
                  <ul>
                    <li><a href="index.html"><i class="flaticon-home pe-2"></i>Home</a></li>
                    <li><i class="flaticon-next"></i></li>
                    <li class="active">Thanks Page</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="cart-area pt-120 pb-120">
        <div class="container">
          <div class="row wow fadeInUp animated">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div class="cart-table-box">
                <h2>Thanks for your buying!! We'll access with you as soon as possible!! </h2>
                <router-link :to="{name: 'products.index'}" class="btn--primary mt-30"
                             type="submit">Continue Shopping</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

