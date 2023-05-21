<template>
    <div class="center-set flex-col">
        <div class="payment-head center-set mt-12 space-x-3 font-semibold text-lg tracking-widest select-none">
            <div class="flex">SHOPPING CART</div>
            <div class="line-order w-40"></div>
            <div class="flex text-gray-200">PAYMENT</div>
            <div class="line-order w-40"></div>
            <div class="flex text-gray-200">CONFIRMATION</div>
        </div>
        <div class="flex flex-col mt-12 ">
            <div v-for="(item, index) in cartItems" :key="index" class="flex flex-col">
                <div class="flex space-x-6 ">
                    <div @click="deleteItems(item, index)" class="flex cursor-pointer select-none"><img
                            src="../assets/icons/delete_button.svg" alt=""></div>
                    <div @click="LinkTo('/productDetail/' + item.product_title)" class="w-80 flex"><img
                            :src="this.renderImg(item.product_img)" alt=""></div>
                    <div class="flex space-x-28">
                        <div class="flex justify-between flex-col p-6">
                            <div class="flex flex-col">
                                <div class="text-base font-semibold">{{ item.product_title }}</div>
                                <div class="w-44 text-gray-400">{{ item.product_description }}</div>
                            </div>
                            <div class="flex flex-col ">
                                <div class="font-medium text-2xl font-frans pb-3">SIZE</div>
                                <div class="flex space-x-4 mb-3">
                                    <div v-if="item.size === 'XS'" id="btn-size"
                                        class="w-16 h-10 text-center bg-black text-white border-gray-500 border-2 p-1 cursor-pointer select-none">
                                        XS
                                    </div>
                                    <div v-else
                                        class="w-16 h-10 text-center text-gray-300 border-gray-300 border-2 p-1  select-none">
                                        XS
                                    </div>
                                    <div v-if="item.size === 'S'" id="btn-size"
                                        class="w-16 h-10 text-center bg-black text-white border-gray-500 border-2 p-1 cursor-pointer select-none">
                                        S
                                    </div>
                                    <div v-else 
                                        class="w-16 h-10 text-center text-gray-300 border-gray-300 border-2 p-1  select-none">
                                        S
                                    </div>
                                    <div v-if="item.size === 'M'"  id="btn-size"
                                        class="w-16 h-10 text-center bg-black text-white border-gray-500 border-2 p-1 cursor-pointer select-none">
                                        M
                                    </div>
                                    <div v-else 
                                        class="w-16 h-10 text-center text-gray-300 border-gray-300 border-2 p-1  select-none">
                                        M
                                    </div>

                                </div>
                                <div class="flex space-x-4">
                                    <div disabled v-if="item.size === 'L'" id="btn-size"
                                        class="w-16 h-10 text-center bg-black text-white border-gray-500 border-2 p-1 cursor-pointer select-none">
                                        L
                                    </div>
                                    <div disabled v-else
                                        class="w-16 h-10 text-center text-gray-300 border-gray-300 border-2 p-1  select-none">
                                        L
                                    </div>
                                    <div v-if="item.size === 'XL'" id="btn-size"
                                        class="w-16 h-10 text-center bg-black text-white border-gray-500 border-2 p-1 cursor-pointer select-none">
                                        XL
                                    </div>
                                    <div v-else
                                        class="w-16 h-10 text-center text-gray-300 border-gray-300 border-2 p-1  select-none">
                                        XL
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between flex-col ">
                            <div class="flex space-x-4 p-8">
                                <div @click="plusMinus(item, -1)" class="flex cursor-pointer"> <img
                                        src="../assets/icons/minus.svg" alt=""></div>
                                <div :id="'numeric' + index" class="text-3xl">{{ item.amount }}</div>
                                <div @click="plusMinus(item, 1)" class="flex mt-1 cursor-pointer select-none"> <img
                                        src="../assets/icons/plus.svg" alt=""></div>
                            </div>
                            <div class="flex text-2xl p-4">{{ item.product_price * item.amount}} <p class="text-base text-gray-400 p-2">
                                    THB</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="line-order w-full my-7"></div>
            </div>

        </div>
        <div class="flex w-3/5 justify-between">
            <div class="text-xl font-frans font-bold p-5 tracking-wider">SUBTOTAL {{ totalPrice }} THB</div>
            <div class="w-1/2 mt-4 flex space-x-3">
                <button @click="LinkTo('/')"
                    class="text-center border-gray-500 border-2  w-1/2 h-10 text-black">CONTINUE
                    SHOPPING</button>
                <button @click="savePayment(), LinkTo('/order')"
                    class="text-center border-gray-500 border-2 text-white h-10 w-1/2 bg-black">CHECK
                    OUT</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
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
            count: JSON.parse(localStorage.getItem("cart")),
            user_id: JSON.parse(localStorage.getItem("user")).user_id
        }
    },
    methods: {
        plusMinus(value, num) {
            try {
                console.log(value, num)
                axios.post('http://localhost:3000/addcarts', {
                    size: value.size,
                    amount: num,
                    user_id: this.user_id,
                    product_id: value.product_id

                }).then(() => {
                    window.location.reload()
                })
            } catch (error) {
                console.log(error);
            }
            // let index1 = 0;
            // this.count.filter((e, index) => {
            //     if(e.id == value.id){
            //         index1 = index;
            //         return e
            //     }
            // })
            // this.count[index1].count = this.count[index1].count+num
            // if (this.count[index1].count == 0){
            //     // console.log(1)
            //     this.deleteItems(index1)
            // }

            // // this.
            // localStorage.setItem("cart", JSON.stringify(this.count))

        },
        savePayment() {
            localStorage.setItem("payment_items", JSON.stringify(this.cartItems))
        },
        deleteItems(item, index) {
            this.cartItems.splice(index, 1)
            try {
                axios.delete(`http://localhost:3000/delcarts/${ item.product_id}/${ this.user_id }/${ item.size }`, {
                }).then(() => {
                    alert("Delete cart successfully")
                })
            } catch (error) {
                console.log(error);
            }
            this.$forceUpdate();
        },
        LinkTo(whereTo) {
            this.$router.push(whereTo)
        },
        async getCarts() {
            await axios.get(`http://localhost:3000/carts/${this.user_id}`).then((res) => {
                this.cartProduct = res.data

            })
        },
        renderImg(img) {
            return "http://localhost:3000/products/" + JSON.parse(img)[0]
        }
    },
    watch: {

    },
    computed: {
        totalPrice() {
            let price = 0
            for (let i = 0; i < this.cartItems.length; i++) {
                price += parseInt(this.cartItems[i].price)

            }
            return price
        },
        cartItems() {
            let items = [...this.cartProduct]
            console.log(items)
            return items

        }
    },
    mounted() {
        this.getCarts()

    }

};
</script>