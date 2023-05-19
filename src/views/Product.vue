<template>
    <div class="center-set">
        <div class="flex mt-20 space-x-8 w-5/6">
            <div class="sidebar-sort-group">
                <h1 class="text-4xl font-bold line-height-cus border-b-2 border-gray-300 font-frans uppercase">{{
                    this.$route.params.sex }}</h1>
                <div id="category-group" @click="slideSidebar('#category-slide')"
                    class="flex justify-between items-center cursor-pointer select-none">
                    <h2 class="text-xl font-bold py-6 font-frans">CATEGORIES</h2>
                    <hr id="line-category" class="w-8 border-0" :style="{ 'height': '2px' }">
                </div>
                <div id="category-slide" class="hidden mb-4">
                    <p v-for="(catego, index) in categorie[0][this.$route.params.sex]" :key="index"
                        class="py-2 px-4 text-xl cursor-pointer select-none font-jura"
                        @click="LinkTo(`/product${catego.path}`)" @mouseover="catego.hover = true"
                        @mouseleave="catego.hover = false" :id="'items_category_hover' + index"
                        :class="{ hover_items_bg: catego.hover }">{{ catego.title }}
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
                    <div v-for="(color, index) in colorSelect" @click="selectColor(color.value)" :key="index"
                        class="w-8 h-8 bg-red-500 rounded-full cursor-pointer select-none" :style="color.color"></div>
                </div>
            </div>
            <div class="text-right px-6 w-full">
                <p class="text-xl text-gray-400 font-jura capitalize">/ {{ this.$route.params.sex }}</p>
                <div id="browserProduct" class="grid grid-cols-3 gap-6 mt-10">
                    <div class="cardProduct cursor-pointer select-none" v-for="(item, index) in renderProduct"
                        :key="index">
                        <div class="w-full relative">
                            <img class="w-80" :src="renderImg(item.product_img)"
                                @click="LinkTo('/productDetail/' + item.product_title)" />
                            <div class="py-2">
                                <div class="relative flex items-center text-left">
                                    <img v-show="this.like.includes(item.product_id)"
                                        class="w-5 absolute right-0 cursor-pointer select-none"
                                        @click="this.changeLike(item.product_id);" src="../assets/icons/heartt.svg">
                                    <img v-show=" this.like.includes(item.product_id) == false "
                                        class="w-5 absolute right-0 cursor-pointer select-none"
                                        @click=" this.changeLike(item.product_id) " src="../assets/icons/heart.svg">
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
            user_id: "",
            like: [],
            browseProduct: this.products,
            params: this.$route.params.sex,
            categorie: [
                {
                    women: [
                        { title: "Tops", path: "/women/Tops" },
                        { title: "Shorts", path: "/women/Shorts" },
                        { title: "Skirts", path: "/women/Skirts" },
                        { title: "Trousers", path: "/women/Trousers" },
                        { title: "Sets", path: "/women/Sets" },
                        { title: "Dresses", path: "/women/Dresses" },
                        { title: "Jumpsuits", path: "/women/Jumpsuits" }
                    ]
                    ,
                    men: [
                        { title: "Hoodies & Sweatshirts", path: "/men/Hoodies & Sweatshirts" },
                        { title: "Jackets", path: "/men/Jackets" },
                        { title: "Pants", path: "/men/Pants" },
                        { title: "Tracksuits", path: "/men/Tracksuits" },
                        { title: "Leggings", path: "/men/Leggings" },
                        { title: "T-Shirts & Tops", path: "/men/T-Shirts & Tops" },
                        { title: "Shorts", path: "/men/shorts" },
                    ],
                    kids: [{ title: "Tops", path: "/kids/Tops" },
                    { title: "Shorts", path: "/kids/Shorts" },
                    { title: "Skirts", path: "/kids/Skirts" },
                    { title: "Trousers", path: "/kids/Trousers" },
                    { title: "Hoodies", path: "/kids/Hoodies" }
                    ],
                    sale: [{ title: "Men", path: "/sale/men" },
                    { title: "Women", path: "/sale/women" },
                    { title: "Kids", path: "/sale/kids" }],
                    newin: [{ title: "Men" }, { title: "Women" }, { title: "Kids" }],
                },

            ],
            colorSelect: [
                {
                    value: "black",
                    color: { backgroundColor: '#2E2D2D' },
                },
                {
                    value: "blue",
                    color: { backgroundColor: '#5766B5' }
                },
                {
                    value: "brown",
                    color: { backgroundColor: '#6F5C5C' },
                },
                {
                    value: "green",
                    color: { backgroundColor: '#429A70' },
                },
                {
                    value: "gray",
                    color: { backgroundColor: '#9F9F9F' },
                },
                {
                    value: "orange",
                    color: { backgroundColor: '#E08F54' },
                },
                {
                    value: "pink",
                    color: { backgroundColor: '#EE9AA9' },
                },
                {
                    value: "purple",
                    color: { backgroundColor: '#A5739D' },
                },
                {
                    value: "red",
                    color: { backgroundColor: '#D36262' },
                },
                {
                    value: "white",
                    color: { backgroundColor: '#ffffff' },
                },
                {
                    value: "yellow",
                    color: { backgroundColor: '#FCD05F' }
                }
            ]
        }
    },
    methods: {
        selectColor(value){
            this.$router.push("/product/"+value)
        },
        changeLike(product_id) {
            if (this.like.includes(product_id)) {
                this.like.splice(this.like.indexOf(product_id), 1)
                try {
                    axios.delete(`http://localhost:3000/like/${product_id}/${this.user_id}`)
                        .then((res) => {
                            console.log(res.data);
                        })
                } catch (er) {
                    console.log(er)
                }
            }
            else {
                this.like.push(product_id)
                try {
                    axios.post(`http://localhost:3000/like/${product_id}`, {
                        user_id: this.user_id,
                    })
                } catch (er) {
                    console.log(er)
                }
            }
        },
        checkLikeLength() {
            return this.like.length > 0;
        },
        async checkLike(product_id) {
            await axios.post(`http://localhost:3000/likeByUser/`, {
                user_id: this.user_id,
                product_id: product_id
            }).then((res) => {
                if (res.data != null) {
                    this.like.push(res.data)
                }
            })
        },
        LinkTo(whereTo) {
            console.log(whereTo)
            this.$router.push(whereTo)
        },
        slideSidebar(comp) {
            $(comp).slideToggle();
        },
        renderImg(img) {
            return "http://localhost:3000/products/" + JSON.parse(img)[0]
        }
    },
    mounted() {
        if (localStorage.getItem("user")) {
            this.user_id = JSON.parse(localStorage.getItem("user")).user_id
        }
    },
    computed: {
        renderProduct() {
            let filterProduct
            let routeParamSex = this.$route.params.sex
            let routeParamCategory = this.$route.params.category
            if (this.$route.params.sex == "new in") {
                routeParamSex = "newIn"
            }
            if (routeParamCategory) {
                filterProduct = this.browseProduct.filter(e => e.product_sex == routeParamSex && e.product_categories == routeParamCategory)
            }
            else {
                filterProduct = this.browseProduct.filter(e => e.product_sex == routeParamSex)
            }
            if (filterProduct.length > 0) {
                filterProduct.forEach(element => {
                    this.checkLike(element.product_id)
                });
                return filterProduct
            } else {
                return null
            }
        }
    },

}
</script>