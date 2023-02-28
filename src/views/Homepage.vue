<template>
  <div class="flex flex-col center-set">
    <div class="content-homepage flex flex-col center-set ">
      <img class="w-full mt-10" src="../assets/homepage/banner.svg" />
      <div class="w-full space-x-6 mt-10 flex justify-between">
        <!-- FOR WOMEN, FOR MEN, FOR KIDS -->
        <div v-for="(item, index) in forWho" :key="index" class="img-forwomen w-full h-full flex center-set font-frans">
          <img :src="item.url" />
          <div class="w-36 h-14 bg-black text-lg font-semibold text-white flex center-set absolute">
            {{ item.name }}
          </div>
        </div>

      </div>
      <div class="flex w-full space-x-6 mt-10">
        <div class="listhomeProduct w-full" v-for="(item, index) in homeProduct" :key="index">
          <div class="w-full relative">
            <img :src="item.url" />
            <div class="p-2">
              <div class="flex items-center">
                <img v-show="item.is_favourite == false" class="w-5 absolute right-0" @click="item.is_favourite = !item.is_favourite" src="../assets/icons/heart.svg">
                <img v-show="item.is_favourite == true" class="w-5 absolute right-0" @click="item.is_favourite = !item.is_favourite" src="../assets/icons/heartt.svg">
                <p class="text-md ">{{ item.title }}</p>
              </div>
              <p class="text-2xl leading-5">{{ item.price }} <span class="text-sm text-gray-600">THB</span></p>
            </div>
          </div>
        </div>
      </div>

      <div class="first-buyNowBanner mt-10 w-full h-full relative">
        <img src="../assets/homepage/buyNow1.svg" />
        <div class="w-44 h-14 bg-black text-white font-semibold center-set absolute top-10 right-10 cursor-pointer text-lg font-frans">
          BUY NOW
        </div>
      </div>
      <div class="second-buyNowBanner mt-10 w-full h-full relative">
        <img src="../assets/homepage/buyNow2.svg" />
        <div class="w-44 h-14 bg-black text-white font-semibold center-set absolute top-10 right-10 cursor-pointer text-lg font-frans">
          BUY NOW
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@font-face {
  font-family: Copperplate;
  src: url(../../public/fonts/Copperplate\ Gothic\ Bold\ Regular.ttf);
}
@font-face {
  font-family: Frans;
  src: url(../../public/fonts/FrancoisOne-Regular.ttf);
}
@font-face {
  font-family: Jura;
  src: url(../../public/fonts/Jura-VariableFont_wght.ttf);
}
.font-copper{
  font-family: Copperplate;
}
.font-frans{
  font-family: Frans;
}
.font-jura{
  font-family: Jura;
}
img {
  width: 100%;
}
.content-homepage {
  /* width: 85%; */
  height: auto;
}

.center-set {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<script>
// @ is an alias to /src

export default {
  name: "Homepage",
  components: {
  },
  data() {
    return {
      forWho: [
        { name: "FOR WOMEN", url: require('../assets/homepage/forWoman.png') },
        { name: "FOR MEN", url: require('../assets/homepage/forMen.png') },
        { name: "FOR KIDS", url: require('../assets/homepage/forKids.png') }
      ],
      homeProduct: [
        { title: "THE STAR CROP VEST", price: "1590", url: require('../assets/homepage/img1.svg') , is_favourite: false},
        { title: "THE STAR CROP VEST", price: "1590", url: require('../assets/homepage/img2.svg') , is_favourite: false},
        { title: "THE STAR CROP VEST", price: "1590", url: require('../assets/homepage/img3.svg') , is_favourite: false},
        { title: "THE STAR CROP VEST", price: "1590", url: require('../assets/homepage/img4.svg') , is_favourite: false},
        { title: "THE STAR CROP VEST", price: "1590", url: require('../assets/homepage/img5.svg') , is_favourite: false},
      ],
    }
  },
  methods:{
  },
  watch:{
    
  }
};
</script>
