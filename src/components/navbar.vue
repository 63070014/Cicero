<template>
    <nav class="bg-white py-2.5 flex border-b justify-between items-center sticky top-0 z-10">

        <div class="space-x-2 ml-6 flex items-center z-10 cursor-pointer" @click="LinkTo('/')">
            <img src="../assets/icons/image1.svg" />
            <p>Cicero</p>
        </div>
        <div class="w-full flex justify-center items-center absolute">
            <div class="menu-navbar-group text-sm">
                <router-link class="ml-4" to="/men" v-on:mouseover="slideToggle()">MEN</router-link>
                <router-link class="ml-4" to="/women">WOMEN</router-link>
                <router-link class="ml-4" to="/kids">KIDS</router-link>
                <router-link class="ml-4" to="/sale">SALE</router-link>
                <router-link class="ml-4" to="/newin">NEW IN</router-link>
                <div class="dropdown-menu-items left-0" :class="{ isOpen }" v-on:mouseleave="slideToggle()">
                    <li v-for="item in men_item" :key="item.name">
                        <router-link to="{ path: item.path }">{{ item.name }}</router-link>
                    </li>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-end space-x-4 mr-6">
            <div class="search-box">
                <button class="btn-search"><img src="../assets/icons/Search_light.svg" alt=""></button>
                <input type="text" class="input-search" placeholder="Type to Search...">
            </div>
            <img src="../assets/icons/basket.svg" />
            <img src="../assets/icons/favourite.svg" />
            <img src="../assets/icons/profile.svg" alt="" />
            <!-- <router-link to="/about">About</router-link> -->
        </div>

    </nav>
    <div class="dropdown-profile w-24 bg-red-200 flex flex-col items-center absolute right-0">
        <p>Account</p>
        <p>My Order</p>
        <p>Favourite</p>
        <p>Logout</p>
    </div>
    <!-- <div class="dropdown-menu-items" :class="{ isOpen }" v-on:mouseleave="slideToggle()">
        <li v-for="item in men_item" :key="item.name">
            <router-link :to="{ path: item.path }">{{ item.name }}</router-link>
        </li>
    </div> -->
</template>
<style>
.menu-navbar-group>a {
    color: #2c3e50;
    position: relative;
}

nav a.router-link-exact-active {
    border-bottom: 1px solid black;
}

.dropdown-profile {
    
}

.dropdown-menu-items {
    display: none;
    width: 100%;
    height: auto;
    text-align: center;
    /* background-color: red; */
    position: absolute;
    z-index: 10;
    margin-top: 1.05rem;
}

.dropdown-menu-items>li {
    padding: .75rem;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.93);
    list-style-type: none;
}

.dropdown-menu-items>li:hover {
    background-color: rgb(171, 168, 168)
}

.search-box {
    width: fit-content;
    height: fit-content;
    position: relative;
}

.input-search {
    height: 30px;
    width: 30px;
    border-style: none;
    padding: 10px;
    font-size: 18px;
    letter-spacing: 2px;
    outline: none;
    border-radius: 25px;
    transition: all .5s ease-in-out;
    /* background-color: #F2F2F2; */
    padding-right: 40px;
    color: #C1C1C1;
}

.input-search::placeholder {
    color: #C1C1C1;
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 100;
}

.btn-search {
    width: 30px;
    height: 30px;
    border-style: none;
    font-size: 20px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    right: 0px;
    color: #C1C1C1;
    background-color: transparent;
    pointer-events: painted;
}

.btn-search:focus~.input-search {
    width: 200px;
    margin-right: 40px;
    border-radius: 0px;
    padding-bottom: 7px;

    background-color: transparent;
    border-bottom: 1px solid rgba(195, 102, 102, 0.5);
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}

.input-search:focus {
    width: 300px;
    margin-right: 40px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 1px solid rgba(195, 102, 102, 0.5);
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
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
        slideToggle() {
            $('.dropdown-menu-items').slideToggle();
        },
        LinkTo(destination) {
            location.href = destination
        }
    },
    components: {}
}

</script>