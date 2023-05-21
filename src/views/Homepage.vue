<template>
  <div class="center-set">
    <div class="flex flex-col center-set w-4/5">
      <div class="content-homepage flex flex-col center-set ">
        <img @click="LinkTo('/product/women')" class="w-full mt-10 cursor-pointer" src="../assets/homepage/banner.svg" />
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
              <img :src="productImage(item[0].product_img)" @click="LinkTo('/productDetail/' + item[0].product_title)" />
              <div class="p-2">
                <div class="flex items-center">
                  <img v-show="this.like.includes(item[0].product_id)"
                    class="w-5 absolute right-0 cursor-pointer select-none" @click="this.changeLike(item[0].product_id);"
                    src="../assets/icons/heartt.svg">
                  <img v-show=" this.like.includes(item[0].product_id) == false "
                    class="w-5 absolute right-0 cursor-pointer select-none" @click=" this.changeLike(item[0].product_id) "
                    src="../assets/icons/heart.svg">
                  <p class="text-md">{{ item[0].product_title }}</p>
                </div>
                <p class="text-2xl leading-5">{{ item[0].product_price }} <span class="text-sm text-gray-600">THB</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div @click=" LinkTo('/product/women') "
          class="first-buyNowBanner mt-8 w-full h-full relative cursor-pointer select-none">
          <img src="../assets/homepage/buyNow1.svg" />
          <div
            class="w-44 h-14 bg-black text-white font-medium center-set absolute top-10 right-10 cursor-pointer text-lg font-frans">
            BUY NOW
          </div>
        </div>
        <div @click=" LinkTo('/product/men') "
          class="second-buyNowBanner mt-10 w-full h-full relative cursor-pointer select-none">
          <img src="../assets/homepage/buyNow2.svg" />
          <div
            class="w-44 h-14 bg-black text-white font-medium center-set absolute top-10 right-10 cursor-pointer text-lg font-frans">
            BUY NOW
          </div>
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
import axios from 'axios';
// @ is an alias to /src
export default {
  name: "Homepage",
  props: {
    products: {
      default: []
    }
  },
  mounted() {
    if (localStorage.getItem("user")) {
      this.user_id = JSON.parse(localStorage.getItem("user")).user_id
    }
    this.checkLike(1)
    this.checkLike(7)
    this.checkLike(8)
    this.checkLike(9)
    this.checkLike(10)
    console.log(this.homeProduct)
  },
  data() {
    return {
      user_id:"",
      like: [],
      fav: [],
      forWho: [
        { name: "FOR WOMEN", path: '/product/women', url: require('../assets/homepage/forWoman.png') },
        { name: "FOR MEN", path: '/product/men', url: require('../assets/homepage/forMen.png') },
        { name: "FOR KIDS", path: '/product/kids', url: require('../assets/homepage/forKids.png') }
      ],
      homeProduct: [
        this.products.filter(e => e.product_id == 1),
        this.products.filter(e => e.product_id == 7),
        this.products.filter(e => e.product_id == 8),
        this.products.filter(e => e.product_id == 9),
        this.products.filter(e => e.product_id == 10),
      ],
    }
  },
  methods: {
    changeLike(product_id) {
      if (this.user_id) {
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
            }).then((res) =>{
              console.log(res.data)
            })
          } catch (er) {
            console.log(er)
          }
        }
      }
      else {
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
    productImage(img) {
      return 'http://localhost:3000/products/' + JSON.parse(img)[0]
    },
    LinkTo(whereTo) {
      this.$router.push(whereTo)
    },
    addToFav(e) {
      if (!this.fav.includes(e)) {
        this.fav.push(e)
      }
      localStorage.setItem('favorite', JSON.stringify(this.fav))
    },
    cancelFav(e) {
      let temp = JSON.parse(localStorage.getItem('favorite'));
      let index_delete = temp.indexOf(e)
      temp.splice(index_delete, 1)
      localStorage.setItem('favorite', JSON.stringify(temp))

    }
  },
  watch: {

  }
};
</script>
