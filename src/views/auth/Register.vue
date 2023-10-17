<script>
export default {
  name: "Show",
  mounted() {
    $(document).trigger('changed')
    // this.getProductsCart()
  },
  data() {
    return {
      // products: [],
      name: '',
      email: '',
      address: '',
      password: '',
    }
  },
  methods: {
    registerUser(){
      this.axios.post('https://karte.studiopresto.dev/api/register-user', {
        'name': this.name,
        'email': this.email,
        'address': this.address,
        'password': this.password,
      }).then(res => {
        console.log(res);
        window.location.replace('/login');

      }).finally(v => {
        $(document).trigger('changed');
      })
    },
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
              <div class="breadcrumb-content text-center wow fadeInUp animated">
                <h2>Register</h2>
                <div class="breadcrumb-menu">
                  <ul>
                    <li><a href="index.html"><i class="flaticon-home pe-2"></i>Home</a></li>
                    <li> <i class="flaticon-next"></i> </li>
                    <li class="active">Register</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--End Breadcrumb Style2-->
      <!--Start Login Page-->
      <section class="login-page pt-120 pb-120">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8 col-md-9 wow fadeInUp animated">
              <div class="login-register-form"
                   style="background-image: url('src/assets/images/inner-pages/login-bg.png');">
                <div class="top-title text-center ">
                  <h2>Register</h2>
                  <p>Already have an account? <router-link to="/login">Log in</router-link></p>
                </div>
                <form class="common-form">
                  <div class="form-group"> <input type="text" class="form-control"
                                                  placeholder="Your Name" v-model="name"> </div>
                  <div class="form-group"> <input type="text" class="form-control" placeholder="Address" v-model="address">
                  </div>
                  <div class="form-group"> <input type="email" class="form-control" v-model="email"
                                                  placeholder="Your Email"> </div>
                  <div class="form-group eye">
                    <div class="icon icon-1"> <i class="flaticon-hidden"></i></div> <input v-model="password"
                      type="password" id="password-field" class="form-control" placeholder="Password">
                    <div class="icon icon-2 "><i class="flaticon-visibility"></i> </div>
                  </div>
                  <button @click.prevent="registerUser()" type="submit" class="btn--primary style2">Register </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--End Login Page-->
    </main>
  </div>
</template>

<style scoped>

</style>