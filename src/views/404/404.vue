<script>
export default {
  name: "404",
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

<template>
  <div>
    <main class="overflow-hidden d-flex align-content-center justify-content-center pt-120 pb-120">
      <h1>404 - Page Not Found!!!</h1>
    </main>
  </div>

</template>

<style scoped>

</style>