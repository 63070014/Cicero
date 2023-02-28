<template>
    <div class="center-set">
        <div class="container flex mt-20">
            <div class="sidebar-sort-group">
                <h1 class="text-3xl font-bold line-height-cus border-b-2 border-gray-400">PRODUCT</h1>
                <div id="category-group" class="flex justify-between items-center">
                    <h2 class="text-xl font-bold py-4">CATEGORIES</h2>
                    <hr id="line-category" class="w-8 bg-gray-100 border-0 rounded dark:bg-gray-700 cursor-pointer"
                        @click="slideSidebar('#category-slide')" :style="{ 'height': '2px' }">
                </div>
                <div id="category-slide" class="hidden">
                    <p v-for="(catego, index) in categorie" :key="index" class="py-2 px-4 text-xl"
                        @mouseover="catego.hover = true" @mouseleave="catego.hover = false"
                        :id="'items_category_hover' + index" :class="{ hover_items_bg: catego.hover }">{{
                            catego.title }}</p>
                </div>
                <!-- SIZE DROPDOWN -->
                <div id="size-group" class="flex justify-between items-center border-t-2 border-gray-400">
                    <h3 class="text-xl font-bold py-4">SIZE</h3>
                    <hr id="line-category" class="w-8 bg-gray-100 border-0 rounded dark:bg-gray-700 cursor-pointer"
                        @click="slideSidebar('#category-slide')" :style="{ 'height': '2px' }">
                </div>
                <div id="size-slide">
                    <div class="flex space-x-4 mb-3">
                        <div id="btn-size" class="border w-16 h-10 text-center border-gray-500 border-2 p-1">XS</div>
                        <div id="btn-size" class="border w-16 h-10 text-center border-gray-500 border-2 p-1">S</div>
                        <div id="btn-size" class="border w-16 h-10 text-center border-gray-500 border-2 p-1">M</div>
                    </div>
                    <div class="flex space-x-4">
                        <div id="btn-size" class="border w-16 h-10 text-center border-gray-500 border-2 p-1">L</div>
                        <div id="btn-size" class="border w-16 h-10 text-center border-gray-500 border-2 p-1">XL</div>
                    </div>
                </div>
            </div>
            <div class="text-right px-6 w-full">
                <p class="text-2xl text-gray-400">/ Women</p>
                <div class="grid grid-cols-3 gap-6 mt-10">
                    <div class="browseProduct" v-for="(item, index) in listProduct" :key="index">
                        <div class="w-full relative">
                            <img :src="item.url" />
                            <div class="p-2">
                                <div class="flex items-center">
                                    <img v-show="item.is_favourite == false" class="w-5 absolute right-0"
                                        @click="item.is_favourite = !item.is_favourite" src="../assets/icons/heart.svg">
                                    <img v-show="item.is_favourite == true" class="w-5 absolute right-0"
                                        @click="item.is_favourite = !item.is_favourite" src="../assets/icons/heartt.svg">
                                    <p class="text-md ">{{ item.title }}</p>
                                </div>
                                <p class="text-2xl leading-5">{{ item.price }} <span
                                        class="text-sm text-gray-600">THB</span></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
<style>
.sidebar-sort-group {
    width: 25rem;
}

.line-height-cus {
    line-height: 5rem !important;
}

.line-dropdown {
    background-color: black;
}

.hover_items_bg {
    background-color: #d9d9d9;
}
#btn-size:hover{
    background-color: black;
    color:white
}

.browseProduct>div>img {
    /* width: 300px;
    height: 300px;
    object-fit: none; */
}
</style>
<script>
import $ from 'jquery'
export default {
    name: "Product",
    data() {
        return {
            categorie: [
                { id: 1, title: "Tops", hover: false },
                { ic: 2, title: "Shorts", hover: false },
                { ic: 3, title: "Skirts", hover: false },
                { ic: 4, title: "Trousers", hover: false },
                { ic: 5, title: "Sets", hover: false },
                { ic: 6, title: "Dresses", hover: false },
                { ic: 7, title: "Jumpsuits", hover: false }],
            listProduct: [
                { title: "THE STAR CROP VEST", price: "1590", url: require('../assets/homepage/img1.svg'), is_favourite: false },
                { title: "THE STAR CROP VEST", price: "2790", url: require('../assets/homepage/img2.svg'), is_favourite: false },
                { title: "THE STAR CROP VEST", price: "690", url: require('../assets/homepage/img3.svg'), is_favourite: false },
                { title: "THE STAR CROP VEST", price: "990", url: require('../assets/homepage/img4.svg'), is_favourite: false },
                { title: "THE STAR CROP VEST", price: "1290", url: require('../assets/homepage/img5.svg'), is_favourite: false },
            ],
        }
    },
    methods: {
        itemdropdown_hover(index) {
            let item = '#items_category_hover' + index
            let category = document.querySelector(item)
            category.classList.add('bg-red-200')
        },
        slideSidebar(comp) {
            $(comp).slideToggle();
        }
    }
}
</script>