<style>
@import url('https://fonts.googleapis.com/css2?family=Jura&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.payment-head {
    /* font-family: 'Jura', sans-serif; */
    font-family: 'Inter', sans-serif;
}

.line-order {
    border-bottom: 1px solid rgb(229 231 235);
}

.shipping-address {
    width: 32rem;
}

.enter-address {
    font-size: 1.07rem;
    border-bottom: 1px solid rgb(229 231 235);
}

.img-summary {
    width: 9rem;
    height: 9rem;
    object-fit: cover;
    background-position: center;

}
</style>
<template>
    <div class="center-set flex-col">
        <div class="payment-head center-set mt-12 space-x-3 font-semibold text-lg tracking-widest">
            <div class="flex text-gray-200">SHOPPING CART</div>
            <div class="line-order w-40"></div>
            <div class="flex">PAYMENT</div>
            <div class="line-order w-40"></div>
            <div class="flex text-gray-200">CONFIRMATION</div>
        </div>
        <div class="flex space-x-5">
            <div class="flex flex-col shipping-address border mt-12">
                <div class="line-order flex text-2xl font-light font-frans p-5 tracking-wider">SHIPPING ADDRESS</div>
                <div v-for="(item, index) in detailAddress1" :key="index" class="w-full">
                    <div class="enter-address flex justify-between item-center">
                        <div class="flex p-5">{{ item.topic }}</div>
                        <div class="center-set">
                            <input type="text" class="w-96 h-10 p-2 outline-none" :placeholder="item.detail"
                                @input="setInputValue($event.target.value, item.vModel)">
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col w-96 mt-12 ">
                <div class="border flex text-2xl font-light p-5 tracking-wider font-frans ">ORDER SUMMARY</div>
                <div v-for="(item, index) in orderSummary" :key="index" class="w-full border font-jura">
                    <div class="flex">
                        <div class="w-32 p-2">
                            <img :src="this.renderImg(item.product_img)" class="img-summary">
                        </div>
                        <div class="flex flex-col">
                            <div class="p-3 font-semibold">{{ item.product_title }}</div>
                            <div class="w-16 h-10 text-center border-gray-500 border-2 ml-3 p-1 cursor-default select-none">
                                {{ item.size }}
                            </div>
                            <div class="flex text-lg p-2">{{ item.price }} <div class="ml-2 text-gray-400">THB x {{
                                item.amount }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border center-set flex-col font-bold h-28 font-jura text-bold text-lg">
                    <div class="flex w-80">
                        <div class="w-1/2 ">TOTAL PRODUCT</div>
                        <div class="w-1/2 ">{{ this.totalPrice() }} THB</div>
                    </div>
                    <div class="flex w-80 mt-3">
                        <div class="w-1/2 ">SHIPPING</div>
                        <div class="w-1/2">FREE</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex line-order w-3/5 mt-12 border-1"></div>
        <div class="flex w-3/5 justify-between">
            <div class="text-2xl font-light p-5 tracking-wider font-frans">TOTAL {{ this.totalPrice() }} THB</div>
            <div class="w-1/2 mt-4 flex space-x-3">
                <button class="text-center border-gray-500 border-2  w-1/2 h-10 text-black">BACK</button>
                <button @click="saveAddress()"
                    class="text-center border-gray-500 border-2 text-white h-10 w-1/2 bg-black">PLACE MY
                    ORDER</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    
    data() {
        return {
            fname: '',
            lname: '',
            phone: '',
            email: '',
            country: '',
            address: '',
            province: '',
            postcode: '',
            company: '',
            detailAddress1: [
                { topic: "First name", detail: "First name", vModel: "fname" },
                { topic: "Last name", detail: "Last name", vModel: "lname" },
                { topic: "Tel", detail: "Tel", vModel: "phone" },
                { topic: "Email", detail: "Email", vModel: "email" },
                { topic: "Country", detail: "Country", vModel: "country" },
                { topic: "Address", detail: "Address", vModel: "address" },
                { topic: "Province", detail: "Province", vModel: "province" },
                { topic: "Postcode", detail: "Postcode", vModel: "postcode" },
            ],
            user_id: JSON.parse(localStorage.getItem("user")).user_id,
            orderSummary: [],
        }
    },
    methods: {
        setInputValue(value, item) {
            this[item] = value
        },
        totalPrice() {
            var price = 0
            this.orderSummary.map(e => e.product_price * e.amount).forEach(element => {
                price += element
            });
            return price
        },
        LinkTo(whereTo) {
            this.$router.push(whereTo)
        },
        renderImg(img) {
            return "http://localhost:3000/products/" + JSON.parse(img)[0]
        },
        async getCarts() {
            await axios.get(`http://localhost:3000/carts/${this.user_id}`).then((res) => {
                this.orderSummary = res.data
                console.log(res.data)
            })
        },
        saveAddress() {
            this.orderSummary.forEach(value => {
                axios.post(`http://localhost:3000/addOrder`, {
                    firstname: this.fname,
                    lastname: this.lname,
                    tel: this.phone,
                    email: this.email,
                    country: this.country,
                    address: this.address,
                    province: this.province,
                    postcode: this.postcode,
                    amount: value.amount,
                    size: value.size,
                    product_id: value.product_id,
                    user_id: this.user_id
                }).then((res)=>{
                    this.LinkTo(`/confirm/${res.data}`)
                })

            });
        },
    
    },
    mounted() {
        this.getCarts()

    }
}
</script>