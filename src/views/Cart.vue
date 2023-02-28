<template>
    <div class="center-set flex-col">
        <div class="payment-head center-set mt-12 space-x-3 font-semibold text-lg tracking-widest">
            <div class="flex">SHOPPING CART</div>
            <div class="line-order w-40"></div>
            <div class="flex text-gray-200">PAYMENT</div>
            <div class="line-order w-40"></div>
            <div class="flex text-gray-200">CONFIRMATION</div>
        </div>
        <div v-for="(item, index) in cartProduct" :key="index" class="flex">
            <div class="flex"><img src="../assets/icons/delete_button.svg" alt=""></div>
            <div class="flex"><img :src="item.url" alt=""></div>
        </div>
        <div class="flex">
            <div class="flex flex-col">
                <div class="text-lg">{{ item.name }}</div>
            </div>
        </div>
    </div>

</template>
<script>
// @ is an alias to /src

export default {
  name: "Homepage",
  components: {
  },
  data() {
    return {
      cartProduct: [
        { title: "THE STAR CROP VEST", price: "1590", url: require('../assets/homepage/img1.svg') , detail_product: "Lorem Ipsum is simply dummy text of the printing setting industry.",},
        { title: "THE STAR CROP VEST", price: "1590", url: require('../assets/homepage/img2.svg') , detail_product: "Lorem Ipsum is simply dummy text of the printing setting industry.",},
      ],
    }
  },
  methods:{
  },
  watch:{
    
  }
};
</script>