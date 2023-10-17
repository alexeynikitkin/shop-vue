<script>
export default {
  name: "Login",
  mounted() {
    $(document).trigger('changed')
  },
  data() {
    return {
      password: '',
      email: '',
    }
  },
  methods: {
    login(){
      this.axios.post('https://karte.studiopresto.dev/api/login-user', {
        'email': this.email,
        'password': this.password,
        'end': 'end'
      }).then(res => {
        console.log(res);
        localStorage.setItem('user_logged', JSON.stringify(res.data));
        localStorage.setItem('wishlist', '[]');
        localStorage.setItem('cart', '[]');
        window.location.href = '/account'
        // this.$router.push('/account')
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
                <h2>Login</h2>
                <div class="breadcrumb-menu">
                  <ul>
                    <li><a href="index.html"><i class="flaticon-home pe-2"></i>Home</a></li>
                    <li> <i class="flaticon-next"></i> </li>
                    <li class="active">Login</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--End Breadcrumb Style2-->
      <!--Start Login Page-->
      <section class="login-page pt-120 pb-120 wow fadeInUp animated">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8 col-md-9">
              <div class="login-register-form"
                   style="background-image: url('src/assets/images/inner-pages/login-bg.png');">
                <div class="top-title text-center ">
                  <h2>Login</h2>
                  <p>Don't have an account yet? <router-link to="/register">Sign up for free</router-link></p>
                </div>
                <form class="common-form" action="#">
                  <div class="form-group"> <input type="email" class="form-control" v-model="email"
                                                  placeholder="Your User Email Address"> </div>
                  <div class="form-group eye">
                    <div class="icon icon-1"> <i class="flaticon-hidden"></i></div> <input
                      type="password" id="password-field" class="form-control" v-model="password" placeholder="Password">
                    <div class="icon icon-2 "><i class="flaticon-visibility"></i> </div>
                  </div>
<!--                  <div class="checkk ">-->
<!--                    <div class="form-check p-0 m-0"> <input type="checkbox" id="remember"> <label-->
<!--                        class="p-0" for="remember"> Remember Me</label> </div> <a href="#0"-->
<!--                                                                                  class="forgot"> Forgot Password?</a>-->
<!--                  </div> -->
                  <button @click.prevent="login()" type="submit" class="btn--primary style2">Login </button>
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