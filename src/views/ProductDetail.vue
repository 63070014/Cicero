<template>
    <div class="center-set mt-10 relative">
        <div class="img-preview-group">
        </div>
        <div id="product" class="flex space-x-8">
            <div class="image-scroll">
                <div v-for="(img, index) in this.thisProduct[0].listImg" :key="index">
                    <img :src="img" alt="">
                </div>
            </div>
            <div class="relative w-80">
                <div class="w-80 space-y-6 sticky top-20">
                    <h1 class="font-frans text-4xl font-bold ">{{ this.thisProduct[0].title }}</h1>
                    <p class="text-2xl text-left leading-5">{{ this.thisProduct[0].price }} <span class="text-sm text-gray-600">THB</span></p>
                    <p class="text-lg mt-10" :style="{ color: '#716F6F' }">Lorem ipsum dolor sit amet consectetur
                        adipisicing
                        elit. Illum, veniam praesentium voluptates aperiam in possimus, id eveniet rem provident quasi eum
                        placeat modi, facilis accusantium dolor inventore perferendis vel consequatur.</p>
                    <div class="flex flex-col ">
                        <div class="font-semibold text-2xl font-frans pb-3">SIZE</div>
                        <div class="flex space-x-4 mb-3">
                            <div id="btn-size"
                                class="border w-16 h-10 text-center border-gray-500 border-2 p-1 cursor-pointer">XS
                            </div>
                            <div id="btn-size"
                                class="border w-16 h-10 text-center border-gray-500 border-2 p-1 cursor-pointer">S
                            </div>
                            <div id="btn-size"
                                class="border w-16 h-10 text-center border-gray-500 border-2 p-1 cursor-pointer">M
                            </div>
                        </div>
                        <div class="flex space-x-4">
                            <div id="btn-size"
                                class="border w-16 h-10 text-center border-gray-500 border-2 p-1 cursor-pointer">L
                            </div>
                            <div id="btn-size"
                                class="border w-16 h-10 text-center border-gray-500 border-2 p-1 cursor-pointer">XL
                            </div>
                        </div>
                    </div>
                    <div class="space-y-3">
                        <div @click="LinkTo('/cart')"
                            class="font-frans font-bold border text-center border-gray-500 border-2 text-white py-2 px-4 bg-black cursor-pointer">
                            ADD TO CART</div>
                        <div
                           @click="LinkTo('/wishlist')" class="font-frans font-boldborder text-center border-gray-500 border-2 py-2 px-4 text-black cursor-pointer ">
                            ADD TO WISHLIST</div>
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
export default {
    name: "productDetail",
    props:{
        products:{
            default: []
        }
    },
    data() {
        return {
            thisProduct : this.products.filter(e => e.title == this.$route.params.title)
        }
    },
    methods:{
        LinkTo(whereTo){
            this.$router.push(whereTo)
        },
    }
}
</script>