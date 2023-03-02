<template>
    <div class="center-set mt-10">
        <div class="container-wishlist">
            <div class="flex justify-between items-center">
                <h1 class="font-bold text-xl">WISHLIST</h1>
                <div  @click="enableEdit = !enableEdit" :class="{'bg-black': enableEdit, 'text-white': enableEdit}" class="font-frans px-12 py-2 border border-black cursor-pointer select-none">{{ enableEdit ? 'SAVE' : 'EDIT' }}</div>
            </div>
            <div class="inline-grid grid-cols-4 gap-x-6 gap-y-9 p-8">
                <div v-for="(item, index) in product" :key="index" id="card-wishlist-product" class="relative space-y-2 cursor-pointer select-none">
                    <img :src="item.listImg[0]" alt="">
                    <div class="h-20 space-y-1">
                        <p class="text-md">{{ item.title }}</p>
                        <p class="text-2xl text-left leading-5">{{ item.price }} <span
                                class="text-sm text-gray-600">THB</span>
                        </p>
                    </div>
                    <div
                        class="btn-add-to-cart relative bottom-0 font-frans font-boldborder text-center border-gray-500 border-2 py-2 px-4 text-black cursor-pointer hover:bg-black hover:text-white">
                        {{ enableEdit ? 'DELETE' : 'ADD TO CART' }}</div>
                </div>

            </div>
        </div>
    </div>
</template>
<style>
.container-wishlist {
    width: 78%;
    /* width: 70rem; */
}
</style>
<script>
export default {
    name: "Wishlist",
    data() {
        return {
            enableEdit: false,
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
                {
                    id: '004',
                    title: 'GLW PINK TROUSERS',
                    price: '990',
                    color: 'pink',
                    sex: 'kids',
                    categories: 'Trousers',
                    detail: 'Lorem Ipsum is simply dummy text of the printing setting industry',
                    listImg: [
                        require('../assets/products/GLW_PINK_TROUSERS_0.jpg'),
                        require('../assets/products/GLW_PINK_TROUSERS_1.jpg'),
                        require('../assets/products/GLW_PINK_TROUSERS_3.jpg'),
                        require('../assets/products/GLW_PINK_TROUSERS_4.jpg')]
                },
                {
                    id: '005',
                    title: 'PAPER PLANE SEQUIN JACKET',
                    price: '1290',
                    color: 'blue',
                    sex: 'kids',
                    categories: 'Tops',
                    detail: 'Lorem Ipsum is simply dummy text of the printing setting industry',
                    listImg: [
                        require('../assets/products/PAPER_PLANE_SEQUIN_JACKET_0.jpg'),
                        require('../assets/products/PAPER_PLANE_SEQUIN_JACKET_1.jpg'),
                        require('../assets/products/PAPER_PLANE_SEQUIN_JACKET_3.jpg'),
                        require('../assets/products/PAPER_PLANE_SEQUIN_JACKET_4.jpg')]
                },
                {
                    id: '006',
                    title: 'PAPER PLANE SEQUIN SHORTS',
                    price: '990',
                    color: 'blue',
                    sex: 'kids',
                    categories: 'Shorts',
                    detail: 'Lorem Ipsum is simply dummy text of the printing setting industry',
                    listImg: [
                        require('../assets/products/PAPER_PLANE_SEQUIN_SHORTS_0.jpg'),
                        require('../assets/products/PAPER_PLANE_SEQUIN_SHORTS_1.jpg'),
                        require('../assets/products/PAPER_PLANE_SEQUIN_SHORTS_3.jpg'),
                        require('../assets/products/PAPER_PLANE_SEQUIN_SHORTS_4.jpg'),
                        require('../assets/products/PAPER_PLANE_SEQUIN_SHORTS_5.jpg')]
                },
                {
                    id: '007',
                    title: 'ALL THAT I AN DO TOP',
                    price: '1290',
                    color: 'pink',
                    sex: 'women',
                    categories: 'Tops',
                    detail: 'Lorem Ipsum is simply dummy text of the printing setting industry',
                    listImg: [
                        require('../assets/products/ALL_THAT_I_AN_DO_TOP_0.jpg'),
                        require('../assets/products/ALL_THAT_I_AN_DO_TOP_1.jpg'),
                        require('../assets/products/ALL_THAT_I_AN_DO_TOP_2.jpg'),
                        require('../assets/products/ALL_THAT_I_AN_DO_TOP_3.jpg'),
                        require('../assets/products/ALL_THAT_I_AN_DO_TOP_4.jpg'),
                        require('../assets/products/ALL_THAT_I_AN_DO_TOP_5.jpg')]
                },
                {
                    id: '008',
                    title: 'GLISTEN TWEED STRAIGHT TROUSERS',
                    price: '2290',
                    color: 'white',
                    sex: 'women',
                    categories: 'Trousers',
                    detail: 'Lorem Ipsum is simply dummy text of the printing setting industry',
                    listImg: [
                        require('../assets/products/GLISTEN_TWEED_STRAIGHT_TROUSERS_0.jpg'),
                        require('../assets/products/GLISTEN_TWEED_STRAIGHT_TROUSERS_1.jpg'),
                        require('../assets/products/GLISTEN_TWEED_STRAIGHT_TROUSERS_2.jpg'),
                        require('../assets/products/GLISTEN_TWEED_STRAIGHT_TROUSERS_3.jpg'),
                        require('../assets/products/GLISTEN_TWEED_STRAIGHT_TROUSERS_4.jpg'),
                        require('../assets/products/GLISTEN_TWEED_STRAIGHT_TROUSERS_5.jpg')]
                },
                {
                    id: '009',
                    title: 'MATTER TANK TOP',
                    price: '990',
                    color: 'orange',
                    sex: 'women',
                    categories: 'Tops',
                    detail: 'Lorem Ipsum is simply dummy text of the printing setting industry',
                    listImg: [
                        require('../assets/products/MATTER_TANK_TOP_0.jpg'),
                        require('../assets/products/MATTER_TANK_TOP_1.jpg'),
                        require('../assets/products/MATTER_TANK_TOP_2.jpg'),
                        require('../assets/products/MATTER_TANK_TOP_3.jpg'),
                        require('../assets/products/MATTER_TANK_TOP_4.jpg')]
                },
                {
                    id: '010',
                    title: 'THIS TIME MINI SKIRT',
                    price: '1290',
                    color: 'pink',
                    sex: 'women',
                    categories: 'Skirts',
                    detail: 'Lorem Ipsum is simply dummy text of the printing setting industry',
                    listImg: [
                        require('../assets/products/THIS_TIME_MINI_SKIRT_0.jpg'),
                        require('../assets/products/THIS_TIME_MINI_SKIRT_1.jpg'),
                        require('../assets/products/THIS_TIME_MINI_SKIRT_2.jpg'),
                        require('../assets/products/THIS_TIME_MINI_SKIRT_3.jpg'),
                        require('../assets/products/THIS_TIME_MINI_SKIRT_4.jpg'),
                        require('../assets/products/THIS_TIME_MINI_SKIRT_5.jpg')]
                },
            ]
        }
    },
    methods: {
        // EnableEdit(){
            
        // }
    },
    mounted() {
        if (JSON.parse(localStorage.getItem("user")) == null) {
            alert("Please Login First !")
            this.$router.push('/')
        }
    }
}
</script>