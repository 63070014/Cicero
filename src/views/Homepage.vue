<template>
  <div class="flex flex-col center-set">
    <div class="content-homepage flex flex-col center-set ">
      <img class="w-full mt-10 cursor-pointer" src="../assets/homepage/banner.svg" />
      <div class="w-full space-x-6 mt-10 flex justify-between">
        <!-- FOR WOMEN, FOR MEN, FOR KIDS -->
        <div v-for="(item, index) in forWho" :key="index" @click="LinkTo(item.path)"
          class="img-forwomen overflow-hidden w-full h-full flex center-set font-frans cursor-pointer">
          <img class="zoomImg" :src="item.url" />
          <div class="w-36 h-14 bg-black text-lg font-normal text-white flex center-set absolute">
            {{ item.name }}
          </div>
        </div>

      </div>
      <div class="flex w-full space-x-6 mt-10 cursor-pointer">
        <div class="listhomeProduct w-full" v-for="(item, index) in homeProduct" :key="index">
          <div class="w-full relative">
            <img :src="item[0].listImg[0]" @click="LinkTo('/productDetail/'+item[0].title)"/>
            <div class="p-2">
              <div class="flex items-center">
                <img v-show="item[0].is_favourite == false" class="w-5 absolute right-0"
                  @click="item[0].is_favourite = !item[0].is_favourite" src="../assets/icons/heart.svg">
                <img v-show="item[0].is_favourite == true" class="w-5 absolute right-0"
                  @click="item[0].is_favourite = !item[0].is_favourite" src="../assets/icons/heartt.svg">
                <p class="text-md">{{ item[0].title }}</p>
              </div>
              <p class="text-2xl leading-5">{{ item[0].price }} <span class="text-sm text-gray-600">THB</span></p>
            </div>
          </div>
        </div>
      </div>

      <div class="first-buyNowBanner mt-8 w-full h-full relative">
        <img src="../assets/homepage/buyNow1.svg" />
        <div
          class="w-44 h-14 bg-black text-white font-medium center-set absolute top-10 right-10 cursor-pointer text-lg font-frans">
          BUY NOW
        </div>
      </div>
      <div class="second-buyNowBanner mt-10 w-full h-full relative">
        <img src="../assets/homepage/buyNow2.svg" />
        <div
          class="w-44 h-14 bg-black text-white font-medium center-set absolute top-10 right-10 cursor-pointer text-lg font-frans">
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

.font-copper {
  font-family: Copperplate;
}

.font-frans {
  font-family: Frans;
}

.font-jura {
  font-family: Jura;
}

img {
  width: 100%;
}

.content-homepage {
  /* width: 85%; */
  height: auto;
}

.zoomImg {
  transition: all .5s;
}

.zoomImg:hover {
  transform: scale(1.2);
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
  props:{
        products:{
            default: []
        }
    },
  components: {
  },
  data() {
    return {
      forWho: [
        { name: "FOR WOMEN", path: '/product/women', url: require('../assets/homepage/forWoman.png') },
        { name: "FOR MEN", path: '/product/men', url: require('../assets/homepage/forMen.png') },
        { name: "FOR KIDS", path: '/product/kids', url: require('../assets/homepage/forKids.png') }
      ],
      homeProduct: [
        this.products.filter(e => e.id == '016'),
        this.products.filter(e => e.id == '017'),
        this.products.filter(e => e.id == '018'),
        this.products.filter(e => e.id == '019'),
        this.products.filter(e => e.id == '020'),
      ],
    }
  },
  methods: {
    LinkTo(whereTo) {
      this.$router.push(whereTo)
    },
  },
  watch: {

  }
};
</script>
