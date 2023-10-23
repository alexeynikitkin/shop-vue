<script>
export default {
  name: "Index",
  mounted() {
    $(document).trigger('changed')
    this.getCats()
  },
  data() {
    return {
      attrs: [],
    }
  },
  methods: {
    getCats() {
      this.axios.get(`https://karte.studiopresto.dev/api/products/filters`)
          .then(res => {
            this.attrs = res.data.categories
          })
          .finally(v => {
            $(document).trigger('changed')
          })
    },
  }
}
</script>

<style scoped>
  .product-categories-one__inner .router-link-active {
    border: 1px solid orange;
  }
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
                    <li><a href="/"><i class="flaticon-home pe-2"></i>Home</a></li>
                    <li> <i class="flaticon-next"></i> </li>
                    <li class="active">Categories</li>
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
                    <router-link :to="{name: 'categories.show', params: {id: cat.id}}" class="img-box">
                    <div class="inner"><img src="/src/assets/images/shop/product-categories-v1-img1.png"
                                            alt=""/></div>
                  </router-link>
                      <h6>{{ cat.title }}</h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                        <div class="categories-three__list-item-inner"><router-link :to="{name: 'categories.show', params: {id: cat.id}}" class="img-box"> <img
                            src="/src/assets/images/home-three/categories-v2-img1.jpg" alt=""/>
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
    </main>
  </div>
</template>


