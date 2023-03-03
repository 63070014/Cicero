<style>
.head,
.detail {
    border-bottom: 1px solid gray;
}

.text-infooter>div>span {
    cursor: pointer;
    user-select: none;
}

.text-infooter>div>p {
    user-select: none;
}

.font-thin {
    color: rgb(169, 166, 166);
}
</style>
<template>
    <footer class="relative bottom-0 bg-black flex flex-col justify-center items-center text-white mt-12">
        <div class="head flex justify-center items-center h-28 text-3xl tracking-widest font-medium w-full font-copper">
            <span class="">CICERO</span>
        </div>
        <div class="detail flex justify-center text-sm tracking-widest mt-8 leading-10 h-60 w-full ">
            <div class="text-infooter flex justify-between w-3/6">
                <div class="flex flex-col">
                    <p class="font-medium font-copper">DISCOVER CICERO</p>
                    <span class="font-thin">ABOUT US</span>
                    <span class="font-thin">STORE LOCATION</span>
                </div>
                <div class="flex flex-col">
                    <p class="font-medium font-copper">CUSTOMER SERVICE</p>
                    <span class="font-thin">CONTACT US</span>
                    <span class="font-thin">TERMS OF USE</span>
                    <span class="font-thin">PRIVACY POLICY</span>
                    <span class="font-thin">FAQS</span>
                </div>
                <div class="flex flex-col">
                    <p class="font-medium font-copper">FOLLOW US</p>
                    <a href="https://instagram.com/">
                        <span class="font-thin">INSTAGRAM</span>
                    </a>
                    <a href="https://facebook.com/">
                        <span class="font-thin">FACEBOOK</span>
                    </a>
                    <a href="https://line.me/th/">
                        <span class="font-thin">LINE</span>
                    </a>
                </div>
            </div>

        </div>
        <div class="flex m-3 text-sm font-copper">© 2023 CICERO. ALL RIGHTS RESERVED.</div>
    </footer>
</template>