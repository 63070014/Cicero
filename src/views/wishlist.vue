<template>
    <div class="center-set mt-10">
        <div class="container-wishlist">
            <div class="flex justify-between items-center">
                <h1 class="font-bold text-xl">WISHLIST</h1>
                <div @click="enableEdit = !enableEdit" :class="{ 'bg-black': enableEdit, 'text-white': enableEdit }"
                    class="font-frans px-12 py-2 border border-black cursor-pointer select-none">{{ enableEdit ? 'SAVE' :
                        'EDIT' }}</div>
            </div>
            <div class="inline-grid grid-cols-4 gap-x-6 gap-y-9 p-8">
                <div v-for="(item, index) in favorite" :key="index" id="card-wishlist-product"
                    class="relative space-y-2 cursor-pointer select-none">
                    <img @click="LinkTo('/productDetail/' + item.title)" :src="item.listImg[0]" alt="">
                    <div class="h-20 space-y-1">
                        <p class="text-md">{{ item.title }}</p>
                        <p class="text-2xl text-left leading-5">{{ item.price }} <span
                                class="text-sm text-gray-600">THB</span>
                        </p>
                    </div>
                    <div @click="addItemToCart(), cancelFav(item)"
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
    props: {
        products: {
            default: []
        }
    },
    data() {
        return {
            enableEdit: false,
            favorite: JSON.parse(localStorage.getItem("favorite"))
        }
    },
    methods: {
        LinkTo(whereTo) {
            this.$router.push(whereTo)
        },
        cancelFav(e){
            if (this.enableEdit){
                let temp = this.favorite;
                let index_delete = temp.indexOf(e)
                temp.splice(index_delete,1)
                localStorage.setItem('favorite', JSON.stringify(temp))

            }
            this.favorite = JSON.parse(localStorage.getItem("favorite"))
            this.$forceUpdate();


        },
        addItemToCart() {
            if (this.enableEdit == false) {
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
                    else {
                        temp.push({ "id": this.thisProduct[0].id, "count": 1 })
                    }
                    localStorage.setItem("cart", JSON.stringify(temp))

                }
            }
        }
        // EnableEdit(){

        // }
    },
    mounted() {
        if (JSON.parse(localStorage.getItem("user")) == null) {
            alert("Please Login First !")
            this.$router.push('/signin')
        }
    }
}
</script>