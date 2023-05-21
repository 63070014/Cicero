<template>
    <div class="center-set mt-10 relative">
        <div class="img-preview-group">
        </div>
        <div id="product" class="flex space-x-8">
            <div class="image-scroll">
                <div v-for="(img, index) in productImage()" :key="index">
                    <img :src="'http://localhost:3000/products/' + img" alt="">
                </div>
            </div>
            <div class="relative w-80">
                <div class="w-80 space-y-6 sticky top-20">
                    <h1 class="font-frans text-4xl font-medium ">{{ this.thisProduct[0].product_title }}</h1>
                    <p class="text-2xl text-left leading-5">{{ this.thisProduct[0].product_price }} <span
                            class="text-sm text-gray-600">THB</span></p>
                    <p class="text-lg mt-10" :style="{ color: '#716F6F' }">{{ this.thisProduct[0].product_description }}</p>
                    <div class="flex flex-col ">
                        <div class="font-medium text-2xl font-frans pb-3">SIZE</div>
                        <div class="flex space-x-4 mb-3">
                            <button :disabled="!this.sizeProduct.includes('XS')" v-if="this.size === 'XS'"
                                @click="this.selectSize('')" id="btn-size"
                                class="w-16 h-10 text-center bg-black text-white border-gray-500 border-2 p-1 cursor-pointer select-none">
                                XS
                            </button>
                            <button :disabled="!this.sizeProduct.includes('XS')" v-else @click="this.selectSize('XS')"
                                id="btn-size"
                                class="w-16 h-10 text-center text-black border-gray-500 border-2 p-1 cursor-pointer select-none">
                                XS
                            </button>
                            <button :disabled="!this.sizeProduct.includes('XS')" v-if="this.size === 'S'"
                                @click="this.selectSize('')" id="btn-size"
                                class="w-16 h-10 text-center bg-black text-white border-gray-500 border-2 p-1 cursor-pointer select-none">
                                S
                            </button>
                            <button :disabled="!this.sizeProduct.includes('S')" v-else @click="this.selectSize('S')"
                                id="btn-size"
                                class="w-16 h-10 text-center text-black border-gray-500 border-2 p-1 cursor-pointer select-none">
                                S
                            </button>
                            <button :disabled="!this.sizeProduct.includes('M')" v-if="this.size === 'M'"
                                @click="this.selectSize('')" id="btn-size"
                                class="w-16 h-10 text-center bg-black text-white border-gray-500 border-2 p-1 cursor-pointer select-none">
                                M
                            </button>
                            <button :disabled="!this.sizeProduct.includes('M')" v-else @click="this.selectSize('M')"
                                id="btn-size"
                                class="w-16 h-10 text-center text-black border-gray-500 border-2 p-1 cursor-pointer select-none">
                                M
                            </button>

                        </div>
                        <div class="flex space-x-4">
                            <button :disabled="!this.sizeProduct.includes('L')" v-if="this.size === 'L'"
                                @click="this.selectSize('')" id="btn-size"
                                class="w-16 h-10 text-center bg-black text-white border-gray-500 border-2 p-1 cursor-pointer select-none">
                                L
                            </button>
                            <button :disabled="!this.sizeProduct.includes('L')" v-else @click="this.selectSize('L')"
                                id="btn-size"
                                class="w-16 h-10 text-center text-black border-gray-500 border-2 p-1 cursor-pointer select-none">
                                L
                            </button>
                            <button :disabled="!this.sizeProduct.includes('XL')" v-if="this.size === 'XL'"
                                @click="this.selectSize('')" id="btn-size"
                                class="w-16 h-10 text-center bg-black text-white border-gray-500 border-2 p-1 cursor-pointer select-none">
                                XL
                            </button>
                            <button :disabled="!this.sizeProduct.includes('XL')" v-else @click="this.selectSize('XL')"
                                id="btn-size"
                                class="w-16 h-10 text-center text-black border-gray-500 border-2 p-1 cursor-pointer select-none">
                                XL
                            </button>
                        </div>
                    </div>
                    <div class="space-y-3 select-none">
                        <div @click="addItemToCart()"
                            class="font-frans font-medium text-center border-gray-500 border-2 text-white py-2 px-4 bg-black cursor-pointer select-none">
                            ADD TO CART</div>
                        <div @click="addToFav(this.thisProduct[0])"
                            class="font-frans font-medium text-center border-gray-500 border-2 py-2 px-4 text-black cursor-pointer select-none ">
                            {{ removeBtn ? 'REMOVED WISHLIST ' : 'ADD TO WISHLIST' }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.image-scroll {
    width: 35rem;
}
</style>
<script>
import axios from "axios";
export default {
    name: "productDetail",
    props: {
        products: {
            default: []
        }
    },
    data() {
        return {
            size: [],
            sizeProduct: [],
            fav: [],
            removeBtn: false,
            thisProduct: this.products.filter(e => e.product_title == this.$route.params.title),
            user_id: JSON.parse(localStorage.getItem("user")).user_id
        }
    },
    mounted() {
        this.sizeProduct = JSON.parse(this.thisProduct[0].product_size)
        this.checkLike()

    },
    methods: {
        selectSize(value) {
            if (this.sizeProduct.includes(value)) {
                this.size = value
            }
        },
        addToFav(e) {
            if (this.removeBtn) {
                axios.delete(`http://localhost:3000/like/${e.product_id}/${this.user_id}`)
                    .then((res) => {
                        console.log(res.data);
                    })

            } else {
                axios.post(`http://localhost:3000/like/${e.product_id}`, {
                    user_id: this.user_id
                })
                alert('Added to Wishlist')
            }
            window.location.reload()
            this.$forceUpdate();
        },
        productImage() {
            return JSON.parse(this.thisProduct[0].product_img)
        },
        async checkLike() {
            await axios.post(`http://localhost:3000/likeByUser/`, {
                user_id: this.user_id,
                product_id: this.thisProduct[0].product_id
            }).then((res) => {
                if (res.data != null) {
                    this.removeBtn = true
                }
            })
        },
        LinkTo(whereTo) {
            this.$router.push(whereTo)
        },
        addItemToCart() {
            try {
                if (this.size.length <= 2 && this.size.length > 0) {
                    axios.post('http://localhost:3000/addcarts', {
                        size: this.size,
                        amount: 1,
                        user_id: this.user_id,
                        product_id: this.thisProduct[0].product_id

                    }).then(() => {
                        alert("Add to cart success")
                    })
                } else {
                    alert("Please select your sizef")
                }
            } catch (error) {
                console.log(error);
            }
        },
    }
}
</script>