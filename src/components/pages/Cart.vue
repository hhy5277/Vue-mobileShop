<template>
    <div>
        <div class="navbar-div">
            <van-nav-bar  title="购物车"></van-nav-bar>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      cartInfo: [], // 购物车内的商品
      isEmpty: false // 购物车是否为空，空为false,为空显示false
    };
  },
  created() {
    this.getCartInfo();
  },
  methods: {
    // 获取购物车内的商品
    getCartInfo() {
      // 判断缓存内是否有购物车数据
      if (localStorage.cartInfo) {
        // 有数据去除且赋值给cartInfo
        this.cartInfo = JSON.parse(localStorage.cartInfo);
      }
      // 打印得到结果
      console.log("this.cartInfo" + JSON.stringify(this.cartInfo));
      this.isEmpty = this.cartInfo.length > 0 ? true : false;
    }
  }
};
</script>

<style>
</style>
