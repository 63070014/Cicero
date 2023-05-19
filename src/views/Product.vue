<template>
    <div class="center-set">
        <div class="flex mt-20 space-x-8 w-5/6">
            <div class="sidebar-sort-group">
                <h1 class="text-4xl font-bold line-height-cus border-b-2 border-gray-300 font-frans uppercase font-light">{{
                    this.$route.params.sex }}</h1>
                <div id="category-group" @click="slideSidebar('#category-slide')"
                    class="flex justify-between items-center cursor-pointer select-none">
                    <h2 class="text-xl font-bold py-6 font-frans">CATEGORIES</h2>
                    <hr id="line-category" class="w-8 border-0" :style="{ 'height': '2px' }">
                </div>
                <div id="category-slide" class="hidden mb-4">
                    <p v-for="(catego, index) in categorie" :key="index"
                        class="py-2 px-4 text-xl cursor-pointer select-none font-jura" @click="LinkTo('/product/women')"
                        @mouseover="catego.hover = true" @mouseleave="catego.hover = false"
                        :id="'items_category_hover' + index" :class="{ hover_items_bg: catego.hover }">{{ catego.title }}
                    </p>
                </div>
                <!-- SIZE DROPDOWN -->
                <div id="size-group" @click="slideSidebar('#size-slide')"
                    class="flex justify-between items-center border-t-2 border-gray-300 cursor-pointer select-none">
                    <h3 class="text-xl font-bold py-6 font-frans">SIZE</h3>
                    <hr id="line-category" class="w-8 border-0" :style="{ 'height': '2px' }">
                </div>
                <div id="size-slide" class="hidden mb-4">
                    <div class="flex space-x-4 mb-3">
                        <div id="btn-size"
                            class="w-16 h-10 text-center border-gray-500 border-2 p-1 cursor-pointer select-none">XS
                        </div>
                        <div id="btn-size"
                            class="w-16 h-10 text-center border-gray-500 border-2 p-1 cursor-pointer select-none">S
                        </div>
                        <div id="btn-size"
                            class="w-16 h-10 text-center border-gray-500 border-2 p-1 cursor-pointer select-none">M
                        </div>
                    </div>
                    <div class="flex space-x-4">
                        <div id="btn-size"
                            class="w-16 h-10 text-center border-gray-500 border-2 p-1 cursor-pointer select-none">L
                        </div>
                        <div id="btn-size"
                            class="w-16 h-10 text-center border-gray-500 border-2 p-1 cursor-pointer select-none">XL
                        </div>
                    </div>
                </div>
                <div id="color-group" @click="slideSidebar('#color-slide')"
                    class="flex justify-between items-center border-t-2 border-gray-300 cursor-pointer select-none">
                    <h3 class="text-xl font-bold py-6 font-frans">COLOR</h3>
                    <hr id="line-category" class="w-8 border-0" :style="{ 'height': '2px' }">
                </div>
                <div id="color-slide" class="grid grid-cols-3 gap-y-5 w-36 mt-2 ml-2">
                    <div class="w-8 h-8 bg-red-500 rounded-full cursor-pointer select-none"
                        :style="{ backgroundColor: '#2E2D2D' }"></div>
                    <div class="w-8 h-8 bg-red-500 rounded-full cursor-pointer select-none"
                        :style="{ backgroundColor: '#5766B5' }"></div>
                    <div class="w-8 h-8 bg-red-500 rounded-full cursor-pointer select-none"
                        :style="{ backgroundColor: '#6F5C5C' }"></div>
                    <div class="w-8 h-8 bg-red-500 rounded-full cursor-pointer select-none"
                        :style="{ backgroundColor: '#429A70' }"></div>
                    <div class="w-8 h-8 bg-red-500 rounded-full cursor-pointer select-none"
                        :style="{ backgroundColor: '#9F9F9F' }"></div>
                    <div class="w-8 h-8 bg-red-500 rounded-full cursor-pointer select-none"
                        :style="{ backgroundColor: '#E08F54' }"></div>
                    <div class="w-8 h-8 bg-red-500 rounded-full cursor-pointer select-none"
                        :style="{ backgroundColor: '#EE9AA9' }"></div>
                    <div class="w-8 h-8 bg-red-500 rounded-full cursor-pointer select-none"
                        :style="{ backgroundColor: '#A5739D' }"></div>
                    <div class="w-8 h-8 bg-red-500 rounded-full cursor-pointer select-none"
                        :style="{ backgroundColor: '#D36262' }"></div>
                    <div class="w-8 h-8 bg-red-500 border rounded-full cursor-pointer select-none"
                        :style="{ backgroundColor: '#ffffff' }"></div>
                    <div class="w-8 h-8 bg-red-500 rounded-full cursor-pointer select-none"
                        :style="{ backgroundColor: '#FCD05F' }"></div>
                </div>
            </div>
            <div class="text-right px-6 w-full">
                <p class="text-xl text-gray-400 font-jura capitalize">/ {{ this.$route.params.sex }}</p>
                <div id="browserProduct" class="grid grid-cols-3 gap-6 mt-10">
                    <div class="cardProduct cursor-pointer select-none" v-for="(item, index) in renderProduct" :key="index">
                        <div class="w-full relative">
                            <img class="w-80" :src="renderImg(item.product_img)"
                                @click="LinkTo('/productDetail/' + item.product_title)" />
                            <div class="py-2">
                                <div class="relative flex items-center text-left">
                                    <p>{{ fav }}</p>
                                    <img v-if="fav.includes(item.product_id)"
                                        class="w-5 absolute right-0 cursor-pointer select-none"
                                        @click="item.is_favourite = !item.is_favourite, cancelFav(index)"
                                        src="../assets/icons/heartt.svg">
                                    <img v-else
                                        class="w-5 absolute right-0 cursor-pointer select-none"
                                        @click="item.is_favourite = !item.is_favourite, addToFav(item.product_id)"
                                        src="../assets/icons/heart.svg">
                                    <p class="text-md w-64">{{ item.product_title }}</p>
                                </div>
                                <p class="text-2xl text-left leading-6">{{ item.product_price }} <span
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

#line-category {
    border-bottom: 1px solid black;
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
import axios from 'axios'
export default {
    name: "Product",
    props: ['products'],
    data() {
        return {
            fav: [],
            browseProduct: this.products,
            categorie: [
                { id: 1, title: "Tops", hover: false },
                { ic: 2, title: "Shorts", hover: false },
                { ic: 3, title: "Skirts", hover: false },
                { ic: 4, title: "Trousers", hover: false },
                { ic: 5, title: "Sets", hover: false },
                { ic: 6, title: "Dresses", hover: false },
                { ic: 7, title: "Jumpsuits", hover: false }],
        }
    },

    methods: {
        async checkLike(product_id) {
            let user_id = JSON.parse(localStorage.getItem("user")).user_id
             await axios.post(`http://localhost:3000/likeByUser/`, {
                user_id: user_id,
                product_id: product_id
            }).then((res)=>{
                if (res.data){
                    this.fav.push(product_id)
                }
            })
        },
        LinkTo(whereTo) {
            this.$router.push(whereTo)
        },
        slideSidebar(comp) {
            $(comp).slideToggle();
        },
        addToFav(product_id) {
            let user_id = JSON.parse(localStorage.getItem("user")).user_id
            try {
                let response = axios.post(`http://localhost:3000/like/${product_id}`, {
                    user_id: user_id,
                })
                if(response.data == "AddLiked"){
                    alert('yeah')
                }
            } catch (er) {
                console.log(er)
            }
        },
        cancelFav(e) {
            let temp = JSON.parse(localStorage.getItem('favorite'));
            let index_delete = temp.indexOf(e)
            temp.splice(index_delete, 1)
            localStorage.setItem('favorite', JSON.stringify(temp))

        },
        renderImg(img) {
            return "http://localhost:3000/products/" + JSON.parse(img)[0]
        }
    },
    mounted() {
    },
    computed: {
        renderProduct() {
            let filterProduct
            if (this.$route.params.sex == "new in") {
                filterProduct = this.browseProduct.filter(e => e.product_promotion == "newIn")
            } else {
                filterProduct = this.browseProduct.filter(e => e.product_sex == this.$route.params.sex)
            }
            if (filterProduct.length > 0) {
                let filterWishlist = filterProduct.map(e => e.product_id)
                for (let i = 0; i < filterWishlist; i++) {
                    this.checkLike(filterWishlist[i])
                }
                return filterProduct
            } else {
                return this.browseProduct
            }
        }
    },

}
</script>