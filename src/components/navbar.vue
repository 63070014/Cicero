<template>
    <nav class="bg-white px-4 py-2.5 flex border-b justify-between items-center">
        <router-link class="space-x-2 flex items-center" to="/">
            <img src="../assets/icons/image1.svg" />
            <p>Cicero</p>
        </router-link>
        <div class="menu-navbar-group space-x-4 text-sm">
            <router-link to="/men" v-on:mouseover="slideToggle()">MEN</router-link>
            <router-link to="/women">WOMEN</router-link>
            <router-link to="/kids">KIDS</router-link>
            <router-link to="/sale">SALE</router-link>
            <router-link to="/newin">NEW IN</router-link>
        </div>
        <div class="flex items-center space-x-4">
            <div class="search-bar bg-gray-200">
                <img src="../assets/icons/Search_light@3x.svg" alt="">

            </div>
            <img src="../assets/icons/basket.svg" />
            <img src="../assets/icons/heart.svg" />
            <img src="../assets/icons/profile.svg" alt="" />
            <!-- <router-link to="/about">About</router-link> -->
        </div>

    </nav>
    <div class="dropdown-menu-items" :class="{ isOpen }" v-on:mouseleave="slideToggle()">
        <li v-for="item in men_item" :key="item.name">
            <router-link :to="{ path: item.path }">{{ item.name }}</router-link>
        </li>
    </div>
</template>
<style>
.menu-navbar-group>a {
    color: #2c3e50;
    position: relative;
    padding-bottom: 5px;
}

nav a.router-link-exact-active {
    border-bottom: 1px solid black;
}

.dropdown-menu-items {
    display: none;
    width: 100%;
    height: auto;
    text-align: center;
    /* background-color: red; */
    position: absolute;
}

.dropdown-menu-items>li {
    padding: .75rem;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.93);
    list-style-type: none;
}

.dropdown-menu-items>li:hover {
    background-color: rgba(171, 168, 168, 0.525)
}

.isOpen {
    display: block;
}
</style>
<script>
import $ from 'jquery'
export default {
    name: "navbar",
    data() {
        return {
            isOpen: false,
            men_item: [
                { name: "Hoodies & Sweatshirts", path: "/" },
                { name: "Jackets", path: "/" },
                { name: "Pants", path: "/" },
                { name: "Tracksuits", path: "/" },
                { name: "Leggings", path: "/" },
                { name: "T-Shirts & Tops", path: "/" },
                { name: "Shorts", path: "/" },
            ],
            women_item: ["Tops", "Shorts", "Skirts", "Trousers", "Sets", "Dresses", "Jumpsuits"],
        };
    },
    methods: {
        slideToggle(){
            $('.dropdown-menu-items').slideToggle();
        }
    },
    components: {}
}

</script>