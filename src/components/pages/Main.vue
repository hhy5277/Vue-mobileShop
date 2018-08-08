<template>
    <div>
        <div class="main">
            <router-view/>
        </div>
        <van-tabbar v-model="active" @change="changeTabbar(active)">
            <van-tabbar-item icon='shop'>首页</van-tabbar-item>
            <van-tabbar-item icon='records'>列表</van-tabbar-item>
            <van-tabbar-item icon='cart'>购物车</van-tabbar-item>
            <van-tabbar-item icon='contact'>会员中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  created() {
    // 调用判断路径的方法
    this.changeTabBarActive();
  },
  methods: {
    changeTabbar(active) {
      console.log(active);
      switch (active) {
        case 0:
          this.$router.push({ name: "ShoppingMall" });
          break;
        case 1:
          this.$router.push({ name: "CategoryList" });
          break;
        case 2:
          this.$router.push({ name: "Cart" });
          break;
        case 3:
          break;
      }
    },
    // 判断路径
    changeTabBarActive() {
      this.nowPath = this.$route.path;
      if (this.nowPath == "/") {
          console.log('执行首页')
        this.active = 0;
      } else if (this.nowPath == "/CategoryList") {
          console.log('执行分类')
        this.active = 1;
      } else if (this.nowPath == "/Cart") {
          console.log('执行购物车')
        this.active = 2;
      }
    }
  }
};
</script>

<style>
</style>
