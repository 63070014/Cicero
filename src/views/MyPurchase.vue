<template>
    <div class="center-set flex-col">
        <div class="payment-head center-set mt-12 space-x-3 font-semibold text-lg tracking-widest">
            <div class="flex font-bold">MY PURCHASE</div>
            <div class="opacity-0 flex">
                <div class="line-order w-40"></div>
                <div class="flex text-gray-200">PAYMENT</div>
                <div class="line-order w-40"></div>
                <div class="flex text-gray-200">CONFIRMATION</div>
            </div>
        </div>
        <div class="flex flex-col mt-12">
            <div v-for="(item, index) in cartProduct" :key="index" class="flex flex-col w-full">
                <div class="flex justify-between space-x-6">
                    <img :src="item.url" alt="">
                    <div class="flex">
                        <div class="flex space-y-5 flex-col px-4 py-6">
                            <div class="flex flex-col">
                                <div class="text-base font-semibold">{{ item.title }}</div>
                                <div class="w-44 text-gray-400">{{ item.detail_product }}</div>
                            </div>
                            <div class="flex flex-col">
                                <div class="flex space-x-4">
                                    <div id="btn-size"
                                        class="border w-16 px-4 py-1.5 text-center border-gray-500 border-2  cursor-pointer">
                                        XS
                                    </div>
                                </div>
                            </div>
                            <div class="flex text-2xl">{{ item.price }} <p class="text-base text-gray-400 p-2">THB</p>
                            </div>
                        </div>
                        <div class="flex justify-between ml-24 flex-col ">
                            <div class="flex space-x-4 p-6">
                                <p class="font-bold w-44 font-frans"># ORDER 1RSTGO-5D</p>
                            </div>
                            <div class="">
                                <button
                                    class="font-frans border text-center border-gray-500 border-1 text-white text-sm px-16 py-1.5 bg-black hover:bg-white hover:text-black">BUY AGAIN</button>

                            </div>
                        </div>

                    </div>
                </div>
                <div class="line-order w-full my-7"></div>
            </div>

        </div>
        <div class="flex justify-center">
            <div class="mt-8 flex space-x-3">
                <button
                    class="font-frans border text-center border-gray-500 border-1 text-black px-16 py-1.5 bg-white hover:bg-black hover:text-white">BACK</button>
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

    },
    mounted() {
        if (JSON.parse(localStorage.getItem("user")) == null) {
            alert("Please Login First !")
            this.$router.push('/')
        }
    }
};
</script>