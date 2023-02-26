<template>
  <Navbar />
  <router-view />
</template>

<style>
#app {
  /* color: #2c3e50; */
}
</style>
<script>
import navbar from "./components/navbar.vue"
export default{
  name: "app",
  components:{
    Navbar: navbar,
  }
}
</script>
