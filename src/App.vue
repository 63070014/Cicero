<template>
  <nav class="bg-white px-4 py-2.5 flex border-b justify-between items-center">
      <router-link class="space-x-2 flex items-center" to="/">
        <img src="./assets/icons/image1.svg" />
        <p>Cicero</p>
      </router-link>
    <div class="menu-navbar-group space-x-4 text-sm">
      <router-link to="/men">MEN</router-link>
      <router-link to="/women">WOMEN</router-link>
      <router-link to="/kids">KIDS</router-link>
      <router-link to="/sale">SALE</router-link>
      <router-link to="/newin">NEW IN</router-link>
    </div>
    <div class="flex space-x-4">
      <div class="search-bar bg-gray-200">
      <img src="./assets/icons/Search_light@3x.svg" alt="">

      </div>
      <img src="./assets/icons/heart.svg" />
      <img src="./assets/icons/basket.svg" />
      <router-link to="/about">About</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
