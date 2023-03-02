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
            <div v-for="(item, index) in cartItems" :key="index" class="flex flex-col">
                <div class="flex space-x-6 ">
                    <div @click="deleteItems(index)" class="flex"><img src="../assets/icons/delete_button.svg" alt=""></div>
                    <div @click="LinkTo('/productDetail/'+item.title)" class="w-80 flex"><img :src="item.listImg[0]" alt=""></div>
                    <div class="flex space-x-28">
                        <div class="flex justify-between flex-col p-6">
                            <div class="flex flex-col">
                                <div class="text-base font-semibold">{{ item.title }}</div>
                                <div class="w-44 text-gray-400">{{ item.detail }}</div>
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
                                <div @click="count[index].count--" class="flex cursor-pointer"> <img src="../assets/icons/minus.svg"
                                        alt=""></div>
                                <div class="text-3xl">{{ count[index].count }}</div>
                                <div @click="count[index].count++" class="flex mt-1 cursor-pointer select-none"> <img src="../assets/icons/plus.svg" alt=""></div>
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
            <div class="text-xl font-frans font-bold p-5 tracking-wider">SUBTOTAL {{ totalPrice() }} THB</div>
            <div class="w-1/2 mt-4 flex space-x-3">
                <button class="border text-center border-gray-500 border-2  w-1/2 h-10 text-black">CONTINUE
                    SHOPPING</button>
                <button @click="savePayment(),LinkTo('/order')" class="border text-center border-gray-500 border-2 text-white h-10 w-1/2 bg-black">CHECK
                    OUT</button>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src

export default {
    name: "Cart",
    props: {
        products: {
            default: []
        }
    },
    components: {
    },
    data() {
        return {
            cartProduct: [],
            count: JSON.parse(localStorage.getItem("cart"))
        }
    },
    methods: {
        savePayment(){
            localStorage.setItem("payment_items", JSON.stringify(this.cartItems))
        },
        totalPrice(){
            let price = 0
            for (let i = 0; i < this.cartItems.length; i++) {
                price += parseInt(this.cartItems[i].price)
                
            }
            return price
        },
        deleteItems(index){
            console.log(this.cartItems)
            this.cartItems.splice(index,1)
            console.log(this.cartItems)
            localStorage.setItem("cart", JSON.stringify(this.cartItems))
            this.$forceUpdate();
        },
        LinkTo(whereTo) {
            this.$router.push(whereTo)
        },
    },
    computed: {
        cartItems() {
            var temp = JSON.parse(localStorage.getItem("cart"));
            let cart = []
            for (let i = 0; i < temp.length; i++) {
                cart.push(...this.products.filter(e => e.id == temp[i].id))
            }
            // this.cartProduct = cart
            return cart
        }
    },
    mounted() {
        if (JSON.parse(localStorage.getItem("user")) == null) {
            alert("Please Login First !")
            this.$router.push('/')
        }
    }

};
</script>