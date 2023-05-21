<template>
    <div class="center-set flex-col">
        <div class="flex flex-col mt-12 ">
            <div class="flex font-bold font-frans text-xl mb-12">MY PURCHASE</div> 
            <div v-for="(item, index) in userOrder.reverse()" :key="index" class="flex flex-col w-full">
                <div class="flex justify-between space-x-6">
                    <img class="w-60" :src="this.renderImg(item.product_img)" alt="">
                    <div class="flex">
                        <div class="flex space-y-5 flex-col px-4 py-6 w-72">
                            <div class="flex flex-col">
                                <div class="text-base font-semibold">{{ item.product_title }}</div>
                                <div class="w-44 text-gray-400">{{ item.product_description }}</div>
                            </div>
                            <div class="flex flex-col">
                                <div class="flex space-x-4">
                                    <button
                                        class="w-16 px-4 py-1.5 text-center border-gray-500 border-2 cursor-pointer">
                                        XS
                                    </button>
                                </div>
                            </div>
                            <div class="flex text-2xl">{{ item.product_price }} <p class="text-base text-gray-400 p-2">THB x {{ item.amount }}</p>
                            </div>
                        </div>
                        <div class="flex justify-between ml-24 flex-col ">
                            <div class="flex space-x-4 p-6">
                                <p class="font-bold w-44 font-frans"># ORDER  {{
                        item.order_id }}RSTGO-SD</p>
                            </div>
                            <div class="">
                                <button @click="LinkTo('/productDetail/' + item.product_title)"
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
import axios from 'axios';
export default {
    name: "Homepage",
    components: {
    },
    data() {
        return {
            userOrder:[],
            user_id: JSON.parse(localStorage.getItem("user")).user_id
        }
    },
    methods: {
        LinkTo(whereTo) {
            this.$router.push(whereTo)
        },
        async getOrderUser() {
            await axios.get(`http://localhost:3000/userOrder/${this.user_id}`).then((res) => {
                this.userOrder = res.data
                console.log(res.data);
            })
        },
        renderImg(img) {
            return "http://localhost:3000/products/" + JSON.parse(img)[0]
        }
    },
    watch: {

    },
    mounted() {
        this.getOrderUser()
    }
};
</script>