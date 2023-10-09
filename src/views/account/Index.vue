<script>
export default {
  name: "Show",
  mounted() {
    $(document).trigger('changed')
    this.user = this.getUser()
    console.log(this.user)
  },
  data() {
    return {
      user : []
    }
  },
  methods: {
    getUser() {
      let user = localStorage.getItem('user_logged');
      if(user != '') {
        user = JSON.parse(user);
        return user;
      }
      else {
        return false;
      }
    }
  }
}
</script>

<template>
  <div>
    <main class="overflow-hidden " v-if="user != ''">
      <!--Start Breadcrumb Style2-->
      <section class="breadcrumb-area" style="background-image: url(src/assets/images/inner-pages/breadcum-bg.png);">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="breadcrumb-content text-center wow fadeInUp animated">
                <h2>My Account </h2>
                <div class="breadcrumb-menu">
                  <ul>
                    <li><a href="index.html"><i class="flaticon-home pe-2"></i>Home</a></li>
                    <li> <i class="flaticon-next"></i> </li>
                    <li class="active">My Account</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--End Breadcrumb Style2-->
      <!--Start My Account Page-->
      <section class="my-account-page pt-120 pb-120">
        <div class="container">
          <div class="row wow fadeInUp animated">
            <!--Start My Account Page Menu-->
            <div class="col-xl-3 col-lg-4">

              <div class="d-flex align-items-start">
                <div class="nav my-account-page__menu flex-column nav-pills me-3" id="v-pills-tab"
                     role="tablist" aria-orientation="vertical"> <button class="nav-link active"
                                                                         id="v-pills-dashboard-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dashboard"
                                                                         type="button" role="tab" aria-controls="v-pills-dashboard" aria-selected="true">
                  <span> Dashboard</span> </button> <button class="nav-link" id="v-pills-orders-tab"
                                                            data-bs-toggle="pill" data-bs-target="#v-pills-orders" type="button" role="tab"
                                                            aria-controls="v-pills-orders" aria-selected="false"> <span> Orders</span> </button>
                <button class="nav-link" id="v-pills-address-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-address" type="button" role="tab"
                                    aria-controls="v-pills-address" aria-selected="false"> <span> Address</span>
                  </button> <button class="nav-link" id="v-pills-account-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-account" type="button" role="tab"
                                    aria-controls="v-pills-account" aria-selected="false"> <span> Account Details</span>
                  </button></div>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="tab-content " id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel"
                     aria-labelledby="v-pills-dashboard-tab">
                  <div class="tabs-content__single">
                    <h4><span>Hello {{ user.name }}</span> (Not Admin? Logout)</h4>
                    <h5>From your account dashboard you can view your <span>Recent Orders, manage your
                                            shipping</span> and <span>billing addresses,</span> and edit your
                      <span>Password and account details</span></h5>
                  </div>
                </div>
                <div class="tab-pane fade" id="v-pills-orders" role="tabpanel"
                     aria-labelledby="v-pills-orders-tab">
                  <div class="tabs-content__single">
                    <h4><span>Hello {{ user.name }}</span> (Not Admin? Logout)</h4>
                    <ul>
                      <li v-for="order in user.orders">
                        <div class="item d-flex gap-2" v-for="item in JSON.parse(order.products)">
                          <img width="100" height="100" :src="item.image_url" :alt="item.title">
                          <div class="details">
                            <h4>#: {{ order.id }}</h4>
                            <p>Title: <router-link :to="{name: 'products.show', params: {id: item.id}}">{{ item.title }}</router-link></p>
                            <p>Price: ${{ item.price }}</p>
                            <p>Qty: {{ item.qty }}</p>
                            <p>Size: {{ item.size }}</p>
                            <p>Color: {{ item.color }}</p>
                          </div>
                        </div>
                        <hr>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="tab-pane fade" id="v-pills-address" role="tabpanel"
                     aria-labelledby="v-pills-address-tab">
                  <div class="tabs-content__single">
                    <h4><span>Hello {{ user.name }}</span> (Not Admin? Logout)</h4>
                    <h5> {{user.address}} </h5>
                  </div>
                </div>
                <div class="tab-pane fade" id="v-pills-account" role="tabpanel"
                     aria-labelledby="v-pills-account-tab">
                  <div class="tabs-content__single">
                    <h4><span>Hello {{ user.name }}</span> (Not Admin? Logout)</h4>
                    <h5>Name: {{user.name}} </h5>
                    <p>Email: {{user.email}} </p>
                    <p>Address: {{user.address}} </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--End My Account Page-->
    </main>
  </div>
</template>

<style scoped>

</style>