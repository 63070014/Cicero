<template>
  <div class="flex flex-col justify-center items-center">
    <div class="content-homepage flex flex-col justify-center items-center">
    <img class="w-full mt-10" src="../assets/homepage/banner.svg" />
    <div class="w-full space-x-6 mt-10 flex justify-between">
      <img class="w-full" src="../assets/homepage/forWoman.png" />
      <img class="w-full" src="../assets/homepage/forMen.png" />
      <img class="w-full" src="../assets/homepage/forKids.png" />
    </div>
    <div class="w-full space-x-6 mt-10 flex justify-between">
      <img class="w-full" src="../assets/homepage/img1.png" />
      <img class="w-full" src="../assets/homepage/img2.png" />
      <img class="w-full" src="../assets/homepage/img3.png" />
      <img class="w-full" src="../assets/homepage/img4.png" />
      <img class="w-full" src="../assets/homepage/img5.png" />
    </div>
    </div>
  </div>
</template>
<style>
.content-homepage{
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
        { title: "THE STAR CROP VEST", price: "1590", url: require('../assets/homepage/img1.svg') },
        { title: "THE STAR CROP VEST", price: "1590", url: require('../assets/homepage/img2.svg') },
        { title: "THE STAR CROP VEST", price: "1590", url: require('../assets/homepage/img3.svg') },
        { title: "THE STAR CROP VEST", price: "1590", url: require('../assets/homepage/img4.svg') },
        { title: "THE STAR CROP VEST", price: "1590", url: require('../assets/homepage/img5.svg') },
      ]
    }
  },
};
</script>
