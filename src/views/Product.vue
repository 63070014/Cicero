<template>
    <div class="center-set">
        <div class="flex mt-20 space-x-8">
            <div class="sidebar-sort-group">
                <h1 class="text-3xl font-bold line-height-cus border-b-2 border-gray-300 font-frans uppercase">{{ this.$route.params.sex }}</h1>
                <div id="category-group" @click="slideSidebar('#category-slide')"
                    class="flex justify-between items-center cursor-pointer select-none">
                    <h2 class="text-xl font-bold py-6 font-frans">CATEGORIES</h2>
                    <hr id="line-category" class="w-8 bg-gray-500 border-0 rounded" :style="{ 'height': '2px' }">
                </div>
                <div id="category-slide" class="hidden mb-4">
                    <p v-for="(catego, index) in categorie" :key="index" class="py-2 px-4 text-xl cursor-pointer select-none font-jura"
                        @mouseover="catego.hover = true" @mouseleave="catego.hover = false"
                        :id="'items_category_hover' + index" :class="{ hover_items_bg: catego.hover }">{{
                            catego.title }}</p>
                </div>
                <!-- SIZE DROPDOWN -->
                <div id="size-group" @click="slideSidebar('#size-slide')"
                    class="flex justify-between items-center border-t-2 border-gray-300 cursor-pointer select-none">
                    <h3 class="text-xl font-bold py-6 font-frans">SIZE</h3>
                    <hr id="line-category" class="w-8 bg-gray-500 border-0 rounded" :style="{ 'height': '2px' }">
                </div>
                <div id="size-slide" class="hidden mb-4">
                    <div class="flex space-x-4 mb-3">
                        <div id="btn-size" class="border w-16 h-10 text-center border-gray-500 border-2 p-1 cursor-pointer select-none">XS</div>
                        <div id="btn-size" class="border w-16 h-10 text-center border-gray-500 border-2 p-1 cursor-pointer select-none">S</div>
                        <div id="btn-size" class="border w-16 h-10 text-center border-gray-500 border-2 p-1 cursor-pointer select-none">M</div>
                    </div>
                    <div class="flex space-x-4">
                        <div id="btn-size" class="border w-16 h-10 text-center border-gray-500 border-2 p-1 cursor-pointer select-none">L</div>
                        <div id="btn-size" class="border w-16 h-10 text-center border-gray-500 border-2 p-1 cursor-pointer select-none">XL</div>
                    </div>
                </div>
                <div id="color-group" @click="slideSidebar('#color-slide')" class="flex justify-between items-center border-t-2 border-gray-300 cursor-pointer select-none">
                    <h3 class="text-xl font-bold py-6 font-frans">COLOR</h3>
                    <hr id="line-category" class="w-8 bg-gray-500 border-0 rounded" :style="{ 'height': '2px' }">
                </div>
                <div id="color-slide" class="grid grid-cols-3 gap-y-5 w-36 mt-2 ml-2">
                    <div class="w-8 h-8 bg-red-500 rounded-full cursor-pointer select-none" :style="{backgroundColor: '#2E2D2D'}"></div>
                    <div class="w-8 h-8 bg-red-500 rounded-full cursor-pointer select-none" :style="{backgroundColor: '#5766B5'}"></div>
                    <div class="w-8 h-8 bg-red-500 rounded-full cursor-pointer select-none" :style="{backgroundColor: '#6F5C5C'}"></div>
                    <div class="w-8 h-8 bg-red-500 rounded-full cursor-pointer select-none" :style="{backgroundColor: '#429A70'}"></div>
                    <div class="w-8 h-8 bg-red-500 rounded-full cursor-pointer select-none" :style="{backgroundColor: '#9F9F9F'}"></div>
                    <div class="w-8 h-8 bg-red-500 rounded-full cursor-pointer select-none" :style="{backgroundColor: '#E08F54'}"></div>
                    <div class="w-8 h-8 bg-red-500 rounded-full cursor-pointer select-none" :style="{backgroundColor: '#EE9AA9'}"></div>
                    <div class="w-8 h-8 bg-red-500 rounded-full cursor-pointer select-none" :style="{backgroundColor: '#A5739D'}"></div>
                    <div class="w-8 h-8 bg-red-500 rounded-full cursor-pointer select-none" :style="{backgroundColor: '#D36262'}"></div>
                    <div class="w-8 h-8 bg-red-500 border rounded-full cursor-pointer select-none" :style="{backgroundColor: '#ffffff'}"></div>
                    <div class="w-8 h-8 bg-red-500 rounded-full cursor-pointer select-none" :style="{backgroundColor: '#FCD05F'}"></div>
                </div>
            </div>
            <div class="text-right px-6 w-full">
                <p class="text-2xl text-gray-400 font-jura capitalize">/ {{ this.$route.params.sex }}</p>
                <div id="browserProduct" class="grid grid-cols-3 gap-6 mt-10">
                    <div class="cardProduct cursor-pointer select-none" v-for="(item, index) in renderProduct" :key="index">
                        <div class="w-full relative">
                            <img class="w-96" :src="item.listImg[0]" @click="LinkTo('/productDetail/'+item.title)"/>
                            <div class="p-2">
                                <div class="flex items-center text-left">
                                    <img v-show="item.is_favourite == false" class="w-5 absolute right-0 cursor-pointer select-none"
                                        @click="item.is_favourite = !item.is_favourite" src="../assets/icons/heart.svg">
                                    <img v-show="item.is_favourite == true" class="w-5 absolute right-0 cursor-pointer select-none"
                                        @click="item.is_favourite = !item.is_favourite" src="../assets/icons/heartt.svg">
                                    <p class="text-md ">{{ item.title }}</p>
                                </div>
                                <p class="text-2xl text-left leading-5">{{ item.price }} <span
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
    width: 20%;
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

#btn-size:hover {
    background-color: black;
    color: white
}
</style>
<script>
import $ from 'jquery'
export default {
    name: "Product",
    props:{
        products:{
            default: []
        }
    },
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
            // listProducts:this.products.filter(e => e.sex == this.$route.params.sex),
            // listProduct: [
            //     { title: "THE STAR CROP VEST", price: "1590", url: require('../assets/homepage/img1.svg'), is_favourite: false },
            //     { title: "THE STAR CROP VEST", price: "2790", url: require('../assets/homepage/img2.svg'), is_favourite: false },
            //     { title: "THE STAR CROP VEST", price: "690", url: require('../assets/homepage/img3.svg'), is_favourite: false },
            //     { title: "THE STAR CROP VEST", price: "990", url: require('../assets/homepage/img4.svg'), is_favourite: false },
            //     { title: "THE STAR CROP VEST", price: "1290", url: require('../assets/homepage/img5.svg'), is_favourite: false },
            // ],
        }
    },
    methods: {
        LinkTo(whereTo){
            this.$router.push(whereTo)
        },
        itemdropdown_hover(index) {
            let item = '#items_category_hover' + index
            let category = document.querySelector(item)
            category.classList.add('bg-red-200')
        },
        slideSidebar(comp) {
            $(comp).slideToggle();
        }
    },
    computed:{
        renderProduct(){
            let filterProduct = this.products.filter(e => e.sex == this.$route.params.sex)
            if (filterProduct.length > 0){
                return filterProduct
            }else{
                return this.products
            }
        }
    }
}
</script>