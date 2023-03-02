<template>
    <div class="center-set mt-10 relative">
        <div class="img-preview-group">
        </div>
        <div id="product" class="flex space-x-8">
            <div class="image-scroll">
                <div v-for="(img, index) in this.thisProduct[0].listImg" :key="index">
                    <img :src="img" alt="">
                </div>
            </div>
            <div class="relative w-80">
                <div class="w-80 space-y-6 sticky top-20">
                    <h1 class="font-frans text-4xl font-medium ">{{ this.thisProduct[0].title }}</h1>
                    <p class="text-2xl text-left leading-5">{{ this.thisProduct[0].price }} <span
                            class="text-sm text-gray-600">THB</span></p>
                    <p class="text-lg mt-10" :style="{ color: '#716F6F' }">Lorem ipsum dolor sit amet consectetur
                        adipisicing
                        elit. Illum, veniam praesentium voluptates aperiam in possimus, id eveniet rem provident quasi eum
                        placeat modi, facilis accusantium dolor inventore perferendis vel consequatur.</p>
                    <div class="flex flex-col ">
                        <div class="font-medium text-2xl font-frans pb-3">SIZE</div>
                        <div class="flex space-x-4 mb-3">

                            <div v-if="this.size === 'XS'" @click="this.size = ''" id="btn-size"
                                class="border w-16 h-10 text-center bg-black text-white border-gray-500 border-2 p-1 cursor-pointer select-none">XS
                            </div>
                            <div v-else @click="this.size = 'XS'" id="btn-size"
                                class="border w-16 h-10 text-center text-black border-gray-500 border-2 p-1 cursor-pointer select-none">XS
                            </div>
                            <div v-if="this.size === 'S'" @click="this.size = ''" id="btn-size"
                                class="border w-16 h-10 text-center bg-black text-white border-gray-500 border-2 p-1 cursor-pointer select-none">S
                            </div>
                            <div v-else @click="this.size = 'S'" id="btn-size"
                                class="border w-16 h-10 text-center text-black border-gray-500 border-2 p-1 cursor-pointer select-none">S
                            </div>
                            <div v-if="this.size === 'M'" @click="this.size = ''" id="btn-size"
                                class="border w-16 h-10 text-center bg-black text-white border-gray-500 border-2 p-1 cursor-pointer select-none">M
                            </div>
                            <div v-else @click="this.size = 'M'" id="btn-size"
                                class="border w-16 h-10 text-center text-black border-gray-500 border-2 p-1 cursor-pointer select-none">M
                            </div>
                            
                        </div>
                        <div class="flex space-x-4">
                            <div v-if="this.size === 'L'" @click="this.size = ''" id="btn-size"
                                class="border w-16 h-10 text-center bg-black text-white border-gray-500 border-2 p-1 cursor-pointer select-none">L
                            </div>
                            <div v-else @click="this.size = 'L'" id="btn-size"
                                class="border w-16 h-10 text-center text-black border-gray-500 border-2 p-1 cursor-pointer select-none">L
                            </div>
                            <div v-if="this.size === 'XL'" @click="this.size = ''" id="btn-size"
                                class="border w-16 h-10 text-center bg-black text-white border-gray-500 border-2 p-1 cursor-pointer select-none">XL
                            </div>
                            <div v-else @click="this.size = 'XL'" id="btn-size"
                                class="border w-16 h-10 text-center text-black border-gray-500 border-2 p-1 cursor-pointer select-none">XL
                            </div>
                        </div>
                    </div>
                    <div class="space-y-3 select-none">
                        <div @click="addItemToCart()"
                            class="font-frans font-medium border text-center border-gray-500 border-2 text-white py-2 px-4 bg-black cursor-pointer select-none">
                            ADD TO CART</div>
                        <div @click="addToFav(this.thisProduct[0])"
                            class="font-frans font-medium border text-center border-gray-500 border-2 py-2 px-4 text-black cursor-pointer select-none ">
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
    props: {
        products: {
            default: []
        }
    },
    data() {
        return {
            size:'',
            fav:[],
            thisProduct: this.products.filter(e => e.title == this.$route.params.title)
        }
    },
    methods: {
        addToFav(e) {
            if (!this.fav.includes(e)){
                this.fav.push(e)
            }
            localStorage.setItem('favorite', JSON.stringify(this.fav))
            alert('Added to Wishlist')
        },
        LinkTo(whereTo) {
            this.$router.push(whereTo)
        },
        addItemToCart() {
            if (localStorage.getItem("user") != null){
                let check = 0;
                let index = 0;
                if (localStorage.getItem("cart") == null) {
                    let data = [{ id: this.thisProduct[0].id, count: 1 }]
                    localStorage.setItem("cart", JSON.stringify(data))
                }
                else {
                    let temp = JSON.parse(localStorage.getItem("cart"));
                    for (let i = 0; i < temp.length; i++) {
                        if (temp[i].id == this.thisProduct[0].id) {
                            check = 1;
                            index = i
                        }
                    }
                    if (check) {
                        let backup = temp[index];
                        temp.splice(index, 1);
                        backup.count++;
                        temp.push(backup)
                    }
                    else{
                        temp.push({"id" : this.thisProduct[0].id, "count" : 1})
                    }
                    localStorage.setItem("cart", JSON.stringify(temp))
                    // localStorage.setItem("size", )
                    alert("Product added to Cart")
                }
            }
            else{
                alert("Please Login First !")
                this.LinkTo('/signin')
            }
        }
        // localStorage.setItem(JSON.stringify())
    }
}
</script>