<script>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {Header, Footer},
  data() {
    return {

    };
  },
  methods: {

  }
}

</script>

<template>
  <div>
    <!-- header-default start -->
    <Header></Header>

    <router-view></router-view>

    <!--  Footer Three start -->
    <Footer></Footer>
  </div>
</template>

<style>

</style>
