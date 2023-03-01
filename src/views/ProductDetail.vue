<template>
    <div class="center-set mt-10 relative">
        <div class="img-preview-group">
        </div>
        <div id="product" class="flex space-x-8">
            <div class="image-scroll">
                <img src="../assets/products/iddoitagaintop1.svg" />
                <img src="../assets/products/iddoitagaintop2.svg" />
                <img src="../assets/products/iddoitagaintop3.svg" />
                <img src="../assets/products/iddoitagaintop4.svg" />
            </div>
            <div class="relative w-80">
                <div class="w-80 space-y-6 sticky top-20">
                    <h1 class="font-frans text-4xl font-bold ">I'D DO IT AGAIN TOP</h1>
                    <p class="text-2xl text-left leading-5">1,590 <span class="text-sm text-gray-600">THB</span></p>
                    <p class="text-lg mt-10" :style="{ color: '#716F6F' }">Lorem ipsum dolor sit amet consectetur
                        adipisicing
                        elit. Illum, veniam praesentium voluptates aperiam in possimus, id eveniet rem provident quasi eum
                        placeat modi, facilis accusantium dolor inventore perferendis vel consequatur.</p>
                    <div class="flex flex-col ">
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
                    <div class="space-y-3">
                        <div
                            class="font-frans font-bold border text-center border-gray-500 border-2 text-white py-2 px-4 bg-black cursor-pointer">
                            ADD TO CART</div>
                        <div
                            class="font-frans font-boldborder text-center border-gray-500 border-2 py-2 px-4 text-black cursor-pointer ">
                            ADD TO WISHLIST</div>
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
            product: [
                {
                    id: '001',
                    title: 'CELESTIAL SPHERE SEQUIN JACKET',
                    price: '1290',
                    color: 'blue',
                    sex: 'women',
                    categories: 'Tops',
                    detail: 'Lorem Ipsum is simply dummy text of the printing setting industry',
                    listImg: [
                        require('../assets/products/CELESTIAL_SPHERE_SEQUIN_JACKET_0.jpg'),
                        require('../assets/products/CELESTIAL_SPHERE_SEQUIN_JACKET_1.jpg'),
                        require('../assets/products/CELESTIAL_SPHERE_SEQUIN_JACKET_2.jpg'),
                        require('../assets/products/CELESTIAL_SPHERE_SEQUIN_JACKET_3.jpg'),
                        require('../assets/products/CELESTIAL_SPHERE_SEQUIN_JACKET_4.jpg'),
                        require('../assets/products/CELESTIAL_SPHERE_SEQUIN_JACKET_5.jpg')],
                },
                {
                    id: '002',
                    title: 'GLW PINK SKIRT',
                    price: '890',
                    color: 'pink',
                    sex: 'kids',
                    categories: 'Skirts',
                    detail: 'Lorem Ipsum is simply dummy text of the printing setting industry',
                    listImg: [
                        require('../assets/products/GLW_PINK_SKIRT_0.jpg'),
                        require('../assets/products/GLW_PINK_SKIRT_1.jpg'),
                        require('../assets/products/GLW_PINK_SKIRT_2.jpg'),
                        require('../assets/products/GLW_PINK_SKIRT_3.jpg'),
                        require('../assets/products/GLW_PINK_SKIRT_4.jpg')],
                },
                {
                    id: '003',
                    title: 'GENTLE LITTLEWOMAN RABBIT T-SHIRT',
                    price: '790',
                    color: 'black',
                    sex: 'kids',
                    categories: 'Tops',
                    detail: 'Lorem Ipsum is simply dummy text of the printing setting industry',
                    listImg: [
                        require('../assets/products/GENTLE_LITTLEWOMAN_RABBIT_T-SHIRT_0.jpg'),
                        require('../assets/products/GENTLE_LITTLEWOMAN_RABBIT_T-SHIRT_1.jpg'),
                        require('../assets/products/GENTLE_LITTLEWOMAN_RABBIT_T-SHIRT_3.jpg'),
                        require('../assets/products/GENTLE_LITTLEWOMAN_RABBIT_T-SHIRT_4.jpg')]
                },
            ]
        }
    }
}
</script>