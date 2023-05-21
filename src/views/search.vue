<template>
    <div class="mt-16 flex-col center-set">
        <div class="search-box">
            <button class="btn-search"><img src="../assets/icons/Search_light.svg" alt=""></button>
            <input type="text" class="input-search" placeholder="Type to Search..." v-model="search_text">
        </div>
        <div id="browserProduct" class="grid grid-cols-3 gap-6 mt-10">
            <div class="cardProduct cursor-pointer select-none" v-for="(item, index) in  renderProduct " :key="index">
                <div class="w-full relative">
                    <img class="w-80" :src="renderImg(item.product_img)"
                        @click="LinkTo('/productDetail/' + item.product_title)" />
                    <div class="py-2">
                        <div class="relative flex items-center text-left">
                            <img v-show="this.like.includes(item.product_id)"
                                class="w-5 absolute right-0 cursor-pointer select-none"
                                @click="this.changeLike(item.product_id);" src="../assets/icons/heartt.svg">
                            <img v-show=" this.like.includes(item.product_id) == false "
                                class="w-5 absolute right-0 cursor-pointer select-none"
                                @click=" this.changeLike(item.product_id) " src="../assets/icons/heart.svg">
                            <p class="text-md w-64">{{ item.product_title }}</p>
                        </div>
                        <p class="text-2xl text-left leading-6">{{ item.product_price }} <span
                                class="text-sm text-gray-600">THB</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "productSearch",
    props: {
        products: {
            default: []
        }
    },
    data() {
        return {
            user_id: "",
            renderProduct: this.products,
            search_text: '',
            like: [],
        }
    },
    methods: {
        LinkTo(whereTo) {
            this.$router.push(whereTo)
        },
        renderImg(img) {
            return "http://localhost:3000/products/" + JSON.parse(img)[0]
        },
        changeLike(product_id) {
            if (this.user_id){
                if (this.like.includes(product_id)) {
                    this.like.splice(this.like.indexOf(product_id), 1)
                    try {
                        axios.delete(`http://localhost:3000/like/${product_id}/${this.user_id}`)
                            .then((res) => {
                                console.log(res.data);
                            })
                    } catch (er) {
                        console.log(er)
                    }
                }
                else {
                    this.like.push(product_id)
                    try {
                        axios.post(`http://localhost:3000/like/${product_id}`, {
                            user_id: this.user_id,
                        })
                    } catch (er) {
                        console.log(er)
                    }
                }
            }
            else{
                alert('Please login first')
                this.$router.push('/signin')
            }
        },
        checkLikeLength() {
            return this.like.length > 0;
        },
        async checkLike(product_id) {
            await axios.post(`http://localhost:3000/likeByUser/`, {
                user_id: this.user_id,
                product_id: product_id
            }).then((res) => {
                if (res.data != null) {
                    this.like.push(res.data)
                }
            })
        },
    },
    watch: {
        search_text(newVal) {
            this.renderProduct = this.products.filter(e => e.product_title.includes(newVal.toUpperCase()))
        }
    },
    computed: {

    },
    mounted() { 
        if (localStorage.getItem("user")) {
            this.user_id = JSON.parse(localStorage.getItem("user")).user_id
        }
    },
}
</script>