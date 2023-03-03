<template>
    <div class="mt-16 flex-col center-set">
        <div class="search-box">
            <button class="btn-search"><img src="../assets/icons/Search_light.svg" alt=""></button>
            <input type="text" class="input-search" placeholder="Type to Search..." v-model="search_text">
        </div>
        <div id="browserProduct" class="grid grid-cols-3 gap-6 mt-10">
            <div class="cardProduct cursor-pointer select-none" v-for="(item, index) in renderProduct" :key="index">
                <div class="w-full relative">
                    <img class="w-80" :src="item.listImg[0]" @click="LinkTo('/productDetail/' + item.title)" />
                    <div class="py-2">
                        <div class="relative flex items-center text-left">
                            <img v-show="item.is_favourite == false" class="w-5 absolute right-0 cursor-pointer select-none"
                                @click="item.is_favourite = !item.is_favourite, addToFav(item)"
                                src="../assets/icons/heart.svg">
                            <img v-show="item.is_favourite == true" class="w-5 absolute right-0 cursor-pointer select-none"
                                @click="item.is_favourite = !item.is_favourite, cancelFav(index)"
                                src="../assets/icons/heartt.svg">
                            <p class="text-md w-64">{{ item.title }}</p>
                        </div>
                        <p class="text-2xl text-left leading-6">{{ item.price }} <span
                                class="text-sm text-gray-600">THB</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style></style>
<script>
export default {
    name: "Search",
    props: {
        products: {
            default: []
        }
    },
    data() {
        return {
            renderProduct: this.products,
            search_text:'',
        }
    },
    methods:{
        LinkTo(whereTo) {
            this.$router.push(whereTo)
        },
    },
    watch:{
        search_text(newVal){
            this.renderProduct = this.products.filter(e => e.title.includes(newVal.toUpperCase())) 
        }
    },
    computed: {
        
    }
}
</script>