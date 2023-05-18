<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<style>
#app {
  /* color: #2c3e50; */
}
</style>
<script>
import navbar from "./components/navbar.vue"
import footer from "./components/Footer.vue"
export default{
  name: "app",
  components:{
    Navbar: navbar,
    Footer: footer,
  },
}
</script>
