<style>
.line-dot {
    border-top: 2px dashed rgb(196, 196, 198);
}
</style>
<template>
    <div class="center-set">
        <div class="flex border flex-col center-set mt-12">
            <div class="flex font-frans text-2xl p-4">THANK YOU FOR SHOPPING.</div>
            <div class="flex flex-col center-set line-dot space-y-4">
                <div class="w-14 mt-8"><img src="../assets/icons/logo-confirm.svg" alt=""></div>
                <div class="font-frans text-xl">YOUR ORDER IS CONFIRMED.</div>
                <div class="flex flex-col space-y-8">
                    <div class="flex justify-between font-jura space-x-28 mt-2">
                        <div class="flex flex-col space-y-3">
                            <div class="">PAYMENT AMOUT</div>
                            <div class="">PAYMENT DATE</div>
                        </div>
                        <div class="flex flex-col space-y-3">
                            <div class="">{{ this.userOrder.product_price * this.userOrder.amount }} THB</div>
                            <div class="">{{ this.monthName[this.date.getMonth()] + ' ' + this.date.getDate() + ', '+this.date.getFullYear() }}</div>
                        </div>
                    </div>
                    <div class="border font-frans p-4 w-full text-center border-black">ORDER NUMBER : {{
                        this.userOrder.order_id }}RSTGO-SD</div>
                </div>
                <div class="pt-7"><img src="../assets/icons/fish-line.svg" alt=""></div>
            </div>
            <div class="flex justify-between w-full p-9 relative">
                <div class="flex flex-col space-y-2">
                    <div class="font-frans">SHIPPING ADDRESS</div>
                    <div class="w-60">{{ this.userOrder.address + " " + this.userOrder.postcode + " " +
                        this.userOrder.province }}</div>
                </div>
                <div class="flex flex-col-reverse font-jura font-bold relative">
                    <p class="text-lg">Cicero.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            address: '',
            getData: JSON.parse(localStorage.getItem('address')),
            orderSummary: JSON.parse(localStorage.getItem("payment_items")),
            user_id: JSON.parse(localStorage.getItem("user")).user_id,
            date: new Date(),
            monthName: ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ],
            userOrder: []
        }
    },
    methods: {
        totalPrice() {
            let price = 0
            for (let i = 0; i < this.orderSummary.length; i++) {
                price += parseInt(this.orderSummary[i].price)

            }
            return price
        },
        async getOrderUser() {
            await axios.get(`http://localhost:3000/confirmOrder/${this.user_id}/${this.$route.params.order_id}`).then((res) => {
                this.userOrder = res.data[0]
                console.log(this.userOrder);
            })
        },
        // showData(){
        //     var getData = JSON.parse(localStorage.getItem('address')) 
        //     this.address = getData[0].localAddress
        // }
    },
    mounted() {
        this.getOrderUser()

    }
}
</script>