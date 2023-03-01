<template>
    <div class="center-set flex-col">
        <div class="payment-head center-set mt-12 space-x-3 font-semibold text-lg tracking-widest">
            <div class="flex">SHOPPING CART</div>
            <div class="line-order w-40"></div>
            <div class="flex text-gray-200">PAYMENT</div>
            <div class="line-order w-40"></div>
            <div class="flex text-gray-200">CONFIRMATION</div>
        </div>
        <div class="flex flex-col mt-12 ">
            <div v-for="(item, index) in cartProduct" :key="index" class="flex flex-col">
                <div class="flex space-x-6 ">
                    <div class="flex"><img src="../assets/icons/delete_button.svg" alt=""></div>
                    <div class="flex"><img :src="item.url" alt=""></div>
                    <div class="flex space-x-28">
                        <div class="flex justify-between flex-col p-6">
                            <div class="flex flex-col">
                                <div class="text-base font-semibold">{{ item.title }}</div>
                                <div class="w-44 text-gray-400">{{ item.detail_product }}</div>
                            </div>
                            <div class="flex flex-col">
                                <div class="font-semibold font-copper pb-3">SELECT YOUR SIZE</div>
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
                        </div>
                        <div class="flex justify-between flex-col ">
                            <div class="flex space-x-4 p-8">
                                <div class="flex cursor-pointer"> <img src="../assets/icons/minus.svg" alt=""></div>
                                <div class="text-3xl">1</div>
                                <div class="flex mt-1 cursor-pointer"> <img src="../assets/icons/plus.svg" alt=""></div>
                            </div>
                            <div class="flex text-2xl p-4">{{ item.price }} <p class="text-base text-gray-400 p-2">THB</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="line-order w-full my-7"></div>
            </div>

        </div>
        <div class="flex w-3/5 justify-between">
            <div class="text-xl font-bold p-5 tracking-wider">TOTAL 5920 THB</div>
            <div class="w-1/2 mt-4 flex space-x-3">
                <button class="border text-center border-gray-500 border-2  w-1/2 h-10 text-black">CONTINUE SHOPPING</button>
                <button class="border text-center border-gray-500 border-2 text-white h-10 w-1/2 bg-black">CHECK OUT</button>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src

export default {
    name: "Homepage",
    components: {
    },
    data() {
        return {
            cartProduct: [
                { title: "THE STAR CROP VEST", price: "1590", url: require('../assets/homepage/img1.svg'), detail_product: "Lorem Ipsum is simply dummy text of the printing setting industry.", },
                { title: "THE STAR CROP VEST", price: "1590", url: require('../assets/homepage/img2.svg'), detail_product: "Lorem Ipsum is simply dummy text of the printing setting industry.", },
            ],
        }
    },
    methods: {
    },
    watch: {

    }
};
</script>