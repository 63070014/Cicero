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
                            <div class="">PAYMENT METHOD</div>
                        </div>
                        <div class="flex flex-col space-y-3">
                            <div class="">1,590 THB</div>
                            <div class="">MAR 3, 2022</div>
                            <div class="">ACCOUNT *1203</div>
                        </div>
                    </div>
                    <div class="border font-frans p-4 w-full text-center border-black">ORDER NUMBER : 1RSTGO-5D</div>
                </div>
                <div class="pt-7"><img src="../assets/icons/fish-line.svg" alt=""></div>
            </div>
            <div class="flex justify-between w-full p-9 relative">
                <div class="flex flex-col space-y-2">
                    <div class="font-frans">SHIPPING ADDRESS</div>
                    <div class="w-60" >{{ this.getData[0].localAddress + " " + this.getData[0].localPostcode + " " + this.getData[0].localProvince }}</div>
                </div>
                <div class="flex flex-col-reverse font-jura font-bold relative">
                    <p class="text-lg">Cicero.</p></div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            address:'',
            getData:JSON.parse(localStorage.getItem('address')) 
        }
    },
    methods:{
        showData(){
            var getData = JSON.parse(localStorage.getItem('address')) 
            this.address = getData[0].localAddress
        }
    }
}
</script>