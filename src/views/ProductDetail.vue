<template>
    <div class="container center-set mt-10 relative">
        <div class="img-preview-group">
        </div>
        <div id="product" class="flex space-x-8">
            <div class="image-scroll sticky top-0">
                <img src="../assets/products/iddoitagaintop1.svg" />
                <img src="../assets/products/iddoitagaintop2.svg" />
                <img src="../assets/products/iddoitagaintop3.svg" />
                <img src="../assets/products/iddoitagaintop4.svg" />
            </div>
            <div class="relative w-80">
                <div class="w-80 space-y-4 fixed">
                    <h1 class="font-frans text-4xl font-bold ">I'D DO IT AGAIN TOP</h1>
                    <p class="text-2xl text-left leading-5">1,590 <span class="text-sm text-gray-600">THB</span></p>
                    <p class="text-lg mt-10" :style="{ color: '#716F6F' }">Lorem ipsum dolor sit amet consectetur
                        adipisicing
                        elit. Illum, veniam praesentium voluptates aperiam in possimus, id eveniet rem provident quasi eum
                        placeat modi, facilis accusantium dolor inventore perferendis vel consequatur.</p>
                    <div class="flex flex-col">
                        <div class="font-semibold text-2xl font-frans pb-3">SIZE</div>
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
            </div>
        </div>
    </div>
</template>
<style>
.image-scroll {
    width: 35rem;
}
</style>
<script>
export default {
    name: "productDetail",
    data() {
        return {
            product: [{}]
        }
    }
}
</script>