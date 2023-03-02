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
    width: 300px !important;
    height: 120px !important;
    object-fit: none;
    background-position: bottom;

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
                <div class="line-order flex text-xl font-bold p-5 tracking-wider">SHIPPING ADDRESS</div>
                <!-- <div v-for="(item, index) in detailAddress1" :key="index" class="w-full">
                        <div class="enter-address flex justify-between item-center">
                            <div class="flex p-5">{{ item.topic }}</div>
                            <div class="center-set">
                                <input type="text" class="w-96 h-10 p-2" :placeholder="item.detail">
                            </div>
                        </div>
                    </div> -->
                <div class="enter-address flex justify-between item-center">
                    <div class="flex p-5">Firstname</div>
                    <div class="center-set">
                        <input type="text" class="w-96 h-10 p-2" placeholder="Firstname" v-model="fname">
                    </div>
                </div>
                <div class="enter-address flex justify-between item-center">
                    <div class="flex p-5">Lastname</div>
                    <div class="center-set">
                        <input type="text" class="w-96 h-10 p-2" placeholder="Lastname" v-model="lname">
                    </div>
                </div>
                <div class="enter-address flex justify-between item-center">
                    <div class="flex p-5">Tel.</div>
                    <div class="center-set">
                        <input type="text" class="w-96 h-10 p-2" placeholder="Tel." v-model="phone">
                    </div>
                </div>
                <div class="enter-address flex justify-between item-center">
                    <div class="flex p-5">Email</div>
                    <div class="center-set">
                        <input type="text" class="w-96 h-10 p-2" placeholder="Email" v-model="email">
                    </div>
                </div>
                <div class="enter-address flex justify-between item-center">
                    <div class="flex p-5">Country</div>
                    <div class="center-set">
                        <input type="text" class="w-96 h-10 p-2" placeholder="Country" v-model="country">
                    </div>
                </div>
                <div class="enter-address flex justify-between item-center">
                    <div class="flex p-5">Address</div>
                    <div class="center-set">
                        <input type="text" class="w-96 h-10 p-2" placeholder="Address" v-model="address">
                    </div>
                </div>
                <div class="enter-address flex justify-between item-center">
                    <div class="flex p-5">Province</div>
                    <div class="center-set">
                        <input type="text" class="w-96 h-10 p-2" placeholder="Province" v-model="province">
                    </div>
                </div>
                <div class="enter-address flex justify-between item-center">
                    <div class="flex p-5">Postcode</div>
                    <div class="center-set">
                        <input type="text" class="w-96 h-10 p-2" placeholder="Postcode" v-model="postcode">
                    </div>
                </div>
            </div>
            <div class="flex flex-col w-96 mt-12">
                <div class="border flex text-xl font-bold p-5 tracking-wider">ORDER SUMMARY</div>
                <div v-for="(item, index) in orderSummary" :key="index" class="w-full border">
                    <div class="flex">
                        <div class="w-32 p-2">
                            <img :src="item.listImg[0]" class="img-summary">
                        </div>
                        <div class="flex flex-col">
                            <div class="p-3 font-semibold">{{ item.title }}</div>
                            <div class="border w-16 h-10 text-center border-gray-500 border-2 ml-3 p-1">L
                            </div>
                            <div class="flex text-lg p-2">{{ item.price }} <div class="ml-2 text-gray-400">THB x 1
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border center-set flex-col font-bold h-28">
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
        <div class="flex line-order w-3/5 mt-12 border-2"></div>
        <div class="flex w-3/5 justify-between">
            <div class="text-xl font-bold p-5 tracking-wider">TOTAL {{ this.totalPrice() }} THB</div>
            <div class="w-1/2 mt-4 flex space-x-3">
                <button class="border text-center border-gray-500 border-2  w-1/2 h-10 text-black">BACK</button>
                <button @click="saveAddress()"
                    class="border text-center border-gray-500 border-2 text-white h-10 w-1/2 bg-black">PLACE MY
                    ORDER</button>
            </div>
        </div>
    </div>
</template>
<script>
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
            detailAddress1: [
                { topic: "First name", detail: "First name", vModel: "fname" },
                { topic: "Last name", detail: "Last name", vModel: "lname" },
                { topic: "Tel.", detail: "Tel.", vModel: "phone" },
                { topic: "Email", detail: "Email", vModel: "email" },
                { topic: "Country", detail: "Country", vModel: "country" },
                { topic: "Address", detail: "Address", vModel: "address" },
                { topic: "Province", detail: "Province", vModel: "province" },
                { topic: "Postcode", detail: "Postcode", vModel: "postcode" },
            ],
            orderSummary: JSON.parse(localStorage.getItem("payment_items")),
        }
    },
    methods: {
        totalPrice(){
            let price = 0
            for (let i = 0; i < this.orderSummary.length; i++) {
                price += parseInt(this.orderSummary[i].price)
                
            }
            return price
        },
        LinkTo(whereTo) {
            this.$router.push(whereTo)
        },
        saveAddress() {
            var getData = [{
                localFname: this.fname,
                localLname: this.lname,
                localPhone: this.phone,
                localEmail: this.email,
                localCountry: this.country,
                localAddress: this.address,
                localProvince: this.province,
                localPostcode: this.postcode,
            }]
            localStorage.setItem('address', JSON.stringify(getData));
            this.LinkTo('/confirm')
        },
    },
}
</script>