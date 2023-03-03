<template>
    <div class="center-set flex-col">
        <div class="payment-head center-set mt-12 space-x-3 font-semibold text-lg tracking-widest">
            <div class="flex font-bold font-frans text-lg">MY PURCHASE</div>
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
                    <img class="w-60" :src="item.listImg[0]" alt="">
                    <div class="flex">
                        <div class="flex space-y-5 flex-col px-4 py-6 w-72">
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
                                <button @click="LinkTo('/productDetail/' + item.title)"
                                    class="font-frans border text-center border-gray-500 border-1 text-white text-sm px-16 py-1.5 bg-black hover:bg-white hover:text-black">BUY
                                    AGAIN</button>

                            </div>
                        </div>

                    </div>
                </div>
                <div class="line-order w-full my-7"></div>
            </div>

        </div>
        <div class="flex justify-center">
            <div class="mt-8 flex space-x-3">
                <button @click="LinkTo('/')"
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
            cartProduct: JSON.parse(localStorage.getItem("payment_items")),
        }
    },
    methods: {
        LinkTo(whereTo) {
            this.$router.push(whereTo)
        },
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